/**
 * audit/measure.ts — đếm số liệu THÔ cho các sub-check đếm được của docs/RUBRIC.md.
 *
 * KHÔNG áp ngưỡng, KHÔNG kết luận Đạt/Thiếu — chỉ đếm (việc áp ngưỡng là bước
 * chấm riêng của người đánh giá, theo §2 + §3 của rubric).
 *
 * Đo trên DATA THẬT (§2 rule 3): bundle content/subjects.ts bằng esbuild rồi
 * duyệt object — không regex file nguồn thô.
 *
 * Chạy:  npx tsx audit/measure.ts [subject-id]
 *        (không có arg → đo cả 4 môn; mỗi môn ra audit/measurements-<id>.json)
 */

import { execSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import type { Chapter, Section, Subject } from "../content/types";

const AUDIT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(AUDIT_DIR, "..");

// ---------- bundle content/subjects.ts (rubric §2 rule 3) ----------

async function bundleSubjects(): Promise<Subject[]> {
  // esbuild chỉ có transitively trong node_modules → import theo đường dẫn tuyệt đối
  const esbuild = await import(
    pathToFileURL(path.join(ROOT, "node_modules/esbuild/lib/main.js")).href
  );
  const outfile = path.join(AUDIT_DIR, ".subjects-bundle.mjs");
  await esbuild.build({
    entryPoints: [path.join(ROOT, "content/subjects.ts")],
    bundle: true,
    format: "esm",
    platform: "node",
    outfile,
  });
  const mod = (await import(
    pathToFileURL(outfile).href + `?t=${Date.now()}`
  )) as { subjects: Subject[] };
  return mod.subjects;
}

// ---------- helpers ----------

const norm = (s: string) => s.toLowerCase().trim();

/** Toàn bộ text của 1 section (heading + body + blocks + examples) */
function sectionText(s: Section): string {
  return [s.heading, s.body, JSON.stringify(s.blocks ?? []), JSON.stringify(s.examples ?? [])]
    .filter(Boolean)
    .join("\n");
}

/** Các "đơn vị text" của topic để quét regex, kèm vị trí (section id / question idx) */
function textUnits(ch: Chapter): { loc: string; text: string }[] {
  const units = (ch.sections ?? []).map((s) => ({ loc: `section:${s.id}`, text: sectionText(s) }));
  (ch.questions ?? []).forEach((q, i) => {
    units.push({ loc: `question:${i}`, text: JSON.stringify(q) });
  });
  return units;
}

function snippet(text: string, index: number, radius = 60): string {
  return text.slice(Math.max(0, index - radius), index + radius).replace(/\s+/g, " ");
}

// ---------- đo 1 môn ----------

function measureSubject(subject: Subject, commit: string) {
  const all: Chapter[] = [...subject.chapters].sort((a, b) => a.order - b.order);
  const placeholders = all.filter((c) => c.status === "placeholder");
  const evaluated = all.filter((c) => c.status !== "placeholder");

  // Concept-first-appearance index (rubric §2 rule 10): term → nơi xuất hiện đầu
  const firstSeen = new Map<string, string>(); // norm(term) → "topicSlug/sectionId"
  for (const ch of evaluated) {
    for (const s of ch.sections ?? []) {
      for (const kt of s.keyTerms ?? []) {
        const key = norm(kt.term);
        if (!firstSeen.has(key)) firstSeen.set(key, `${ch.slug}/${s.id}`);
      }
    }
  }

  // ----- A1: slot 6 tầng × topic -----
  const SLOTS = ["bigIdea", "bigIdeaPillars", "knowledgeMap", "sections", "keyTerms", "questions"];
  const slotsMissing: { topic: string; slot: string }[] = [];
  for (const ch of evaluated) {
    const keyTermsUnion = (ch.sections ?? []).flatMap((s) => s.keyTerms ?? []);
    const present: Record<string, boolean> = {
      bigIdea: typeof ch.bigIdea === "string" && ch.bigIdea.trim().length > 0,
      bigIdeaPillars: Array.isArray(ch.bigIdeaPillars) && ch.bigIdeaPillars.length > 0,
      knowledgeMap: ch.knowledgeMap != null,
      sections: (ch.sections ?? []).length > 0,
      keyTerms: keyTermsUnion.length > 0,
      questions: (ch.questions ?? []).length > 0,
    };
    for (const slot of SLOTS) if (!present[slot]) slotsMissing.push({ topic: ch.slug, slot });
  }
  const A1 = {
    unit: "slot = 6 tầng × topic",
    n_typical: "~48 (rubric §3.A)",
    rule: "Slot (rule 9) — KHÔNG áp ở đây",
    n_slots_total: 6 * evaluated.length,
    n_slots_missing: slotsMissing.length,
    n_topics_incomplete: new Set(slotsMissing.map((m) => m.topic)).size,
    slots_missing: slotsMissing,
  };

  // ----- B1: section có ≥1 block non-prose -----
  const allSections = evaluated.flatMap((ch) =>
    (ch.sections ?? []).map((s) => ({ topic: ch.slug, section: s }))
  );
  const blockTypeDistribution: Record<string, number> = {};
  const withoutNonProse: { topic: string; section: string }[] = [];
  for (const { topic, section } of allSections) {
    const blocks = section.blocks ?? [];
    for (const b of blocks) blockTypeDistribution[b.type] = (blockTypeDistribution[b.type] ?? 0) + 1;
    if (!blocks.some((b) => b.type !== "prose")) {
      withoutNonProse.push({ topic, section: section.id });
    }
  }
  const B1 = {
    unit: "section",
    n_typical: "~89 (rubric §3.B)",
    rule: "Band % — KHÔNG áp ở đây",
    n_sections_total: allSections.length,
    n_sections_without_nonprose: withoutNonProse.length,
    sections_without_nonprose: withoutNonProse,
    block_type_distribution: blockTypeDistribution,
  };

  // ----- B3: khái niệm MỚI mỗi section (định nghĩa "hụt" của rubric: >4) -----
  const histogram: Record<string, number> = {};
  const over4: { topic: string; section: string; new_concepts: number; terms: string[] }[] = [];
  for (const { topic, section } of allSections) {
    const newTerms = (section.keyTerms ?? []).filter(
      (kt) => firstSeen.get(norm(kt.term)) === `${topic}/${section.id}`
    );
    const n = newTerms.length;
    histogram[String(n)] = (histogram[String(n)] ?? 0) + 1;
    if (n > 4) {
      over4.push({ topic, section: section.id, new_concepts: n, terms: newTerms.map((t) => t.term) });
    }
  }
  const B3 = {
    unit: "section",
    n_typical: "~89 (rubric §3.B)",
    rule: "Band % — KHÔNG áp ở đây; '>4 khái niệm mới' là ĐỊNH NGHĨA hụt của rubric, không phải ngưỡng Đạt",
    n_sections_total: allSections.length,
    n_concepts_indexed: firstSeen.size,
    new_concepts_per_section_histogram: histogram,
    n_sections_over_4_new_concepts: over4.length,
    sections_over_4: over4,
  };

  // ----- C3: câu hỏi có takeaway -----
  const missingTakeaway: { topic: string; question_index: number; stem_short: string }[] = [];
  let nQuestions = 0;
  for (const ch of evaluated) {
    (ch.questions ?? []).forEach((q, i) => {
      nQuestions++;
      if (typeof q.takeaway !== "string" || q.takeaway.trim().length === 0) {
        missingTakeaway.push({ topic: ch.slug, question_index: i, stem_short: String(q.stem).slice(0, 80) });
      }
    });
  }
  const C3 = {
    unit: "câu hỏi",
    n_typical: "~200 (rubric §3.C)",
    rule: "Band % — KHÔNG áp ở đây",
    n_questions_total: nQuestions,
    n_questions_missing_takeaway: missingTakeaway.length,
    questions_missing_takeaway: missingTakeaway,
  };

  // ----- D1: source per topic (số liệu thô, verdict "đầy đủ" là việc người chấm) -----
  const D1 = {
    unit: "topic",
    n_typical: `~8 (rubric §3.D) — thực tế ${evaluated.length}`,
    rule: "Nhị phân (gate) — KHÔNG áp ở đây",
    n_topics: evaluated.length,
    n_topics_with_source_field: evaluated.filter((c) => typeof c.source === "string" && c.source.trim()).length,
    per_topic: evaluated.map((ch) => {
      const src = typeof ch.source === "string" ? ch.source : "";
      const yearMatch = src.match(/\b(19|20)\d{2}\b/);
      return {
        topic: ch.slug,
        source: src || null,
        has_year: !!yearMatch,
        has_chapter_or_slide: /chapter|chương|slide|topic|ch\.\s*\d/i.test(src),
        has_author_heuristic: yearMatch ? /[A-Za-zÀ-ỹ]{3,}/.test(src.slice(0, yearMatch.index)) : false,
      };
    }),
  };

  // ----- D2: marker trang sách / slide per topic -----
  const BOOK_MARKER = /\([^)]*\bp\.?\s*\d+[^)]*\)/gi;
  const SLIDE_MARKER = /\(slide\s*\d+[^)]*\)/gi;
  const D2 = {
    unit: "marker / topic (điều kiện của D3, rubric §3.D)",
    n_typical: "không khai báo riêng trong rubric — đếm hỗ trợ audit D3",
    rule: "điều kiện của audit D3 — KHÔNG áp ở đây",
    per_topic: evaluated.map((ch) => {
      const text = textUnits(ch).map((u) => u.text).join("\n") + "\n" + (ch.source ?? "");
      const book = text.match(BOOK_MARKER) ?? [];
      const slide = text.match(SLIDE_MARKER) ?? [];
      return {
        topic: ch.slug,
        n_book_page_markers: book.length,
        n_slide_markers: slide.length,
        book_marker_samples: [...new Set(book)].slice(0, 5),
      };
    }),
  };

  // ----- D4: khối soft lens có disclaimer -----
  const DISCLAIMER = /không phải trích nguyên văn/i;
  const softLens: { kind: string; id: string; has_disclaimer: boolean; searched_fields: string }[] = [];
  if (subject.courseMap) {
    softLens.push({
      kind: "courseMap",
      id: subject.courseMap.title ?? "courseMap",
      has_disclaimer: DISCLAIMER.test(JSON.stringify(subject.courseMap)),
      searched_fields: "toàn bộ object (caption/description)",
    });
  }
  for (const t of subject.courseThreads ?? []) {
    softLens.push({
      kind: "courseThread",
      id: t.title,
      has_disclaimer: DISCLAIMER.test(JSON.stringify(t)),
      searched_fields: "toàn bộ object (caption/description)",
    });
  }
  for (const mc of subject.miniCases ?? []) {
    softLens.push({
      kind: "miniCase",
      id: mc.id ?? mc.title,
      has_disclaimer: DISCLAIMER.test(JSON.stringify(mc)),
      searched_fields: "toàn bộ object (sourceNote/scenario)",
    });
  }
  const D4 = {
    unit: "khối soft lens (courseMap + courseThreads + miniCases)",
    n_typical: "~40 (rubric §3.D)",
    rule: "Band % — KHÔNG áp ở đây",
    n_blocks_total: softLens.length,
    n_blocks_with_disclaimer: softLens.filter((b) => b.has_disclaimer).length,
    blocks: softLens,
  };

  // ----- E3 + E4: cross-reference giữa topic -----
  const XREF = /(?:Topic|Chương|Chapter)\s*0?(\d+)/gi;
  const perTopicRefs: {
    topic: string;
    order: number;
    refs: { target: number; loc: string; snippet: string }[];
  }[] = [];
  for (const ch of evaluated) {
    const refs: { target: number; loc: string; snippet: string }[] = [];
    for (const unit of textUnits(ch)) {
      for (const m of unit.text.matchAll(XREF)) {
        const target = parseInt(m[1], 10);
        if (target === ch.order) continue; // loại self-ref
        refs.push({ target, loc: unit.loc, snippet: snippet(unit.text, m.index ?? 0) });
      }
    }
    perTopicRefs.push({ topic: ch.slug, order: ch.order, refs });
  }
  const allRefs = perTopicRefs.flatMap((t) => t.refs.map((r) => ({ topic: t.topic, order: t.order, ...r })));
  const forwardRefs = allRefs.filter((r) => r.target > r.order);
  const E3 = {
    unit: "topic",
    n_typical: `~8 (rubric §3.E) — thực tế ${evaluated.length}`,
    rule: "T(n) — KHÔNG áp ở đây",
    n_topics: evaluated.length,
    n_topics_without_crossref: perTopicRefs.filter((t) => t.refs.length === 0).length,
    topics_without_crossref: perTopicRefs.filter((t) => t.refs.length === 0).map((t) => t.topic),
    refs_per_topic: perTopicRefs.map((t) => ({
      topic: t.topic,
      n_refs: t.refs.length,
      targets: [...new Set(t.refs.map((r) => r.target))].sort((a, b) => a - b),
    })),
  };
  const E4 = {
    unit: "cross-topic reference",
    n_typical: `~20 (rubric §3.E) — thực tế ${allRefs.length}`,
    rule: "T(n) — KHÔNG áp ở đây; 'có chú thích forward hay không' người chấm đọc snippet",
    n_crossrefs_total: allRefs.length,
    n_forward_refs: forwardRefs.length,
    forward_refs: forwardRefs.map((r) => ({
      topic: r.topic,
      from_order: r.order,
      target_topic_order: r.target,
      loc: r.loc,
      snippet: r.snippet,
    })),
  };

  // ----- G1: khối So-what cuối topic -----
  const SOWHAT = /so what|đổi hành động|thay đổi hành động/i;
  const sowhatPerTopic = evaluated.map((ch) => {
    const last = (ch.sections ?? [])[Math.max(0, (ch.sections ?? []).length - 1)];
    let found: string | null = null;
    if (last) {
      if (SOWHAT.test(last.heading ?? "")) found = `heading:${last.id}`;
      for (const b of last.blocks ?? []) {
        if (b.type === "callout" && b.callout?.kind === "key" && SOWHAT.test(`${b.callout.title ?? ""} ${b.callout.body ?? ""}`)) {
          found = `callout-key:${last.id}`;
          break;
        }
      }
    }
    return { topic: ch.slug, found_at: found };
  });
  const G1 = {
    unit: "topic",
    n_typical: `~8 (rubric §3.G) — thực tế ${evaluated.length}`,
    rule: "T(n) — KHÔNG áp ở đây",
    n_topics: evaluated.length,
    n_topics_without_sowhat: sowhatPerTopic.filter((t) => !t.found_at).length,
    topics_without_sowhat: sowhatPerTopic.filter((t) => !t.found_at).map((t) => t.topic),
    found_at: sowhatPerTopic.filter((t) => t.found_at),
  };

  // ----- H1: dữ liệu cho trang ôn tập tổng hợp (data-level) -----
  const topicsWithQuiz = evaluated.filter((c) => (c.questions ?? []).length > 0);
  const H1 = {
    unit: "trang ôn tập",
    n_typical: "1 route /[subject]/on-tap (rubric §3.H)",
    rule: "Tồn tại + chất lượng — KHÔNG áp ở đây",
    n_topics_with_quiz: topicsWithQuiz.length,
    topics_with_quiz: topicsWithQuiz.map((c) => c.slug),
    meets_min_2_topics: topicsWithQuiz.length >= 2,
    note: "breakdown theo topic + retry câu sai là feature component CumulativeQuiz — không đo được từ data, cần walkthrough runtime",
  };

  return {
    meta: {
      subject_id: subject.id,
      subject_title: subject.title,
      measured_at: new Date().toISOString(),
      commit,
      rubric: "docs/RUBRIC.md (changelog mới nhất: 2026-07-20)",
      n_topics_total: all.length,
      n_topics_placeholder: placeholders.length,
      placeholder_topics: placeholders.map((c) => c.slug),
      n_topics_evaluated: evaluated.length,
      note: "SỐ LIỆU THÔ — chưa áp ngưỡng, chưa kết luận Đạt/Thiếu (rubric §2 rule 2: mẫu = topic status !== placeholder)",
    },
    A1, B1, B3, C3, D1, D2, D4, E3, E4, G1, H1,
    not_measured: {
      reason: "đòi index ngữ nghĩa hoặc chấm tay (rubric §2 rule 5, rule 10)",
      sub_checks: ["A2", "B2", "C1", "C2", "C4", "D3", "E4-chú-thích-forward", "F1-chất-lượng", "F2", "G2", "H1-breakdown/retry-runtime"],
    },
  };
}

// ---------- main ----------

async function main() {
  const arg = process.argv[2];
  const subjects = await bundleSubjects();
  const commit = execSync("git rev-parse HEAD", { cwd: ROOT }).toString().trim();

  const targets = arg ? subjects.filter((s) => s.id === arg) : subjects;
  if (arg && targets.length === 0) {
    console.error(`Không tìm thấy môn "${arg}". Có: ${subjects.map((s) => s.id).join(", ")}`);
    process.exit(1);
  }

  for (const subject of targets) {
    const result = measureSubject(subject, commit);
    const outPath = path.join(AUDIT_DIR, `measurements-${subject.id}.json`);
    writeFileSync(outPath, JSON.stringify(result, null, 2), "utf8");
    const m = result.meta;
    console.log(
      `${m.subject_title} (${m.subject_id}): tổng ${m.n_topics_total} topic | placeholder ${m.n_topics_placeholder} | n_đánh_giá ${m.n_topics_evaluated}/${m.n_topics_total} → ${path.relative(ROOT, outPath)}`
    );
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

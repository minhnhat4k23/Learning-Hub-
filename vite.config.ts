import vinext from "vinext";
import { defineConfig } from "vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import hostingConfig from "./.openai/hosting.json";
import { sites } from "./build/sites-vite-plugin";

const SITE_CREATOR_PLACEHOLDER_DATABASE_ID =
  "00000000-0000-4000-8000-000000000000";

const { d1, r2 } = hostingConfig;

const resizeObserverLoopGuard = `
		if (typeof event.message === "string" && (
			event.message.includes("ResizeObserver loop completed with undelivered notifications.") ||
			event.message.includes("ResizeObserver loop limit exceeded")
		)) return;`;

// "ResizeObserver loop completed with undelivered notifications" là cảnh báo
// vô hại của browser (React Flow + fitView hay kích hoạt), KHÔNG phải crash.
// vinext dev overlay bắt mọi window error nên escalate nó thành lỗi đỏ.
// Patch dưới đây inject guard NGAY trong listener của overlay (dev-only) để
// bỏ qua đúng 2 message này — đây là lớp duy nhất chặn được overlay (vì chạy
// trước listener của overlay). Console được dọn riêng bởi ResizeObserverErrorGuard.
// LƯU Ý: chuỗi .replace phải khớp source của vinext/dist/server/dev-error-overlay.js;
// nếu nâng cấp vinext mà overlay đỏ quay lại, kiểm tra lại 2 chuỗi này trước tiên.
function ignoreResizeObserverDevOverlay() {
  return {
    name: "ignore-resize-observer-dev-overlay",
    enforce: "pre" as const,
    transform(code: string, id: string) {
      if (!id.replaceAll("\\", "/").includes("vinext/dist/server/dev-error-overlay.js")) {
        return null;
      }

      return code
        .replace(
          'window.addEventListener("error", (event) => {\n\t\tconst err = event.error;',
          `window.addEventListener("error", (event) => {${resizeObserverLoopGuard}\n\t\tconst err = event.error;`,
        )
        .replace(
          'window.addEventListener("unhandledrejection", (event) => {\n\t\tconst reason = event.reason;',
          `window.addEventListener("unhandledrejection", (event) => {\n\t\tconst maybeMessage = event.reason instanceof Error ? event.reason.message : String(event.reason);${resizeObserverLoopGuard.replaceAll("event.message", "maybeMessage")}\n\t\tconst reason = event.reason;`,
        );
    },
  };
}

const localBindingConfig = {
  main: "./worker/index.ts",
  compatibility_flags: ["nodejs_compat"],
  d1_databases: d1
    ? [
        {
          binding: d1,
          database_name: "site-creator-d1",
          database_id: SITE_CREATOR_PLACEHOLDER_DATABASE_ID,
        },
      ]
    : [],
  r2_buckets: r2
    ? [
        {
          binding: r2,
          bucket_name: "site-creator-r2",
        },
      ]
    : [],
};

export default defineConfig({
  plugins: [
    ignoreResizeObserverDevOverlay(),
    vinext(),
    sites(),
    cloudflare({
      viteEnvironment: { name: "rsc", childEnvironments: ["ssr"] },
      config: localBindingConfig,
    }),
  ],
});

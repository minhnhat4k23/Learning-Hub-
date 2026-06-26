import { redirect } from "next/navigation";

export default async function LegacyChapterRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/managerial-accounting/${slug}`);
}

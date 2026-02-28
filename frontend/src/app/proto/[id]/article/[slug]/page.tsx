import { notFound } from "next/navigation";
import { PROTOTYPES } from "@/components/prototypes";
import { getArticleBySlug } from "@/data/articles";

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ id: string; slug: string }>;
}) {
  const { id, slug } = await params;
  const proto = PROTOTYPES[id] || PROTOTYPES["1"];
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const { ArticlePage } = proto.module;
  return <ArticlePage protoId={id} article={article} />;
}

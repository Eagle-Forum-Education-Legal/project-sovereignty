import React from "react";
import { PROTOTYPES } from "@/components/prototypes";
import { ARTICLES } from "@/data/articles";
import { VIDEOS } from "@/data/videos";

export default async function PrototypePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const proto = PROTOTYPES[id] || PROTOTYPES["1"];
  const { HomePage } = proto.module;
  return <HomePage protoId={id} articles={ARTICLES} videos={VIDEOS} />;
}

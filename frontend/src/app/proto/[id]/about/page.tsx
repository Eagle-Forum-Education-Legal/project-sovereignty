import { PROTOTYPES } from "@/components/prototypes";
import { LEADERSHIP, OFFICES, MISSION_TEXT, HISTORY_TEXT } from "@/data/about";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const proto = PROTOTYPES[id] || PROTOTYPES["1"];
  const { AboutPage: About } = proto.module;

  return (
    <About
      protoId={id}
      leadership={LEADERSHIP}
      offices={OFFICES}
      missionText={MISSION_TEXT}
      historyText={HISTORY_TEXT}
    />
  );
}

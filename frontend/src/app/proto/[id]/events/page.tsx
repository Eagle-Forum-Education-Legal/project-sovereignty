import { PROTOTYPES } from "@/components/prototypes";
import { EVENTS } from "@/data/events";

export default async function EventsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const proto = PROTOTYPES[id] || PROTOTYPES["1"];
  const { EventsPage: Events } = proto.module;

  return <Events protoId={id} events={EVENTS} />;
}

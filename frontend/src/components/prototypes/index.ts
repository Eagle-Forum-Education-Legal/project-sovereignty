import * as GreyLady from "./GreyLady";
import * as TheWire from "./TheWire";
import * as SovereignScroll from "./SovereignScroll";
import * as DigitalAgora from "./DigitalAgora";
import * as ExecutiveBrief from "./ExecutiveBrief";
import * as CampaignTrail from "./CampaignTrail";
import * as ArchivalVault from "./ArchivalVault";
import * as EagleEye from "./EagleEye";
import { HomePageProps, ArticlePageProps, AboutPageProps, EventsPageProps } from "./shared";

export type { HomePageProps, ArticlePageProps, AboutPageProps, EventsPageProps };

export interface PrototypeModule {
  HomePage: React.ComponentType<HomePageProps>;
  ArticlePage: React.ComponentType<ArticlePageProps>;
  AboutPage: React.ComponentType<AboutPageProps>;
  EventsPage: React.ComponentType<EventsPageProps>;
}

export const PROTOTYPES: Record<string, { name: string; module: PrototypeModule }> = {
  "1": { name: "Grey Lady", module: GreyLady },
  "2": { name: "The Wire", module: TheWire },
  "3": { name: "Sovereign Scroll", module: SovereignScroll },
  "4": { name: "Digital Agora", module: DigitalAgora },
  "5": { name: "Executive Brief", module: ExecutiveBrief },
  "6": { name: "Campaign Trail", module: CampaignTrail },
  "7": { name: "Archival Vault", module: ArchivalVault },
  "8": { name: "Eagle Eye", module: EagleEye },
};

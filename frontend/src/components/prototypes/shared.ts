import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Article, Video, EagleEvent, StaffMember, Office } from "@/data/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface HomePageProps {
  protoId: string;
  articles: Article[];
  videos: Video[];
}

export interface ArticlePageProps {
  protoId: string;
  article: Article;
}

export interface AboutPageProps {
  protoId: string;
  leadership: StaffMember[];
  offices: Office[];
  missionText: string;
  historyText: string;
}

export interface EventsPageProps {
  protoId: string;
  events: EagleEvent[];
}

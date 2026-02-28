export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  date: string;
  category: string;
  categories: string[];
  author: string;
  link: string;
  image: string;
}

export interface Video {
  id: string;
  title: string;
  youtubeId: string;
}

export interface StaffMember {
  name: string;
  title: string;
}

export interface Office {
  name: string;
  address: string;
  description: string;
}

export interface EagleEvent {
  name: string;
  date: string;
  location: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: (protoId: string) => string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: (id) => `/proto/${id}` },
  { label: "About", href: (id) => `/proto/${id}/about` },
  { label: "Events", href: (id) => `/proto/${id}/events` },
  { label: "Archives", href: () => "#" },
  { label: "Columns", href: () => "#" },
];

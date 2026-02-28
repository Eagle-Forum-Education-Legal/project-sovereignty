import React from "react";
import PSAIChat from "@/components/PSAIChat";
import {
  Book, FileText, ArrowRight, Menu, Search, User,
  Newspaper, Calendar, ExternalLink, ChevronRight,
  Library, Shield, Globe, Feather, AlertCircle,
  LayoutGrid, Archive, Mic, Video, BookOpen, Star,
  CircleDot, Columns3, ScanLine
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const ARTICLES = [
  {
    id: 1,
    title: "The Battle for the American Family: A 50-Year Retrospective",
    excerpt: "Exploring the legacy of Phyllis Schlafly's movement and its impact on modern political discourse. From the STOP ERA campaign to today's education debates.",
    date: "Feb 28, 2026",
    category: "Politics",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
    author: "Phyllis Schlafly (Archival)"
  },
  {
    id: 2,
    title: "National Defense in an Age of Uncertainty",
    excerpt: "Why the principles of 'Peace Through Strength' remain relevant as we navigate new global challenges in the digital age.",
    date: "Feb 15, 2026",
    category: "Defense",
    image: "https://images.unsplash.com/photo-1504150558569-078657004219?auto=format&fit=crop&w=800&q=80",
    author: "Roger Schlafly"
  },
  {
    id: 3,
    title: "The Future of Sovereignty",
    excerpt: "How digital ecosystems and internal technology stacks are becoming the new frontier for organizational independence.",
    date: "Jan 10, 2026",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    author: "EFEL Engineering"
  },
  {
    id: 4,
    title: "Education and the Parental Bill of Rights",
    excerpt: "The grassroots movement to return authority to parents in the American education system, following a decade-long archival blueprint.",
    date: "Jan 05, 2026",
    category: "Education",
    image: "https://images.unsplash.com/photo-1524178232363-1fb280714553?auto=format&fit=crop&w=800&q=80",
    author: "Phyllis AI Analysis"
  }
];

const VIDEOS = [
  { id: "1", title: "Phyllis Schlafly on the ERA (1977)", youtubeId: "h_D3XWkYm28" },
  { id: "2", title: "Education and the Future of America", youtubeId: "uI39U_R1T4c" },
  { id: "3", title: "Phyllis Schlafly: A Life of Influence", youtubeId: "q69zO6Y_Y1Q" }
];

const NAV_LINKS = ["Archives", "Columns", "Interviews", "Defense", "Education"];

/* ═══════════════════════════════════════════════════════════════
   PROTO 1 — "The Grey Lady"
   Classic broadsheet newspaper. Dense multi-column text layout,
   masthead with rules, column dividers, text-heavy, ink-on-paper.
   ═══════════════════════════════════════════════════════════════ */
function GreyLady() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1a1a] font-serif pb-32">
      {/* Masthead */}
      <header className="border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-6 pt-6 pb-2">
          <div className="flex justify-between items-end border-b border-black/20 pb-2 mb-2">
            <span className="text-[10px] uppercase tracking-[0.3em]">Vol. LIII, No. 2</span>
            <span className="text-[10px] uppercase tracking-[0.3em]">Est. 1972</span>
            <span className="text-[10px] uppercase tracking-[0.3em]">{ARTICLES[0].date}</span>
          </div>
          <div className="text-center py-4">
            <h1 className="text-6xl font-bold tracking-tight" style={{ fontFamily: "Georgia, serif" }}>Eagle Forum</h1>
            <p className="text-xs uppercase tracking-[0.4em] mt-1 text-black/50">Education &amp; Legal Defense Fund</p>
          </div>
          <nav className="flex justify-center gap-8 border-t border-black/20 pt-3 pb-1">
            {NAV_LINKS.map(l => (
              <span key={l} className="text-[11px] uppercase tracking-[0.2em] cursor-pointer hover:underline">{l}</span>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content — 3-column newspaper grid */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        {/* Lead story spans full width */}
        <div className="border-b border-black/15 pb-8 mb-8">
          <h2 className="text-5xl font-bold leading-[1.1] mb-4 max-w-4xl" style={{ fontFamily: "Georgia, serif" }}>
            {ARTICLES[0].title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <p className="text-lg leading-relaxed text-black/80">{ARTICLES[0].excerpt}</p>
              <p className="text-sm leading-relaxed text-black/60">
                The legacy of the STOP ERA campaign continues to shape American political discourse decades later.
                What began as a grassroots movement by one woman has become a cornerstone of conservative thought on
                constitutional interpretation and the role of government in family life.
              </p>
              <p className="text-[11px] uppercase tracking-widest text-black/40">By {ARTICLES[0].author}</p>
            </div>
            <div>
              <img src={ARTICLES[0].image} className="w-full aspect-[4/5] object-cover grayscale" alt="" />
              <p className="text-[10px] italic text-black/40 mt-1">Archives photograph, circa 1975</p>
            </div>
          </div>
        </div>

        {/* Secondary stories in columns with vertical rules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-x divide-black/15">
          {ARTICLES.slice(1).map(a => (
            <article key={a.id} className="px-6 first:pl-0 last:pr-0 space-y-3">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-red-800">{a.category}</span>
              <h3 className="text-xl font-bold leading-tight" style={{ fontFamily: "Georgia, serif" }}>{a.title}</h3>
              <p className="text-sm leading-relaxed text-black/60">{a.excerpt}</p>
              <p className="text-[10px] uppercase tracking-widest text-black/40">{a.author} &bull; {a.date}</p>
            </article>
          ))}
        </div>

        {/* AI Section - positioned as a column insert */}
        <div className="mt-12 pt-8 border-t-2 border-black">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold mb-2 text-black/50">Phyllis AI</h3>
              <PSAIChat style="classic" />
            </div>
            <div className="space-y-6">
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-black/50 border-b border-black/15 pb-2">Multimedia</h4>
              {VIDEOS.map(v => (
                <div key={v.id} className="space-y-1">
                  <div className="aspect-video bg-black/5 rounded overflow-hidden">
                    <iframe src={`https://www.youtube.com/embed/${v.youtubeId}`} title={v.title} className="w-full h-full" frameBorder="0" allowFullScreen />
                  </div>
                  <p className="text-xs text-black/60">{v.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="max-w-6xl mx-auto px-6 mt-16 pt-6 border-t-2 border-black text-center">
        <p className="text-[10px] uppercase tracking-[0.4em] text-black/30">&copy; 2026 Eagle Forum Education &amp; Legal Defense Fund</p>
      </footer>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════
   PROTO 2 — "The Wire"
   Modern blog/feed. Clean single-column with horizontal cards,
   lots of whitespace, floating elements, contemporary feel.
   ═══════════════════════════════════════════════════════════════ */
function TheWire() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-32">
      {/* Floating nav */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div>
            <span className="text-xl font-bold tracking-tight">Eagle Forum</span>
            <span className="text-xs text-gray-400 ml-3">Education &amp; Legal</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-gray-50 rounded-full px-4 py-2 gap-2">
              <Search className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">Search...</span>
            </div>
            {NAV_LINKS.slice(0, 4).map(l => (
              <span key={l} className="hidden lg:block text-sm text-gray-500 hover:text-black cursor-pointer transition-colors">{l}</span>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-6">
        {/* Featured post — large card */}
        <article className="group cursor-pointer">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-6">
            <img src={ARTICLES[0].image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full mb-3">{ARTICLES[0].category}</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-2">{ARTICLES[0].title}</h1>
              <p className="text-white/70 max-w-2xl">{ARTICLES[0].excerpt}</p>
            </div>
          </div>
        </article>

        {/* Feed — horizontal cards */}
        {ARTICLES.slice(1).map(a => (
          <article key={a.id} className="group flex flex-col md:flex-row gap-6 py-6 border-b border-gray-100 cursor-pointer">
            <div className="md:w-72 shrink-0 aspect-[16/10] rounded-xl overflow-hidden">
              <img src={a.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="" />
            </div>
            <div className="flex-1 flex flex-col justify-center space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-blue-600">{a.category}</span>
                <span className="text-xs text-gray-400">{a.date}</span>
              </div>
              <h2 className="text-2xl font-bold leading-tight group-hover:text-blue-600 transition-colors">{a.title}</h2>
              <p className="text-gray-500 leading-relaxed">{a.excerpt}</p>
              <span className="text-sm font-medium text-gray-400">{a.author}</span>
            </div>
          </article>
        ))}

        {/* AI + Videos side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Ask Phyllis AI</h3>
            <PSAIChat style="modern" />
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Watch</h3>
            {VIDEOS.map(v => (
              <div key={v.id} className="aspect-video rounded-xl overflow-hidden">
                <iframe src={`https://www.youtube.com/embed/${v.youtubeId}`} title={v.title} className="w-full h-full" frameBorder="0" allowFullScreen />
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-gray-100 text-center text-sm text-gray-400">
        &copy; 2026 Eagle Forum Education &amp; Legal Defense Fund
      </footer>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════
   PROTO 3 — "Sovereign Scroll"
   Heritage/museum site. Full-bleed hero, ornamental dividers,
   warm tones, archival photography, decorative serif typography.
   ═══════════════════════════════════════════════════════════════ */
function SovereignScroll() {
  return (
    <div className="min-h-screen bg-[#fdfcf0] text-[#3e2723] font-serif pb-32">
      {/* Thin top bar */}
      <div className="bg-[#3e2723] text-[#fdfcf0] text-center py-2 text-[10px] uppercase tracking-[0.4em]">
        Preserving the Legacy &bull; Defending the Constitution &bull; Educating the Next Generation
      </div>

      {/* Nav */}
      <nav className="border-b border-[#d6cfb8] bg-[#fdfcf0]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold italic text-[#5d4037]">Eagle Forum</h1>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8d6e63]">Education &amp; Legal Defense Fund</p>
          </div>
          <div className="hidden md:flex gap-6">
            {NAV_LINKS.map(l => (
              <span key={l} className="text-sm text-[#5d4037] hover:text-[#bf360c] cursor-pointer transition-colors">{l}</span>
            ))}
          </div>
        </div>
      </nav>

      {/* Full-bleed hero with text overlay */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img src={ARTICLES[0].image} className="absolute inset-0 w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3e2723]/90 via-[#3e2723]/60 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-2xl space-y-6">
            <div className="w-20 h-[2px] bg-[#d4a574]" />
            <h2 className="text-5xl md:text-6xl font-bold text-[#fdfcf0] leading-tight italic">{ARTICLES[0].title}</h2>
            <p className="text-lg text-[#fdfcf0]/80 leading-relaxed">{ARTICLES[0].excerpt}</p>
            <button className="px-8 py-3 bg-[#d4a574] text-[#3e2723] font-bold uppercase text-sm tracking-widest hover:bg-[#c49464] transition-colors">
              Read the Full Story
            </button>
          </div>
        </div>
      </section>

      {/* Ornamental divider */}
      <div className="flex items-center justify-center py-8 gap-4">
        <div className="w-24 h-[1px] bg-[#d6cfb8]" />
        <Feather className="w-5 h-5 text-[#8d6e63]" />
        <div className="w-24 h-[1px] bg-[#d6cfb8]" />
      </div>

      {/* Two-column archival content */}
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-center text-2xl font-bold italic text-[#5d4037] mb-12">From the Archives</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {ARTICLES.slice(1).map(a => (
            <article key={a.id} className="group cursor-pointer border border-[#d6cfb8] rounded-sm overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={a.image} className="w-full h-full object-cover sepia-[0.3] group-hover:sepia-0 group-hover:scale-105 transition-all duration-700" alt="" />
              </div>
              <div className="p-6 space-y-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#bf360c] font-bold">{a.category}</span>
                <h4 className="text-xl font-bold leading-tight text-[#3e2723]">{a.title}</h4>
                <p className="text-sm text-[#5d4037]/70 leading-relaxed">{a.excerpt}</p>
                <div className="flex items-center gap-2 pt-2 text-[10px] uppercase tracking-widest text-[#8d6e63]">
                  <span>{a.author}</span> &bull; <span>{a.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* AI + Videos */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-[1px] bg-[#d4a574]" />
              <h3 className="text-sm uppercase tracking-[0.3em] text-[#8d6e63]">Phyllis AI</h3>
            </div>
            <PSAIChat style="classic" />
          </div>
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm uppercase tracking-[0.3em] text-[#8d6e63] mb-2">Historical Footage</h3>
            {VIDEOS.slice(0, 2).map(v => (
              <div key={v.id} className="aspect-video rounded-sm overflow-hidden border border-[#d6cfb8]">
                <iframe src={`https://www.youtube.com/embed/${v.youtubeId}`} title={v.title} className="w-full h-full" frameBorder="0" allowFullScreen />
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-[#d6cfb8] text-center space-y-2">
        <Feather className="w-5 h-5 text-[#8d6e63] mx-auto" />
        <p className="text-[10px] uppercase tracking-[0.4em] text-[#8d6e63]">&copy; 2026 Eagle Forum Education &amp; Legal Defense Fund</p>
      </footer>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════
   PROTO 4 — "Digital Agora"
   Dark futuristic dashboard. Terminal aesthetics, data panels,
   glassmorphism, neon accents, monospace elements, grid layout.
   ═══════════════════════════════════════════════════════════════ */
function DigitalAgora() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e0e0e0] font-sans pb-32 selection:bg-blue-500/30">
      {/* Top bar — terminal style */}
      <div className="bg-[#0d0d14] border-b border-white/5 px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <span className="text-[10px] font-mono text-white/30">eagle-forum@sovereign:~$</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] font-mono text-green-400/70">SYSTEMS ONLINE</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="font-bold tracking-tight text-blue-400">EAGLE FORUM</span>
            <span className="text-[10px] text-white/30 font-mono">// EDUCATION &amp; LEGAL</span>
          </div>
          <div className="hidden md:flex gap-6">
            {NAV_LINKS.map(l => (
              <span key={l} className="text-xs font-mono text-white/40 hover:text-blue-400 cursor-pointer transition-colors uppercase">{l}</span>
            ))}
          </div>
        </div>
      </nav>

      {/* Dashboard grid */}
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Archive Entries", value: "12,847", delta: "+142" },
            { label: "Reports Digitized", value: "4,312", delta: "+28" },
            { label: "Columns Published", value: "8,103", delta: "+3" },
            { label: "Active Researchers", value: "2,891", delta: "+67" }
          ].map((s, i) => (
            <div key={i} className="bg-white/[0.03] border border-white/5 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-[10px] font-mono uppercase text-white/30 mb-1">{s.label}</p>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-white">{s.value}</span>
                <span className="text-[10px] font-mono text-green-400 mb-1">{s.delta}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Feed panel */}
          <div className="lg:col-span-5 bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden">
            <div className="px-4 py-3 border-b border-white/5 flex items-center gap-2">
              <ScanLine className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-mono text-white/50 uppercase">Intel Feed</span>
            </div>
            <div className="divide-y divide-white/5">
              {ARTICLES.map(a => (
                <div key={a.id} className="p-4 hover:bg-white/[0.02] cursor-pointer transition-colors group">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded">{a.category.toUpperCase()}</span>
                    <span className="text-[10px] font-mono text-white/20">{a.date}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white/80 group-hover:text-blue-400 transition-colors leading-snug">{a.title}</h3>
                  <p className="text-xs text-white/30 mt-1 leading-relaxed">{a.excerpt.substring(0, 80)}...</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Panel — center */}
          <div className="lg:col-span-4 bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden">
            <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CircleDot className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-mono text-white/50 uppercase">Phyllis AI</span>
              </div>
              <span className="text-[10px] font-mono text-green-400/60 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" /> ACTIVE</span>
            </div>
            <PSAIChat style="future" />
          </div>

          {/* Media panel */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden">
              <div className="px-4 py-3 border-b border-white/5 flex items-center gap-2">
                <Video className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono text-white/50 uppercase">Media Stream</span>
              </div>
              <div className="p-3 space-y-3">
                {VIDEOS.map(v => (
                  <div key={v.id} className="space-y-1">
                    <div className="aspect-video rounded-lg overflow-hidden border border-white/5">
                      <iframe src={`https://www.youtube.com/embed/${v.youtubeId}`} title={v.title} className="w-full h-full" frameBorder="0" allowFullScreen />
                    </div>
                    <p className="text-[10px] font-mono text-white/30 truncate">{v.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-white/5 text-center">
        <p className="text-[10px] font-mono text-white/20">&copy; 2026 EAGLE FORUM EDUCATION &amp; LEGAL DEFENSE FUND</p>
      </footer>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════
   PROTO 5 — "Executive Brief"
   Ultra-minimal report/memo style. Single centered column,
   document-like, numbered sections, massive whitespace,
   text-forward with no clutter.
   ═══════════════════════════════════════════════════════════════ */
function ExecutiveBrief() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-32">
      {/* Minimal top bar */}
      <nav className="border-b border-gray-200">
        <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-sm font-semibold tracking-tight">Eagle Forum <span className="font-normal text-gray-400">/ Education &amp; Legal</span></span>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span className="cursor-pointer hover:text-gray-900">About</span>
            <span className="cursor-pointer hover:text-gray-900">Archive</span>
            <Search className="w-4 h-4 cursor-pointer hover:text-gray-900" />
          </div>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-6 py-16 space-y-16">
        {/* Document header */}
        <header className="space-y-6">
          <div className="space-y-1">
            <p className="text-xs text-gray-400 uppercase tracking-widest">Briefing Document</p>
            <p className="text-xs text-gray-400">{ARTICLES[0].date}</p>
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight">{ARTICLES[0].title}</h1>
          <p className="text-xl text-gray-500 leading-relaxed">{ARTICLES[0].excerpt}</p>
          <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
            <span className="text-xs font-medium text-gray-500">{ARTICLES[0].author}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="text-xs text-gray-400">{ARTICLES[0].category}</span>
          </div>
        </header>

        <div className="h-px bg-gray-200" />

        {/* Numbered sections */}
        <section className="space-y-12">
          <h2 className="text-xs text-gray-400 uppercase tracking-widest">Recent Analysis</h2>
          {ARTICLES.slice(1).map((a, idx) => (
            <article key={a.id} className="space-y-3 group cursor-pointer">
              <div className="flex items-start gap-6">
                <span className="text-4xl font-bold text-gray-200 leading-none shrink-0 group-hover:text-blue-200 transition-colors">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="space-y-2 pt-1">
                  <h3 className="text-lg font-semibold leading-tight group-hover:text-blue-600 transition-colors">{a.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{a.excerpt}</p>
                  <div className="text-xs text-gray-400">
                    {a.author} &mdash; {a.date}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <div className="h-px bg-gray-200" />

        {/* AI section */}
        <section className="space-y-4">
          <h2 className="text-xs text-gray-400 uppercase tracking-widest">Research Assistant</h2>
          <p className="text-sm text-gray-500">Query the Phyllis Schlafly archives using our AI-powered research tool.</p>
          <PSAIChat style="minimal" />
        </section>

        <div className="h-px bg-gray-200" />

        {/* Video links — minimal list */}
        <section className="space-y-6">
          <h2 className="text-xs text-gray-400 uppercase tracking-widest">Multimedia References</h2>
          {VIDEOS.map((v, i) => (
            <div key={v.id} className="flex items-center justify-between py-3 border-b border-gray-100 cursor-pointer group">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-300 font-mono">{i + 1}.</span>
                <span className="text-sm font-medium group-hover:text-blue-600 transition-colors">{v.title}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-blue-600 transition-colors" />
            </div>
          ))}
        </section>
      </main>

      <footer className="max-w-2xl mx-auto px-6 py-12 text-center text-xs text-gray-300">
        &copy; 2026 Eagle Forum Education &amp; Legal Defense Fund
      </footer>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════
   PROTO 6 — "Campaign Trail"
   Bold political campaign site. Full-width hero with CTA,
   patriotic palette (red/navy/white), banner sections,
   action-oriented design with bold typography.
   ═══════════════════════════════════════════════════════════════ */
function CampaignTrail() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-32">
      {/* Bold nav */}
      <nav className="bg-[#1b2a4a] text-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-red-400" />
            <div>
              <span className="text-lg font-black uppercase tracking-wider">Eagle Forum</span>
              <span className="hidden sm:inline text-xs text-white/50 ml-3 uppercase tracking-widest">Education &amp; Legal</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(l => (
              <span key={l} className="text-sm font-bold uppercase tracking-wider text-white/70 hover:text-white cursor-pointer transition-colors">{l}</span>
            ))}
            <button className="px-5 py-2 bg-red-600 text-white font-bold uppercase text-xs tracking-wider rounded hover:bg-red-700 transition-colors">Take Action</button>
          </div>
          <Menu className="w-6 h-6 md:hidden" />
        </div>
      </nav>

      {/* Hero — bold, full-width */}
      <section className="bg-[#1b2a4a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 bg-red-600 text-sm font-bold uppercase tracking-wider">Featured Report</div>
            <h1 className="text-5xl md:text-6xl font-black leading-[0.95] uppercase">{ARTICLES[0].title}</h1>
            <p className="text-lg text-white/70 leading-relaxed">{ARTICLES[0].excerpt}</p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-red-600 text-white font-black uppercase tracking-wider hover:bg-red-700 transition-colors">Read Now</button>
              <button className="px-8 py-4 border-2 border-white/30 text-white font-bold uppercase tracking-wider hover:bg-white/10 transition-colors">Learn More</button>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden">
            <img src={ARTICLES[0].image} className="w-full h-full object-cover" alt="" />
          </div>
        </div>
      </section>

      {/* Red accent bar */}
      <div className="h-2 bg-red-600" />

      {/* Issues grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-black uppercase tracking-tight text-center mb-12">Key Issues</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.slice(1).map(a => (
            <div key={a.id} className="group cursor-pointer text-center space-y-4 p-8 border-2 border-gray-100 hover:border-[#1b2a4a] transition-colors">
              <div className="w-16 h-16 bg-[#1b2a4a] text-white rounded-full flex items-center justify-center mx-auto group-hover:bg-red-600 transition-colors">
                {a.category === "Defense" ? <Shield className="w-7 h-7" /> : a.category === "Education" ? <BookOpen className="w-7 h-7" /> : <Globe className="w-7 h-7" />}
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-600">{a.category}</span>
              <h3 className="text-xl font-black uppercase leading-tight">{a.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{a.excerpt.substring(0, 100)}...</p>
              <span className="inline-flex items-center gap-1 text-sm font-bold text-[#1b2a4a] uppercase group-hover:text-red-600 transition-colors">
                Learn More <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center space-y-6">
          <h2 className="text-4xl font-black uppercase">Protect Our Heritage</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">Join thousands of Americans in defending the values that made our nation great.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input className="px-6 py-4 bg-white/10 border border-white/30 text-white placeholder:text-white/40 text-center sm:text-left focus:outline-none focus:bg-white/20" placeholder="Your email address" />
            <button className="px-8 py-4 bg-[#1b2a4a] text-white font-black uppercase tracking-wider hover:bg-[#2a3d6a] transition-colors">Join the Movement</button>
          </div>
        </div>
      </section>

      {/* AI + Videos */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h3 className="text-xl font-black uppercase tracking-tight">Ask Phyllis AI</h3>
          <PSAIChat style="modern" />
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-black uppercase tracking-tight">Featured Videos</h3>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe src={`https://www.youtube.com/embed/${VIDEOS[0].youtubeId}`} title={VIDEOS[0].title} className="w-full h-full" frameBorder="0" allowFullScreen />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {VIDEOS.slice(1).map(v => (
              <div key={v.id} className="aspect-video rounded overflow-hidden">
                <iframe src={`https://www.youtube.com/embed/${v.youtubeId}`} title={v.title} className="w-full h-full" frameBorder="0" allowFullScreen />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#1b2a4a] text-white/50 text-center py-8 text-xs uppercase tracking-widest">
        &copy; 2026 Eagle Forum Education &amp; Legal Defense Fund
      </footer>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════
   PROTO 7 — "Archival Vault"
   Library portal with sidebar navigation, card catalog layout,
   search-prominent, document-centric, metadata-rich cards.
   ═══════════════════════════════════════════════════════════════ */
function ArchivalVault() {
  const categories = ["All Collections", "Books", "Reports", "Columns", "Speeches", "Interviews", "Commentaries"];
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#2c1810] font-serif pb-32">
      {/* Top bar */}
      <div className="bg-[#2c1810] text-[#f4f1ea]">
        <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Library className="w-4 h-4" />
            <span className="font-bold uppercase tracking-wider">Eagle Forum</span>
            <span className="text-white/40">|</span>
            <span className="text-white/60">Education &amp; Legal Defense Fund</span>
          </div>
          <div className="hidden md:flex gap-4 text-white/50">
            <span className="cursor-pointer hover:text-white">About</span>
            <span className="cursor-pointer hover:text-white">Contact</span>
            <span className="cursor-pointer hover:text-white">Donate</span>
          </div>
        </div>
      </div>

      {/* Search banner */}
      <div className="bg-[#3e2723] text-white py-10">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-4">
          <h1 className="text-3xl font-bold">Search the Archives</h1>
          <p className="text-white/60 text-sm">Over 12,000 digitized documents, reports, and columns from the Phyllis Schlafly collection.</p>
          <div className="flex bg-white rounded-lg overflow-hidden shadow-xl">
            <input className="flex-1 px-6 py-4 text-gray-900 focus:outline-none text-sm" placeholder="Search books, reports, columns, speeches..." />
            <button className="px-6 bg-[#8b4513] text-white font-bold uppercase text-xs tracking-wider hover:bg-[#a0522d] transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar + content layout */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-8">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0 space-y-6">
          <div className="space-y-1">
            <h3 className="text-xs uppercase tracking-widest text-[#8d6e63] font-bold mb-3">Collections</h3>
            {categories.map((c, i) => (
              <div key={c} className={cn(
                "px-3 py-2 rounded cursor-pointer text-sm transition-colors flex items-center justify-between",
                i === 0 ? "bg-[#8b4513] text-white font-bold" : "hover:bg-[#e8e0d0] text-[#5d4037]"
              )}>
                <span>{c}</span>
                {i === 0 && <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded">12,847</span>}
              </div>
            ))}
          </div>

          <div className="border-t border-[#d6cfb8] pt-6 space-y-1">
            <h3 className="text-xs uppercase tracking-widest text-[#8d6e63] font-bold mb-3">Date Range</h3>
            <p className="text-sm text-[#5d4037]">1964 &mdash; 2016</p>
          </div>

          <div className="border-t border-[#d6cfb8] pt-6">
            <h3 className="text-xs uppercase tracking-widest text-[#8d6e63] font-bold mb-3">AI Research</h3>
            <PSAIChat style="classic" />
          </div>
        </aside>

        {/* Main catalog */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Recent Additions</h2>
            <div className="flex items-center gap-2 text-xs text-[#8d6e63]">
              <LayoutGrid className="w-4 h-4 cursor-pointer" />
              <Columns3 className="w-4 h-4 cursor-pointer" />
            </div>
          </div>

          {/* Document cards — catalog style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ARTICLES.map(a => (
              <div key={a.id} className="bg-white border border-[#d6cfb8] rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={a.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="" />
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#8b4513]/10 text-[#8b4513] text-[10px] font-bold uppercase rounded">{a.category}</span>
                    <span className="text-[10px] text-[#8d6e63]">{a.date}</span>
                  </div>
                  <h3 className="text-lg font-bold leading-tight">{a.title}</h3>
                  <p className="text-sm text-[#5d4037]/70 leading-relaxed">{a.excerpt.substring(0, 100)}...</p>
                  <div className="flex items-center gap-2 pt-2 border-t border-[#d6cfb8]">
                    <FileText className="w-3 h-3 text-[#8d6e63]" />
                    <span className="text-[10px] text-[#8d6e63]">{a.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Videos section */}
          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-bold">Multimedia Archives</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {VIDEOS.map(v => (
                <div key={v.id} className="bg-white border border-[#d6cfb8] rounded-lg overflow-hidden">
                  <div className="aspect-video">
                    <iframe src={`https://www.youtube.com/embed/${v.youtubeId}`} title={v.title} className="w-full h-full" frameBorder="0" allowFullScreen />
                  </div>
                  <div className="p-3">
                    <p className="text-xs font-medium">{v.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-[#d6cfb8] text-center text-[10px] uppercase tracking-[0.3em] text-[#8d6e63]">
        &copy; 2026 Eagle Forum Education &amp; Legal Defense Fund &bull; Digital Archive System
      </footer>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════
   PROTO 8 — "Eagle Eye"
   Glossy magazine layout. Mixed-size feature grid, image-forward,
   overlaid text on photos, masonry-like tiled layout, bold.
   ═══════════════════════════════════════════════════════════════ */
function EagleEye() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-black font-sans pb-32">
      {/* Magazine nav */}
      <nav className="bg-white border-b-4 border-black sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div>
              <span className="text-2xl font-black tracking-tighter uppercase">Eagle Eye</span>
              <p className="text-[9px] uppercase tracking-[0.3em] text-gray-500 -mt-0.5">by Eagle Forum &bull; Education &amp; Legal</p>
            </div>
            <div className="hidden lg:flex gap-6">
              {NAV_LINKS.map(l => (
                <span key={l} className="text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-black cursor-pointer transition-colors">{l}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Search className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer" />
            <button className="hidden sm:block px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-wider">Subscribe</button>
          </div>
        </div>
      </nav>

      {/* Magazine grid — mixed sizes */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Large feature — spans 8 cols */}
          <div className="md:col-span-8 relative aspect-[16/10] rounded-lg overflow-hidden group cursor-pointer">
            <img src={ARTICLES[0].image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 space-y-3">
              <span className="inline-block px-3 py-1 bg-red-600 text-white text-[10px] font-black uppercase tracking-wider">{ARTICLES[0].category}</span>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tight">{ARTICLES[0].title}</h1>
              <p className="text-white/70 max-w-xl">{ARTICLES[0].excerpt.substring(0, 100)}...</p>
              <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest pt-2">{ARTICLES[0].author} &bull; {ARTICLES[0].date}</div>
            </div>
          </div>

          {/* Two stacked cards — right side, 4 cols */}
          <div className="md:col-span-4 grid grid-rows-2 gap-4">
            {ARTICLES.slice(1, 3).map(a => (
              <div key={a.id} className="relative rounded-lg overflow-hidden group cursor-pointer">
                <img src={a.image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 space-y-2">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">{a.category}</span>
                  <h3 className="text-lg font-black text-white leading-tight">{a.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary row — 3 equal columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {/* Article card */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer">
            <img src={ARTICLES[3].image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 space-y-2">
              <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">{ARTICLES[3].category}</span>
              <h3 className="text-lg font-black text-white leading-tight">{ARTICLES[3].title}</h3>
            </div>
          </div>

          {/* Featured video */}
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-black">
            <iframe src={`https://www.youtube.com/embed/${VIDEOS[0].youtubeId}`} title={VIDEOS[0].title} className="w-full h-full" frameBorder="0" allowFullScreen />
          </div>

          {/* AI chat card */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col">
            <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider">Ask Phyllis AI</span>
              <Star className="w-4 h-4 text-red-600" />
            </div>
            <div className="flex-1 min-h-[300px]">
              <PSAIChat style="minimal" />
            </div>
          </div>
        </div>

        {/* Ticker-style row */}
        <div className="mt-8 bg-black rounded-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-red-600 text-white text-[10px] font-black uppercase tracking-wider">Watch</span>
            <span className="text-white font-black uppercase tracking-tight">From the Video Archive</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {VIDEOS.slice(1).map(v => (
              <div key={v.id} className="flex gap-4 items-center group cursor-pointer">
                <div className="w-40 shrink-0 aspect-video rounded overflow-hidden">
                  <iframe src={`https://www.youtube.com/embed/${v.youtubeId}`} title={v.title} className="w-full h-full" frameBorder="0" allowFullScreen />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">{v.title}</h4>
                  <p className="text-xs text-white/40 mt-1">Eagle Forum Archive Collection</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t-4 border-black text-center space-y-2">
        <span className="text-xl font-black uppercase tracking-tighter">Eagle Eye</span>
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">&copy; 2026 Eagle Forum Education &amp; Legal Defense Fund</p>
      </footer>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════
   PAGE ROUTER — dispatches to the correct prototype
   ═══════════════════════════════════════════════════════════════ */

const STYLES: Record<string, { name: string; component: () => React.JSX.Element }> = {
  "1": { name: "Grey Lady", component: GreyLady },
  "2": { name: "The Wire", component: TheWire },
  "3": { name: "Sovereign Scroll", component: SovereignScroll },
  "4": { name: "Digital Agora", component: DigitalAgora },
  "5": { name: "Executive Brief", component: ExecutiveBrief },
  "6": { name: "Campaign Trail", component: CampaignTrail },
  "7": { name: "Archival Vault", component: ArchivalVault },
  "8": { name: "Eagle Eye", component: EagleEye },
};

export default async function PrototypePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const style = STYLES[id] || STYLES["1"];
  const Component = style.component;
  return <Component />;
}

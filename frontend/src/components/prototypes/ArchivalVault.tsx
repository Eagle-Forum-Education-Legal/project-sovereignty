import React from "react";
import Link from "next/link";
import PSAIChat from "@/components/PSAIChat";
import { Library, Search, FileText, LayoutGrid, Columns3 } from "lucide-react";
import { cn, HomePageProps, ArticlePageProps, AboutPageProps, EventsPageProps } from "./shared";
import { NAV_LINKS } from "@/data/nav";

function TopBar({ protoId }: { protoId: string }) {
  return (
    <div className="bg-[#2c1810] text-[#f4f1ea]">
      <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <Library className="w-4 h-4" />
          <Link href={`/proto/${protoId}`}>
            <span className="font-bold uppercase tracking-wider">Eagle Forum</span>
          </Link>
          <span className="text-white/40">|</span>
          <span className="text-white/60">Education &amp; Legal Defense Fund</span>
        </div>
        <div className="hidden md:flex gap-4 text-white/50">
          {NAV_LINKS.slice(0, 3).map(l => (
            <Link key={l.label} href={l.href(protoId)} className="hover:text-white">{l.label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-[#d6cfb8] text-center text-[10px] uppercase tracking-[0.3em] text-[#8d6e63]">
      &copy; 2026 Eagle Forum Education &amp; Legal Defense Fund &bull; Digital Archive System
    </footer>
  );
}

const categories = ["All Collections", "Books", "Reports", "Columns", "Speeches", "Interviews", "Commentaries"];

export function HomePage({ protoId, articles, videos }: HomePageProps) {
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#2c1810] font-serif pb-32">
      <TopBar protoId={protoId} />

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

      {/* Sidebar + content */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-8">
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

        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Recent Additions</h2>
            <div className="flex items-center gap-2 text-xs text-[#8d6e63]">
              <LayoutGrid className="w-4 h-4 cursor-pointer" />
              <Columns3 className="w-4 h-4 cursor-pointer" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {articles.slice(0, 6).map(a => (
              <Link key={a.id} href={`/proto/${protoId}/article/${a.slug}`}>
                <div className="bg-white border border-[#d6cfb8] rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
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
              </Link>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-bold">Multimedia Archives</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {videos.map(v => (
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

      <Footer />
    </div>
  );
}

export function ArticlePage({ protoId, article }: ArticlePageProps) {
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#2c1810] font-serif pb-32">
      <TopBar protoId={protoId} />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <Link href={`/proto/${protoId}`} className="text-sm text-[#8b4513] hover:underline">&larr; Back to Archive</Link>
        <div className="mt-8 bg-white border border-[#d6cfb8] rounded-lg p-8 space-y-6">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[#8b4513]/10 text-[#8b4513] text-[10px] font-bold uppercase rounded">{article.category}</span>
            <span className="text-[10px] text-[#8d6e63]">{article.date}</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight">{article.title}</h1>
          <div className="flex items-center gap-2 text-[10px] text-[#8d6e63] border-b border-[#d6cfb8] pb-4">
            <FileText className="w-3 h-3" />
            <span>{article.author}</span>
            <span>&bull;</span>
            <span>{article.categories.join(", ")}</span>
          </div>
          <img src={article.image} className="w-full aspect-[21/9] object-cover rounded-lg" alt="" />
          <div className="text-base leading-relaxed text-[#2c1810]/80 space-y-6">
            {article.body.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="border-t border-[#d6cfb8] pt-6">
            <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8b4513] hover:underline">
              Read on phyllisschlafly.com &rarr;
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function AboutPage({ protoId, leadership, offices, missionText, historyText }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#2c1810] font-serif pb-32">
      <TopBar protoId={protoId} />
      <div className="bg-[#3e2723] text-white py-10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold">About Eagle Forum</h1>
          <p className="text-white/60 text-sm mt-2">Education &amp; Legal Defense Fund</p>
        </div>
      </div>
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <div className="bg-white border border-[#d6cfb8] rounded-lg p-8 space-y-4">
          <h2 className="text-xl font-bold">Our Mission</h2>
          <p className="text-base text-[#2c1810]/80 leading-relaxed">{missionText}</p>
        </div>
        <div className="bg-white border border-[#d6cfb8] rounded-lg p-8 space-y-4">
          <h2 className="text-xl font-bold">Our History</h2>
          <p className="text-base text-[#2c1810]/80 leading-relaxed">{historyText}</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {leadership.map(s => (
              <div key={s.name} className="bg-white border border-[#d6cfb8] rounded-lg p-5">
                <p className="font-bold">{s.name}</p>
                <p className="text-sm text-[#8d6e63]">{s.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Offices</h2>
          {offices.map(o => (
            <div key={o.name} className="bg-white border border-[#d6cfb8] rounded-lg p-5 space-y-2">
              <h3 className="font-bold">{o.name}</h3>
              <p className="text-sm text-[#8b4513]">{o.address}</p>
              <p className="text-sm text-[#2c1810]/70">{o.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function EventsPage({ protoId, events }: EventsPageProps) {
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#2c1810] font-serif pb-32">
      <TopBar protoId={protoId} />
      <div className="bg-[#3e2723] text-white py-10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold">Events</h1>
          <p className="text-white/60 text-sm mt-2">Upcoming gatherings and conferences</p>
        </div>
      </div>
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-6">
        {events.map(e => (
          <div key={e.name} className="bg-white border border-[#d6cfb8] rounded-lg p-8 hover:shadow-lg transition-shadow space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-[#8b4513]/10 text-[#8b4513] text-[10px] font-bold uppercase rounded">{e.date}</span>
              <span className="text-[10px] text-[#8d6e63]">{e.location}</span>
            </div>
            <h2 className="text-2xl font-bold">{e.name}</h2>
            <p className="text-base text-[#2c1810]/70 leading-relaxed">{e.description}</p>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}

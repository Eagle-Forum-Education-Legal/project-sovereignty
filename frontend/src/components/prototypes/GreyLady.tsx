import React from "react";
import Link from "next/link";
import PSAIChat from "@/components/PSAIChat";
import { Feather } from "lucide-react";
import { cn, HomePageProps, ArticlePageProps, AboutPageProps, EventsPageProps } from "./shared";
import { NAV_LINKS } from "@/data/nav";

function Header({ protoId }: { protoId: string }) {
  return (
    <header className="border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-6 pt-6 pb-2">
        <div className="flex justify-between items-end border-b border-black/20 pb-2 mb-2">
          <span className="text-[10px] uppercase tracking-[0.3em]">Vol. LIII, No. 2</span>
          <span className="text-[10px] uppercase tracking-[0.3em]">Est. 1972</span>
          <span className="text-[10px] uppercase tracking-[0.3em]">Feb 2026</span>
        </div>
        <div className="text-center py-4">
          <Link href={`/proto/${protoId}`}>
            <h1 className="text-6xl font-bold tracking-tight" style={{ fontFamily: "Georgia, serif" }}>Eagle Forum</h1>
          </Link>
          <p className="text-xs uppercase tracking-[0.4em] mt-1 text-black/50">Education &amp; Legal Defense Fund</p>
        </div>
        <nav className="flex justify-center gap-8 border-t border-black/20 pt-3 pb-1">
          {NAV_LINKS.map(l => (
            <Link key={l.label} href={l.href(protoId)} className="text-[11px] uppercase tracking-[0.2em] hover:underline">{l.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 mt-16 pt-6 border-t-2 border-black text-center">
      <p className="text-[10px] uppercase tracking-[0.4em] text-black/30">&copy; 2026 Eagle Forum Education &amp; Legal Defense Fund</p>
    </footer>
  );
}

export function HomePage({ protoId, articles, videos }: HomePageProps) {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1a1a] font-serif pb-32">
      <Header protoId={protoId} />
      <div className="max-w-6xl mx-auto px-6 pt-8">
        {/* Lead story */}
        <div className="border-b border-black/15 pb-8 mb-8">
          <Link href={`/proto/${protoId}/article/${articles[0].slug}`}>
            <h2 className="text-5xl font-bold leading-[1.1] mb-4 max-w-4xl hover:underline" style={{ fontFamily: "Georgia, serif" }}>
              {articles[0].title}
            </h2>
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <p className="text-lg leading-relaxed text-black/80">{articles[0].excerpt}</p>
              <p className="text-[11px] uppercase tracking-widest text-black/40">By {articles[0].author} &bull; {articles[0].date}</p>
            </div>
            <div>
              <img src={articles[0].image} className="w-full aspect-[4/5] object-cover grayscale" alt="" />
              <p className="text-[10px] italic text-black/40 mt-1">{articles[0].category}</p>
            </div>
          </div>
        </div>

        {/* Secondary stories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-x divide-black/15">
          {articles.slice(1, 4).map(a => (
            <article key={a.id} className="px-6 first:pl-0 last:pr-0 space-y-3">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-red-800">{a.category}</span>
              <Link href={`/proto/${protoId}/article/${a.slug}`}>
                <h3 className="text-xl font-bold leading-tight hover:underline" style={{ fontFamily: "Georgia, serif" }}>{a.title}</h3>
              </Link>
              <p className="text-sm leading-relaxed text-black/60">{a.excerpt}</p>
              <p className="text-[10px] uppercase tracking-widest text-black/40">{a.author} &bull; {a.date}</p>
            </article>
          ))}
        </div>

        {/* AI + Videos */}
        <div className="mt-12 pt-8 border-t-2 border-black">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold mb-2 text-black/50">Phyllis AI</h3>
              <PSAIChat style="classic" />
            </div>
            <div className="space-y-6">
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-black/50 border-b border-black/15 pb-2">Multimedia</h4>
              {videos.map(v => (
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
      <Footer />
    </div>
  );
}

export function ArticlePage({ protoId, article }: ArticlePageProps) {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1a1a] font-serif pb-32">
      <Header protoId={protoId} />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <Link href={`/proto/${protoId}`} className="text-[11px] uppercase tracking-[0.2em] text-red-800 hover:underline">&larr; Back to Front Page</Link>
        <div className="mt-8 space-y-6">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-red-800">{article.category}</span>
          <h1 className="text-5xl font-bold leading-[1.1]" style={{ fontFamily: "Georgia, serif" }}>{article.title}</h1>
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-widest text-black/40 border-b border-black/15 pb-4">
            <span>{article.author}</span>
            <span>&bull;</span>
            <span>{article.date}</span>
            <span>&bull;</span>
            <span>{article.categories.join(", ")}</span>
          </div>
          <img src={article.image} className="w-full aspect-[21/9] object-cover grayscale" alt="" />
          <div className="text-lg leading-relaxed text-black/80 space-y-6">
            {article.body.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="border-t border-black/15 pt-6 mt-12">
            <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-sm text-red-800 hover:underline">
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
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1a1a] font-serif pb-32">
      <Header protoId={protoId} />
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold" style={{ fontFamily: "Georgia, serif" }}>About</h1>
          <p className="text-lg leading-relaxed text-black/80">{missionText}</p>
        </div>
        <div className="border-t border-black/15 pt-8 space-y-4">
          <h2 className="text-2xl font-bold" style={{ fontFamily: "Georgia, serif" }}>Our History</h2>
          <p className="text-base leading-relaxed text-black/70">{historyText}</p>
        </div>
        <div className="border-t border-black/15 pt-8 space-y-6">
          <h2 className="text-2xl font-bold" style={{ fontFamily: "Georgia, serif" }}>Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadership.map(s => (
              <div key={s.name} className="border-b border-black/10 pb-4">
                <p className="font-bold text-lg">{s.name}</p>
                <p className="text-sm text-black/50">{s.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-black/15 pt-8 space-y-6">
          <h2 className="text-2xl font-bold" style={{ fontFamily: "Georgia, serif" }}>Offices</h2>
          {offices.map(o => (
            <div key={o.name} className="space-y-1">
              <h3 className="font-bold">{o.name}</h3>
              <p className="text-sm text-black/50">{o.address}</p>
              <p className="text-sm text-black/70">{o.description}</p>
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
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1a1a] font-serif pb-32">
      <Header protoId={protoId} />
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <h1 className="text-5xl font-bold" style={{ fontFamily: "Georgia, serif" }}>Events</h1>
        {events.map(e => (
          <article key={e.name} className="border-b border-black/15 pb-8 space-y-3">
            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-red-800">{e.date}</span>
              <span className="text-[10px] text-black/40">&bull;</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-black/40">{e.location}</span>
            </div>
            <h2 className="text-3xl font-bold leading-tight" style={{ fontFamily: "Georgia, serif" }}>{e.name}</h2>
            <p className="text-base leading-relaxed text-black/70">{e.description}</p>
          </article>
        ))}
      </main>
      <Footer />
    </div>
  );
}

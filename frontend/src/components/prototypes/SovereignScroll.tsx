import React from "react";
import Link from "next/link";
import PSAIChat from "@/components/PSAIChat";
import { Feather } from "lucide-react";
import { cn, HomePageProps, ArticlePageProps, AboutPageProps, EventsPageProps } from "./shared";
import { NAV_LINKS } from "@/data/nav";

function Header({ protoId }: { protoId: string }) {
  return (
    <>
      <div className="bg-[#3e2723] text-[#fdfcf0] text-center py-2 text-[10px] uppercase tracking-[0.4em]">
        Preserving the Legacy &bull; Defending the Constitution &bull; Educating the Next Generation
      </div>
      <nav className="border-b border-[#d6cfb8] bg-[#fdfcf0]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <Link href={`/proto/${protoId}`}>
              <h1 className="text-3xl font-bold italic text-[#5d4037]">Eagle Forum</h1>
            </Link>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8d6e63]">Education &amp; Legal Defense Fund</p>
          </div>
          <div className="hidden md:flex gap-6">
            {NAV_LINKS.map(l => (
              <Link key={l.label} href={l.href(protoId)} className="text-sm text-[#5d4037] hover:text-[#bf360c] transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

function Divider() {
  return (
    <div className="flex items-center justify-center py-8 gap-4">
      <div className="w-24 h-[1px] bg-[#d6cfb8]" />
      <Feather className="w-5 h-5 text-[#8d6e63]" />
      <div className="w-24 h-[1px] bg-[#d6cfb8]" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-[#d6cfb8] text-center space-y-2">
      <Feather className="w-5 h-5 text-[#8d6e63] mx-auto" />
      <p className="text-[10px] uppercase tracking-[0.4em] text-[#8d6e63]">&copy; 2026 Eagle Forum Education &amp; Legal Defense Fund</p>
    </footer>
  );
}

export function HomePage({ protoId, articles, videos }: HomePageProps) {
  return (
    <div className="min-h-screen bg-[#fdfcf0] text-[#3e2723] font-serif pb-32">
      <Header protoId={protoId} />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img src={articles[0].image} className="absolute inset-0 w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3e2723]/90 via-[#3e2723]/60 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-2xl space-y-6">
            <div className="w-20 h-[2px] bg-[#d4a574]" />
            <h2 className="text-5xl md:text-6xl font-bold text-[#fdfcf0] leading-tight italic">{articles[0].title}</h2>
            <p className="text-lg text-[#fdfcf0]/80 leading-relaxed">{articles[0].excerpt}</p>
            <Link href={`/proto/${protoId}/article/${articles[0].slug}`} className="inline-block px-8 py-3 bg-[#d4a574] text-[#3e2723] font-bold uppercase text-sm tracking-widest hover:bg-[#c49464] transition-colors">
              Read the Full Story
            </Link>
          </div>
        </div>
      </section>

      <Divider />

      {/* Archive cards */}
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-center text-2xl font-bold italic text-[#5d4037] mb-12">From the Archives</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {articles.slice(1, 5).map(a => (
            <Link key={a.id} href={`/proto/${protoId}/article/${a.slug}`}>
              <article className="group cursor-pointer border border-[#d6cfb8] rounded-sm overflow-hidden hover:shadow-xl transition-shadow">
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
            </Link>
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
            {videos.slice(0, 2).map(v => (
              <div key={v.id} className="aspect-video rounded-sm overflow-hidden border border-[#d6cfb8]">
                <iframe src={`https://www.youtube.com/embed/${v.youtubeId}`} title={v.title} className="w-full h-full" frameBorder="0" allowFullScreen />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export function ArticlePage({ protoId, article }: ArticlePageProps) {
  return (
    <div className="min-h-screen bg-[#fdfcf0] text-[#3e2723] font-serif pb-32">
      <Header protoId={protoId} />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <Link href={`/proto/${protoId}`} className="text-sm text-[#bf360c] hover:underline">&larr; Back to Archives</Link>
        <div className="mt-8 space-y-6">
          <div className="w-20 h-[2px] bg-[#d4a574]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#bf360c] font-bold">{article.category}</span>
          <h1 className="text-5xl font-bold italic leading-tight">{article.title}</h1>
          <div className="text-[10px] uppercase tracking-widest text-[#8d6e63] border-b border-[#d6cfb8] pb-4">
            {article.author} &bull; {article.date} &bull; {article.categories.join(", ")}
          </div>
          <img src={article.image} className="w-full aspect-[21/9] object-cover sepia-[0.2]" alt="" />
          <div className="text-lg leading-relaxed text-[#3e2723]/80 space-y-6">
            {article.body.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="border-t border-[#d6cfb8] pt-6 mt-12">
            <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-sm text-[#bf360c] hover:underline">
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
    <div className="min-h-screen bg-[#fdfcf0] text-[#3e2723] font-serif pb-32">
      <Header protoId={protoId} />
      <Divider />
      <main className="max-w-4xl mx-auto px-6 space-y-16">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold italic text-[#5d4037]">About Eagle Forum</h1>
          <p className="text-lg leading-relaxed text-[#3e2723]/80">{missionText}</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold italic text-[#5d4037]">Our History</h2>
          <p className="text-base leading-relaxed text-[#3e2723]/70">{historyText}</p>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold italic text-[#5d4037]">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadership.map(s => (
              <div key={s.name} className="border border-[#d6cfb8] rounded-sm p-5 space-y-1">
                <p className="text-lg font-bold text-[#3e2723]">{s.name}</p>
                <p className="text-sm text-[#8d6e63]">{s.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold italic text-[#5d4037]">Offices</h2>
          {offices.map(o => (
            <div key={o.name} className="border border-[#d6cfb8] rounded-sm p-5 space-y-2">
              <h3 className="font-bold text-[#3e2723]">{o.name}</h3>
              <p className="text-sm text-[#8d6e63]">{o.address}</p>
              <p className="text-sm text-[#3e2723]/70">{o.description}</p>
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
    <div className="min-h-screen bg-[#fdfcf0] text-[#3e2723] font-serif pb-32">
      <Header protoId={protoId} />
      <Divider />
      <main className="max-w-4xl mx-auto px-6 space-y-12">
        <h1 className="text-5xl font-bold italic text-[#5d4037]">Events</h1>
        {events.map(e => (
          <article key={e.name} className="border border-[#d6cfb8] rounded-sm p-8 space-y-3 hover:shadow-lg transition-shadow">
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#bf360c] font-bold">{e.date} &bull; {e.location}</div>
            <h2 className="text-3xl font-bold italic leading-tight text-[#3e2723]">{e.name}</h2>
            <p className="text-base leading-relaxed text-[#3e2723]/70">{e.description}</p>
          </article>
        ))}
      </main>
      <Footer />
    </div>
  );
}

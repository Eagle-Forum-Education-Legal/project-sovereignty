import React from "react";
import Link from "next/link";
import PSAIChat from "@/components/PSAIChat";
import { Search, Star } from "lucide-react";
import { cn, HomePageProps, ArticlePageProps, AboutPageProps, EventsPageProps } from "./shared";
import { NAV_LINKS } from "@/data/nav";

function Header({ protoId }: { protoId: string }) {
  return (
    <nav className="bg-white border-b-4 border-black sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div>
            <Link href={`/proto/${protoId}`}>
              <span className="text-2xl font-black tracking-tighter uppercase">Eagle Eye</span>
            </Link>
            <p className="text-[9px] uppercase tracking-[0.3em] text-gray-500 -mt-0.5">by Eagle Forum &bull; Education &amp; Legal</p>
          </div>
          <div className="hidden lg:flex gap-6">
            {NAV_LINKS.map(l => (
              <Link key={l.label} href={l.href(protoId)} className="text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-black transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer" />
          <button className="hidden sm:block px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-wider">Subscribe</button>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t-4 border-black text-center space-y-2">
      <span className="text-xl font-black uppercase tracking-tighter">Eagle Eye</span>
      <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">&copy; 2026 Eagle Forum Education &amp; Legal Defense Fund</p>
    </footer>
  );
}

export function HomePage({ protoId, articles, videos }: HomePageProps) {
  return (
    <div className="min-h-screen bg-[#fafafa] text-black font-sans pb-32">
      <Header protoId={protoId} />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Magazine grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Large feature */}
          <Link href={`/proto/${protoId}/article/${articles[0].slug}`} className="md:col-span-8 relative aspect-[16/10] rounded-lg overflow-hidden group cursor-pointer">
            <img src={articles[0].image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 space-y-3">
              <span className="inline-block px-3 py-1 bg-red-600 text-white text-[10px] font-black uppercase tracking-wider">{articles[0].category}</span>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tight">{articles[0].title}</h1>
              <p className="text-white/70 max-w-xl">{articles[0].excerpt.substring(0, 100)}...</p>
              <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest pt-2">{articles[0].author} &bull; {articles[0].date}</div>
            </div>
          </Link>

          {/* Two stacked */}
          <div className="md:col-span-4 grid grid-rows-2 gap-4">
            {articles.slice(1, 3).map(a => (
              <Link key={a.id} href={`/proto/${protoId}/article/${a.slug}`} className="relative rounded-lg overflow-hidden group cursor-pointer">
                <img src={a.image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 space-y-2">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">{a.category}</span>
                  <h3 className="text-lg font-black text-white leading-tight">{a.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Secondary row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {/* Article card */}
          <Link href={`/proto/${protoId}/article/${articles[3].slug}`} className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer">
            <img src={articles[3].image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 space-y-2">
              <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">{articles[3].category}</span>
              <h3 className="text-lg font-black text-white leading-tight">{articles[3].title}</h3>
            </div>
          </Link>

          {/* Featured video */}
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-black">
            <iframe src={`https://www.youtube.com/embed/${videos[0].youtubeId}`} title={videos[0].title} className="w-full h-full" frameBorder="0" allowFullScreen />
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

        {/* Video archive row */}
        <div className="mt-8 bg-black rounded-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-red-600 text-white text-[10px] font-black uppercase tracking-wider">Watch</span>
            <span className="text-white font-black uppercase tracking-tight">From the Video Archive</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {videos.slice(1).map(v => (
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

      <Footer />
    </div>
  );
}

export function ArticlePage({ protoId, article }: ArticlePageProps) {
  return (
    <div className="min-h-screen bg-[#fafafa] text-black font-sans pb-32">
      <Header protoId={protoId} />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link href={`/proto/${protoId}`} className="text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-black">&larr; Back to Eagle Eye</Link>
        <div className="mt-8 relative aspect-[21/9] rounded-lg overflow-hidden">
          <img src={article.image} className="absolute inset-0 w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 space-y-3">
            <span className="inline-block px-3 py-1 bg-red-600 text-white text-[10px] font-black uppercase tracking-wider">{article.category}</span>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tight">{article.title}</h1>
            <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest">{article.author} &bull; {article.date}</div>
          </div>
        </div>
        <main className="max-w-3xl mx-auto py-12">
          <div className="text-lg leading-relaxed text-gray-700 space-y-6">
            {article.body.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="border-t-4 border-black pt-6 mt-12">
            <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-xs font-black uppercase tracking-wider text-red-600 hover:underline">
              Read on phyllisschlafly.com &rarr;
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export function AboutPage({ protoId, leadership, offices, missionText, historyText }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-[#fafafa] text-black font-sans pb-32">
      <Header protoId={protoId} />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="relative rounded-lg overflow-hidden bg-black text-white p-12 mb-8">
          <h1 className="text-5xl font-black uppercase tracking-tight">About</h1>
          <p className="text-white/60 mt-2">Eagle Forum Education &amp; Legal Defense Fund</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-black uppercase">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">{missionText}</p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-black uppercase">Our History</h2>
            <p className="text-gray-600 leading-relaxed">{historyText}</p>
          </div>
        </div>
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-black uppercase">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {leadership.map(s => (
              <div key={s.name} className="bg-white border border-gray-200 rounded-lg p-5">
                <p className="font-black uppercase">{s.name}</p>
                <p className="text-xs text-gray-400 mt-1">{s.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-black uppercase">Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {offices.map(o => (
              <div key={o.name} className="bg-white border border-gray-200 rounded-lg p-5 space-y-2">
                <h3 className="font-black text-sm uppercase">{o.name}</h3>
                <p className="text-xs text-red-600 font-bold">{o.address}</p>
                <p className="text-xs text-gray-500">{o.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export function EventsPage({ protoId, events }: EventsPageProps) {
  return (
    <div className="min-h-screen bg-[#fafafa] text-black font-sans pb-32">
      <Header protoId={protoId} />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="relative rounded-lg overflow-hidden bg-black text-white p-12 mb-8">
          <h1 className="text-5xl font-black uppercase tracking-tight">Events</h1>
          <p className="text-white/60 mt-2">Eagle Forum gatherings, summits, and celebrations</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map(e => (
            <div key={e.name} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-red-600 text-white text-[10px] font-black uppercase tracking-wider">{e.date}</span>
                </div>
                <h2 className="text-xl font-black uppercase">{e.name}</h2>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{e.location}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

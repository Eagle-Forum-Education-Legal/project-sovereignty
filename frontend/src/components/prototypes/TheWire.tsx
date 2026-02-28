import React from "react";
import Link from "next/link";
import PSAIChat from "@/components/PSAIChat";
import { Search } from "lucide-react";
import { cn, HomePageProps, ArticlePageProps, AboutPageProps, EventsPageProps } from "./shared";
import { NAV_LINKS } from "@/data/nav";

function Header({ protoId }: { protoId: string }) {
  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div>
          <Link href={`/proto/${protoId}`}>
            <span className="text-xl font-bold tracking-tight">Eagle Forum</span>
          </Link>
          <span className="text-xs text-gray-400 ml-3">Education &amp; Legal</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-gray-50 rounded-full px-4 py-2 gap-2">
            <Search className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400">Search...</span>
          </div>
          {NAV_LINKS.slice(0, 4).map(l => (
            <Link key={l.label} href={l.href(protoId)} className="hidden lg:block text-sm text-gray-500 hover:text-black transition-colors">{l.label}</Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-gray-100 text-center text-sm text-gray-400">
      &copy; 2026 Eagle Forum Education &amp; Legal Defense Fund
    </footer>
  );
}

export function HomePage({ protoId, articles, videos }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-32">
      <Header protoId={protoId} />
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-6">
        {/* Featured post */}
        <Link href={`/proto/${protoId}/article/${articles[0].slug}`}>
          <article className="group cursor-pointer">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-6">
              <img src={articles[0].image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full mb-3">{articles[0].category}</span>
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-2">{articles[0].title}</h1>
                <p className="text-white/70 max-w-2xl">{articles[0].excerpt}</p>
              </div>
            </div>
          </article>
        </Link>

        {/* Feed */}
        {articles.slice(1).map(a => (
          <Link key={a.id} href={`/proto/${protoId}/article/${a.slug}`}>
            <article className="group flex flex-col md:flex-row gap-6 py-6 border-b border-gray-100 cursor-pointer">
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
          </Link>
        ))}

        {/* AI + Videos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Ask Phyllis AI</h3>
            <PSAIChat style="modern" />
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Watch</h3>
            {videos.map(v => (
              <div key={v.id} className="aspect-video rounded-xl overflow-hidden">
                <iframe src={`https://www.youtube.com/embed/${v.youtubeId}`} title={v.title} className="w-full h-full" frameBorder="0" allowFullScreen />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function ArticlePage({ protoId, article }: ArticlePageProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-32">
      <Header protoId={protoId} />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <Link href={`/proto/${protoId}`} className="text-sm text-blue-600 hover:underline">&larr; Back to feed</Link>
        <div className="mt-8 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-blue-600">{article.category}</span>
            <span className="text-xs text-gray-400">{article.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">{article.title}</h1>
          <p className="text-xl text-gray-500 leading-relaxed">{article.excerpt}</p>
          <div className="flex items-center gap-3 pb-6 border-b border-gray-100">
            <span className="text-sm font-medium text-gray-500">{article.author}</span>
            <span className="text-xs text-gray-300">{article.categories.join(" / ")}</span>
          </div>
          <img src={article.image} className="w-full aspect-[21/9] object-cover rounded-2xl" alt="" />
          <div className="text-lg leading-relaxed text-gray-700 space-y-6">
            {article.body.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="border-t border-gray-100 pt-6 mt-12">
            <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
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
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-32">
      <Header protoId={protoId} />
      <main className="max-w-3xl mx-auto px-6 py-12 space-y-16">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">About</h1>
          <p className="text-lg text-gray-500 leading-relaxed">{missionText}</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Our History</h2>
          <p className="text-gray-500 leading-relaxed">{historyText}</p>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {leadership.map(s => (
              <div key={s.name} className="p-4 border border-gray-100 rounded-xl">
                <p className="font-bold">{s.name}</p>
                <p className="text-sm text-gray-400">{s.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Offices</h2>
          {offices.map(o => (
            <div key={o.name} className="p-4 border border-gray-100 rounded-xl space-y-2">
              <h3 className="font-bold">{o.name}</h3>
              <p className="text-sm text-gray-400">{o.address}</p>
              <p className="text-sm text-gray-500">{o.description}</p>
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
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-32">
      <Header protoId={protoId} />
      <main className="max-w-3xl mx-auto px-6 py-12 space-y-12">
        <h1 className="text-4xl font-bold tracking-tight">Events</h1>
        {events.map(e => (
          <article key={e.name} className="py-6 border-b border-gray-100 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-blue-600">{e.date}</span>
              <span className="text-xs text-gray-400">{e.location}</span>
            </div>
            <h2 className="text-2xl font-bold leading-tight">{e.name}</h2>
            <p className="text-gray-500 leading-relaxed">{e.description}</p>
          </article>
        ))}
      </main>
      <Footer />
    </div>
  );
}

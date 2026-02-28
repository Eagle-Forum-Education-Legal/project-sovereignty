import React from "react";
import Link from "next/link";
import PSAIChat from "@/components/PSAIChat";
import { Search, ArrowRight } from "lucide-react";
import { cn, HomePageProps, ArticlePageProps, AboutPageProps, EventsPageProps } from "./shared";
import { NAV_LINKS } from "@/data/nav";

function Header({ protoId }: { protoId: string }) {
  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href={`/proto/${protoId}`}>
          <span className="text-sm font-semibold tracking-tight">Eagle Forum <span className="font-normal text-gray-400">/ Education &amp; Legal</span></span>
        </Link>
        <div className="flex items-center gap-4 text-xs text-gray-400">
          {NAV_LINKS.slice(0, 3).map(l => (
            <Link key={l.label} href={l.href(protoId)} className="hover:text-gray-900">{l.label}</Link>
          ))}
          <Search className="w-4 h-4 cursor-pointer hover:text-gray-900" />
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="max-w-2xl mx-auto px-6 py-12 text-center text-xs text-gray-300">
      &copy; 2026 Eagle Forum Education &amp; Legal Defense Fund
    </footer>
  );
}

export function HomePage({ protoId, articles, videos }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-32">
      <Header protoId={protoId} />
      <main className="max-w-2xl mx-auto px-6 py-16 space-y-16">
        {/* Document header */}
        <header className="space-y-6">
          <div className="space-y-1">
            <p className="text-xs text-gray-400 uppercase tracking-widest">Briefing Document</p>
            <p className="text-xs text-gray-400">{articles[0].date}</p>
          </div>
          <Link href={`/proto/${protoId}/article/${articles[0].slug}`}>
            <h1 className="text-4xl font-bold leading-tight tracking-tight hover:text-blue-600 transition-colors">{articles[0].title}</h1>
          </Link>
          <p className="text-xl text-gray-500 leading-relaxed">{articles[0].excerpt}</p>
          <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
            <span className="text-xs font-medium text-gray-500">{articles[0].author}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="text-xs text-gray-400">{articles[0].category}</span>
          </div>
        </header>

        <div className="h-px bg-gray-200" />

        {/* Numbered sections */}
        <section className="space-y-12">
          <h2 className="text-xs text-gray-400 uppercase tracking-widest">Recent Analysis</h2>
          {articles.slice(1, 6).map((a, idx) => (
            <Link key={a.id} href={`/proto/${protoId}/article/${a.slug}`}>
              <article className="space-y-3 group cursor-pointer">
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
            </Link>
          ))}
        </section>

        <div className="h-px bg-gray-200" />

        <section className="space-y-4">
          <h2 className="text-xs text-gray-400 uppercase tracking-widest">Research Assistant</h2>
          <p className="text-sm text-gray-500">Query the Phyllis Schlafly archives using our AI-powered research tool.</p>
          <PSAIChat style="minimal" />
        </section>

        <div className="h-px bg-gray-200" />

        <section className="space-y-6">
          <h2 className="text-xs text-gray-400 uppercase tracking-widest">Multimedia References</h2>
          {videos.map((v, i) => (
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
      <Footer />
    </div>
  );
}

export function ArticlePage({ protoId, article }: ArticlePageProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-32">
      <Header protoId={protoId} />
      <main className="max-w-2xl mx-auto px-6 py-16 space-y-8">
        <Link href={`/proto/${protoId}`} className="text-xs text-gray-400 hover:text-gray-900">&larr; Back to briefing</Link>
        <header className="space-y-6">
          <div className="space-y-1">
            <p className="text-xs text-gray-400 uppercase tracking-widest">{article.category}</p>
            <p className="text-xs text-gray-400">{article.date}</p>
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight">{article.title}</h1>
          <p className="text-xl text-gray-500 leading-relaxed">{article.excerpt}</p>
          <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
            <span className="text-xs font-medium text-gray-500">{article.author}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="text-xs text-gray-400">{article.categories.join(", ")}</span>
          </div>
        </header>
        <div className="text-base leading-relaxed text-gray-600 space-y-6">
          {article.body.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="border-t border-gray-100 pt-6">
          <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
            Read on phyllisschlafly.com &rarr;
          </a>
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
      <main className="max-w-2xl mx-auto px-6 py-16 space-y-16">
        <header className="space-y-4">
          <p className="text-xs text-gray-400 uppercase tracking-widest">About</p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight">Eagle Forum Education &amp; Legal Defense Fund</h1>
          <p className="text-base text-gray-500 leading-relaxed">{missionText}</p>
        </header>
        <div className="h-px bg-gray-200" />
        <section className="space-y-4">
          <h2 className="text-xs text-gray-400 uppercase tracking-widest">History</h2>
          <p className="text-base text-gray-500 leading-relaxed">{historyText}</p>
        </section>
        <div className="h-px bg-gray-200" />
        <section className="space-y-8">
          <h2 className="text-xs text-gray-400 uppercase tracking-widest">Leadership</h2>
          {leadership.map((s, idx) => (
            <div key={s.name} className="flex items-start gap-6">
              <span className="text-4xl font-bold text-gray-200 leading-none shrink-0">{String(idx + 1).padStart(2, '0')}</span>
              <div className="pt-1">
                <p className="text-lg font-semibold">{s.name}</p>
                <p className="text-sm text-gray-400">{s.title}</p>
              </div>
            </div>
          ))}
        </section>
        <div className="h-px bg-gray-200" />
        <section className="space-y-6">
          <h2 className="text-xs text-gray-400 uppercase tracking-widest">Offices</h2>
          {offices.map(o => (
            <div key={o.name} className="space-y-1">
              <h3 className="font-semibold">{o.name}</h3>
              <p className="text-xs text-gray-400">{o.address}</p>
              <p className="text-sm text-gray-500">{o.description}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function EventsPage({ protoId, events }: EventsPageProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-32">
      <Header protoId={protoId} />
      <main className="max-w-2xl mx-auto px-6 py-16 space-y-16">
        <header>
          <p className="text-xs text-gray-400 uppercase tracking-widest">Schedule</p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight mt-4">Events</h1>
        </header>
        <section className="space-y-12">
          {events.map((e, idx) => (
            <article key={e.name} className="space-y-3 group">
              <div className="flex items-start gap-6">
                <span className="text-4xl font-bold text-gray-200 leading-none shrink-0">{String(idx + 1).padStart(2, '0')}</span>
                <div className="space-y-2 pt-1">
                  <h3 className="text-lg font-semibold leading-tight">{e.name}</h3>
                  <div className="text-xs text-gray-400">{e.date} &mdash; {e.location}</div>
                  <p className="text-sm text-gray-500 leading-relaxed">{e.description}</p>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

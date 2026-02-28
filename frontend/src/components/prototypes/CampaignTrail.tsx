import React from "react";
import Link from "next/link";
import PSAIChat from "@/components/PSAIChat";
import { Shield, BookOpen, Globe, ChevronRight, Menu } from "lucide-react";
import { cn, HomePageProps, ArticlePageProps, AboutPageProps, EventsPageProps } from "./shared";
import { NAV_LINKS } from "@/data/nav";

function Header({ protoId }: { protoId: string }) {
  return (
    <nav className="bg-[#1b2a4a] text-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Shield className="w-6 h-6 text-red-400" />
          <div>
            <Link href={`/proto/${protoId}`}>
              <span className="text-lg font-black uppercase tracking-wider">Eagle Forum</span>
            </Link>
            <span className="hidden sm:inline text-xs text-white/50 ml-3 uppercase tracking-widest">Education &amp; Legal</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(l => (
            <Link key={l.label} href={l.href(protoId)} className="text-sm font-bold uppercase tracking-wider text-white/70 hover:text-white transition-colors">{l.label}</Link>
          ))}
          <button className="px-5 py-2 bg-red-600 text-white font-bold uppercase text-xs tracking-wider rounded hover:bg-red-700 transition-colors">Take Action</button>
        </div>
        <Menu className="w-6 h-6 md:hidden" />
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1b2a4a] text-white/50 text-center py-8 text-xs uppercase tracking-widest">
      &copy; 2026 Eagle Forum Education &amp; Legal Defense Fund
    </footer>
  );
}

export function HomePage({ protoId, articles, videos }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-32">
      <Header protoId={protoId} />

      {/* Hero */}
      <section className="bg-[#1b2a4a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 bg-red-600 text-sm font-bold uppercase tracking-wider">Featured Report</div>
            <h1 className="text-5xl md:text-6xl font-black leading-[0.95] uppercase">{articles[0].title}</h1>
            <p className="text-lg text-white/70 leading-relaxed">{articles[0].excerpt}</p>
            <div className="flex gap-4">
              <Link href={`/proto/${protoId}/article/${articles[0].slug}`} className="px-8 py-4 bg-red-600 text-white font-black uppercase tracking-wider hover:bg-red-700 transition-colors">Read Now</Link>
              <Link href={`/proto/${protoId}/about`} className="px-8 py-4 border-2 border-white/30 text-white font-bold uppercase tracking-wider hover:bg-white/10 transition-colors">Learn More</Link>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden">
            <img src={articles[0].image} className="w-full h-full object-cover" alt="" />
          </div>
        </div>
      </section>

      <div className="h-2 bg-red-600" />

      {/* Issues grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-black uppercase tracking-tight text-center mb-12">Key Issues</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.slice(1, 4).map(a => (
            <Link key={a.id} href={`/proto/${protoId}/article/${a.slug}`}>
              <div className="group cursor-pointer text-center space-y-4 p-8 border-2 border-gray-100 hover:border-[#1b2a4a] transition-colors">
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
            </Link>
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
            <iframe src={`https://www.youtube.com/embed/${videos[0].youtubeId}`} title={videos[0].title} className="w-full h-full" frameBorder="0" allowFullScreen />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {videos.slice(1).map(v => (
              <div key={v.id} className="aspect-video rounded overflow-hidden">
                <iframe src={`https://www.youtube.com/embed/${v.youtubeId}`} title={v.title} className="w-full h-full" frameBorder="0" allowFullScreen />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export function ArticlePage({ protoId, article }: ArticlePageProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-32">
      <Header protoId={protoId} />
      <section className="bg-[#1b2a4a] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <Link href={`/proto/${protoId}`} className="text-sm text-white/50 hover:text-white uppercase tracking-wider">&larr; Back to Home</Link>
          <div className="inline-block px-4 py-1 bg-red-600 text-sm font-bold uppercase tracking-wider">{article.category}</div>
          <h1 className="text-5xl font-black leading-[0.95] uppercase">{article.title}</h1>
          <p className="text-lg text-white/70 leading-relaxed">{article.excerpt}</p>
          <div className="text-xs text-white/40 uppercase tracking-widest">{article.author} &bull; {article.date}</div>
        </div>
      </section>
      <div className="h-2 bg-red-600" />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <img src={article.image} className="w-full aspect-[21/9] object-cover rounded-lg mb-8" alt="" />
        <div className="text-lg leading-relaxed text-gray-700 space-y-6">
          {article.body.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="border-t border-gray-100 pt-6 mt-12">
          <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-red-600 uppercase tracking-wider hover:underline">
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
      <section className="bg-[#1b2a4a] text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-black uppercase">About Eagle Forum</h1>
        </div>
      </section>
      <div className="h-2 bg-red-600" />
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-black uppercase">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{missionText}</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-black uppercase">Our History</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{historyText}</p>
        </div>
        <div className="space-y-8">
          <h2 className="text-3xl font-black uppercase">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadership.map(s => (
              <div key={s.name} className="p-6 border-2 border-gray-100 text-center">
                <div className="w-16 h-16 bg-[#1b2a4a] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-black">{s.name.charAt(0)}</span>
                </div>
                <p className="text-lg font-black uppercase">{s.name}</p>
                <p className="text-sm text-gray-500">{s.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-black uppercase">Offices</h2>
          {offices.map(o => (
            <div key={o.name} className="p-6 border-2 border-gray-100 space-y-2">
              <h3 className="text-lg font-black uppercase">{o.name}</h3>
              <p className="text-sm text-red-600 font-bold">{o.address}</p>
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
      <section className="bg-[#1b2a4a] text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-black uppercase">Upcoming Events</h1>
          <p className="text-lg text-white/70 mt-4">Join the movement. Attend an Eagle Forum event near you.</p>
        </div>
      </section>
      <div className="h-2 bg-red-600" />
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        {events.map(e => (
          <div key={e.name} className="p-8 border-2 border-gray-100 hover:border-[#1b2a4a] transition-colors space-y-4">
            <div className="flex items-center gap-4">
              <span className="px-4 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wider">{e.date}</span>
              <span className="text-sm text-gray-500 font-bold uppercase">{e.location}</span>
            </div>
            <h2 className="text-2xl font-black uppercase">{e.name}</h2>
            <p className="text-gray-600 leading-relaxed">{e.description}</p>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}

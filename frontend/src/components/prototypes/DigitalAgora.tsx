import React from "react";
import Link from "next/link";
import PSAIChat from "@/components/PSAIChat";
import { Shield, ScanLine, CircleDot, Video } from "lucide-react";
import { cn, HomePageProps, ArticlePageProps, AboutPageProps, EventsPageProps } from "./shared";
import { NAV_LINKS } from "@/data/nav";

function TopBar() {
  return (
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
  );
}

function Header({ protoId }: { protoId: string }) {
  return (
    <nav className="border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Shield className="w-5 h-5 text-blue-400" />
          <Link href={`/proto/${protoId}`}>
            <span className="font-bold tracking-tight text-blue-400">EAGLE FORUM</span>
          </Link>
          <span className="text-[10px] text-white/30 font-mono">// EDUCATION &amp; LEGAL</span>
        </div>
        <div className="hidden md:flex gap-6">
          {NAV_LINKS.map(l => (
            <Link key={l.label} href={l.href(protoId)} className="text-xs font-mono text-white/40 hover:text-blue-400 transition-colors uppercase">{l.label}</Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-white/5 text-center">
      <p className="text-[10px] font-mono text-white/20">&copy; 2026 EAGLE FORUM EDUCATION &amp; LEGAL DEFENSE FUND</p>
    </footer>
  );
}

export function HomePage({ protoId, articles, videos }: HomePageProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e0e0e0] font-sans pb-32 selection:bg-blue-500/30">
      <TopBar />
      <Header protoId={protoId} />

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        {/* Stats */}
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

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Feed */}
          <div className="lg:col-span-5 bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden">
            <div className="px-4 py-3 border-b border-white/5 flex items-center gap-2">
              <ScanLine className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-mono text-white/50 uppercase">Intel Feed</span>
            </div>
            <div className="divide-y divide-white/5">
              {articles.slice(0, 6).map(a => (
                <Link key={a.id} href={`/proto/${protoId}/article/${a.slug}`}>
                  <div className="p-4 hover:bg-white/[0.02] cursor-pointer transition-colors group">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded">{a.category.toUpperCase()}</span>
                      <span className="text-[10px] font-mono text-white/20">{a.date}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-white/80 group-hover:text-blue-400 transition-colors leading-snug">{a.title}</h3>
                    <p className="text-xs text-white/30 mt-1 leading-relaxed">{a.excerpt.substring(0, 80)}...</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* AI Panel */}
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

          {/* Media */}
          <div className="lg:col-span-3 space-y-4">
            <div className="bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden">
              <div className="px-4 py-3 border-b border-white/5 flex items-center gap-2">
                <Video className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono text-white/50 uppercase">Media Stream</span>
              </div>
              <div className="p-3 space-y-3">
                {videos.map(v => (
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

      <Footer />
    </div>
  );
}

export function ArticlePage({ protoId, article }: ArticlePageProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e0e0e0] font-sans pb-32 selection:bg-blue-500/30">
      <TopBar />
      <Header protoId={protoId} />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <Link href={`/proto/${protoId}`} className="text-xs font-mono text-blue-400 hover:underline">&larr; BACK TO FEED</Link>
        <div className="mt-8 space-y-6 bg-white/[0.02] border border-white/5 rounded-xl p-8">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded">{article.category.toUpperCase()}</span>
            <span className="text-[10px] font-mono text-white/20">{article.date}</span>
          </div>
          <h1 className="text-3xl font-bold text-white leading-tight">{article.title}</h1>
          <div className="text-[10px] font-mono text-white/30 border-b border-white/5 pb-4">
            {article.author} // {article.categories.join(" / ")}
          </div>
          <img src={article.image} className="w-full aspect-[21/9] object-cover rounded-lg" alt="" />
          <div className="text-sm leading-relaxed text-white/70 space-y-4 font-mono">
            {article.body.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="border-t border-white/5 pt-4">
            <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-blue-400 hover:underline">
              SOURCE: phyllisschlafly.com &rarr;
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
    <div className="min-h-screen bg-[#0a0a0f] text-[#e0e0e0] font-sans pb-32 selection:bg-blue-500/30">
      <TopBar />
      <Header protoId={protoId} />
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white/[0.02] border border-white/5 rounded-xl p-8 space-y-4">
          <h1 className="text-2xl font-bold text-blue-400 font-mono uppercase">// ABOUT</h1>
          <p className="text-sm text-white/60 leading-relaxed font-mono">{missionText}</p>
        </div>
        <div className="bg-white/[0.02] border border-white/5 rounded-xl p-8 space-y-4">
          <h2 className="text-lg font-bold text-blue-400 font-mono uppercase">// HISTORY</h2>
          <p className="text-sm text-white/60 leading-relaxed font-mono">{historyText}</p>
        </div>
        <div className="bg-white/[0.02] border border-white/5 rounded-xl p-8 space-y-4">
          <h2 className="text-lg font-bold text-blue-400 font-mono uppercase">// LEADERSHIP</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {leadership.map(s => (
              <div key={s.name} className="bg-white/[0.02] border border-white/5 rounded-lg p-4">
                <p className="font-bold text-white font-mono">{s.name}</p>
                <p className="text-xs text-white/30 font-mono">{s.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/[0.02] border border-white/5 rounded-xl p-8 space-y-4">
          <h2 className="text-lg font-bold text-blue-400 font-mono uppercase">// OFFICES</h2>
          {offices.map(o => (
            <div key={o.name} className="bg-white/[0.02] border border-white/5 rounded-lg p-4 space-y-2">
              <h3 className="font-bold text-white font-mono text-sm">{o.name}</h3>
              <p className="text-xs text-green-400/60 font-mono">{o.address}</p>
              <p className="text-xs text-white/40 font-mono">{o.description}</p>
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
    <div className="min-h-screen bg-[#0a0a0f] text-[#e0e0e0] font-sans pb-32 selection:bg-blue-500/30">
      <TopBar />
      <Header protoId={protoId} />
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-6">
        <h1 className="text-2xl font-bold text-blue-400 font-mono uppercase">// EVENTS</h1>
        {events.map(e => (
          <div key={e.name} className="bg-white/[0.02] border border-white/5 rounded-xl p-6 space-y-3 hover:border-blue-500/20 transition-colors">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-green-400 bg-green-400/10 px-2 py-0.5 rounded">{e.date}</span>
              <span className="text-[10px] font-mono text-white/20">{e.location}</span>
            </div>
            <h2 className="text-xl font-bold text-white font-mono">{e.name}</h2>
            <p className="text-sm text-white/50 font-mono leading-relaxed">{e.description}</p>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}

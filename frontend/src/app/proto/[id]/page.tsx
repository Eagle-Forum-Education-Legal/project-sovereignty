import React from "react";
import PSAIChat from "@/components/PSAIChat";
import { Book, FileText, Play, ArrowRight, Share2, Bookmark, Menu, Search, User, Newspaper, Calendar, Hash, ExternalLink } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MOCK_ARTICLES = [
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

const STYLES: Record<string, any> = {
  "1": { name: "Grey Lady", font: "serif", theme: "traditional" },
  "2": { name: "The Wire", font: "sans", theme: "modern" },
  "3": { name: "Sovereign Scroll", font: "serif", theme: "heritage" },
  "4": { name: "Digital Agora", font: "sans", theme: "cyber" },
  "5": { name: "Executive Brief", font: "sans", theme: "minimal" },
  "6": { name: "Campaign Trail", font: "sans", theme: "bold" },
  "7": { name: "Archival Vault", font: "serif", theme: "library" },
  "8": { name: "Eagle Eye", font: "sans", theme: "magazine" },
};

export default async function PrototypePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const style = STYLES[id] || STYLES["1"];
  const theme = style.theme;

  const containerStyles = {
    traditional: "bg-[#fff] text-[#1a1a1a] font-serif",
    modern: "bg-[#f8f9fa] text-[#212529] font-sans",
    heritage: "bg-[#fdfcf0] text-[#3e2723] font-serif",
    cyber: "bg-[#0a0a0b] text-[#e0e0e0] font-sans selection:bg-blue-500/30",
    minimal: "bg-white text-gray-900 font-sans",
    bold: "bg-white text-black font-sans",
    library: "bg-[#f4f1ea] text-[#2c1810] font-serif",
    magazine: "bg-white text-black font-sans"
  };

  const navStyles = {
    traditional: "bg-white border-b-4 border-black border-double h-24",
    modern: "bg-white/80 border-b border-gray-100",
    heritage: "bg-[#fdfcf0] border-b-2 border-[#d6cfb8]",
    cyber: "bg-black/60 border-b border-white/5",
    minimal: "bg-white border-b border-gray-100",
    bold: "bg-blue-900 text-white",
    library: "bg-[#f4f1ea] border-b border-[#e2dfd5]",
    magazine: "bg-white border-b-8 border-black"
  };

  return (
    <div className={cn("min-h-screen transition-all duration-700 pb-32", (containerStyles as any)[theme])}>
      {/* Dynamic Nav */}
      <nav className={cn(
        "sticky top-0 z-40 px-6 py-4 flex items-center justify-between backdrop-blur-md",
        (navStyles as any)[theme]
      )}>
        <div className="flex items-center gap-12">
          <div className="flex flex-col">
            <div className={cn(
              "text-3xl font-black tracking-tighter uppercase leading-none",
              theme === "heritage" ? "text-red-950 font-serif tracking-normal italic" : "tracking-tighter",
              theme === "traditional" && "font-serif tracking-normal",
              theme === "cyber" && "text-blue-500",
              theme === "bold" && "text-white tracking-[0.2em]"
            )}>
              Eagle Forum
            </div>
            <div className={cn(
              "text-[10px] font-bold uppercase tracking-[0.15em] mt-0.5",
              theme === "heritage" && "text-red-900/60 font-serif",
              theme === "traditional" && "text-black/50 font-serif",
              theme === "cyber" && "text-blue-400/60",
              theme === "bold" && "text-white/60",
              theme === "library" && "text-[#2c1810]/50",
              !["heritage", "traditional", "cyber", "bold", "library"].includes(theme) && "opacity-50"
            )}>
              Education &amp; Legal
            </div>
          </div>
          <div className={cn(
            "hidden lg:flex gap-8 text-[11px] font-black uppercase tracking-[0.2em] opacity-60",
            theme === "bold" && "text-white opacity-100"
          )}>
            <span className="cursor-pointer hover:text-blue-600 transition-colors underline-offset-8 decoration-2 hover:underline">Archives</span>
            <span className="cursor-pointer hover:text-blue-600 transition-colors underline-offset-8 decoration-2 hover:underline">Columns</span>
            <span className="cursor-pointer hover:text-blue-600 transition-colors underline-offset-8 decoration-2 hover:underline">Interviews</span>
            <span className="cursor-pointer hover:text-blue-600 transition-colors underline-offset-8 decoration-2 hover:underline">Defense</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-2 bg-black/5 rounded-full px-4 py-2 border border-black/5">
            <Search className="w-4 h-4 opacity-40" />
            <span className="text-xs font-bold opacity-30">Search the Index...</span>
          </div>
          <div className="h-4 w-[1px] bg-black/10 mx-2" />
          <User className="w-5 h-5 opacity-40 hover:opacity-100 transition-opacity cursor-pointer" />
          <Menu className="w-6 h-6 hover:text-blue-600 transition-colors cursor-pointer" />
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-20">
          
          {/* Hero Section */}
          <section className="space-y-8 group">
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-sm shadow-xl shadow-red-600/20">Special Report</span>
              <span className="text-[10px] font-bold opacity-30 flex items-center gap-1 uppercase tracking-widest"><Calendar className="w-3 h-3" /> Feb 28, 2026</span>
            </div>
            <h1 className={cn(
              "text-6xl md:text-8xl font-black leading-[0.9] tracking-tight",
              theme === "traditional" && "font-serif font-normal italic leading-[1.0] text-7xl",
              theme === "heritage" && "font-serif text-[#2c1810]",
              theme === "cyber" && "text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600",
              theme === "bold" && "text-9xl uppercase tracking-tighter"
            )}>
              {MOCK_ARTICLES[0].title}
            </h1>
            <p className={cn(
              "text-2xl opacity-70 leading-relaxed max-w-2xl",
              theme === "traditional" && "font-serif text-3xl opacity-90",
              theme === "minimal" && "font-light"
            )}>
              {MOCK_ARTICLES[0].excerpt}
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-black/5 w-fit">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=128&h=128&q=80" className="w-12 h-12 rounded-full border-2 border-white shadow-xl" />
              <div>
                <div className="font-black text-sm uppercase tracking-widest">{MOCK_ARTICLES[0].author}</div>
                <div className="text-[10px] opacity-40 font-bold uppercase tracking-widest flex items-center gap-1">Expert Analyst • <Hash className="w-3 h-3" /> Archives Site</div>
              </div>
            </div>
            <div className="relative aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl group-hover:shadow-blue-500/10 transition-all duration-1000">
               <img src={MOCK_ARTICLES[0].image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-black text-xs uppercase tracking-widest mb-2 flex items-center gap-2">View Full Gallery <ArrowRight className="w-4 h-4" /></span>
               </div>
            </div>
          </section>

          {/* Secondary News Wire */}
          <section className="space-y-12">
            <div className="flex items-center justify-between border-b border-black/5 pb-6">
              <h2 className="text-3xl font-black uppercase tracking-tight flex items-center gap-3">
                <Newspaper className="w-8 h-8 text-blue-600" />
                The Morning Brief
              </h2>
              <div className="hidden sm:flex gap-4">
                 <button className="p-2 rounded-full bg-black/5 hover:bg-black/10 transition-all"><ArrowRight className="w-4 h-4 rotate-180" /></button>
                 <button className="p-2 rounded-full bg-black/5 hover:bg-black/10 transition-all"><ArrowRight className="w-4 h-4" /></button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {MOCK_ARTICLES.slice(1).map((a) => (
                <div key={a.id} className="space-y-6 group cursor-pointer">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                    <img src={a.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4">
                       <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase text-blue-900 shadow-lg">{a.category}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold leading-tight group-hover:text-blue-600 transition-colors">{a.title}</h3>
                    <p className="text-sm opacity-60 leading-relaxed">{a.excerpt.substring(0, 100)}...</p>
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-40 pt-2">
                       <span>{a.date}</span>
                       <span>•</span>
                       <span>{a.author}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Multimedia Hub */}
          <section className="p-12 rounded-[3rem] bg-black text-white space-y-12 shadow-3xl">
            <div className="flex items-center justify-between">
               <div className="space-y-1">
                  <h2 className="text-4xl font-black uppercase tracking-tighter italic">Multimedia Vault</h2>
                  <p className="text-blue-400 font-bold uppercase tracking-widest text-xs">Direct Stream from phyllis schlafly youtube channel</p>
               </div>
               <div className="hidden sm:block p-4 border border-white/10 rounded-2xl hover:bg-white/5 transition-all cursor-pointer">
                  <ExternalLink className="w-6 h-6 opacity-60" />
               </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="md:col-span-2 relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 group">
                   <iframe 
                      className="absolute inset-0 w-full h-full opacity-60 group-hover:opacity-100 transition-opacity"
                      src={`https://www.youtube.com/embed/${VIDEOS[0].youtubeId}`}
                      title={VIDEOS[0].title}
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
               </div>
               {VIDEOS.slice(1).map((v) => (
                 <div key={v.id} className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group">
                    <iframe 
                      className="absolute inset-0 w-full h-full opacity-40 group-hover:opacity-100 transition-opacity"
                      src={`https://www.youtube.com/embed/${v.youtubeId}`}
                      title={v.title}
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute bottom-4 left-4 right-4 pointer-events-none group-hover:opacity-0 transition-opacity">
                       <span className="text-xs font-bold text-white shadow-xl">{v.title}</span>
                    </div>
                 </div>
               ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-12">
          <div className="sticky top-32 space-y-12">
            
            {/* The Oracle AI */}
            <div className="space-y-6">
               <div className="flex items-center justify-between px-2">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] opacity-40">The Sovereign Index</h3>
                  <div className="flex items-center gap-1">
                     <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                     <span className="text-[10px] font-black uppercase opacity-60">Connected</span>
                  </div>
               </div>
               <div className="shadow-2xl shadow-blue-900/10">
                  <PSAIChat style={theme === "cyber" ? "future" : theme === "heritage" ? "classic" : "modern"} />
               </div>
            </div>

            {/* Archival Documents */}
            <div className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] opacity-40 px-2">Archival Artifacts</h3>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={cn(
                    "p-6 rounded-3xl border transition-all cursor-pointer group flex items-center gap-5",
                    theme === "cyber" ? "bg-white/5 border-white/5 hover:bg-white/10" : "bg-white border-black/5 hover:shadow-2xl hover:-translate-y-1"
                  )}>
                    <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                       <FileText className="w-8 h-8" />
                    </div>
                    <div className="space-y-1 overflow-hidden">
                       <div className="font-black text-sm uppercase tracking-tight truncate">Phyllis Schlafly Report Vol. {i}</div>
                       <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
                          Digitized Scan • 197{i}
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                       </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full py-4 border-2 border-dashed border-black/10 rounded-3xl text-[10px] font-black uppercase tracking-[0.2em] opacity-40 hover:opacity-100 hover:border-blue-600 hover:text-blue-600 transition-all">Explore Entire Repository</button>
            </div>

            {/* Newsletter / Action */}
            <div className={cn(
              "p-8 rounded-[3rem] space-y-6 shadow-3xl relative overflow-hidden",
              theme === "cyber" ? "bg-gradient-to-br from-blue-900 to-indigo-900" : "bg-blue-600 text-white"
            )}>
              <div className="relative z-10 space-y-4">
                 <h3 className="text-3xl font-black italic leading-tight tracking-tighter italic uppercase leading-[0.8]">Protect the Heritage.</h3>
                 <p className="text-sm opacity-80 font-bold leading-relaxed">Join 50,000+ patriots receiving the Daily Brief directly from the EFEL archives.</p>
                 <div className="space-y-3 pt-4">
                    <input className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 text-sm focus:outline-none focus:bg-white/20 transition-all" placeholder="Enter your email address..." />
                    <button className="w-full py-5 bg-white text-blue-900 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-50 transition-all shadow-xl">Join the Movement</button>
                 </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-40 border-t border-black/5 py-24 px-6 text-center space-y-8">
         <div className="text-4xl font-black opacity-10 uppercase tracking-tighter">Eagle Forum</div>
         <div className="text-[10px] font-black uppercase tracking-[0.5em] opacity-30">
            © 2026 Eagle Forum Education & Legal Defense Fund • Built by PSAI Team
         </div>
      </footer>
    </div>
  );
}

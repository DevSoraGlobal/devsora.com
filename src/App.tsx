import { useState, useEffect } from "react";
import { 
  Instagram, 
  Linkedin, 
  Github, 
  Twitter, 
  Terminal, 
  ShieldAlert, 
  X as CloseIcon, 
  CheckCircle2, 
  Cpu, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import InteractiveBackdrop from "./components/InteractiveBackdrop";

export default function App() {

  const [clickCount, setClickCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [hoveredBadge, setHoveredBadge] = useState(false);


  const handleDotClick = () => {
    const nextCount = clickCount + 1;
    setClickCount(nextCount);
    

    console.log(`[DEVSORA UPLINK] Ping received. Strength: ${nextCount}/5`);
    
    if (nextCount >= 5) {
      setShowModal(true);
      setClickCount(0);
      console.log("%c[DEVSORA CORE] ACCESS GRANTED. PROJECT RIO DECLASSIFIED.", "color: #00FF7F; font-size: 14px; font-weight: bold;");
    }
  };

  useEffect(() => {
    if (clickCount === 0) return;
    const interval = setTimeout(() => {
      setClickCount(0);
    }, 4000);
    return () => clearTimeout(interval);
  }, [clickCount]);

  return (
    <div id="app_root" className="min-h-screen bg-black text-white selection:bg-[#E5C573] selection:text-black font-sans relative overflow-hidden flex flex-col justify-between">
      <InteractiveBackdrop />


      <div className="metal-wave pointer-events-none" />


      <div className="absolute inset-y-0 left-8 md:left-20 w-[1px] bg-white/[0.02] pointer-events-none z-1" />
      <div className="absolute inset-y-0 right-8 md:right-20 w-[1px] bg-white/[0.02] pointer-events-none z-1" />

      <header id="main_header" className="sticky top-0 z-50 glass-header px-6 md:px-16 py-6 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          

          <div id="logo_placeholder" className="w-32 h-8 flex items-center" aria-label="Logo Space Placeholder">
            <img
              src="/logo.webp"
              alt="DevSora Logo"
              width="240"
              height="80"
              loading="eager"
              decoding="async"
              className="h-12 w-auto object-contain"
            />
          </div>


          <nav id="header_nav" className="flex items-center gap-8 text-[11px] tracking-[0.25em] uppercase font-light text-white/50">
            <a 
              id="nav_instagram_link"
              href="https://instagram.com/devsora_global" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-colors duration-300"
              title="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a 
              id="nav_linkedin_link"
              href="https://www.linkedin.com/company/devsora/" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-colors duration-300"
              title="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a 
              id="nav_github_link"
              href="https://github.com/DevSoraGlobal"
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white transition-colors duration-300"
              title="GitHub"
            >
              <Github size={16} />
            </a>
          </nav>
        </div>
      </header>

      <main id="main_content" className="flex-1 flex flex-col justify-center items-center text-center px-6 md:px-16 py-12 md:py-16 z-10 relative">
        <div className="max-w-4xl mx-auto w-full space-y-12">

          <section id="hero_section" className="relative space-y-6 flex flex-col items-center">
            

            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 glass-card border-white/20 select-none hover:border-white/40 transition-all duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF7F] animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium emerald-glow">
                Website Under Update
              </span>
            </div>


            <div className="space-y-4">
              <h1 
                id="hero_title"
                className="text-[60px] sm:text-[90px] md:text-[110px] font-thin tracking-[-0.03em] leading-none text-white select-none relative group"
              >
                DEVSORA
              </h1>

              <p 
                id="hero_tagline"
                className="text-[13px] sm:text-[14px] uppercase tracking-[0.6em] gold-text font-light mb-2 block"
              >
                Engineering The Impossible.
              </p>
              <p 
                id="hero_subtitle" 
                className="text-[10px] sm:text-[11px] text-white/40 uppercase tracking-[0.2em] font-light block"
              >
                Pre-incubated at AIC MUJ.
              </p>
            </div>

            <div className="max-w-xl mx-auto pt-2">
              <p 
                id="hero_description"
                className="text-[13px] text-white/60 leading-relaxed font-light"
              >
                We're rebuilding our digital presence while developing the next generation of robotics, AI, and autonomous systems.
              </p>
            </div>
          </section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            
            <section 
              id="vision_section" 
              className="glass-card p-6 md:p-8 flex flex-col justify-between h-44 text-left relative overflow-hidden group transition-all duration-300 hover:border-white/20"
            >
              <h3 id="vision_title" className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono">
                Vision
              </h3>
              
              <p 
                id="vision_text"
                className="text-[18px] text-white/70 font-light leading-relaxed"
              >
                To make advanced robotics accessible to every builder, creator, and innovator.
              </p>
              <p>
                
              </p>
            </section>
            <section 
              id="sneak_peek_section" 
              className="glass-card p-6 md:p-8 flex flex-col justify-between h-44 text-left border-emerald-500/10 relative overflow-hidden group transition-all duration-300 hover:border-white/20"
            >
              <div className="flex justify-between items-start">
                <h3 id="sneak_peek_title" className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono">
                  RIO
                </h3>
                <span className="text-[9px] gold-text uppercase tracking-widest font-mono">
                  Active Lab
                </span>
              </div>

              <div>
                <p 
                  id="sneak_peek_text"
                  className="text-[18px] text-white/70 font-light leading-relaxed"
                >
                  An open-source AI robotic assistant designed to remember, find, and retrieve the things that matter.
                </p>
                <p 
                  id="sneak_peek_small_text" 
                  className="text-[9px] text-right text-white/30 italic mt-2 uppercase tracking-tighter block font-mono"
                >
                  More details coming soon.
                </p>
              </div>
            </section>

          </div>

        </div>
      </main>

      <footer id="main_footer" className="py-8 px-12 z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center border-t border-white/10 pt-6">
          
          <p 
            id="footer_text"
            className="text-[10px] tracking-[0.3em] uppercase font-light text-white/30"
          >
            Building Tomorrow's Machines.
          </p>

          <div className="flex items-center space-x-3">
            {clickCount > 0 && (
              <span className="text-[8px] font-mono text-[#00FF7F]/40 uppercase tracking-widest animate-pulse">
                Uplink [{clickCount}/5]
              </span>
            )}
            <button
              id="easter-trigger"
              onClick={handleDotClick}
              className="w-2 h-2 rounded-full bg-[#00FF7F]/20 cursor-pointer hover:bg-[#00FF7F] transition-all shadow-[0_0_10px_rgba(0,255,127,0)] hover:shadow-[0_0_10px_rgba(0,255,127,0.5)] focus:outline-none"
              aria-label="Secure core access key"
            />
          </div>

        </div>
      </footer>

      {showModal && (
        <div 
          id="easter_egg_modal_backdrop" 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fade-in"
          onClick={() => setShowModal(false)}
        >
          <div 
            id="easter_egg_modal"
            className="w-full max-w-md glass-card rounded-xl p-8 relative shadow-[0_0_50px_rgba(0,255,127,0.15)] text-center space-y-6 overflow-hidden"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="emerald-glow text-[12px] tracking-[0.5em] uppercase animate-pulse">
              Access Granted
            </div>

            <div className="space-y-2">
              <h2 className="text-[36px] font-thin tracking-widest text-white">PROJECT: RIO</h2>
              <p className="text-[#E5C573] text-[12px] tracking-[0.3em] font-mono uppercase">STATUS: ACTIVE</p>
            </div>

            <p className="text-white/40 text-[11px] leading-relaxed">
              More information coming soon.
            </p>

            <button 
              id="close_modal_confirm"
              onClick={() => setShowModal(false)}
              className="mt-8 px-6 py-2 border border-white/20 text-[10px] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300 cursor-pointer text-white"
            >
              Close Protocol
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { circuits } from "../data/circuits";
import FadingVideo from "../components/FadingVideo";
import CinematicNavbar from "../components/CinematicNavbar";
import BlurText from "../components/BlurText";

export default function CircuitsList() {
  const itemVariant: Variants = {
    hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
    visible: (customDelay: number) => ({
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: { delay: customDelay, duration: 0.8, ease: "easeOut" as const },
    }),
  };

  return (
    <div className="relative w-full bg-black min-h-screen font-body text-white selection:bg-white/20">
      {/* GLOBAL BACKGROUND VIDEO */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <FadingVideo
          src="/videos/home2.mp4"
          poster="/images/circuits/experiments.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/0"></div>
      </div>

      <div className="relative z-10">
        <CinematicNavbar />

      {/* =========================================
          SECTION 1: HERO
          ========================================= */}
      <section className="relative w-full h-screen flex flex-col justify-center">
        {/* Content */}
        <div className="relative z-10 px-6 md:px-16 lg:px-20 flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center text-center">
            <motion.div
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={itemVariant}
              className="text-sm font-body text-white/80 mb-6 uppercase tracking-wider"
            >
              // Catalogue
            </motion.div>
            
            <BlurText 
              text="Lab Experiments" 
              className="font-heading italic text-white text-6xl md:text-7xl lg:text-[7rem] leading-[0.9] tracking-[-3px]"
            />
          </div>
          
          <motion.div
            custom={1.0}
            initial="hidden"
            animate="visible"
            variants={itemVariant}
            className="absolute bottom-12 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
            <svg className="w-5 h-5 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14" />
              <path d="M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: GRID
          ========================================= */}
      <section className="relative w-full min-h-screen">
        {/* Content */}
        <div className="relative z-10 px-6 md:px-16 lg:px-20 pt-24 pb-24 flex flex-col min-h-screen pointer-events-none">
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto pointer-events-auto"
          >
            {circuits.map((circuit) => (
              <Link
                key={circuit.slug}
                to={`/circuit/${circuit.slug}`}
                className="liquid-glass-strong rounded-2xl p-8 flex flex-col group transition-transform duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <div className="h-48 w-full rounded-xl overflow-hidden mb-6 relative">
                  <img
                    src={circuit.thumbnail}
                    alt={circuit.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none"></div>
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="font-heading italic text-white text-3xl tracking-[-1px] leading-none mb-3">
                      {circuit.name}
                    </h2>
                    <span className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap inline-block mb-4">
                      {circuit.category}
                    </span>
                    <p className="text-sm text-white/90 font-body font-light leading-relaxed line-clamp-2">
                      {circuit.description}
                    </p>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between text-sm text-white/90 font-medium group-hover:text-white transition-colors">
                    View in 3D
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        </section>
      </div>
    </div>
  );
}

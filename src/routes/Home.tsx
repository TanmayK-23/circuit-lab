import { motion } from "framer-motion";
import FadingVideo from "../components/FadingVideo";
import CinematicNavbar from "../components/CinematicNavbar";
import BlurText from "../components/BlurText";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const itemVariant = {
    hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
    visible: (customDelay: number) => ({
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: { delay: customDelay, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <div className="w-full bg-black min-h-screen font-body text-white selection:bg-white/20">
      {/* =========================================
          SECTION 1: HERO
          ========================================= */}
      <section className="relative w-full min-h-screen flex flex-col overflow-hidden bg-black">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <FadingVideo
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
            className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top"
            style={{ width: "120%", height: "120%" }}
          />
        </div>

        <CinematicNavbar />

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-24 px-4">
          
          <motion.div
            custom={0.4}
            initial="hidden"
            animate="visible"
            variants={itemVariant}
            className="liquid-glass rounded-full flex items-center p-1 pr-4 gap-3 mb-8 cursor-default pointer-events-auto"
          >
            <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-semibold">Live</span>
            <span className="text-sm text-white/90 font-medium">Interactive WebXR Platform Arrives 2026</span>
          </motion.div>

          <BlurText 
            text="Explore Circuits Across the Digital Universe" 
            className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl text-center tracking-[-4px]"
          />

          <motion.p
            custom={0.8}
            initial="hidden"
            animate="visible"
            variants={itemVariant}
            className="mt-4 text-sm md:text-base text-white/90 max-w-2xl text-center font-body font-light leading-tight"
          >
            Discover electronics in ways once unimaginable. Our interactive 3D models and Augmented Reality tools bring hardware exploration directly to your browser—seamless and immersive.
          </motion.p>

          <motion.div
            custom={1.1}
            initial="hidden"
            animate="visible"
            variants={itemVariant}
            className="flex items-center justify-center gap-6 mt-8 pointer-events-auto"
          >
            <Link to="/experiments" className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white flex items-center gap-2 hover:bg-white/10 transition-colors">
              Explore Experiments
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </Link>
            <button 
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              className="text-sm font-medium text-white/90 hover:text-white flex items-center gap-2 transition-colors cursor-pointer"
            >
              Watch Demo
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <polygon points="6 4 20 12 6 20 6 4" />
              </svg>
            </button>
          </motion.div>

          <motion.div
            custom={1.3}
            initial="hidden"
            animate="visible"
            variants={itemVariant}
            className="flex flex-col sm:flex-row items-stretch justify-center gap-4 mt-12 mb-8"
          >
            <div className="liquid-glass rounded-[1.25rem] p-5 w-[220px] flex flex-col justify-between items-start">
              <svg className="w-7 h-7 text-white mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
              <div>
                <div className="font-heading italic text-white text-4xl tracking-[-1px] leading-none">8+</div>
                <div className="text-xs text-white/80 font-body font-light mt-2">Interactive 3D Circuits</div>
              </div>
            </div>
            
            <div className="liquid-glass rounded-[1.25rem] p-5 w-[220px] flex flex-col justify-between items-start">
              <svg className="w-7 h-7 text-white mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                <circle cx="12" cy="13" r="3"/>
              </svg>
              <div>
                <div className="font-heading italic text-white text-3xl tracking-[-1px] leading-none mb-1 mt-1">ArUco</div>
                <div className="text-xs text-white/80 font-body font-light mt-2">Marker-Based AR Tracking</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Partners */}
        <motion.div
          custom={1.4}
          initial="hidden"
          animate="visible"
          variants={itemVariant}
          className="relative z-10 flex flex-col items-center justify-end gap-5 pb-10"
        >
          <div className="liquid-glass rounded-full px-4 py-1.5 text-xs font-medium text-white/90">
            Developed for E-Yantra IoT & Embedded Systems Lab
          </div>
          <div className="flex items-center justify-center flex-wrap gap-8 md:gap-16 font-heading italic text-white/90 text-2xl md:text-3xl tracking-tight opacity-80">
            <span>Tanmay</span>
          </div>
        </motion.div>
      </section>

      {/* =========================================
          SECTION 2: CAPABILITIES
          ========================================= */}
      <section className="relative w-full min-h-screen bg-black">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <FadingVideo
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 md:px-16 lg:px-20 pt-24 pb-12 flex flex-col min-h-screen">
          <div className="mb-auto">
            <div className="text-sm font-body text-white/80 mb-6 uppercase tracking-wider">// Features</div>
            <h2 className="font-heading italic text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
              Learning<br/>evolved
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            
            {/* Card 1 */}
            <div className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div className="w-11 h-11 shrink-0 liquid-glass rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3M12 5.31L6 8.69V15.31L12 18.69L18 15.31V8.69L12 5.31M12 11.5L15 9.81V13.19L12 14.88L9 13.19V9.81L12 11.5Z" />
                  </svg>
                </div>
                <div className="flex flex-wrap justify-end gap-1.5 max-w-[75%]">
                  <span className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">3D Rendering</span>
                  <span className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">Hardware Modules</span>
                  <span className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">Breadboards</span>
                  <span className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">Hotspots</span>
                </div>
              </div>
              <div className="flex-1"></div>
              <div className="mt-6">
                <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">Interactive 3D</h3>
                <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                  View precise 3D recreations of breadboard layouts and hardware modules. Click on individual components to see their roles and technical details.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div className="w-11 h-11 shrink-0 liquid-glass rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M4 4h4v2H6v2H4V4zm16 0h-4v2h2v2h2V4zM4 20h4v-2H6v-2H4v4zm16 0h-4v-2h2v-2h2v4zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                  </svg>
                </div>
                <div className="flex flex-wrap justify-end gap-1.5 max-w-[75%]">
                  <span className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">WebXR</span>
                  <span className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">ArUco Tracking</span>
                  <span className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">Spatial Computing</span>
                  <span className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">Real-World</span>
                </div>
              </div>
              <div className="flex-1"></div>
              <div className="mt-6">
                <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">Augmented Reality</h3>
                <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                  Seamlessly place circuits into the real-world environment using ArUco marker tracking and WebXR right from your mobile device.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div className="w-11 h-11 shrink-0 liquid-glass rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" />
                  </svg>
                </div>
                <div className="flex flex-wrap justify-end gap-1.5 max-w-[75%]">
                  <span className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">Wiring Steps</span>
                  <span className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">Code Snippets</span>
                  <span className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">Safety Notes</span>
                  <span className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">Quizzes</span>
                </div>
              </div>
              <div className="flex-1"></div>
              <div className="mt-6">
                <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">Complete Breakdowns</h3>
                <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                  Access step-by-step wiring guides, microcontroller code snippets, component lists, and interactive quizzes for every single circuit.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
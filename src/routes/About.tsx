import { motion, type Variants } from "framer-motion";
import FadingVideo from "../components/FadingVideo";
import CinematicNavbar from "../components/CinematicNavbar";
import BlurText from "../components/BlurText";

export default function About() {
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
    <div className="w-full bg-black min-h-screen font-body text-white selection:bg-white/20">
      <section className="relative w-full min-h-screen flex flex-col overflow-hidden bg-black">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <FadingVideo
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
            poster="/images/circuits/about.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <CinematicNavbar />

        {/* Content */}
        <div className="relative z-10 px-6 md:px-16 lg:px-20 pt-32 pb-12 flex flex-col flex-1">
          <div className="mb-8 flex flex-col items-center justify-center text-center">
            <motion.div
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={itemVariant}
              className="text-sm font-body text-white/80 mb-6 uppercase tracking-wider"
            >
              // The Team
            </motion.div>
            
            <BlurText 
              text="About the Developer" 
              className="font-heading italic text-white text-5xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]"
            />

            <motion.p
              custom={0.8}
              initial="hidden"
              animate="visible"
              variants={itemVariant}
              className="mt-6 text-sm md:text-base text-white/90 max-w-3xl text-center font-body font-light leading-relaxed mx-auto"
            >
              This project is developed as part of the Spatial Computing Lab to
              provide an interactive and immersive way to explore electronics
              experiments using 3D and AR technologies.
            </motion.p>
          </div>

          <motion.div 
            custom={1.1}
            initial="hidden"
            animate="visible"
            variants={itemVariant}
            className="mt-auto max-w-3xl mx-auto w-full"
          >
            {/* Sole Developer Card */}
            <div className="liquid-glass rounded-[1.25rem] p-8 md:p-12 min-h-[300px] flex flex-col justify-center items-center text-center transition-colors">
              <div>
                <h3 className="font-heading italic text-white text-4xl md:text-6xl tracking-[-2px] leading-none mb-4">Tanmay Kumar</h3>
                <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/90 font-body inline-block tracking-widest uppercase mb-2">Lead Engineer & Designer</span>
              </div>
              <p className="mt-6 text-sm md:text-base text-white/80 font-body font-light leading-relaxed max-w-2xl">
                The application is built on a modern stack featuring <strong className="text-white font-medium">React</strong> and <strong className="text-white font-medium">Vite</strong> for lightning-fast performance, heavily customized <strong className="text-white font-medium">Tailwind CSS</strong> to power the proprietary cinematic "liquid-glass" design system, <strong className="text-white font-medium">Framer Motion</strong> for fluid scroll animations, <strong className="text-white font-medium">HLS.js</strong> for native adaptive background video streaming, and <strong className="text-white font-medium">Model-Viewer</strong> for immersive 3D and Augmented Reality integration.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
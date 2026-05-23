import { motion } from "framer-motion";
import FadingVideo from "../components/FadingVideo";
import CinematicNavbar from "../components/CinematicNavbar";
import BlurText from "../components/BlurText";

export default function About() {
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
      <section className="relative w-full min-h-screen flex flex-col overflow-hidden bg-black">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <FadingVideo
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
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
              text="About the Developers" 
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
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-auto max-w-6xl mx-auto w-full"
          >
            {/* Developer Card 1 */}
            <div className="liquid-glass rounded-[1.25rem] p-6 min-h-[280px] flex flex-col justify-between hover:bg-white/[0.03] transition-colors">
              <div>
                <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none mb-2">Tanmay Kumar</h3>
                <span className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap inline-block">3D & AR Integration</span>
              </div>
              <p className="mt-6 text-sm text-white/80 font-body font-light leading-snug">
                Responsible for 3D model integration, AR visualization, and interactive component hotspots with cutting-edge UI/UX design.
              </p>
            </div>

            {/* Developer Card 2 */}
            <div className="liquid-glass rounded-[1.25rem] p-6 min-h-[280px] flex flex-col justify-between hover:bg-white/[0.03] transition-colors">
              <div>
                <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none mb-2">Anshul Pagar</h3>
                <span className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap inline-block">ArUco Visualisation</span>
              </div>
              <p className="mt-6 text-sm text-white/80 font-body font-light leading-snug">
                Implemented ArUco marker detection to track physical markers and accurately place virtual objects in the real world, enabling reliable marker-based AR interactions in the lab.
              </p>
            </div>

            {/* Developer Card 3 */}
            <div className="liquid-glass rounded-[1.25rem] p-6 min-h-[280px] flex flex-col justify-between hover:bg-white/[0.03] transition-colors">
              <div>
                <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none mb-2">Kushagra Srivastava</h3>
                <span className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap inline-block">Backend / Content</span>
              </div>
              <p className="mt-6 text-sm text-white/80 font-body font-light leading-snug">
                Managed circuit data, quiz content, and experiment structure to ensure accurate, robust learning outcomes for all students.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
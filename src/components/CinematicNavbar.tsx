import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function CinematicNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-4 inset-x-0 px-6 md:px-16 z-50 flex items-center justify-between pointer-events-none">
        {/* Left: Logo */}
        <div className="w-12 h-12 rounded-full liquid-glass flex items-center justify-center pointer-events-auto shrink-0 relative z-50">
          <span className="font-heading italic text-2xl leading-none pt-1">CV</span>
        </div>

        {/* Center: Desktop Nav Pill */}
        <div className="hidden md:flex liquid-glass rounded-full p-1.5 items-center gap-1 pointer-events-auto">
          <Link to="/" className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors">Home</Link>
          <Link to="/experiments" className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors">Experiments</Link>
          <Link to="/experiments" className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors">3D Models</Link>
          <Link to="/about" className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors">About Us</Link>
          <Link to="/experiments" className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1 whitespace-nowrap ml-1 hover:bg-white/90 transition-colors">
            Enter Lab
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </Link>
        </div>

        {/* Right: Mobile Hamburger Button */}
        <div className="w-12 h-12 shrink-0 md:hidden flex justify-end relative z-50">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-12 h-12 rounded-full liquid-glass flex items-center justify-center pointer-events-auto text-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16m-7 5h7"} />
            </svg>
          </button>
        </div>
        
        {/* Invisible Spacer for Desktop right alignment */}
        <div className="hidden md:block w-12 h-12 shrink-0"></div>
      </nav>

      {/* Mobile Menu Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-black/80 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8 pointer-events-auto text-center">
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/" className="text-3xl font-heading italic text-white/90 hover:text-white">Home</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/experiments" className="text-3xl font-heading italic text-white/90 hover:text-white">Experiments</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/experiments" className="text-3xl font-heading italic text-white/90 hover:text-white">3D Models</Link>
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/about" className="text-3xl font-heading italic text-white/90 hover:text-white">About Us</Link>
              
              <Link onClick={() => setIsMobileMenuOpen(false)} to="/experiments" className="mt-8 bg-white text-black px-8 py-3 rounded-full text-lg font-semibold flex items-center gap-2">
                Enter Lab
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { Link } from "react-router-dom";

export default function CinematicNavbar() {
  return (
    <nav className="fixed top-4 inset-x-0 px-8 lg:px-16 z-50 flex items-center justify-between pointer-events-none">
      {/* Left: Logo */}
      <div className="w-12 h-12 rounded-full liquid-glass flex items-center justify-center pointer-events-auto shrink-0">
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

      {/* Right: Invisible Spacer */}
      <div className="w-12 h-12 shrink-0"></div>
    </nav>
  );
}

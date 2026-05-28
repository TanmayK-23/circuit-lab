import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./routes/Home";
import CircuitDetail from "./routes/CircuitDetail";
import CircuitsList from "./routes/CircuitsList";
import About from "./routes/About";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();
  const isCinematic = location.pathname === "/" || location.pathname === "/about" || location.pathname === "/experiments";

  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-black">
      {!isCinematic && (
        <>
          {/* Upper canvas glow */}
          <div className="absolute inset-x-0 top-0 h-[45vh] -z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.22),transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.18),transparent_75%)]" />
          </div>
          {/* Bottom canvas glow */}
          <div className="absolute inset-x-0 bottom-0 h-[45vh] -z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.22),transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.18),transparent_75%)]" />
          </div>
          <Navbar />
        </>
      )}

      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiments" element={<CircuitsList />} />
          <Route path="/circuit/:slug" element={<CircuitDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
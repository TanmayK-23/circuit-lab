import { useEffect } from "react";
import { observeReveal } from "../main";
import CircuitsList from "./CircuitsList";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    observeReveal();
  }, []);

  useEffect(() => {
    if ((location.state as { scrollToCircuits?: boolean })?.scrollToCircuits) {
      setTimeout(() => {
        document
          .getElementById("circuits")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.state]);

  return (
    <>
      {/* Hero */}
      <section className="relative text-white py-28 animate-fadeIn">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Explore Lab Circuits
            <span className="block text-brand-gradient">
              in Interactive 3D
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
            Scan the QR codes placed around the lab to view each circuit in a
            virtual environment. Rotate, zoom, and explore every component
            in stunning detail.
          </p>
        </div>
      </section>

      {/* Scroll breathing space */}
      <section className="h-[20vh]" />

      {/* Circuits reveal section */}
      <section id="circuits" className="relative scroll-mt-24">
        <CircuitsList />
      </section>
    </>
  );
}
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { circuits, type QuizQuestion } from "../data/circuits";
import ModelViewer3D from "../components/ModelViewer3D";
import CinematicNavbar from "../components/CinematicNavbar";
import FadingVideo from "../components/FadingVideo";
import { motion, type Variants } from "framer-motion";
import BlurText from "../components/BlurText";

const HOTSPOTS_MAP: Record<string, any[]> = {
  "voltage-divider": [
    { id: "r1", position: "-0.086197 m 0.005886 m 0.060606 m", label: "Resistor R1: drops a portion of the input voltage" },
    { id: "r2", position: "-0.024149 m 0.004683 m 0.065716 m", label: "Resistor R2: works with R1 to divide voltage" },
    { id: "breadboard", position: "-0.4 m 0 m 0 m", label: "Breadboard: Used to mount and interconnect components without soldering" },
    { id: "battery", position: "-0.00743 m 0.474856 m 0.006252 m", label: "Power Source: Provides the input voltage for the circuit" },
    { id: "voltmeter", position: "0.642552 m -0.010025 m 0.058602 m", label: "Voltmeter: Measures voltage across the resistor" },
  ],
  "ohms-law": [
    { id: "resistor", position: "-0.024149 m 0.004683 m 0.065716 m", label: "Resistor: Opposes current flow and follows Ohm’s Law (V = IR)" },
    { id: "battery", position: "0.028191 m 0.741747 m -0.004996 m", label: "Power Source: Supplies voltage to the circuit" },
    { id: "ammeter", position: "-0.08999 m 0.332197 m 0.053165 m", label: "Ammeter: Measures the current flowing through the circuit" },
    { id: "voltmeter", position: "0.654095 m -0.009545 m 0.014828 m", label: "Voltmeter: Measures the voltage across the resistor" },
    { id: "breadboard", position: "-0.4 m 0.0 m 0.0 m", label: "Breadboard: Platform used to assemble the circuit without soldering" },
  ],
  "led-current-limiting": [
    { id: "led", position: "-0.091765 m -0.021906 m 0.118719 m", label: "LED: Emits light when forward biased; polarity must be correct" },
    { id: "resistor", position: "-0.024834 m 0.006402 m 0.056125 m", label: "Resistor: Limits current to protect the LED from damage" },
    { id: "battery", position: "0.007182 m 0.474856 m -0.006535 m", label: "Power Source: Supplies voltage to drive the LED circuit" },
    { id: "breadboard", position: "-0.4 m 0 m 0 m", label: "Breadboard: Used to mount and connect components without soldering" },
  ],
  "transistor-switching": [
    { id: "transistor", position: "-0.155982 m 0.001841 m 0.125161 m", label: "Transistor (BJT): Acts as an electronic switch controlled by base current" },
    { id: "base-resistor", position: "-0.198496 m 0.018957 m 0.056988 m", label: "Base Resistor: Limits base current to protect the transistor" },
    { id: "load", position: "-0.09258 m -0.001906 m 0.056316 m", label: "Load: Turns ON or OFF depending on the transistor state" },
    { id: "battery", position: "0.007182 m 0.474856 m -0.006535 m", label: "Power Source: Supplies voltage to drive the circuit" },
    { id: "breadboard", position: "-0.4 m 0 m 0 m", label: "Breadboard: Platform used to assemble the circuit without soldering" },
  ],
  "series-resistors": [
    { id: "r1", position: "-0.024834 m 0.006402 m 0.056125 m", label: "Resistor R1: First resistor connected in series" },
    { id: "r2", position: "-0.087991 m 0.006622 m 0.05519 m", label: "Resistor R2: Second resistor connected in series" },
    { id: "battery", position: "0.007182 m 0.474856 m -0.006535 m", label: "Power Source: Supplies voltage to the series circuit" },
    { id: "breadboard", position: "-0.4 m 0 m 0 m", label: "Breadboard: Used to mount and interconnect components" },
  ],
  "parallel-resistors": [
    { id: "r1", position: "-0.024834 m 0.006402 m 0.056125 m", label: "Resistor R1: One branch of the parallel network" },
    { id: "r2", position: "-0.087991 m 0.006622 m 0.05519 m", label: "Resistor R2: Second branch of the parallel network" },
    { id: "battery", position: "0.007182 m 0.474856 m -0.006535 m", label: "Power Source: Supplies voltage across parallel branches" },
    { id: "breadboard", position: "-0.4 m 0 m 0 m", label: "Breadboard: Used to assemble the parallel circuit" },
  ],
  "rc-circuit": [
    { id: "resistor", position: "-0.024834 m 0.006402 m 0.056125 m", label: "Resistor: Controls the rate of charging and discharging" },
    { id: "capacitor", position: "-0.092411 m -0.020127 m 0.061048 m", label: "Capacitor: Stores and releases electrical energy" },
    { id: "battery", position: "0.007182 m 0.474856 m -0.006535 m", label: "Power Source: Provides voltage for charging the capacitor" },
    { id: "breadboard", position: "-0.4 m 0 m 0 m", label: "Breadboard: Platform used to assemble the RC circuit" },
  ],
  "traffic-light-esp8266": [
    { id: "esp8266", position: "-0.496075 m -0.04519 m 0.379513 m", label: "ESP8266: Microcontroller that controls the traffic light sequence" },
    { id: "traffic_module", position: "0.290807 m 5.45795 m 0.957263 m", label: "Traffic Light Module: LED-based traffic signal unit that displays red, yellow, and green states controlled by the ESP8266." },
  ]
};

export default function CircuitDetail() {
  const { slug } = useParams<{ slug: string }>();
  const circuit = circuits.find((c) => c.slug === slug);

  const itemVariant: Variants = {
    hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
    visible: (customDelay: number) => ({
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: { delay: customDelay, duration: 0.8, ease: "easeOut" as const },
    }),
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!circuit) {
    return (
      <div className="w-full bg-black min-h-screen font-body text-white selection:bg-white/20">
        <CinematicNavbar />
        <section className="relative z-10 pt-32 pb-16 px-6 max-w-3xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-4xl font-heading italic text-white mb-4">Circuit not found</h1>
          <p className="text-white/70 mb-8 font-light">
            The QR code may be incorrect, or this circuit has not been added yet.
          </p>
          <Link
            to="/experiments"
            className="liquid-glass rounded-full px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            Go back to experiments
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="relative w-full bg-black min-h-screen font-body text-white selection:bg-white/20 overflow-hidden">
      
      {/* Background Video */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_055001_8e16d972-3b2b-441c-86ad-2901a54682f9.mp4"
          poster="/images/circuits/circuit_detail.png"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Very light overlay just for contrast, no haze */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <CinematicNavbar />

      {/* Main Content */}
      <section className="relative z-10 pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          
          {/* Header */}
          <motion.header 
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={itemVariant}
            className="space-y-6 pb-4"
          >
            <div className="liquid-glass rounded-full px-4 py-1.5 text-xs font-medium text-white/90 inline-block uppercase tracking-wider">
              {circuit.category}
            </div>

            <BlurText 
              text={circuit.name}
              className="text-5xl md:text-6xl lg:text-[5rem] font-heading italic text-white leading-[0.9] tracking-[-2px]"
            />

            <p className="text-white/80 max-w-3xl text-lg font-light leading-relaxed">
              {circuit.description}
            </p>
          </motion.header>

          {/* 3D Viewer */}
          {circuit.model3D && (
            <section 
              className="relative space-y-4"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-heading italic tracking-[-1px]">
                  Virtual Circuit View
                </h2>
                <span className="liquid-glass rounded-full px-3 py-1 text-[11px] uppercase tracking-widest text-white/80">
                  Interactive 3D
                </span>
              </div>

              <div
                className="relative isolate rounded-2xl overflow-hidden liquid-glass h-[500px]"
                style={{ perspective: "1200px" }}
              >
                <div
                  className="
                    relative z-10 h-full w-full
                    transition-transform duration-300 ease-out
                    hover:scale-[1.01]
                  "
                >
                  <ModelViewer3D
                    src={circuit.model3D}
                    alt={circuit.name}
                    hotspots={HOTSPOTS_MAP[circuit.slug]}
                  />
                </div>
              </div>

              <p className="text-xs text-white/60 font-light flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4"/>
                  <path d="M12 8h.01"/>
                </svg>
                Tip: Rotate and zoom to inspect the circuit. On supported phones, tap the AR button to view it in your environment.
              </p>
            </section>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Components Used */}
            <section
              className="liquid-glass rounded-2xl p-8 space-y-6"
            >
              <h2 className="text-2xl font-heading italic tracking-[-1px]">Components Used</h2>

              <div className="flex flex-col gap-4">
                {circuit.components.map((comp, idx) => (
                  <div
                    key={idx}
                    className="
                      relative overflow-hidden
                      rounded-xl px-5 py-4
                      liquid-glass
                      transition-all duration-300
                      hover:bg-white/[0.08]
                      hover:-translate-y-[2px]
                      flex justify-between items-center
                    "
                  >
                    <div>
                      <p className="font-medium text-white/90 text-lg">{comp.name}</p>
                      <p className="text-sm text-white/60 mt-1 font-light">
                        Type: {comp.type}
                      </p>
                    </div>
                    <div className="bg-white/10 rounded-full w-8 h-8 flex items-center justify-center font-medium text-sm">
                      {comp.quantity}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="space-y-8 flex flex-col">
              {/* Wiring Steps */}
              <section
                className="liquid-glass rounded-2xl p-8 flex-1 flex flex-col"
              >
                <h2 className="text-2xl font-heading italic tracking-[-1px] mb-6">Wiring Steps</h2>

                <ol className="list-decimal list-inside space-y-3 text-white/80 font-light flex-1">
                  {circuit.wiringSteps.map((step, idx) => (
                    <li key={idx} className="leading-relaxed">{step}</li>
                  ))}
                </ol>

                <p className="text-xs text-white/50 mt-6 border-t border-white/10 pt-4">
                  This virtual representation mirrors the physical breadboard layout used in the lab.
                </p>
              </section>
            </div>
          </div>

          {/* Code Snippet */}
          <section 
            className="space-y-4"
          >
            <h2 className="text-2xl font-heading italic tracking-[-1px]">
              {circuit.category === "Embedded Systems" ? "Microcontroller Code" : "Code Snippet"}
            </h2>
            <div className="liquid-glass rounded-2xl p-6 overflow-hidden">
              <pre className="overflow-x-auto text-sm font-mono text-white/80 leading-relaxed">
                <code>{circuit.codeSnippet}</code>
              </pre>
            </div>
          </section>

          {/* Safety Notes */}
          {circuit.safetyNotes && (
            <section
              className="liquid-glass rounded-2xl p-8 border border-red-500/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-6 h-6 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                  <path d="M12 9v4"/>
                  <path d="M12 17h.01"/>
                </svg>
                <h2 className="text-2xl font-heading italic tracking-[-1px] text-red-400">Safety Notes</h2>
              </div>
              <ul className="list-disc list-inside text-white/80 space-y-2 font-light">
                {circuit.safetyNotes.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Quiz Section */}
          {circuit.quiz && circuit.quiz.length > 0 && (
            <div>
              <QuizSection quiz={circuit.quiz} />
            </div>
          )}

        </div>
      </section>
    </div>
  );
}

function QuizSection({ quiz }: { quiz: QuizQuestion[] }) {
  const [visibleAnswers, setVisibleAnswers] = React.useState<Record<number, boolean>>({});

  const toggleAnswer = (index: number) => {
    setVisibleAnswers((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="liquid-glass rounded-2xl p-8 space-y-6 mt-8">
      <h2 className="text-2xl font-heading italic tracking-[-1px]">Knowledge Check</h2>

      <div className="space-y-8">
        {quiz.map((q, idx) => (
          <div key={idx} className="space-y-3">
            <p className="font-medium text-white/90 text-lg">
              {idx + 1}. {q.question}
            </p>

            <ul className="space-y-2 text-white/70 font-light pl-6">
              {q.options.map((opt, i) => (
                <li key={i} className="list-disc">{opt}</li>
              ))}
            </ul>

            <div className="pt-2">
              {!visibleAnswers[idx] ? (
                <button
                  onClick={() => toggleAnswer(idx)}
                  className="liquid-glass rounded-full px-4 py-1.5 text-xs font-medium hover:bg-white/10 transition-colors"
                >
                  Reveal Answer
                </button>
              ) : (
                <div className="liquid-glass rounded-lg p-3 px-4 border border-emerald-500/30">
                  <p className="text-sm text-emerald-400 font-medium flex items-center gap-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    Answer: {q.answer}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
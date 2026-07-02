export default function About() {
  return (
    <section className="text-white py-24 animate-fadeIn">
      <div className="max-w-5xl mx-auto px-6 space-y-12">
        
        {/* Page Header */}
        <header className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight">
            About the <span className="text-brand-gradient">Project</span>
          </h1>
          <p className="text-slate-400 max-w-3xl leading-relaxed">
            This project is developed as part of the Spatial Computing Lab to
            provide an interactive and immersive way to explore electronics
            experiments using 3D and AR technologies.
          </p>
          <div className="text-slate-400 max-w-3xl mt-6 pt-6 border-t border-slate-800">
            <p className="font-semibold text-white mb-4 text-lg">Project Credits</p>
            <ul className="space-y-6">
              <li>
                <strong className="text-slate-200 block mb-2">Built under the guidance of:</strong>
                <ul className="ml-4 space-y-2 text-slate-400 list-disc list-outside">
                  <li><strong className="text-slate-300">Lab Coordinator:</strong> Dr. R. I. Minu</li>
                  <li><strong className="text-slate-300">Faculty Mentor:</strong> Dr. Angayarkanni V</li>
                </ul>
              </li>
              <li>
                <strong className="text-slate-200 block mb-2">Developed by Students:</strong>
                <ul className="ml-4 space-y-2 text-slate-400 list-disc list-outside">
                  <li>Tanmay Kumar</li>
                  <li>Anshul Pagar</li>
                  <li>Kushagra Srivastava</li>
                </ul>
              </li>
            </ul>
          </div>
        </header>

      </div>
    </section>
  );
}
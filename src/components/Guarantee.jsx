export default function Guarantee() {
  const scrollToCta = (e) => {
    e.preventDefault();
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-8" id="guarantee">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="max-w-[700px] mx-auto p-8 md:p-12 rounded-3xl text-center bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg">
          <div className="w-14 h-14 mx-auto mb-5 rounded-full flex items-center justify-center text-2xl font-bold text-white bg-gradient-to-br from-green-500 to-green-600">
            ✓
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">12-Week Money-Back Guarantee</h2>
          <p className="text-green-200 mb-6">
            We're that confident you'll see results. Follow your plan for 12 weeks — 
            if you're not satisfied, get a full refund. No questions asked.
          </p>
          <a href="#cta" className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg shadow-green-500/40 hover:-translate-y-0.5 transition-all" onClick={scrollToCta}>
            Try Risk-Free
          </a>
        </div>
      </div>
    </section>
  );
}

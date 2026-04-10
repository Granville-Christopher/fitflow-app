import { useEffect, useRef } from 'react';

const FEATURES = ['All workouts & meal plans', 'AI personalization', 'Progress tracking', 'Community support', '12-week money-back guarantee'];

export default function Pricing() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { rootMargin: '0px 0px -80px 0px', threshold: 0.1 }
    );
    el.querySelectorAll('.animate-on-scroll').forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  const scrollToCta = (e) => {
    e.preventDefault();
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24" id="pricing">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8" ref={ref}>
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-semibold text-green-400 mb-4 bg-white/10 backdrop-blur-xl border border-white/20">Pricing</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Simple, <span className="gradient-text">flexible</span> pricing
          </h2>
          <p className="text-base md:text-lg text-green-200 max-w-[550px] mx-auto">
            14-day free trial. No credit card. Cancel anytime.
          </p>
        </div>
        <div className="max-w-[420px] mx-auto p-8 md:p-12 rounded-[32px] relative text-center bg-white/10 backdrop-blur-xl border border-white/20 hover:scale-[1.02] transition-transform animate-on-scroll">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 py-1.5 px-4 rounded-full text-xs font-bold bg-gradient-to-br from-green-500 to-green-600 text-white">
            Best Value
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">Annual Plan</h3>
          <div className="mb-1">
            <span className="text-2xl md:text-3xl text-green-400">$</span>
            <span className="font-display text-5xl md:text-6xl font-extrabold text-green-50">99</span>
            <span className="text-base text-green-200">/year</span>
          </div>
          <p className="text-sm md:text-base text-green-400 mb-8">Save $60 vs monthly · $8.25/mo</p>
          <ul className="list-none mb-8">
            {FEATURES.map((f) => (
              <li key={f} className="py-2 text-green-200 flex items-center justify-center gap-2">
                <span className="text-green-500 font-bold shrink-0">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a href="#cta" className="block w-full py-4 px-8 rounded-xl font-semibold text-lg text-center bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg shadow-green-500/40 hover:-translate-y-0.5 transition-all" onClick={scrollToCta}>
            Start 14-Day Free Trial
          </a>
        </div>
      </div>
    </section>
  );
}

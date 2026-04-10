import { useEffect, useRef } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const ROWS = [
  { feature: 'AI-personalized workouts', fitflow: true, gym: false, other: false },
  { feature: 'Custom meal plans', fitflow: true, gym: false, other: true },
  { feature: '15–30 min sessions', fitflow: true, gym: false, other: true },
  { feature: 'No equipment needed', fitflow: true, gym: false, other: true },
  { feature: 'Progress tracking', fitflow: true, gym: false, other: true },
  { feature: '12-week guarantee', fitflow: true, gym: false, other: false },
  { feature: 'From $8.25/mo', fitflow: true, gym: false, other: false },
];

export default function ComparisonTable() {
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

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-green-500/5" id="compare">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8" ref={ref}>
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-semibold text-green-400 mb-4 bg-white/10 backdrop-blur-xl border border-white/20">Compare</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            FitFlow <span className="gradient-text">vs the rest</span>
          </h2>
        </div>
        <div className="overflow-x-auto rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 animate-on-scroll">
          <table className="w-full min-w-[500px] text-sm md:text-base">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left py-4 px-4 md:px-6 font-semibold text-green-200">Feature</th>
                <th className="py-4 px-4 md:px-6 font-semibold text-green-400 bg-green-500/20">FitFlow</th>
                <th className="py-4 px-4 md:px-6 font-semibold text-green-200/80">Gym</th>
                <th className="py-4 px-4 md:px-6 font-semibold text-green-200/80">Other apps</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={i} className="border-b border-white/10 last:border-0">
                  <td className="py-3 px-4 md:px-6 text-green-200">{row.feature}</td>
                  <td className="py-3 px-4 md:px-6 text-center bg-green-500/10">
                    {row.fitflow ? <FaCheck className="inline text-green-400" size={18} /> : <FaTimes className="inline text-green-200/40" size={18} />}
                  </td>
                  <td className="py-3 px-4 md:px-6 text-center">
                    {row.gym ? <FaCheck className="inline text-green-400" size={18} /> : <FaTimes className="inline text-green-200/40" size={18} />}
                  </td>
                  <td className="py-3 px-4 md:px-6 text-center">
                    {row.other ? <FaCheck className="inline text-green-400" size={18} /> : <FaTimes className="inline text-green-200/40" size={18} />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

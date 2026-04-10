import { useEffect, useRef } from 'react';

const TRANSFORMATIONS = [
  { before: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80', after: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&q=80', name: 'Alex K.', result: '-22 lbs in 14 weeks', note: 'Consistent workouts + meal plans' },
  { before: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80', after: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400&q=80', name: 'Jordan M.', result: '+10 lbs muscle, -8% body fat', note: 'Strength-focused program' },
  { before: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80', after: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80', name: 'Sam T.', result: '-15 lbs in 10 weeks', note: 'Home workouts, no gym' },
];

export default function Results() {
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
    <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-green-500/5" id="results">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8" ref={ref}>
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-semibold text-green-400 mb-4 bg-white/10 backdrop-blur-xl border border-white/20">Real Results</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Before & after <span className="gradient-text">transformations</span>
          </h2>
          <p className="text-base md:text-lg text-green-200 max-w-[550px] mx-auto">
            Real members. Real results. Individual results may vary based on consistency.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRANSFORMATIONS.map((t) => (
            <div key={t.name} className="p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:-translate-y-1 transition-all animate-on-scroll">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="relative flex-1 max-w-[140px] rounded-xl overflow-hidden">
                  <img src={t.before} alt="Before" className="w-full h-28 object-cover block" loading="lazy" />
                  <span className="absolute bottom-1 left-0 right-0 text-center text-[0.7rem] text-white bg-black/50 py-0.5">Before</span>
                </div>
                <span className="text-green-400 text-xl font-bold">→</span>
                <div className="relative flex-1 max-w-[140px] rounded-xl overflow-hidden">
                  <img src={t.after} alt="After" className="w-full h-28 object-cover block" loading="lazy" />
                  <span className="absolute bottom-1 left-0 right-0 text-center text-[0.7rem] text-white bg-black/50 py-0.5">After</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-center">
                <strong className="text-green-50">{t.name}</strong>
                <span className="text-green-400 font-semibold">{t.result}</span>
                <span className="text-sm text-green-400">{t.note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

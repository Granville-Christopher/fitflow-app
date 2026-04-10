import { useEffect, useRef } from 'react';

const STEPS = [
  { num: '01', title: 'Tell us about you', desc: '60-second quiz: goals, fitness level, dietary preferences. We build your blueprint.' },
  { num: '02', title: 'Follow your plan', desc: 'Daily workouts + meals in your pocket. 15–30 min sessions. Do it anywhere.' },
  { num: '03', title: 'Track & transform', desc: 'Photos, measurements, energy levels. See your progress weekly. Stay motivated.' },
];

export default function HowItWorks() {
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
    <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-green-500/5" id="how-it-works">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8" ref={ref}>
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-semibold text-green-400 mb-4 bg-white/10 backdrop-blur-xl border border-white/20">How It Works</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Three steps to <span className="gradient-text">transformation</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-[1000px] mx-auto">
          {STEPS.map((s) => (
            <div key={s.num} className="p-7 md:p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 text-center hover:-translate-y-1 hover:scale-[1.02] transition-all animate-on-scroll">
              <span className="block font-display text-4xl md:text-5xl font-extrabold text-green-500/50 mb-3">{s.num}</span>
              <h3 className="font-display text-xl md:text-2xl font-bold mb-2">{s.title}</h3>
              <p className="text-green-200 text-sm md:text-base">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

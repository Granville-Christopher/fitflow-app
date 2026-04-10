import { useEffect, useRef } from 'react';
import { FaHome, FaClock, FaMagic, FaTrophy } from 'react-icons/fa';

const BENEFITS = [
  { Icon: FaHome, title: 'No equipment needed', desc: 'Bodyweight workouts you can do anywhere. No gym, no weights — just you and your phone.' },
  { Icon: FaClock, title: '15–30 min sessions', desc: 'Designed for busy lives. Effective workouts that fit your schedule, not the other way around.' },
  { Icon: FaMagic, title: 'AI that adapts to you', desc: 'Adjusts intensity based on your energy, form, and progress. No more one-size-fits-all plans.' },
  { Icon: FaTrophy, title: 'FitFlow vs the rest', desc: 'Personal trainer quality at app prices. Meal plans + workouts + tracking in one place.' },
];

export default function WhyFitFlow() {
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
    <section className="py-16 md:py-24" id="why-fitflow">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8" ref={ref}>
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-semibold text-green-400 mb-4 bg-white/10 backdrop-blur-xl border border-white/20">Why FitFlow</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Built different. <span className="gradient-text">Works everywhere.</span>
          </h2>
          <p className="text-base md:text-lg text-green-200 max-w-[550px] mx-auto">
            No gym? No problem. No time? We've got you. Here's what sets us apart.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {BENEFITS.map((b) => (
            <div key={b.title} className="p-7 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:-translate-y-1 transition-all animate-on-scroll">
              <span className="flex items-center justify-center w-12 h-12 mb-4 text-green-400 text-2xl">
                <b.Icon className="w-6 h-6" aria-hidden />
              </span>
              <h3 className="font-display text-lg font-bold mb-2">{b.title}</h3>
              <p className="text-green-200 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

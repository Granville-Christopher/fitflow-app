import { useEffect, useRef } from 'react';

const TESTIMONIALS = [
  { quote: "I lost 28 lbs in 14 weeks. The meal plans are actually doable. Best investment I've ever made in myself.", img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&q=80', name: 'Sarah M.', result: 'Lost 28 lbs' },
  { quote: "Finally an app that doesn't waste my time. 20-minute workouts that actually work. Gained muscle, lost fat.", img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&q=80', name: 'James K.', result: 'Gained 8 lbs muscle' },
  { quote: "The AI really adapts. On busy days it gives me 15 min. On good days, 45. Never felt overwhelmed.", img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&q=80', name: 'Maria L.', result: 'Fits busy schedule' },
];

export default function Testimonials() {
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
    <section className="py-16 md:py-24" id="testimonials">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8" ref={ref}>
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-semibold text-green-400 mb-4 bg-white/10 backdrop-blur-xl border border-white/20">Reviews</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Real people, <span className="gradient-text">real results</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="p-6 md:p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 hover:-translate-y-1 transition-all animate-on-scroll">
              <div className="text-green-400 text-lg mb-4 tracking-[0.2em]">★★★★★</div>
              <p className="text-base md:text-lg text-green-200 mb-5 italic">&quot;{t.quote}&quot;</p>
              <div className="flex items-center gap-3">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" loading="lazy" />
                <div>
                  <strong className="block text-green-50">{t.name}</strong>
                  <span className="text-sm text-green-400">{t.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

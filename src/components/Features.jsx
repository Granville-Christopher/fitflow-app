import { useRef, useEffect } from 'react';

const FEATURES = [
  {
    img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',
    title: 'Adaptive Workouts',
    desc: 'AI adjusts intensity based on your form, energy, and goals. Every session feels personal.',
  },
  {
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
    title: 'Smart Meal Plans',
    desc: 'Personalized nutrition that fits your schedule. Grocery lists, recipes, macro tracking.',
  },
  {
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
    title: 'Recovery & Mind',
    desc: 'Stretch routines, meditation, sleep tracking. Build habits that last.',
  },
];

export default function Features() {
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
    <section className="py-16 md:py-24" id="features">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8" ref={ref}>
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-semibold text-green-400 mb-4 bg-white/10 backdrop-blur-xl border border-white/20">
            Features
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Everything you need to <span className="gradient-text">succeed</span>
          </h2>
          <p className="text-base md:text-lg text-green-200 max-w-[550px] mx-auto">
            Built by trainers. Powered by AI. Designed for real life.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="p-6 md:p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg hover:-translate-y-2 hover:shadow-green-500/20 transition-all duration-300 animate-on-scroll"
            >
              <div className="w-full h-40 md:h-44 rounded-2xl overflow-hidden mb-5 bg-[#0d1310]">
                <img src={f.img} alt={f.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold mb-2">{f.title}</h3>
              <p className="text-green-200 text-base">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

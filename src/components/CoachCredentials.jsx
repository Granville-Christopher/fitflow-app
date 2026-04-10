import { useEffect, useRef } from 'react';

const COACHES = [
  { img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80', name: 'Marcus Chen', title: 'Head of Training', creds: 'CSCS, NASM-CPT, 10+ years' },
  { img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80', name: 'Elena Rodriguez', title: 'Nutrition Director', creds: 'RD, MS Nutrition, 8+ years' },
  { img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80', name: 'David Park', title: 'Recovery & Mobility', creds: 'DPT, Yoga RYT-500, 12+ years' },
];

export default function CoachCredentials() {
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
    <section className="py-16 md:py-24" id="coaches">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8" ref={ref}>
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-semibold text-green-400 mb-4 bg-white/10 backdrop-blur-xl border border-white/20">Expert Team</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Backed by <span className="gradient-text">certified professionals</span>
          </h2>
          <p className="text-base md:text-lg text-green-200 max-w-[550px] mx-auto">
            Our program was built by trainers and dietitians who've coached thousands to their goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COACHES.map((c) => (
            <div key={c.name} className="rounded-3xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 text-center hover:-translate-y-1 transition-all animate-on-scroll">
              <div className="w-full h-48 overflow-hidden">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <h3 className="font-display text-xl font-bold mt-4 mx-4 mb-1">{c.name}</h3>
              <span className="block text-sm text-green-400 mb-1">{c.title}</span>
              <span className="block text-sm text-green-400 pb-5">{c.creds}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

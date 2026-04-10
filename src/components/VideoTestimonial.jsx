import { useEffect, useRef } from 'react';

export default function VideoTestimonial() {
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
    <section className="py-16 md:py-24" ref={ref}>
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-semibold text-green-400 mb-4 bg-white/10 backdrop-blur-xl border border-white/20">Real Stories</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            See what <span className="gradient-text">members say</span>
          </h2>
        </div>
        <div className="max-w-[640px] mx-auto rounded-2xl overflow-hidden bg-white/5 border border-white/20 shadow-xl animate-on-scroll">
          <div className="aspect-video bg-black/40 relative">
            <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1280&q=80" alt="Member testimonial" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 rounded-full bg-green-500/90 hover:bg-green-500 flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-500" aria-label="Play video">
                ▶
              </button>
            </div>
          </div>
          <div className="p-6">
            <p className="text-green-200 mb-4 italic">"I lost 18 lbs in 10 weeks. The meal plans made it easy—I never had to think about what to eat."</p>
            <p className="font-semibold text-green-400">— Sarah M., FitFlow member</p>
          </div>
        </div>
      </div>
    </section>
  );
}

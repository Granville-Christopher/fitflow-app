import { useState, useEffect } from 'react';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const heroHeight = window.innerHeight * 0.8;
      setVisible(y > heroHeight);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCta = (e) => {
    e.preventDefault();
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[999] p-3 bg-[#0a0f0b]/98 backdrop-blur-xl border-t border-white/20 md:hidden">
      <a
        href="#cta"
        className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg shadow-green-500/40 w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
        onClick={scrollToCta}
      >
        Start 14-Day Free Trial — No credit card
      </a>
    </div>
  );
}

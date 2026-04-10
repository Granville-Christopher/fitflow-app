import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollTop}
      className="fixed bottom-24 md:bottom-8 right-6 w-12 h-12 rounded-full bg-green-500/90 hover:bg-green-500 text-white shadow-lg shadow-green-500/30 flex items-center justify-center z-[100] transition-all hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-500"
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}

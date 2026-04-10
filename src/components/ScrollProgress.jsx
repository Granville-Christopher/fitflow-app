import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[1100] h-0.5 bg-white/10">
      <div
        className="h-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-150"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

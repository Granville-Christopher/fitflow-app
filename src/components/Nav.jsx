import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] md:py-4 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0f0b]/95 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="w-full flex items-center justify-between relative px-4 md:px-8">
        <a href="#hero" className="flex items-center gap-2 font-display font-bold text-lg md:text-xl text-green-50 no-underline" onClick={scrollTo('hero')}>
          <span className="text-green-500 text-base md:text-xl">◆</span>
          <span>FitFlow</span>
        </a>
        <div
          className={`${menuOpen ? 'flex flex-col absolute top-full left-2 right-2 mt-2 p-6 bg-[#0a0f0b]/98 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl z-50' : 'hidden'} md:flex md:flex-row md:static md:mt-0 md:p-0 md:bg-transparent md:backdrop-blur-none md:rounded-none md:border-0 md:shadow-none items-center gap-8`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8 list-none">
            <li><a href="#features" className="text-green-200 no-underline font-medium py-2 hover:text-green-500 transition-colors" onClick={scrollTo('features')}>Features</a></li>
            <li><a href="#how-it-works" className="text-green-200 no-underline font-medium py-2 hover:text-green-500 transition-colors" onClick={scrollTo('how-it-works')}>How It Works</a></li>
            <li><a href="#compare" className="text-green-200 no-underline font-medium py-2 hover:text-green-500 transition-colors" onClick={scrollTo('compare')}>Compare</a></li>
            <li><a href="#results" className="text-green-200 no-underline font-medium py-2 hover:text-green-500 transition-colors" onClick={scrollTo('results')}>Results</a></li>
            <li><a href="#pricing" className="text-green-200 no-underline font-medium py-2 hover:text-green-500 transition-colors" onClick={scrollTo('pricing')}>Pricing</a></li>
            <li><a href="#faq" className="text-green-200 no-underline font-medium py-2 hover:text-green-500 transition-colors" onClick={scrollTo('faq')}>FAQ</a></li>
          </ul>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <Link to="/dashboard" className="text-green-200 bg-transparent py-2 px-4 rounded-xl font-semibold hover:text-green-500">Log In</Link>
            <a href="#cta" className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg shadow-green-500/40 hover:-translate-y-0.5 hover:shadow-green-500/50 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500" onClick={scrollTo('cta')}>14-Day Free Trial</a>
          </div>
        </div>
        <button
          className="md:hidden flex flex-col justify-center gap-1 w-11 h-11 bg-transparent border-none cursor-pointer text-green-50 p-2.5 relative"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`w-full h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`w-full h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`w-full h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>
    </nav>
  );
}

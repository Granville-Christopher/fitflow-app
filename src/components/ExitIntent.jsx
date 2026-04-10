import { useState, useEffect } from 'react';

export default function ExitIntent() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const isDesktop = () => window.matchMedia('(min-width: 768px)').matches;
    const handleExit = (e) => {
      if (dismissed || !isDesktop()) return;
      if (e.clientY <= 10 && !open) setOpen(true);
    };
    document.addEventListener('mouseout', handleExit);
    return () => document.removeEventListener('mouseout', handleExit);
  }, [open, dismissed]);

  const scrollToCta = (e) => {
    e.preventDefault();
    setOpen(false);
    setDismissed(true);
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  const close = () => {
    setOpen(false);
    setDismissed(true);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-end md:items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={close} aria-hidden="true" />
      <div className="relative w-full max-w-md p-6 md:p-8 rounded-2xl bg-[#0d1310] border border-white/20 shadow-2xl text-center">
        <button
          onClick={close}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg text-green-400 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-500"
          aria-label="Close"
        >
          ×
        </button>
        <h3 className="font-display text-xl md:text-2xl font-bold mb-2">Wait — one last thing!</h3>
        <p className="text-green-200 text-sm md:text-base mb-6">
          Start your 14-day free trial. No credit card required. See results in 12 weeks or your money back.
        </p>
        <a
          href="#cta"
          className="block w-full py-4 px-6 rounded-xl font-semibold bg-gradient-to-br from-green-500 to-green-600 text-white hover:-translate-y-0.5 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
          onClick={scrollToCta}
        >
          Start Free Trial
        </a>
        <button
          onClick={close}
          className="mt-3 text-sm text-green-400 hover:text-green-300"
        >
          No thanks
        </button>
      </div>
    </div>
  );
}

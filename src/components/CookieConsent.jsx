import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('fitflow-cookies');
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('fitflow-cookies', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[1100] p-4 md:p-5 bg-[#0d1310]/98 backdrop-blur-xl border-t border-white/20">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-green-200 m-0">
          We use cookies to improve your experience and analyze traffic.{' '}
          <a href="#" className="text-green-400 underline hover:text-green-300">Cookie Policy</a>
        </p>
        <div className="flex gap-3">
          <a href="#" className="text-sm text-green-400 hover:text-green-300 px-4 py-2">Decline</a>
          <button
            onClick={accept}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-br from-green-500 to-green-600 text-white hover:-translate-y-0.5 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-500"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

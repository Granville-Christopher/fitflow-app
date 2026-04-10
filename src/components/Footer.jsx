import { useState } from 'react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const [newsletter, setNewsletter] = useState('');

  return (
    <footer className="py-10 md:py-14 pb-24 md:pb-14 border-t border-white/20 px-4 md:px-8">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display font-bold text-lg mb-2">Get tips & motivation</h3>
              <p className="text-sm text-green-200">Weekly fitness and nutrition tips. No spam.</p>
            </div>
            <form className="flex gap-2 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                value={newsletter}
                onChange={(e) => setNewsletter(e.target.value)}
                className="flex-1 md:w-56 py-2.5 px-4 rounded-xl bg-white/5 border border-white/20 text-green-50 text-sm placeholder:text-green-400 focus:outline-none focus:border-green-500"
              />
              <button type="submit" className="py-2.5 px-5 rounded-xl font-semibold text-sm bg-green-500 text-white hover:bg-green-600 transition-colors">Subscribe</button>
            </form>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <a href="#" className="flex items-center gap-2 font-display font-bold text-lg text-green-50 no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 rounded">
              <span className="text-green-500">◆</span>
              <span>FitFlow</span>
            </a>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm">
              <a href="#" className="text-green-200 no-underline hover:text-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 rounded">Privacy</a>
              <a href="#" className="text-green-200 no-underline hover:text-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 rounded">Cookie Policy</a>
              <a href="#" className="text-green-200 no-underline hover:text-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 rounded">Terms</a>
              <a href="#" className="text-green-200 no-underline hover:text-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 rounded">Contact</a>
              <a href="#" className="text-green-200 no-underline hover:text-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 rounded">Help</a>
              <a href="#" className="text-green-200 no-underline hover:text-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 rounded">Blog</a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-green-200 no-underline hover:text-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 rounded p-1.5 flex items-center justify-center" aria-label="Instagram">
                <FaInstagram size={22} />
              </a>
              <a href="#" className="text-green-200 no-underline hover:text-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 rounded p-1.5 flex items-center justify-center" aria-label="YouTube">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
          <p className="text-sm text-green-400 m-0 text-center md:text-left">© 2025 FitFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

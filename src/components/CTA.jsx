import { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="relative py-16 md:py-24 text-center" id="cta">
      <div className="absolute inset-0 -z-10">
        <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=1920&q=85" alt="Fitness achievement" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f0b]/90 from-0% to-green-600/25 to-100%" />
      </div>
      <div className="relative z-10 max-w-[600px] mx-auto px-4 md:px-8">
        <p className="text-sm text-green-400 mb-3">🔒 2,847 started their free trial today</p>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">Ready to transform?</h2>
        <p className="text-base md:text-lg text-green-200 mb-6">
          Join 500,000+ people. Start your 14-day free trial today.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-6 text-xs text-green-400">
          <span className="flex items-center gap-1.5">🔒 Secure checkout</span>
          <span className="flex items-center gap-1.5">✓ 12‑week guarantee</span>
          <span className="flex items-center gap-1.5">✓ Cancel anytime</span>
        </div>
        <form className="flex flex-col md:flex-row gap-3 p-2 rounded-2xl max-w-[500px] mx-auto mb-4 bg-white/10 backdrop-blur-xl border border-white/20" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 py-4 px-5 border border-white/20 rounded-xl bg-white/5 text-green-50 text-base min-h-11 placeholder:text-green-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
          />
          <button type="submit" className="py-3 px-6 rounded-xl font-semibold bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg shadow-green-500/40 hover:-translate-y-0.5 transition-all min-h-11">
            {submitted ? '✓ Check your email!' : 'Get Started Free'}
          </button>
        </form>
        <p className="text-xs md:text-sm text-green-400 mb-8">
          By signing up, you agree to our Terms. No credit card required.
        </p>
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center">
          <a href="#" className="inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-black/40 hover:bg-black/50 transition-colors" aria-label="Download on the App Store">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-10 w-auto" />
          </a>
          <a href="#" className="inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-black/40 hover:bg-black/50 transition-colors" aria-label="Get it on Google Play">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-10 w-auto" />
          </a>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';

export default function Hero() {
  const [bgLoaded, setBgLoaded] = useState(false);

  const scrollToCta = (e) => {
    e.preventDefault();
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="relative h-screen min-h-[100dvh] flex items-center pt-28 md:pt-24 pb-12 md:pb-16 px-4 md:px-8 z-[1]"
      id="hero"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className={`absolute inset-0 bg-[#0a0f0b] transition-opacity duration-500 ${bgLoaded ? "opacity-0" : "opacity-100"}`}
        />
        <img
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=85"
          alt="Fitness training"
          className={`w-full h-full object-cover transition-opacity duration-500 ${bgLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setBgLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f0b]/95 from-0% via-[#0a0f0b]/60 via-50% to-green-600/15 to-100%" />
      </div>

      <div className="relative z-10 max-w-[650px] w-full pt-[500px] md:pt-0">
        <div className="inline-flex items-center gap-2 py-1 md:py-2 px-4 rounded-full text-xs md:text-sm font-medium text-green-200 mb-4 bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg animate-fade-in">
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400 animate-pulse-dot" />
          <span>500,000+ transformations</span>
        </div>
        <p className="text-sm text-green-400/90 mb-6 animate-fade-in">
          Your AI personal trainer + meal planner—workouts and nutrition in one
          app.
        </p>
        <h1
          className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 animate-slide-up"
          style={{ animationDelay: "0s" }}
        >
          Your <span className="gradient-text">best body</span>
          <br />
          starts in 3 minutes
        </h1>
        <p className="text-base md:text-lg text-green-200 mb-8 max-w-[500px] animate-slide-up [animation-delay:0.15s]">
          AI-powered workouts that adapt to you. Meal plans that fit your life.{" "}
          <strong className="text-green-400">12-week guarantee</strong> — see
          results or your money back.
        </p>
        <div className="mb-10 animate-slide-up [animation-delay:0.3s]">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 py-4 px-6 md:px-8 rounded-xl font-semibold text-lg bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg shadow-green-500/40 hover:-translate-y-0.5 hover:shadow-green-500/50 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
            onClick={scrollToCta}
          >
            Start 14-Day Free Trial
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <p className="text-sm text-green-400 mt-3">
            No credit card required · Cancel anytime
          </p>
        </div>
        <div
          className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-6 py-5 px-6 md:py-6 md:px-8 rounded-2xl max-w-[420px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg animate-fade-in"
          style={{
            animationDelay: "0.5s",
            animationFillMode: "forwards",
            opacity: 0,
          }}
        >
          <div className="flex flex-col">
            <span className="font-display text-xl md:text-2xl font-bold text-green-400">
              4.9
            </span>
            <span className="text-xs text-green-400">App Store Rating</span>
          </div>
          <div className="hidden md:block w-px h-10 bg-white/20" />
          <div className="flex flex-col">
            <span className="font-display text-xl md:text-2xl font-bold text-green-400">
              -12 lbs
            </span>
            <span className="text-xs text-green-400">Avg. in 12 weeks</span>
          </div>
          <div className="hidden md:block w-px h-10 bg-white/20" />
          <div className="flex flex-col">
            <span className="font-display text-xl md:text-2xl font-bold text-green-400">
              98%
            </span>
            <span className="text-xs text-green-400">Would recommend</span>
          </div>
        </div>
        {/* Mobile: workout preview card below stats */}
        <div className="md:hidden mt-8 w-full rounded-2xl overflow-hidden bg-white/5 border border-white/20 shadow-lg mb-60">
          <video
            className="w-full h-36 object-cover block "
            src="https://assets.mixkit.co/videos/21271/21271-720.mp4"
            poster="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=920&q=85"
            autoPlay
            loop
            muted
            playsInline
            onEnded={(e) => e.target.play()}
            aria-label="Short workout preview showing push-ups"
          />
          <div className="p-4">
            <span className="text-sm font-bold text-green-400">
              Live Workout
            </span>
            <p className="text-xs text-green-200">Try free in the app →</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex absolute left-1/2 right-0 top-0 bottom-0 z-10 overflow-hidden min-h-[100dvh]">
        <div className="absolute inset-0 rounded-l-3xl overflow-hidden">
          <video
            className="w-full h-full object-cover block [mask-image:linear-gradient(to_right,transparent_0%,black_100%)]"
            src="https://assets.mixkit.co/videos/21271/21271-720.mp4"
            poster="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=920&q=85"
            autoPlay
            loop
            muted
            playsInline
            onEnded={(e) => e.target.play()}
            aria-label="Short workout preview showing push-ups"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0b]/35 from-0% via-[#0a0f0b]/25 via-50% to-black/35 to-100% [mask-image:linear-gradient(to_right,transparent_0%,black_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_100%)] pointer-events-none" />
          <div className="absolute inset-0 flex flex-col items-center justify-center py-16 gap-4 mx-auto max-w-[90%]">
            <div className="w-full max-w-xs h-1.5 bg-white/25 rounded overflow-hidden">
              <div className="h-full w-[65%] bg-gradient-to-r from-green-500 to-green-400 rounded shadow-[0_0_12px_rgba(34,197,94,0.4)] hero-progress-pulse" />
            </div>
            <span className="font-display font-bold text-xl text-white drop-shadow-lg text-center hero-overlay-float">
              Push-ups
            </span>
            <a
              href="#cta"
              className="text-sm font-semibold text-green-300 hover:text-green-400 transition-colors hero-overlay-float"
              style={{ animationDelay: "0.25s" }}
              onClick={scrollToCta}
            >
              Try this workout free
            </a>
            <div
              className="flex items-center justify-center gap-4 mt-4 hero-overlay-float"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="py-2 px-3 rounded-lg text-sm font-bold bg-gradient-to-br from-green-500 to-green-600 text-white hero-overlay-pulse">
                Live Workout
              </span>
              <span className="font-display font-bold text-xl text-white tracking-wider hero-overlay-glow">
                12:34
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

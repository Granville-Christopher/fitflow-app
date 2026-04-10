export default function TrustBar() {
  return (
    <section className="py-6 md:py-8 border-t border-b border-white/20 bg-black/20">
      <div className="w-full max-w-[900px] mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-center">
        <p className="text-sm text-green-400 m-0">Trusted by 500,000+ people</p>
        <div className="flex items-center gap-2 text-green-200/90">
          <span className="text-base">⭐ 4.9</span>
          <span className="text-sm">App Store</span>
          <span className="hidden md:inline text-white/30">·</span>
          <span className="text-base">⭐ 4.8</span>
          <span className="text-sm">Google Play</span>
        </div>
      </div>
    </section>
  );
}

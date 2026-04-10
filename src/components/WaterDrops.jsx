const DROPS = [
  { c: 'drop-1', w: 60, t: '15%', l: '10%', d: 10 },
  { c: 'drop-2', w: 40, t: '25%', r: '15%', d: 12 },
  { c: 'drop-3', w: 80, b: '30%', l: '5%', d: 9 },
  { c: 'drop-4', w: 50, b: '20%', r: '20%', d: 11 },
  { c: 'drop-5', w: 35, t: '50%', l: '25%', d: 8 },
  { c: 'drop-6', w: 70, t: '60%', r: '8%', d: 13 },
  { c: 'drop-7', w: 45, t: '35%', l: '50%', d: 10 },
  { c: 'drop-8', w: 55, b: '40%', r: '35%', d: 9 },
  { c: 'drop-9', w: 30, t: '70%', l: '15%', d: 11 },
  { c: 'drop-10', w: 65, t: '20%', r: '30%', d: 8 },
];

export default function WaterDrops() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {DROPS.map((d) => (
        <div
          key={d.c}
          className="absolute rounded-full bg-green-500/25 border border-green-500/40 opacity-60 animate-water-float"
          style={{
            width: d.w,
            height: d.w,
            top: d.t,
            bottom: d.b,
            left: d.l,
            right: d.r,
            animationDuration: `${d.d}s`,
          }}
        />
      ))}
    </div>
  );
}

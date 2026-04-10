import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import {
  FiActivity,
  FiTrendingUp,
  FiTrendingDown,
  FiCalendar,
  FiHeart,
  FiMoon,
  FiTarget,
  FiZap,
  FiDroplet,
  FiCheck,
  FiCircle,
  FiInfo,
  FiRefreshCw,
  FiPieChart,
} from 'react-icons/fi';
import {
  KPIS,
  GOALS,
  TODAYS_FOCUS,
  INSIGHTS,
  WORKOUTS_BY_WEEK,
  CALORIES_BY_DAY,
  ACTIVITY_BREAKDOWN,
  HEART_RATE_7DAY,
  SLEEP_7DAY,
  WEIGHT_TREND,
  RECENT_WORKOUTS,
} from '../data/dashboardData';

const SCREENS = [
  { img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80', label: 'Your daily workout', overlay: 'workout' },
  { img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80', label: 'AI-adjusted intensity', overlay: 'intensity' },
  { img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80', label: 'Progress tracking', overlay: 'progress' },
  { label: 'Your dashboard', overlay: 'dashboard', noImg: true },
];

function WorkoutOverlay() {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-[#0a0f0b]/85 to-transparent backdrop-blur-md text-green-50 text-xs md:text-sm">
      <div className="flex justify-between items-center mb-1">
        <span className="font-semibold text-green-400">Today · Day 12</span>
        <span className="text-green-200 text-[0.65rem] md:text-xs">28 min</span>
      </div>
      <ul className="list-none m-0 mb-2 p-0">
        {['Push-ups 3×12', 'Squats 3×15', 'Plank 3×45s', 'Lunges 3×10 ea'].map((item, i) => (
          <li key={i} className="flex justify-between py-0.5 text-green-200">
            <span className="text-green-50 font-medium">{item.split(' ')[0]}</span>
            <span>{item.split(' ')[1]}</span>
          </li>
        ))}
      </ul>
      <div className="text-center py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-br from-green-500 to-green-600 text-white">Start Workout</div>
    </div>
  );
}

function IntensityOverlay() {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-[#0a0f0b]/85 to-transparent backdrop-blur-md text-green-50 text-xs">
      <div className="mb-1">
        <span className="inline-block py-1 px-2 rounded-md text-[0.6rem] font-semibold bg-green-500/30 text-green-400">AI Adjusted</span>
      </div>
      <div className="flex flex-col items-center mb-1">
        <span className="font-display text-2xl font-extrabold text-green-400">75%</span>
        <span>Intensity</span>
      </div>
      <div className="h-1.5 bg-white/15 rounded overflow-hidden mb-1">
        <div className="h-full w-[75%] bg-gradient-to-r from-green-500 to-green-400 rounded" />
      </div>
      <p className="m-0 text-[0.6rem] text-green-400">Based on today&apos;s energy & form</p>
    </div>
  );
}

function ProgressOverlay() {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-[#0a0f0b]/85 to-transparent backdrop-blur-md text-green-50 text-xs">
      <div className="mb-2 font-semibold text-green-400">This Week</div>
      <div className="flex justify-between gap-2 mb-2">
        {[
          { v: '5', l: 'Workouts' },
          { v: '-2.4', l: 'lbs' },
          { v: '12', l: 'Day streak' },
        ].map((m, i) => (
          <div key={i} className="flex-1 text-center py-1.5 rounded-lg bg-white/5">
            <span className="block font-display text-base font-bold text-green-400">{m.v}</span>
            <span className="text-[0.55rem] text-green-400">{m.l}</span>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-1 h-9">
        {[60, 85, 70, 95, 80].map((h, i) => (
          <div key={i} className="flex-1 min-w-0 bg-gradient-to-t from-green-500 to-green-400 rounded-t" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

function DashboardPreviewOverlay() {
  const MiniKpi = ({ icon: Icon, label, value, trend, unit }) => {
    const isPos = trend >= 0;
    const TrendIcon = isPos ? FiTrendingUp : FiTrendingDown;
    return (
      <div className="rounded-xl bg-white/[0.06] border border-white/10 p-2">
        <div className="flex items-center justify-between">
          <div className="p-1.5 rounded-lg bg-green-500/20">
            <Icon className="w-3.5 h-3.5 text-green-400" />
          </div>
          {trend != null && (
            <span className={`flex items-center text-[0.55rem] ${isPos ? 'text-green-400' : 'text-red-400'}`}>
              <TrendIcon className="w-3 h-3" />
              {Math.abs(trend)}%
            </span>
          )}
        </div>
        <p className="text-sm font-display font-bold text-green-50 tabular-nums mt-1">{value}{unit && <span className="text-xs font-normal text-green-300 ml-0.5">{unit}</span>}</p>
        <p className="text-[0.6rem] text-green-300/80">{label}</p>
      </div>
    );
  };

  return (
    <div className="absolute inset-0 bg-[#0a0f0b] overflow-y-auto overflow-x-hidden dashboard-preview-scroll">
      <div className="p-4 md:p-5 min-h-full">
        {/* Header - matches Dashboard exactly */}
        <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-base">◆</span>
            <h2 className="font-display font-bold text-base text-green-50">FitFlow Dashboard</h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-green-300">Welcome back, Alex</span>
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-green-950 font-bold text-xs">A</div>
          </div>
        </div>
        {/* Overview */}
        <div className="flex items-center gap-2 mb-3">
          <p className="text-xs text-green-300">Overview · Last 7 days</p>
          <select className="text-xs bg-[#0a0f0b] border border-white/10 rounded-lg px-2 py-1 text-green-200" style={{ colorScheme: 'dark' }}>
            <option>7 days</option>
            <option>30 days</option>
            <option>90 days</option>
          </select>
        </div>
        {/* Today's focus + Insights - compact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          <div className="md:col-span-2 rounded-xl bg-white/[0.06] border border-white/10 p-3">
            <h3 className="font-display font-semibold text-xs text-green-50 mb-2">Today&apos;s focus</h3>
            {TODAYS_FOCUS.slice(0, 2).map((item) => (
              <div key={item.id} className={`flex items-center gap-2 py-1.5 px-3 rounded-lg mb-1.5 last:mb-0 ${item.done ? 'bg-green-500/10 border border-green-500/20' : 'bg-white/[0.04] border border-white/5'}`}>
                {item.done ? <FiCheck className="w-4 h-4 text-green-500 flex-shrink-0" /> : <FiCircle className="w-4 h-4 text-green-500/50 flex-shrink-0" />}
                <p className={`text-xs font-medium truncate ${item.done ? 'text-green-300 line-through' : 'text-green-50'}`}>{item.title}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-white/[0.06] border border-white/10 p-3">
            <h3 className="font-display font-semibold text-xs text-green-50 mb-2">Insights</h3>
            <div className="flex gap-2 py-1.5 px-3 rounded-lg bg-green-500/10 border border-green-500/20">
              <FiInfo className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-[0.65rem] text-green-200 line-clamp-2">{INSIGHTS[0].text}</p>
            </div>
          </div>
        </div>
        {/* Goal progress - compact */}
        <div className="mb-4">
          <h3 className="font-display font-semibold text-xs text-green-50 mb-2">Goal progress</h3>
          <div className="grid grid-cols-4 gap-2">
            {GOALS.map((g) => {
              const pct = Math.min(100, Math.round((g.current / g.target) * 100));
              return (
                <div key={g.id} className="rounded-xl bg-white/[0.06] border border-white/10 p-2">
                  <p className="text-[0.55rem] text-green-300 mb-1">{g.label}</p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-sm font-display font-bold text-green-50 tabular-nums">{g.current}</span>
                    <span className="text-[0.5rem] text-green-400/80">/ {g.target}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-green-500 to-green-400" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Key metrics - 12 KPI cards - more compact grid */}
        <div className="mb-4">
          <h3 className="font-display font-semibold text-xs text-green-50 mb-2">Key metrics</h3>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
            <MiniKpi icon={FiActivity} label="Workouts" value={KPIS.workoutsThisWeek} trend={KPIS.workoutsTrend} />
            <MiniKpi icon={FiZap} label="Calories" value={KPIS.caloriesBurned.toLocaleString()} trend={KPIS.caloriesTrend} />
            <MiniKpi icon={FiCalendar} label="Streak" value={KPIS.activeStreak} trend={KPIS.streakTrend} unit="d" />
            <MiniKpi icon={FiHeart} label="HR" value={KPIS.avgHeartRate} trend={KPIS.heartTrend} unit="bpm" />
            <MiniKpi icon={FiMoon} label="Sleep" value={KPIS.sleepScore} trend={KPIS.sleepTrend} unit="/100" />
            <MiniKpi icon={FiTarget} label="Steps" value={KPIS.stepsToday.toLocaleString()} trend={KPIS.stepsTrend} />
            <MiniKpi icon={FiActivity} label="Body fat" value={KPIS.bodyFat} trend={KPIS.bodyFatTrend} unit="%" />
            <MiniKpi icon={FiTarget} label="Weight" value={KPIS.weightLbs} trend={KPIS.weightTrend} unit="lbs" />
            <MiniKpi icon={FiDroplet} label="Water" value={KPIS.waterGlasses} trend={KPIS.waterTrend} unit="gl" />
            <MiniKpi icon={FiRefreshCw} label="Recovery" value={KPIS.recoveryScore} trend={KPIS.recoveryTrend} unit="/100" />
            <MiniKpi icon={FiPieChart} label="Cals in/out" value={`${KPIS.caloriesIn}/${KPIS.caloriesOut}`} />
            <MiniKpi icon={FiActivity} label="Active min" value={KPIS.activeMinutes} trend={KPIS.activeMinutesTrend} unit="m" />
          </div>
        </div>
        {/* Charts - Activity & performance - larger for better visibility */}
        <div className="mb-4">
          <h3 className="font-display font-semibold text-xs text-green-50 mb-3">Activity & performance</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="rounded-xl bg-white/[0.06] border border-white/10 p-3">
              <p className="text-xs text-green-200 mb-2">Workouts per week</p>
              <div className="h-20 md:h-24">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={WORKOUTS_BY_WEEK} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="prevWorkoutsGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#22c55e" stopOpacity={0.4} />
                        <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="week" stroke="#86efac" fontSize={8} tick={{ fill: '#86efac90' }} />
                    <YAxis stroke="#86efac" fontSize={8} tick={{ fill: '#86efac90' }} width={25} />
                    <Area type="monotone" dataKey="count" stroke="#22c55e" strokeWidth={1} fill="url(#prevWorkoutsGrad)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="rounded-xl bg-white/[0.06] border border-white/10 p-3">
              <p className="text-xs text-green-200 mb-2">Weight trend</p>
              <div className="h-20 md:h-24">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={WEIGHT_TREND} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="prevWeightGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#22c55e" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="date" stroke="#86efac" fontSize={8} tick={{ fill: '#86efac90' }} />
                    <YAxis stroke="#86efac" fontSize={8} tick={{ fill: '#86efac90' }} width={25} />
                    <Area type="monotone" dataKey="weight" stroke="#22c55e" strokeWidth={1} fill="url(#prevWeightGrad)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="rounded-xl bg-white/[0.06] border border-white/10 p-3">
              <p className="text-xs text-green-200 mb-2">Calories by day</p>
              <div className="h-20 md:h-24">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={CALORIES_BY_DAY} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="day" stroke="#86efac" fontSize={8} tick={{ fill: '#86efac90' }} />
                    <YAxis stroke="#86efac" fontSize={8} tick={{ fill: '#86efac90' }} width={25} />
                    <Bar dataKey="burned" fill="#22c55e" radius={[3, 3, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="rounded-xl bg-white/[0.06] border border-white/10 p-3">
              <p className="text-xs text-green-200 mb-2">Activity mix</p>
              <div className="h-20 md:h-24">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={ACTIVITY_BREAKDOWN} cx="50%" cy="50%" innerRadius={24} outerRadius={38} paddingAngle={2} dataKey="value">
                      {ACTIVITY_BREAKDOWN.map((e, i) => <Cell key={i} fill={e.color} />)}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="rounded-xl bg-white/[0.06] border border-white/10 p-3">
              <p className="text-xs text-green-200 mb-2">Heart rate (7 days)</p>
              <div className="h-20 md:h-24">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={HEART_RATE_7DAY} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="prevHrGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#22c55e" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="date" stroke="#86efac" fontSize={7} tick={{ fill: '#86efac90' }} />
                    <YAxis stroke="#86efac" fontSize={7} tick={{ fill: '#86efac90' }} width={25} />
                    <Area type="monotone" dataKey="resting" stroke="#22c55e" fill="url(#prevHrGrad)" strokeWidth={1} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="rounded-xl bg-white/[0.06] border border-white/10 p-3">
              <p className="text-xs text-green-200 mb-2">Sleep (7 days)</p>
              <div className="h-20 md:h-24">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={SLEEP_7DAY} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="date" stroke="#86efac" fontSize={7} tick={{ fill: '#86efac90' }} />
                    <YAxis stroke="#86efac" fontSize={7} tick={{ fill: '#86efac90' }} width={25} domain={[0, 10]} />
                    <Bar dataKey="hours" fill="#22c55e" radius={[3, 3, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        {/* Table - Recent workouts */}
        <div>
          <h3 className="font-display font-semibold text-xs text-green-50 mb-2">Recent workouts</h3>
          <div className="rounded-xl bg-white/[0.06] border border-white/10 overflow-hidden">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2 px-3 font-medium text-green-300/80">Workout</th>
                  <th className="text-left py-2 px-3 font-medium text-green-300/80">Type</th>
                  <th className="text-right py-2 px-3 font-medium text-green-300/80">Dur</th>
                  <th className="text-right py-2 px-3 font-medium text-green-300/80">Cal</th>
                </tr>
              </thead>
              <tbody>
                {RECENT_WORKOUTS.slice(0, 4).map((w) => (
                  <tr key={w.id} className="border-b border-white/5 hover:bg-white/[0.04]">
                    <td className="py-2 px-3 font-medium text-green-50">{w.name}</td>
                    <td className="py-2 px-3"><span className="px-2 py-0.5 rounded-lg text-[0.65rem] font-medium bg-green-500/20 text-green-400">{w.type}</span></td>
                    <td className="py-2 px-3 text-right text-green-300">{w.duration}m</td>
                    <td className="py-2 px-3 text-right text-green-400 font-medium">{w.calories}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* CTA to view full dashboard */}
        <Link
          to="/dashboard"
          className="flex items-center justify-center gap-2 mt-4 py-3 rounded-xl font-semibold text-sm bg-gradient-to-br from-green-500 to-green-600 text-white hover:from-green-400 hover:to-green-500 transition-colors shadow-lg shadow-green-500/20"
        >
          View full dashboard →
        </Link>
      </div>
    </div>
  );
}

const OVERLAYS = { workout: WorkoutOverlay, intensity: IntensityOverlay, progress: ProgressOverlay, dashboard: DashboardPreviewOverlay };

export default function AppPreview() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { rootMargin: '0px 0px -80px 0px', threshold: 0.1 }
    );
    el.querySelectorAll('.animate-on-scroll').forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-green-500/5 to-transparent" id="app-preview">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8" ref={ref}>
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-semibold text-green-400 mb-4 bg-white/10 backdrop-blur-xl border border-white/20">App Preview</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            See the app in <span className="gradient-text">action</span>
          </h2>
          <p className="text-base md:text-lg text-green-200 max-w-[550px] mx-auto">
            Everything you need, one tap away. Workouts, meals, and progress — all in your pocket.
          </p>
        </div>
        {/* 3 App screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1000px] mx-auto mb-12">
          {SCREENS.filter((s) => s.overlay !== 'dashboard').map((s, i) => {
            const Overlay = OVERLAYS[s.overlay];
            return (
              <div key={s.label} className="p-4 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 text-center hover:-translate-y-2 transition-transform animate-on-scroll" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="relative rounded-2xl overflow-hidden bg-[#0d1310] mb-4">
                  <img src={s.img} alt={s.label} className="w-full h-52 md:h-72 object-cover block" loading="lazy" />
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0a0f0b] rounded-b-xl" />
                  {Overlay && <Overlay />}
                </div>
                <span className="text-sm text-green-200">{s.label}</span>
              </div>
            );
          })}
        </div>
        {/* Dashboard preview - full width, own row */}
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="p-4 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-2xl overflow-hidden bg-[#0d1310] h-[480px] md:h-[560px]">
              <DashboardPreviewOverlay />
            </div>
            <span className="block text-center text-sm text-green-200 mt-4">Your dashboard</span>
          </div>
        </div>
      </div>
    </section>
  );
}

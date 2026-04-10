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
  Tooltip,
  ResponsiveContainer,
  Legend,
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
  FiArrowLeft,
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
  WORKOUTS_BY_WEEK,
  CALORIES_BY_DAY,
  ACTIVITY_BREAKDOWN,
  HEART_RATE_7DAY,
  SLEEP_7DAY,
  WEIGHT_TREND,
  RECENT_WORKOUTS,
  TODAYS_FOCUS,
  INSIGHTS,
} from '../data/dashboardData';

function KpiCard({ icon: Icon, label, value, trend, unit, subtitle }) {
  const isPositive = trend >= 0;
  const TrendIcon = isPositive ? FiTrendingUp : FiTrendingDown;

  return (
    <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-5 backdrop-blur-sm hover:bg-white/[0.08] transition-colors">
      <div className="flex items-start justify-between">
        <div className="p-2.5 rounded-xl bg-green-500/20">
          <Icon className="w-5 h-5 text-green-400" />
        </div>
        {trend !== null && trend !== undefined && (
          <span
            className={`flex items-center gap-1 text-xs font-medium ${
              isPositive ? 'text-green-400' : 'text-red-400'
            }`}
          >
            <TrendIcon className="w-3.5 h-3.5" />
            {Math.abs(trend)}%
          </span>
        )}
      </div>
      <p className="mt-3 text-2xl font-display font-bold text-green-50 tabular-nums">
        {value}
        {unit && <span className="text-base font-normal text-green-300 ml-0.5">{unit}</span>}
      </p>
      <p className="text-sm text-green-300/80 mt-0.5">{label}</p>
      {subtitle && <p className="text-xs text-green-400/60 mt-1">{subtitle}</p>}
    </div>
  );
}

const CHART_COLORS = ['#22c55e', '#4ade80', '#16a34a', '#86efac', '#bbf7d0'];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0a0f0b]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0f0b]/95 backdrop-blur-xl">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link
                to="/"
                className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
              >
                <FiArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Back to FitFlow</span>
              </Link>
              <div className="h-6 w-px bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-lg">◆</span>
                <h1 className="font-display font-bold text-xl text-green-50">FitFlow Dashboard</h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-green-300">Welcome back, Alex</span>
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-green-950 font-bold text-sm">
                A
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-4 md:px-8 py-8">
        {/* Date range + Today's focus */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-green-300 text-sm">Overview · Last 7 days</p>
              <select
                className="text-xs bg-[#0a0f0b] border border-white/10 rounded-lg px-3 py-1.5 text-green-200 focus:outline-none focus:ring-2 focus:ring-green-500/50 appearance-none cursor-pointer [&_option]:bg-[#0a0f0b] [&_option]:text-green-200"
                style={{ colorScheme: 'dark' }}
              >
                <option value="7">7 days</option>
                <option value="30">30 days</option>
                <option value="90">90 days</option>
              </select>
            </div>
            <p className="text-green-500/60 text-xs mt-0.5">Data refreshes every 15 min</p>
          </div>
        </div>

        {/* Today's focus + Insights */}
        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          <div className="lg:col-span-2 rounded-2xl bg-white/[0.06] border border-white/10 p-6">
            <h2 className="font-display font-semibold text-green-50 mb-4">Today&apos;s focus</h2>
            <ul className="space-y-3">
              {TODAYS_FOCUS.map((item) => (
                <li
                  key={item.id}
                  className={`flex items-center gap-3 py-3 px-4 rounded-xl ${
                    item.done ? 'bg-green-500/10 border border-green-500/20' : 'bg-white/[0.04] border border-white/5'
                  }`}
                >
                  {item.done ? (
                    <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                  ) : (
                    <FiCircle className="w-5 h-5 text-green-500/50 flex-shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className={`font-medium ${item.done ? 'text-green-300 line-through' : 'text-green-50'}`}>
                      {item.title}
                    </p>
                    {item.duration && (
                      <p className="text-xs text-green-400/70 mt-0.5">{item.duration} min</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-6">
            <h2 className="font-display font-semibold text-green-50 mb-4">Insights</h2>
            <ul className="space-y-3">
              {INSIGHTS.map((ins) => (
                <li
                  key={ins.id}
                  className={`flex gap-3 py-3 px-4 rounded-xl ${
                    ins.type === 'positive'
                      ? 'bg-green-500/10 border border-green-500/20'
                      : ins.type === 'alert'
                        ? 'bg-amber-500/10 border border-amber-500/20'
                        : 'bg-white/[0.04] border border-white/5'
                  }`}
                >
                  <FiInfo
                    className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      ins.type === 'positive' ? 'text-green-400' : ins.type === 'alert' ? 'text-amber-400' : 'text-green-500/70'
                    }`}
                  />
                  <p className="text-sm text-green-200">{ins.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Goals progress */}
        <section className="mb-10">
          <h2 className="font-display font-semibold text-green-50 mb-4">Goal progress</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GOALS.map((g) => {
              const pct = Math.min(100, Math.round((g.current / g.target) * 100));
              return (
                <div
                  key={g.id}
                  className="rounded-2xl bg-white/[0.06] border border-white/10 p-5"
                >
                  <p className="text-sm text-green-300 mb-2">{g.label}</p>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-display font-bold text-green-50 tabular-nums">
                      {g.current.toLocaleString()}
                    </span>
                    <span className="text-green-400/80 text-sm">/ {g.target.toLocaleString()} {g.unit}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* KPI Cards */}
        <section className="mb-10">
          <h2 className="font-display font-semibold text-green-50 mb-4">Key metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            <KpiCard
              icon={FiActivity}
              label="Workouts this week"
              value={KPIS.workoutsThisWeek}
              trend={KPIS.workoutsTrend}
              subtitle="vs last week"
            />
            <KpiCard
              icon={FiZap}
              label="Calories burned"
              value={KPIS.caloriesBurned.toLocaleString()}
              trend={KPIS.caloriesTrend}
              subtitle="This week"
            />
            <KpiCard
              icon={FiCalendar}
              label="Active streak"
              value={KPIS.activeStreak}
              trend={KPIS.streakTrend}
              unit="days"
            />
            <KpiCard
              icon={FiHeart}
              label="Avg. heart rate"
              value={KPIS.avgHeartRate}
              trend={KPIS.heartTrend}
              unit="bpm"
            />
            <KpiCard
              icon={FiMoon}
              label="Sleep score"
              value={KPIS.sleepScore}
              trend={KPIS.sleepTrend}
              unit="/100"
            />
            <KpiCard
              icon={FiTarget}
              label="Steps today"
              value={KPIS.stepsToday.toLocaleString()}
              trend={KPIS.stepsTrend}
            />
            <KpiCard
              icon={FiActivity}
              label="Body fat"
              value={KPIS.bodyFat}
              trend={KPIS.bodyFatTrend}
              unit="%"
            />
            <KpiCard
              icon={FiTarget}
              label="Weight"
              value={KPIS.weightLbs}
              trend={KPIS.weightTrend}
              unit="lbs"
            />
            <KpiCard
              icon={FiDroplet}
              label="Water today"
              value={KPIS.waterGlasses}
              trend={KPIS.waterTrend}
              unit="glasses"
            />
            <KpiCard
              icon={FiRefreshCw}
              label="Recovery score"
              value={KPIS.recoveryScore}
              trend={KPIS.recoveryTrend}
              unit="/100"
            />
            <KpiCard
              icon={FiPieChart}
              label="Calories (in/out)"
              value={`${KPIS.caloriesIn}/${KPIS.caloriesOut}`}
              subtitle="Net deficit: 420 kcal"
            />
            <KpiCard
              icon={FiActivity}
              label="Active minutes"
              value={KPIS.activeMinutes}
              trend={KPIS.activeMinutesTrend}
              unit="min"
              subtitle="This week"
            />
          </div>
        </section>

        {/* Charts row 1 */}
        <section className="mb-10">
          <h2 className="font-display font-semibold text-green-50 mb-4">Activity & performance</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-6">
              <h3 className="text-green-200 font-medium mb-4">Workouts per week</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={WORKOUTS_BY_WEEK} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="workoutsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#22c55e" stopOpacity={0.4} />
                        <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                    <XAxis dataKey="week" stroke="#86efac" fontSize={11} tick={{ fill: '#86efac80' }} />
                    <YAxis stroke="#86efac" fontSize={11} tick={{ fill: '#86efac80' }} width={35} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#0a0f0b',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '12px',
                      }}
                      labelStyle={{ color: '#bbf7d0' }}
                    />
                    <Area
                      type="monotone"
                      dataKey="count"
                      stroke="#22c55e"
                      strokeWidth={2}
                      fill="url(#workoutsGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-6">
              <h3 className="text-green-200 font-medium mb-4">Weight trend</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={WEIGHT_TREND} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="weightGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#22c55e" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                    <XAxis dataKey="date" stroke="#86efac" fontSize={11} tick={{ fill: '#86efac80' }} />
                    <YAxis stroke="#86efac" fontSize={11} tick={{ fill: '#86efac80' }} width={35} domain={['dataMin - 1', 'dataMax + 1']} />
                    <Tooltip
                      formatter={(v) => [`${v} lbs`, 'Weight']}
                      contentStyle={{
                        backgroundColor: '#0a0f0b',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '12px',
                      }}
                    />
                    <Area type="monotone" dataKey="weight" stroke="#22c55e" fill="url(#weightGradient)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-6">
              <h3 className="text-green-200 font-medium mb-4">Calories burned by day</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={CALORIES_BY_DAY} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                    <XAxis dataKey="day" stroke="#86efac" fontSize={11} tick={{ fill: '#86efac80' }} />
                    <YAxis stroke="#86efac" fontSize={11} tick={{ fill: '#86efac80' }} width={35} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#0a0f0b',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '12px',
                      }}
                    />
                    <Bar dataKey="burned" fill="#22c55e" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Charts row 2 + Health */}
        <section className="mb-10">
          <h2 className="font-display font-semibold text-green-50 mb-4">Health metrics</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-6">
              <h3 className="text-green-200 font-medium mb-4">Activity mix</h3>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={ACTIVITY_BREAKDOWN}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {ACTIVITY_BREAKDOWN.map((entry, i) => (
                        <Cell key={i} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => [`${value}%`, 'Share']}
                      contentStyle={{
                        backgroundColor: '#0a0f0b',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '12px',
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-6">
              <h3 className="text-green-200 font-medium mb-4">Heart rate (7 days)</h3>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={HEART_RATE_7DAY} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="hrRest" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#22c55e" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="hrMax" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4ade80" stopOpacity={0.2} />
                        <stop offset="100%" stopColor="#4ade80" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                    <XAxis dataKey="date" stroke="#86efac" fontSize={10} tick={{ fill: '#86efac80' }} />
                    <YAxis stroke="#86efac" fontSize={10} tick={{ fill: '#86efac80' }} width={35} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#0a0f0b',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '12px',
                      }}
                    />
                    <Legend />
                    <Area type="monotone" dataKey="resting" stroke="#22c55e" fill="url(#hrRest)" strokeWidth={1.5} name="Resting (bpm)" />
                    <Area type="monotone" dataKey="max" stroke="#4ade80" fill="url(#hrMax)" strokeWidth={1.5} name="Max (bpm)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-6">
              <h3 className="text-green-200 font-medium mb-4">Sleep (7 days)</h3>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={SLEEP_7DAY} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                    <XAxis dataKey="date" stroke="#86efac" fontSize={10} tick={{ fill: '#86efac80' }} />
                    <YAxis stroke="#86efac" fontSize={10} tick={{ fill: '#86efac80' }} width={35} domain={[0, 10]} />
                    <Tooltip
                      formatter={(value) => [`${value} hrs`, 'Sleep']}
                      content={({ active, payload }) =>
                        active && payload?.[0] ? (
                          <div
                            className="px-4 py-3 rounded-xl border border-white/10 text-sm"
                            style={{
                              backgroundColor: '#0a0f0b',
                            }}
                          >
                            <p className="text-green-200 font-medium">{payload[0].payload.date}</p>
                            <p className="text-green-400 mt-1">{payload[0].value} hrs sleep</p>
                            <p className="text-green-500/80 text-xs mt-0.5">
                              Quality: {payload[0].payload.quality}/100
                            </p>
                          </div>
                        ) : null
                      }
                    />
                    <Bar dataKey="hours" fill="#22c55e" radius={[6, 6, 0, 0]} name="Hours" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Table */}
        <section>
          <h2 className="font-display font-semibold text-green-50 mb-4">Recent workouts</h2>
          <div className="rounded-2xl bg-white/[0.06] border border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-6 text-sm font-medium text-green-300/80">Workout</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-green-300/80">Type</th>
                    <th className="text-right py-4 px-6 text-sm font-medium text-green-300/80">Duration</th>
                    <th className="text-right py-4 px-6 text-sm font-medium text-green-300/80">Calories</th>
                    <th className="text-right py-4 px-6 text-sm font-medium text-green-300/80">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {RECENT_WORKOUTS.map((w) => (
                    <tr key={w.id} className="border-b border-white/5 hover:bg-white/[0.04] transition-colors">
                      <td className="py-4 px-6 font-medium text-green-50">{w.name}</td>
                      <td className="py-4 px-6">
                        <span className="inline-block px-3 py-1 rounded-lg text-xs font-medium bg-green-500/20 text-green-400">
                          {w.type}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right text-green-300">{w.duration} min</td>
                      <td className="py-4 px-6 text-right text-green-400 font-medium">{w.calories}</td>
                      <td className="py-4 px-6 text-right text-green-300/80 text-sm">
                        {new Date(w.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

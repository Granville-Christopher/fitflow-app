// Mock dashboard data - replace with API calls in production

export const GOALS = [
  { id: 'workouts', label: 'Weekly workouts', current: 12, target: 12, unit: 'sessions' },
  { id: 'steps', label: 'Daily steps', current: 12450, target: 10000, unit: 'steps' },
  { id: 'water', label: 'Water intake', current: 6, target: 8, unit: 'glasses' },
  { id: 'calories', label: 'Calorie deficit', current: 420, target: 500, unit: 'kcal' },
];

export const KPIS = {
  workoutsThisWeek: 12,
  workoutsTrend: 18,
  caloriesBurned: 2847,
  caloriesTrend: 12,
  activeStreak: 14,
  streakTrend: 0,
  avgHeartRate: 72,
  heartTrend: -3,
  sleepScore: 87,
  sleepTrend: 5,
  stepsToday: 12450,
  stepsTrend: 22,
  bodyFat: 18.2,
  bodyFatTrend: -1.5,
  weightLbs: 168,
  weightTrend: -0.8,
  waterGlasses: 6,
  waterTrend: 12,
  caloriesIn: 1850,
  caloriesOut: 2270,
  recoveryScore: 82,
  recoveryTrend: 8,
  activeMinutes: 156,
  activeMinutesTrend: 15,
};

export const WEIGHT_TREND = [
  { date: 'Jan 6', weight: 172 },
  { date: 'Jan 13', weight: 171 },
  { date: 'Jan 20', weight: 170 },
  { date: 'Jan 27', weight: 169 },
  { date: 'Feb 3', weight: 169 },
  { date: 'Feb 10', weight: 168.5 },
  { date: 'Feb 17', weight: 168.5 },
  { date: 'Feb 24', weight: 168 },
  { date: 'Mar 3', weight: 168 },
  { date: 'Mar 10', weight: 168 },
];

export const TODAYS_FOCUS = [
  { id: 1, type: 'workout', title: 'Upper body strength', duration: 45, done: true },
  { id: 2, type: 'water', title: '2 more glasses of water', done: false },
  { id: 3, type: 'steps', title: 'Hit 15k steps (5k to go)', done: false },
];

export const INSIGHTS = [
  { id: 1, type: 'positive', text: 'Your sleep quality improved 12% this week. Great recovery!' },
  { id: 2, type: 'tip', text: 'You’re on track for a 4-week streak. One more workout to seal it.' },
  { id: 3, type: 'alert', text: 'Resting HR slightly elevated yesterday. Consider an easy day today.' },
];

export const WORKOUTS_BY_WEEK = [
  { week: 'Jan 6', count: 8 },
  { week: 'Jan 13', count: 10 },
  { week: 'Jan 20', count: 9 },
  { week: 'Jan 27', count: 11 },
  { week: 'Feb 3', count: 12 },
  { week: 'Feb 10', count: 14 },
  { week: 'Feb 17', count: 11 },
  { week: 'Feb 24', count: 13 },
  { week: 'Mar 3', count: 12 },
];

export const CALORIES_BY_DAY = [
  { day: 'Mon', burned: 420 },
  { day: 'Tue', burned: 580 },
  { day: 'Wed', burned: 310 },
  { day: 'Thu', burned: 690 },
  { day: 'Fri', burned: 520 },
  { day: 'Sat', burned: 480 },
  { day: 'Sun', burned: 390 },
];

export const ACTIVITY_BREAKDOWN = [
  { name: 'Strength', value: 35, color: '#22c55e' },
  { name: 'Cardio', value: 28, color: '#4ade80' },
  { name: 'HIIT', value: 22, color: '#16a34a' },
  { name: 'Yoga', value: 10, color: '#86efac' },
  { name: 'Walking', value: 5, color: '#bbf7d0' },
];

export const HEART_RATE_7DAY = [
  { date: 'Mar 9', resting: 68, max: 165 },
  { date: 'Mar 10', resting: 70, max: 172 },
  { date: 'Mar 11', resting: 69, max: 168 },
  { date: 'Mar 12', resting: 71, max: 175 },
  { date: 'Mar 13', resting: 70, max: 170 },
  { date: 'Mar 14', resting: 72, max: 178 },
  { date: 'Mar 15', resting: 72, max: 165 },
];

export const SLEEP_7DAY = [
  { date: 'Mar 9', hours: 7.2, quality: 82 },
  { date: 'Mar 10', hours: 6.8, quality: 78 },
  { date: 'Mar 11', hours: 7.5, quality: 88 },
  { date: 'Mar 12', hours: 7.0, quality: 85 },
  { date: 'Mar 13', hours: 6.5, quality: 75 },
  { date: 'Mar 14', hours: 7.8, quality: 92 },
  { date: 'Mar 15', hours: 7.3, quality: 87 },
];

export const RECENT_WORKOUTS = [
  { id: 1, name: 'Upper Body Blast', type: 'Strength', duration: 45, calories: 320, date: '2025-03-15' },
  { id: 2, name: 'Morning Run', type: 'Cardio', duration: 30, calories: 280, date: '2025-03-14' },
  { id: 3, name: 'HIIT Core', type: 'HIIT', duration: 25, calories: 245, date: '2025-03-14' },
  { id: 4, name: 'Leg Day', type: 'Strength', duration: 55, calories: 410, date: '2025-03-13' },
  { id: 5, name: 'Yoga Flow', type: 'Yoga', duration: 40, calories: 120, date: '2025-03-12' },
  { id: 6, name: 'Sprint Intervals', type: 'Cardio', duration: 28, calories: 310, date: '2025-03-11' },
  { id: 7, name: 'Full Body', type: 'Strength', duration: 50, calories: 385, date: '2025-03-10' },
];

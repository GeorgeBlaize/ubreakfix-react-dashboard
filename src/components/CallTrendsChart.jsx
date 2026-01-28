import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { day: 'Mon', calls: 50 },
  { day: 'Tue', calls: 68 },
  { day: 'Wed', calls: 55 },
  { day: 'Thu', calls: 82 },
  { day: 'Fri', calls: 98 },
  { day: 'Sat', calls: 88 },
  { day: 'Sun', calls: 72 },
];

export default function CallTrendsChart() {
  return (
    <div className="glass-card p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="font-display text-xl lg:text-2xl font-semibold text-white tracking-tight">
            Call Trends - This Week
          </h2>
          <p className="text-zinc-400 mt-1 text-sm">
            Total: <span className="text-white font-medium">472 calls</span>
          </p>
        </div>
        <div className="bg-zinc-800/70 px-4 py-2 rounded-full text-sm text-zinc-300 flex items-center gap-2">
          This Week <span className="text-zinc-500">▼</span>
        </div>
      </div>

      <div className="h-64 lg:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 20 }}>
            <defs>
              <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#71717a' }} dy={12} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#71717a' }} />
            <Tooltip contentStyle={{ background: '#111827ee', border: '1px solid #27272a', borderRadius: '12px', color: '#e5e7eb' }} />
            <Area type="monotone" dataKey="calls" stroke="#3b82f6" strokeWidth={3} fill="url(#blueGrad)" dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
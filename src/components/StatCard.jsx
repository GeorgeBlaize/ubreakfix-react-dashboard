export default function StatCard({ title, value, change, icon, color = "blue" }) {
  const isPositive = change?.startsWith('+');
  return (
    <div className="glass-card p-5 lg:p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-zinc-400 text-xs lg:text-sm font-medium">{title}</div>
        <div className={`w-10 h-10 lg:w-11 lg:h-11 rounded-xl flex items-center justify-center bg-${color}-600/20`}>
          <span className="text-xl lg:text-2xl">{icon}</span>
        </div>
      </div>
      <div className="text-4xl lg:text-5xl font-display font-bold tracking-tight text-white">{value}</div>
      <div className={`mt-2 text-sm font-medium ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
        {change}
      </div>
    </div>
  );
}
// src/pages/Dashboard.jsx
import React from 'react';
import StatCard from '../components/StatCard';
import CallTrendsChart from '../components/CallTrendsChart';

import {
  HiOutlinePhone,
  HiOutlineChip,
  HiOutlineSwitchHorizontal,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineXCircle,
} from 'react-icons/hi';

export default function Dashboard() {
  return (
    <div className="p-5 lg:p-6 xl:p-8 space-y-6 lg:space-y-8 bg-zinc-950/50">
      {/* First row - 3 cards (adjusted to 3-column on lg as in your code) */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        <StatCard
          title="Total Calls Today"
          value="127"
          change="+12%"
          icon={<HiOutlinePhone className="w-6 h-6 text-blue-400" />}
          color="blue"
        />
        <StatCard
          title="AI-Handled Calls"
          value="98"
          change="+77%"
          icon={<HiOutlineChip className="w-6 h-6 text-purple-400" />}
          color="purple"
        />
        <StatCard
          title="Warm Transfer"
          value="23"
          change="+18%"
          icon={<HiOutlineSwitchHorizontal className="w-6 h-6 text-orange-400" />}
          color="orange"
        />
      </div>

      {/* Second row - 3 cards */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        <StatCard
          title="Appointments Booked"
          value="34"
          change="+8%"
          icon={<HiOutlineCalendar className="w-6 h-6 text-emerald-400" />}
          color="emerald"
        />
        <StatCard
          title="Missed/Failed Calls"
          value="6"
          change="-3%"
          icon={<HiOutlineXCircle className="w-6 h-6 text-red-400" />}
          color="red"
        />
        <StatCard
          title="Avg Call Duration"
          value="3:42"
          change="+15%"
          icon={<HiOutlineClock className="w-6 h-6 text-cyan-400" />}
          color="cyan"
        />
      </div>

      {/* Chart */}
      <CallTrendsChart />

      {/* Bottom row - Recent Activity + Top Repair Requests */}
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Recent Activity */}
        <div className="glass-card p-6 lg:p-8">
          <h2 className="text-lg lg:text-xl font-semibold mb-6 text-white">Recent Activity</h2>
          <div className="space-y-5 text-sm">
            {[
              { dot: 'emerald', text: 'AI booked appointment for iPhone 13 screen repair', time: '2 min ago' },
              { dot: 'amber',   text: 'Warm transfer to technician - Software issue',       time: '5 min ago' },
              { dot: 'emerald', text: 'Quote provided for iPad battery replacement',       time: '8 min ago' },
              { dot: 'red',     text: 'Call dropped after 12 seconds',                     time: '15 min ago' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className={`mt-1.5 w-2.5 h-2.5 rounded-full bg-${item.dot}-500 flex-shrink-0 ring-1 ring-${item.dot}-400/30`} />
                <div className="flex-1">
                  <p className="text-zinc-100">{item.text}</p>
                  <p className="text-xs text-zinc-500 mt-0.5">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Repair Requests */}
        <div className="glass-card p-6 lg:p-8">
          <h2 className="text-lg lg:text-xl font-semibold mb-6 text-white">Top Repair Requests</h2>
          <div className="space-y-6">
            {[
              { label: 'Screen Repair',        count: 156, percent: 100 },
              { label: 'Battery Replacement',  count:  89, percent:  57 },
              { label: 'Back Glass Repair',    count:  67, percent:  43 },
              { label: 'Software Issues',      count:  45, percent:  29 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-2.5">
                  <span className="font-medium text-zinc-200">{item.label}</span>
                  <span className="font-mono text-zinc-400">{item.count} requests</span>
                </div>
                <div className="h-2.5 bg-zinc-800/70 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
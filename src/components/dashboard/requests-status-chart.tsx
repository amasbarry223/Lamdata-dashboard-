"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Approved", value: 55, color: "#10B981" },
  { name: "Pending", value: 32, color: "#F59E0B" },
  { name: "In Review", value: 28, color: "#14B8A6" },
  { name: "Rejected", value: 13, color: "#EF4444" },
];

const legendItems = [
  { label: "Pending", value: 32, percent: 25, color: "#F59E0B" },
  { label: "In Review", value: 28, percent: 22, color: "#14B8A6" },
  { label: "Approved", value: 55, percent: 43, color: "#10B981" },
  { label: "Rejected", value: 13, percent: 10, color: "#EF4444" },
];

export function RequestsStatusChart() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">
      <h3 className="text-base font-semibold text-gray-800 mb-5">
        Requests by Status
      </h3>
      <div className="flex items-center gap-6">
        {/* Donut Chart */}
        <div className="relative w-40 h-40 flex-shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={3}
                dataKey="value"
                strokeWidth={0}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-gray-800">128</span>
            <span className="text-xs text-gray-500">Total</span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex-1 space-y-3">
          {legendItems.map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-gray-600">{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-800">
                  {item.value}
                </span>
                <span className="text-xs text-gray-400">
                  ({item.percent}%)
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

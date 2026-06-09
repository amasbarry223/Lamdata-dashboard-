"use client";

import {
  FileText,
  ClipboardList,
  DollarSign,
  CheckCircle2,
  XCircle,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const stats = [
  {
    title: "Pending Approvals",
    value: "32",
    change: "+12% from last week",
    trend: "up" as const,
    icon: FileText,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    title: "Total Requests",
    value: "128",
    change: "+8% from last week",
    trend: "up" as const,
    icon: ClipboardList,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    title: "Total Amount",
    value: "$48,750.50",
    change: "+15% from last week",
    trend: "up" as const,
    icon: DollarSign,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    title: "Approved Amount",
    value: "$37,560.00",
    change: "+10% from last week",
    trend: "up" as const,
    icon: CheckCircle2,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    title: "Rejected Amount",
    value: "$2,950.50",
    change: "-4% from last week",
    trend: "down" as const,
    icon: XCircle,
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-5 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-shadow"
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className={`${stat.iconBg} w-9 h-9 rounded-full flex items-center justify-center`}
            >
              <stat.icon className={`h-4 w-4 ${stat.iconColor}`} />
            </div>
            <span className="text-sm text-gray-500 font-medium">
              {stat.title}
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-1">
            {stat.value}
          </div>
          <div className="flex items-center gap-1">
            {stat.trend === "up" ? (
              <TrendingUp className="h-3 w-3 text-emerald-500" />
            ) : (
              <TrendingDown className="h-3 w-3 text-red-500" />
            )}
            <span
              className={`text-xs font-medium ${
                stat.trend === "up" ? "text-emerald-500" : "text-red-500"
              }`}
            >
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

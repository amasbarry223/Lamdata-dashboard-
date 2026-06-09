"use client";

import {
  LayoutDashboard,
  FileText,
  Car,
  Receipt,
  CheckCircle,
  BarChart3,
  LineChart,
  Shield,
  Settings,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: FileText, label: "My Requests", active: false },
  { icon: FileText, label: "All Requests", active: false },
  { icon: Car, label: "Mileage", active: false },
  { icon: Receipt, label: "Expenses", active: false },
  { icon: CheckCircle, label: "Approvals", active: false },
  { icon: BarChart3, label: "Reports", active: false },
  { icon: LineChart, label: "Analytics", active: false },
  { icon: Shield, label: "Policy & Rules", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export function Sidebar() {
  return (
    <aside className="w-60 min-w-60 bg-white border-r border-gray-200 flex flex-col h-full">
      {/* Logo */}
      <div className="px-5 py-4 flex items-center gap-2.5 border-b border-gray-200">
        <div className="w-7 h-7 bg-emerald-500 rounded-md flex items-center justify-center">
          <span className="text-white font-bold text-sm">E</span>
        </div>
        <span className="text-gray-800 font-semibold text-base">
          ExpenseWise
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-3 px-3 overflow-y-auto">
        <div className="space-y-0.5">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                item.active
                  ? "bg-emerald-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Help Section */}
      <div className="p-4 border-t border-gray-200">
        <div className="bg-gray-50 rounded-lg p-3.5">
          <div className="flex items-center gap-2 mb-1">
            <HelpCircle className="h-4 w-4 text-gray-700" />
            <span className="text-sm font-semibold text-gray-800">
              Need Help?
            </span>
          </div>
          <p className="text-xs text-gray-500 mb-3">
            Check our help docs or contact support.
          </p>
          <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs h-8">
            Visit Help Center
          </Button>
        </div>
      </div>
    </aside>
  );
}

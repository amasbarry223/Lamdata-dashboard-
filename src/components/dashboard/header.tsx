"use client";

import { Search, Bell, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      {/* Left - Title */}
      <div>
        <h1 className="text-xl font-semibold text-gray-800">
          Expense Approval Dashboard
        </h1>
        <p className="text-[13px] text-gray-500">
          Welcome back, Olivia Rhye 👋
        </p>
      </div>

      {/* Right - Search, Notification, Profile */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search for requests, employees, or departments..."
            className="pl-9 w-80 h-9 text-sm bg-gray-50 border-gray-200"
          />
        </div>

        {/* Notification */}
        <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute -top-0.5 -right-0.5 h-4 w-4 bg-emerald-500 rounded-full text-[10px] text-white font-bold flex items-center justify-center">
            3
          </span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-2.5 pl-2 border-l border-gray-200 ml-1">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia" />
            <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xs font-semibold">
              OR
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-800 leading-tight">
              Olivia Rhye
            </span>
            <span className="text-xs text-gray-500 leading-tight">
              Finance Manager
            </span>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </header>
  );
}

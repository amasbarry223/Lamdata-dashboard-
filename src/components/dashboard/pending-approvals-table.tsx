"use client";

import { Eye, MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const tableData = [
  {
    id: "REQ-2024-1056",
    employee: "Ethan Carter",
    type: "Mileage",
    date: "May 15, 2024",
    amount: "$125.50",
    department: "Sales",
    submittedOn: "May 15, 09:15 AM",
    avatar: "EC",
    avatarColor: "bg-blue-100 text-blue-700",
  },
  {
    id: "REQ-2024-1055",
    employee: "Sophia Bennett",
    type: "Expense",
    date: "May 15, 2024",
    amount: "$450.00",
    department: "Marketing",
    submittedOn: "May 15, 08:45 AM",
    avatar: "SB",
    avatarColor: "bg-purple-100 text-purple-700",
  },
  {
    id: "REQ-2024-1054",
    employee: "Liam Anderson",
    type: "Mileage",
    date: "May 14, 2024",
    amount: "$98.75",
    department: "Operations",
    submittedOn: "May 14, 06:30 PM",
    avatar: "LA",
    avatarColor: "bg-orange-100 text-orange-700",
  },
  {
    id: "REQ-2024-1053",
    employee: "Mia Thompson",
    type: "Expense",
    date: "May 14, 2024",
    amount: "$320.60",
    department: "Product",
    submittedOn: "May 14, 05:20 PM",
    avatar: "MT",
    avatarColor: "bg-pink-100 text-pink-700",
  },
  {
    id: "REQ-2024-1052",
    employee: "Noah Garcia",
    type: "Mileage",
    date: "May 14, 2024",
    amount: "$180.40",
    department: "Sales",
    submittedOn: "May 14, 04:10 PM",
    avatar: "NG",
    avatarColor: "bg-green-100 text-green-700",
  },
];

export function PendingApprovalsTable() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-gray-800">
          Pending Approvals
        </h3>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">
            All Types
            <ChevronDownIcon />
          </button>
          <button className="flex items-center gap-1 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">
            All Departments
            <ChevronDownIcon />
          </button>
          <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            <svg
              className="h-4 w-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Request ID
              </th>
              <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Employee
              </th>
              <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Department
              </th>
              <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Submitted On
              </th>
              <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr
                key={row.id}
                className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-3 text-sm font-medium text-emerald-600">
                  {row.id}
                </td>
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-7 w-7">
                      <AvatarFallback
                        className={`${row.avatarColor} text-[10px] font-semibold`}
                      >
                        {row.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-800 font-medium">
                      {row.employee}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-3">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                    {row.type}
                  </span>
                </td>
                <td className="py-3 px-3 text-sm text-gray-600">
                  {row.date}
                </td>
                <td className="py-3 px-3 text-sm font-semibold text-gray-800">
                  {row.amount}
                </td>
                <td className="py-3 px-3 text-sm text-gray-600">
                  {row.department}
                </td>
                <td className="py-3 px-3 text-sm text-gray-500">
                  {row.submittedOn}
                </td>
                <td className="py-3 px-3">
                  <div className="flex items-center gap-1">
                    <button className="p-1 rounded hover:bg-gray-100 transition-colors">
                      <Eye className="h-4 w-4 text-gray-400" />
                    </button>
                    <button className="p-1 rounded hover:bg-gray-100 transition-colors">
                      <MoreVertical className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
        <span className="text-sm text-gray-500">
          Showing 1 to 5 of 32 results
        </span>
        <div className="flex items-center gap-1">
          <button className="p-1 rounded hover:bg-gray-100 transition-colors">
            <ChevronLeft className="h-4 w-4 text-gray-400" />
          </button>
          {[1, 2, 3, 4, 5, 6, 7].map((page) => (
            <button
              key={page}
              className={`w-7 h-7 rounded text-xs font-medium transition-colors ${
                page === 1
                  ? "bg-emerald-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="p-1 rounded hover:bg-gray-100 transition-colors">
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

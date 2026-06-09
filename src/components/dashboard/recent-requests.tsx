"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const requests = [
  {
    id: "REQ-2024-1056",
    status: "Pending",
    statusColor: "bg-yellow-100 text-yellow-700",
    name: "Ethan Carter",
    role: "Sales Executive",
    amount: "$125.50",
    date: "May 15, 2024",
    avatar: "EC",
    avatarColor: "bg-blue-100 text-blue-700",
  },
  {
    id: "REQ-2024-1055",
    status: "In Review",
    statusColor: "bg-teal-100 text-teal-700",
    name: "Sophia Bennett",
    role: "Marketing Lead",
    amount: "$450.00",
    date: "May 15, 2024",
    avatar: "SB",
    avatarColor: "bg-purple-100 text-purple-700",
  },
  {
    id: "REQ-2024-1054",
    status: "Pending",
    statusColor: "bg-yellow-100 text-yellow-700",
    name: "Liam Anderson",
    role: "Operations Mgr",
    amount: "$98.75",
    date: "May 14, 2024",
    avatar: "LA",
    avatarColor: "bg-orange-100 text-orange-700",
  },
  {
    id: "REQ-2024-1053",
    status: "In Review",
    statusColor: "bg-teal-100 text-teal-700",
    name: "Mia Thompson",
    role: "Product Designer",
    amount: "$320.60",
    date: "May 14, 2024",
    avatar: "MT",
    avatarColor: "bg-pink-100 text-pink-700",
  },
  {
    id: "REQ-2024-1052",
    status: "Pending",
    statusColor: "bg-yellow-100 text-yellow-700",
    name: "Noah Garcia",
    role: "Sales Executive",
    amount: "$180.40",
    date: "May 14, 2024",
    avatar: "NG",
    avatarColor: "bg-green-100 text-green-700",
  },
];

export function RecentRequests() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-gray-800">
          Recent Requests
        </h3>
        <button className="text-sm text-emerald-600 font-medium hover:text-emerald-700">
          View All
        </button>
      </div>
      <div className="space-y-0">
        {requests.map((req, index) => (
          <div
            key={req.id}
            className={`flex items-start gap-3 py-3 ${
              index < requests.length - 1
                ? "border-b border-gray-100"
                : ""
            }`}
          >
            <Avatar className="h-8 w-8 mt-0.5">
              <AvatarFallback
                className={`${req.avatarColor} text-[10px] font-semibold`}
              >
                {req.avatar}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-xs font-medium text-emerald-600">
                  {req.id}
                </span>
                <span
                  className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${req.statusColor}`}
                >
                  {req.status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {req.name}
                  </p>
                  <p className="text-[11px] text-gray-500">{req.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-800">
                    {req.amount}
                  </p>
                  <p className="text-[11px] text-gray-400">{req.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

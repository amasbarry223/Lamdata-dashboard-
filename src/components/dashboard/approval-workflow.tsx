"use client";

import { Check } from "lucide-react";

const steps = [
  {
    label: "Submitted",
    completed: true,
    date: "May 15, 2024 09:15 AM",
    person: "Ethan Carter",
  },
  {
    label: "Manager Approval",
    completed: true,
    date: "May 15, 2024 10:30 AM",
    person: "Jacob Jones",
  },
  {
    label: "Finance Approval",
    completed: false,
    pending: true,
    person: "Sarah Wilson",
  },
  {
    label: "Accounting Approval",
    completed: false,
    pending: false,
    person: "Michael Brown",
  },
];

export function ApprovalWorkflow() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">
      <h3 className="text-base font-semibold text-gray-800 mb-5">
        Approval Workflow
      </h3>

      {/* Steps */}
      <div className="space-y-0">
        {steps.map((step, index) => (
          <div key={step.label} className="flex gap-3">
            {/* Timeline */}
            <div className="flex flex-col items-center">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                  step.completed
                    ? "bg-emerald-500"
                    : step.pending
                    ? "border-2 border-emerald-500 bg-white"
                    : "border-2 border-gray-300 bg-white"
                }`}
              >
                {step.completed ? (
                  <Check className="h-3.5 w-3.5 text-white" />
                ) : step.pending ? (
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                ) : null}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-0.5 h-10 ${
                    step.completed ? "bg-emerald-500" : "bg-gray-200"
                  }`}
                />
              )}
            </div>

            {/* Content */}
            <div className="pb-5">
              <p
                className={`text-sm font-medium ${
                  step.completed
                    ? "text-gray-800"
                    : step.pending
                    ? "text-emerald-600"
                    : "text-gray-400"
                }`}
              >
                {step.label}
                {step.pending && (
                  <span className="ml-2 text-xs bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded-full font-semibold">
                    Pending
                  </span>
                )}
              </p>
              {step.completed && (
                <>
                  <p className="text-xs text-gray-500 mt-0.5">{step.date}</p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {step.person}
                  </p>
                </>
              )}
              {!step.completed && !step.pending && (
                <p className="text-xs text-gray-400 mt-0.5">
                  {step.person}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-2 pt-4 border-t border-gray-100">
        <button className="flex-1 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Reject
        </button>
        <button className="flex-1 px-4 py-2 text-sm font-medium text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-colors">
          Approve
        </button>
      </div>
    </div>
  );
}

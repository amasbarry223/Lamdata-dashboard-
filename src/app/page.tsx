"use client";

import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { ExpenseOverviewChart } from "@/components/dashboard/expense-overview-chart";
import { RequestsStatusChart } from "@/components/dashboard/requests-status-chart";
import { RecentRequests } from "@/components/dashboard/recent-requests";
import { PendingApprovalsTable } from "@/components/dashboard/pending-approvals-table";
import { ApprovalWorkflow } from "@/components/dashboard/approval-workflow";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <Header />

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Stats Cards */}
            <StatsCards />

            {/* Charts + Recent Requests Row */}
            <div className="grid grid-cols-12 gap-6">
              {/* Charts */}
              <div className="col-span-8 grid grid-cols-2 gap-6">
                <ExpenseOverviewChart />
                <RequestsStatusChart />
              </div>

              {/* Recent Requests */}
              <div className="col-span-4">
                <RecentRequests />
              </div>
            </div>

            {/* Table + Workflow Row */}
            <div className="grid grid-cols-12 gap-6">
              {/* Pending Approvals Table */}
              <div className="col-span-8">
                <PendingApprovalsTable />
              </div>

              {/* Approval Workflow */}
              <div className="col-span-4">
                <ApprovalWorkflow />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

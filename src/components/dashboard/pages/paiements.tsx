"use client";

import { Wallet, Search, Filter, Eye, MoreVertical, CheckCircle2, XCircle, Clock, Download } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const payments = [
  { id: "PAY-0189", name: "Fatou Ndiaye", amount: "15,000 XOF", operator: "Wave", phone: "+221 77 123 4567", date: "Mai 15, 2024", status: "En Attente", statusColor: "bg-yellow-100 text-yellow-700", level: 3, avatar: "FN", avatarColor: "bg-blue-100 text-blue-700" },
  { id: "PAY-0188", name: "Moussa Traoré", amount: "8,500 XOF", operator: "Orange Money", phone: "+223 76 987 6543", date: "Mai 15, 2024", status: "En Attente", statusColor: "bg-yellow-100 text-yellow-700", level: 2, avatar: "MT", avatarColor: "bg-orange-100 text-orange-700" },
  { id: "PAY-0187", name: "Aissatou Ba", amount: "22,000 XOF", operator: "MTN", phone: "+225 07 456 7890", date: "Mai 14, 2024", status: "Payé", statusColor: "bg-emerald-100 text-emerald-700", level: 4, avatar: "AB", avatarColor: "bg-purple-100 text-purple-700" },
  { id: "PAY-0186", name: "Ibrahim Coulibaly", amount: "3,200 XOF", operator: "Free Money", phone: "+221 78 111 2222", date: "Mai 14, 2024", status: "Rejeté", statusColor: "bg-red-100 text-red-700", level: 1, avatar: "IC", avatarColor: "bg-red-100 text-red-700", rejectReason: "Fraude détectée" },
  { id: "PAY-0185", name: "Mariam Sow", amount: "12,750 XOF", operator: "Wave", phone: "+221 76 333 4444", date: "Mai 14, 2024", status: "En Attente", statusColor: "bg-yellow-100 text-yellow-700", level: 3, avatar: "MS", avatarColor: "bg-pink-100 text-pink-700" },
  { id: "PAY-0184", name: "Omar Diallo", amount: "6,000 XOF", operator: "Orange Money", phone: "+223 75 555 6666", date: "Mai 13, 2024", status: "Payé", statusColor: "bg-emerald-100 text-emerald-700", level: 2, avatar: "OD", avatarColor: "bg-green-100 text-green-700" },
  { id: "PAY-0183", name: "Awa Keita", amount: "35,000 XOF", operator: "MTN", phone: "+225 05 777 8888", date: "Mai 13, 2024", status: "Payé", statusColor: "bg-emerald-100 text-emerald-700", level: 5, avatar: "AK", avatarColor: "bg-teal-100 text-teal-700" },
];

const statusIcon: Record<string, typeof Clock> = {
  "En Attente": Clock,
  "Payé": CheckCircle2,
  "Rejeté": XCircle,
};

export default function PaiementsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Wallet className="h-6 w-6 text-emerald-600" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Paiements Mobile Money</h2>
            <p className="text-sm text-gray-500 mt-1">Validez et traitez les demandes de retrait des contributeurs</p>
          </div>
        </div>
        <Button variant="outline" className="gap-2 text-gray-600">
          <Download className="h-4 w-4" /> Exporter
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-center gap-4">
          <Clock className="h-8 w-8 text-yellow-600" />
          <div><p className="text-2xl font-bold text-yellow-700">23</p><p className="text-xs text-yellow-600">En Attente</p></div>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-4">
          <CheckCircle2 className="h-8 w-8 text-emerald-600" />
          <div><p className="text-2xl font-bold text-emerald-700">1,892</p><p className="text-xs text-emerald-600">Payés</p></div>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-4">
          <XCircle className="h-8 w-8 text-red-500" />
          <div><p className="text-2xl font-bold text-red-700">47</p><p className="text-xs text-red-600">Rejetés</p></div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center gap-4">
          <Wallet className="h-8 w-8 text-blue-600" />
          <div><p className="text-2xl font-bold text-blue-700">4.2M XOF</p><p className="text-xs text-blue-600">Total Traité</p></div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input placeholder="Rechercher par nom, ID ou téléphone..." className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
        </div>
        <button className="flex items-center gap-1.5 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50"><Filter className="h-3.5 w-3.5" /> Statut</button>
        <button className="flex items-center gap-1.5 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50"><Filter className="h-3.5 w-3.5" /> Opérateur</button>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">ID</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Contributeur</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Montant</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Opérateur</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Téléphone</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Date</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Statut</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p) => {
              const Icon = statusIcon[p.status] || Clock;
              return (
                <tr key={p.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 text-sm font-medium text-emerald-600">{p.id}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-7 w-7"><AvatarFallback className={`${p.avatarColor} text-[10px] font-semibold`}>{p.avatar}</AvatarFallback></Avatar>
                      <div>
                        <span className="text-sm text-gray-800 font-medium">{p.name}</span>
                        <p className="text-[10px] text-gray-400">Niveau {p.level}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm font-semibold text-gray-800">{p.amount}</td>
                  <td className="py-3 px-4"><span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">{p.operator}</span></td>
                  <td className="py-3 px-4 text-sm text-gray-600 font-mono">{p.phone}</td>
                  <td className="py-3 px-4 text-sm text-gray-500">{p.date}</td>
                  <td className="py-3 px-4">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${p.statusColor} inline-flex items-center gap-1`}>
                      <Icon className="h-3 w-3" /> {p.status}
                    </span>
                    {"rejectReason" in p && p.rejectReason && <p className="text-[10px] text-red-500 mt-0.5">{p.rejectReason}</p>}
                  </td>
                  <td className="py-3 px-4">
                    {p.status === "En Attente" ? (
                      <div className="flex items-center gap-1">
                        <button className="px-2 py-1 text-[10px] font-medium text-red-600 border border-red-200 rounded hover:bg-red-50">Rejeter</button>
                        <button className="px-2 py-1 text-[10px] font-medium text-white bg-emerald-500 rounded hover:bg-emerald-600">Valider</button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1">
                        <button className="p-1 rounded hover:bg-gray-100"><Eye className="h-4 w-4 text-gray-400" /></button>
                        <button className="p-1 rounded hover:bg-gray-100"><MoreVertical className="h-4 w-4 text-gray-400" /></button>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

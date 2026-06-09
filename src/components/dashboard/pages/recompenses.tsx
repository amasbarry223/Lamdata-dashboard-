"use client";

import { Gift, Search, Filter, Eye, MoreVertical, TrendingUp, Star, Zap } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const contributors = [
  { id: "USR-001", name: "Fatou Ndiaye", level: 4, totalEarned: "125,000 XOF", pending: "15,000 XOF", contributions: 342, language: "Wolof", badge: "⭐", avatar: "FN", avatarColor: "bg-blue-100 text-blue-700" },
  { id: "USR-002", name: "Moussa Traoré", level: 3, totalEarned: "78,500 XOF", pending: "8,500 XOF", contributions: 218, language: "Bambara", badge: "🔥", avatar: "MT", avatarColor: "bg-orange-100 text-orange-700" },
  { id: "USR-003", name: "Aissatou Ba", level: 4, totalEarned: "198,000 XOF", pending: "22,000 XOF", contributions: 456, language: "Dioula", badge: "⭐", avatar: "AB", avatarColor: "bg-purple-100 text-purple-700" },
  { id: "USR-004", name: "Ibrahim Coulibaly", level: 1, totalEarned: "8,200 XOF", pending: "3,200 XOF", contributions: 24, language: "Pulaar", badge: "🌱", avatar: "IC", avatarColor: "bg-red-100 text-red-700" },
  { id: "USR-005", name: "Mariam Sow", level: 3, totalEarned: "92,750 XOF", pending: "12,750 XOF", contributions: 289, language: "Wolof", badge: "🔥", avatar: "MS", avatarColor: "bg-pink-100 text-pink-700" },
  { id: "USR-006", name: "Omar Diallo", level: 2, totalEarned: "45,000 XOF", pending: "6,000 XOF", contributions: 134, language: "Bambara", badge: "💪", avatar: "OD", avatarColor: "bg-green-100 text-green-700" },
  { id: "USR-007", name: "Awa Keita", level: 5, totalEarned: "312,000 XOF", pending: "0 XOF", contributions: 612, language: "Wolof", badge: "👑", avatar: "AK", avatarColor: "bg-teal-100 text-teal-700" },
];

const levelConfig: Record<number, { label: string; color: string; bg: string }> = {
  1: { label: "Débutant", color: "text-gray-600", bg: "bg-gray-100" },
  2: { label: "Apprenti", color: "text-blue-600", bg: "bg-blue-100" },
  3: { label: "Confirmé", color: "text-purple-600", bg: "bg-purple-100" },
  4: { label: "Expert", color: "text-amber-600", bg: "bg-amber-100" },
  5: { label: "Maître", color: "text-emerald-600", bg: "bg-emerald-100" },
};

export default function RecompensesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Gift className="h-6 w-6 text-emerald-600" />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Récompenses</h2>
          <p className="text-sm text-gray-500 mt-1">Suivez les gains et niveaux des contributeurs</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-4">
          <Gift className="h-8 w-8 text-emerald-600" />
          <div><p className="text-2xl font-bold text-emerald-700">1,247</p><p className="text-xs text-emerald-600">Contributeurs Actifs</p></div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center gap-4">
          <Star className="h-8 w-8 text-amber-600" />
          <div><p className="text-2xl font-bold text-amber-700">2.4M XOF</p><p className="text-xs text-amber-600">Total Distribué</p></div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center gap-4">
          <Zap className="h-8 w-8 text-blue-600" />
          <div><p className="text-2xl font-bold text-blue-700">67,250 XOF</p><p className="text-xs text-blue-600">En Attente de Paiement</p></div>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 flex items-center gap-4">
          <TrendingUp className="h-8 w-8 text-purple-600" />
          <div><p className="text-2xl font-bold text-purple-700">+18%</p><p className="text-xs text-purple-600">Croissance ce Mois</p></div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input placeholder="Rechercher un contributeur..." className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
        </div>
        <button className="flex items-center gap-1.5 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50"><Filter className="h-3.5 w-3.5" /> Niveau</button>
        <button className="flex items-center gap-1.5 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50"><Filter className="h-3.5 w-3.5" /> Langue</button>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Contributeur</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Niveau</th>
              <th className="text-center py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Contributions</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Langue</th>
              <th className="text-right py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Total Gagné</th>
              <th className="text-right py-3 px-4 text-xs font-semibold text-gray-500 uppercase">En Attente</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contributors.map((c) => {
              const lvl = levelConfig[c.level];
              return (
                <tr key={c.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8"><AvatarFallback className={`${c.avatarColor} text-[10px] font-semibold`}>{c.avatar}</AvatarFallback></Avatar>
                      <div>
                        <span className="text-sm text-gray-800 font-medium">{c.name} {c.badge}</span>
                        <p className="text-[10px] text-gray-400">{c.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4"><span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${lvl.bg} ${lvl.color}`}>Nv. {c.level} — {lvl.label}</span></td>
                  <td className="py-3 px-4 text-center text-sm text-gray-700 font-medium">{c.contributions}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{c.language}</td>
                  <td className="py-3 px-4 text-right text-sm font-semibold text-gray-800">{c.totalEarned}</td>
                  <td className="py-3 px-4 text-right text-sm font-medium text-amber-600">{c.pending}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1">
                      <button className="p-1 rounded hover:bg-gray-100"><Eye className="h-4 w-4 text-gray-400" /></button>
                      <button className="p-1 rounded hover:bg-gray-100"><MoreVertical className="h-4 w-4 text-gray-400" /></button>
                    </div>
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

"use client";

import { Search, Filter, Eye, MoreVertical, AlertTriangle, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const contributions = [
  { id: "CONT-4872", contributor: "Fatou Ndiaye", type: "Audio", language: "Wolof", date: "Mai 15, 2024", status: "Signalé", statusColor: "bg-red-100 text-red-700", score: 0.65, flagReason: "Qualité audio médiocre", avatar: "FN", avatarColor: "bg-blue-100 text-blue-700" },
  { id: "CONT-4871", contributor: "Moussa Traoré", type: "Traduction", language: "Bambara", date: "Mai 15, 2024", status: "En Revue", statusColor: "bg-yellow-100 text-yellow-700", score: 0.72, flagReason: "Traduction approximative", avatar: "MT", avatarColor: "bg-orange-100 text-orange-700" },
  { id: "CONT-4870", contributor: "Aissatou Ba", type: "Image", language: "Dioula", date: "Mai 14, 2024", status: "Signalé", statusColor: "bg-red-100 text-red-700", score: 0.58, flagReason: "Annotation incorrecte", avatar: "AB", avatarColor: "bg-purple-100 text-purple-700" },
  { id: "CONT-4869", contributor: "Ibrahim Coulibaly", type: "Audio", language: "Pulaar", date: "Mai 14, 2024", status: "En Revue", statusColor: "bg-yellow-100 text-yellow-700", score: 0.81, flagReason: "Possible triche", avatar: "IC", avatarColor: "bg-red-100 text-red-700" },
  { id: "CONT-4868", contributor: "Mariam Sow", type: "Traduction", language: "Wolof", date: "Mai 14, 2024", status: "Signalé", statusColor: "bg-red-100 text-red-700", score: 0.44, flagReason: "Contenu offensant", avatar: "MS", avatarColor: "bg-pink-100 text-pink-700" },
  { id: "CONT-4867", contributor: "Omar Diallo", type: "Audio", language: "Bambara", date: "Mai 13, 2024", status: "En Revue", statusColor: "bg-yellow-100 text-yellow-700", score: 0.77, flagReason: "Doublon détecté", avatar: "OD", avatarColor: "bg-green-100 text-green-700" },
  { id: "CONT-4866", contributor: "Awa Keita", type: "Image", language: "Dioula", date: "Mai 13, 2024", status: "Signalé", statusColor: "bg-red-100 text-red-700", score: 0.52, flagReason: "Image floue", avatar: "AK", avatarColor: "bg-teal-100 text-teal-700" },
];

export default function ModerationPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-6 w-6 text-emerald-600" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Modération</h2>
            <p className="text-sm text-gray-500 mt-1">Arbitrez les contributions signalées par la communauté</p>
          </div>
        </div>
      </div>

      {/* Alert Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-4">
          <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center"><AlertTriangle className="h-5 w-5 text-red-500" /></div>
          <div>
            <p className="text-2xl font-bold text-red-700">7</p>
            <p className="text-xs text-red-600">Contributions Signalées</p>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-center gap-4">
          <div className="h-10 w-10 bg-yellow-100 rounded-full flex items-center justify-center"><Eye className="h-5 w-5 text-yellow-600" /></div>
          <div>
            <p className="text-2xl font-bold text-yellow-700">23</p>
            <p className="text-xs text-yellow-600">En Attente de Revue</p>
          </div>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-4">
          <div className="h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center"><ShieldCheck className="h-5 w-5 text-emerald-600" /></div>
          <div>
            <p className="text-2xl font-bold text-emerald-700">156</p>
            <p className="text-xs text-emerald-600">Résolues ce mois</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input placeholder="Rechercher par ID ou contributeur..." className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
        </div>
        <button className="flex items-center gap-1.5 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50"><Filter className="h-3.5 w-3.5" /> Statut</button>
        <button className="flex items-center gap-1.5 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50"><Filter className="h-3.5 w-3.5" /> Type</button>
        <button className="flex items-center gap-1.5 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50"><Filter className="h-3.5 w-3.5" /> Langue</button>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">ID</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Contributeur</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Type</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Langue</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Score</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Motif</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Statut</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contributions.map((c) => (
              <tr key={c.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4 text-sm font-medium text-emerald-600">{c.id}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-7 w-7"><AvatarFallback className={`${c.avatarColor} text-[10px] font-semibold`}>{c.avatar}</AvatarFallback></Avatar>
                    <span className="text-sm text-gray-800 font-medium">{c.contributor}</span>
                  </div>
                </td>
                <td className="py-3 px-4"><span className={`text-xs font-medium px-2 py-0.5 rounded-full ${c.type === "Audio" ? "bg-blue-100 text-blue-700" : c.type === "Traduction" ? "bg-purple-100 text-purple-700" : "bg-amber-100 text-amber-700"}`}>{c.type}</span></td>
                <td className="py-3 px-4 text-sm text-gray-600">{c.language}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-12 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${c.score >= 0.8 ? "bg-emerald-500" : c.score >= 0.6 ? "bg-yellow-500" : "bg-red-500"}`} style={{ width: `${c.score * 100}%` }} />
                    </div>
                    <span className={`text-xs font-semibold ${c.score >= 0.8 ? "text-emerald-600" : c.score >= 0.6 ? "text-yellow-600" : "text-red-600"}`}>{c.score.toFixed(2)}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-xs text-red-600 font-medium">{c.flagReason}</td>
                <td className="py-3 px-4"><span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${c.statusColor}`}>{c.status === "Signalé" && <AlertTriangle className="h-3 w-3 inline mr-0.5" />}{c.status}</span></td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-1">
                    <button className="px-2 py-1 text-[10px] font-medium text-red-600 border border-red-200 rounded hover:bg-red-50">Rejeter</button>
                    <button className="px-2 py-1 text-[10px] font-medium text-white bg-emerald-500 rounded hover:bg-emerald-600">Approuver</button>
                    <button className="p-1 rounded hover:bg-gray-100"><MoreVertical className="h-4 w-4 text-gray-400" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

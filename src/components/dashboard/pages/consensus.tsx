"use client";

import { ThumbsUp, ThumbsDown, Search, Filter, Eye, MoreVertical, CheckCircle2, XCircle, Minus } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const reviews = [
  { id: "CONT-4880", contributor: "Fatou Ndiaye", type: "Audio", language: "Wolof", yesVotes: 8, noVotes: 1, totalVotes: 9, consensus: "Approuvé", consensusColor: "bg-emerald-100 text-emerald-700", avatar: "FN", avatarColor: "bg-blue-100 text-blue-700" },
  { id: "CONT-4879", contributor: "Moussa Traoré", type: "Traduction", language: "Bambara", yesVotes: 5, noVotes: 5, totalVotes: 10, consensus: "Partagé", consensusColor: "bg-yellow-100 text-yellow-700", avatar: "MT", avatarColor: "bg-orange-100 text-orange-700" },
  { id: "CONT-4878", contributor: "Aissatou Ba", type: "Image", language: "Dioula", yesVotes: 2, noVotes: 7, totalVotes: 9, consensus: "Rejeté", consensusColor: "bg-red-100 text-red-700", avatar: "AB", avatarColor: "bg-purple-100 text-purple-700" },
  { id: "CONT-4877", contributor: "Ibrahim Coulibaly", type: "Audio", language: "Pulaar", yesVotes: 6, noVotes: 2, totalVotes: 8, consensus: "Approuvé", consensusColor: "bg-emerald-100 text-emerald-700", avatar: "IC", avatarColor: "bg-red-100 text-red-700" },
  { id: "CONT-4876", contributor: "Mariam Sow", type: "Traduction", language: "Wolof", yesVotes: 4, noVotes: 4, totalVotes: 8, consensus: "Partagé", consensusColor: "bg-yellow-100 text-yellow-700", avatar: "MS", avatarColor: "bg-pink-100 text-pink-700" },
  { id: "CONT-4875", contributor: "Omar Diallo", type: "Audio", language: "Bambara", yesVotes: 9, noVotes: 0, totalVotes: 9, consensus: "Approuvé", consensusColor: "bg-emerald-100 text-emerald-700", avatar: "OD", avatarColor: "bg-green-100 text-green-700" },
];

export default function ConsensusPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <ThumbsUp className="h-6 w-6 text-emerald-600" />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Consensus de Validation</h2>
          <p className="text-sm text-gray-500 mt-1">Suivez les votes communautaires et les accords de validation</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-4">
          <CheckCircle2 className="h-8 w-8 text-emerald-600" />
          <div><p className="text-2xl font-bold text-emerald-700">32,156</p><p className="text-xs text-emerald-600">Approuvées par Consensus</p></div>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-4">
          <XCircle className="h-8 w-8 text-red-500" />
          <div><p className="text-2xl font-bold text-red-700">2,847</p><p className="text-xs text-red-600">Rejetées par Consensus</p></div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-center gap-4">
          <Minus className="h-8 w-8 text-yellow-600" />
          <div><p className="text-2xl font-bold text-yellow-700">1,234</p><p className="text-xs text-yellow-600">Votes Partagés</p></div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center gap-4">
          <ThumbsUp className="h-8 w-8 text-blue-600" />
          <div><p className="text-2xl font-bold text-blue-700">87.3%</p><p className="text-xs text-blue-600">Taux d&apos;Accord Moyen</p></div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input placeholder="Rechercher par ID ou contributeur..." className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
        </div>
        <button className="flex items-center gap-1.5 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50"><Filter className="h-3.5 w-3.5" /> Consensus</button>
        <button className="flex items-center gap-1.5 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50"><Filter className="h-3.5 w-3.5" /> Type</button>
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
              <th className="text-center py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Votes Pour</th>
              <th className="text-center py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Votes Contre</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Consensus</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((r) => (
              <tr key={r.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4 text-sm font-medium text-emerald-600">{r.id}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-7 w-7"><AvatarFallback className={`${r.avatarColor} text-[10px] font-semibold`}>{r.avatar}</AvatarFallback></Avatar>
                    <span className="text-sm text-gray-800 font-medium">{r.contributor}</span>
                  </div>
                </td>
                <td className="py-3 px-4"><span className={`text-xs font-medium px-2 py-0.5 rounded-full ${r.type === "Audio" ? "bg-blue-100 text-blue-700" : r.type === "Traduction" ? "bg-purple-100 text-purple-700" : "bg-amber-100 text-amber-700"}`}>{r.type}</span></td>
                <td className="py-3 px-4 text-sm text-gray-600">{r.language}</td>
                <td className="py-3 px-4 text-center">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-600"><ThumbsUp className="h-3.5 w-3.5" /> {r.yesVotes}</span>
                </td>
                <td className="py-3 px-4 text-center">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-red-500"><ThumbsDown className="h-3.5 w-3.5" /> {r.noVotes}</span>
                </td>
                <td className="py-3 px-4"><span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${r.consensusColor}`}>{r.consensus}</span></td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-1">
                    <button className="p-1 rounded hover:bg-gray-100"><Eye className="h-4 w-4 text-gray-400" /></button>
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

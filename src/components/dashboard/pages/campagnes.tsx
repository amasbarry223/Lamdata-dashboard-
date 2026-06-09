"use client";

import {
  Megaphone,
  Plus,
  Search,
  Filter,
  MoreVertical,
  Eye,
  Calendar,
  Users,
  FileText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const campaigns = [
  {
    id: "CAMP-001", name: "Collecte Vocale Wolof - Santé", type: "Audio", language: "Wolof", theme: "Santé",
    status: "Active", statusColor: "bg-emerald-100 text-emerald-700", contributors: 89, phrases: 450, progress: 72,
    startDate: "01 Mai 2024", endDate: "30 Juin 2024",
  },
  {
    id: "CAMP-002", name: "Traduction Bambara - Agriculture", type: "Traduction", language: "Bambara", theme: "Agriculture",
    status: "Active", statusColor: "bg-emerald-100 text-emerald-700", contributors: 56, phrases: 320, progress: 58,
    startDate: "15 Avril 2024", endDate: "15 Juin 2024",
  },
  {
    id: "CAMP-003", name: "Labellisation Images Dioula", type: "Image", language: "Dioula", theme: "Vie Quotidienne",
    status: "En Pause", statusColor: "bg-yellow-100 text-yellow-700", contributors: 34, phrases: 200, progress: 45,
    startDate: "01 Mars 2024", endDate: "31 Mai 2024",
  },
  {
    id: "CAMP-004", name: "Collecte Vocale Pulaar - Éducation", type: "Audio", language: "Pulaar", theme: "Éducation",
    status: "Active", statusColor: "bg-emerald-100 text-emerald-700", contributors: 42, phrases: 280, progress: 31,
    startDate: "10 Mai 2024", endDate: "10 Juillet 2024",
  },
  {
    id: "CAMP-005", name: "Traduction Wolof - Finance", type: "Traduction", language: "Wolof", theme: "Finance",
    status: "Terminée", statusColor: "bg-gray-100 text-gray-600", contributors: 112, phrases: 600, progress: 100,
    startDate: "01 Janvier 2024", endDate: "31 Mars 2024",
  },
  {
    id: "CAMP-006", name: "Collecte Vocale Bambara - Commerce", type: "Audio", language: "Bambara", theme: "Commerce",
    status: "Active", statusColor: "bg-emerald-100 text-emerald-700", contributors: 67, phrases: 380, progress: 84,
    startDate: "01 Février 2024", endDate: "31 Mai 2024",
  },
];

export default function CampagnesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Gestion des Campagnes</h2>
          <p className="text-sm text-gray-500 mt-1">Créez et gérez les campagnes de collecte de données linguistiques</p>
        </div>
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white gap-2">
          <Plus className="h-4 w-4" /> Nouvelle Campagne
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "Campagnes Actives", value: "4", icon: Megaphone, color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "Total Contributeurs", value: "400", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Phrases En Cours", value: "1,630", icon: FileText, color: "text-purple-600", bg: "bg-purple-50" },
          { label: "Thématiques", value: "5", icon: Filter, color: "text-amber-600", bg: "bg-amber-50" },
        ].map((s) => (
          <div key={s.label} className={`${s.bg} border border-gray-100 rounded-xl p-4 flex items-center gap-4`}>
            <div className={s.color}><s.icon className="h-6 w-6" /></div>
            <div>
              <p className="text-2xl font-bold text-gray-800">{s.value}</p>
              <p className="text-xs text-gray-500">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input placeholder="Rechercher une campagne..." className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
        </div>
        <button className="flex items-center gap-1.5 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50"><Filter className="h-3.5 w-3.5" /> Statut</button>
        <button className="flex items-center gap-1.5 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50"><Filter className="h-3.5 w-3.5" /> Langue</button>
        <button className="flex items-center gap-1.5 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50"><Filter className="h-3.5 w-3.5" /> Thématique</button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {campaigns.map((c) => (
          <div key={c.id} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-emerald-600">{c.id}</span>
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${c.statusColor}`}>{c.status}</span>
            </div>
            <h4 className="text-sm font-semibold text-gray-800 mb-2">{c.name}</h4>
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${c.type === "Audio" ? "bg-blue-100 text-blue-700" : c.type === "Traduction" ? "bg-purple-100 text-purple-700" : "bg-amber-100 text-amber-700"}`}>{c.type}</span>
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">{c.language}</span>
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">{c.theme}</span>
            </div>
            <div className="mb-3">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-gray-500">Progression</span>
                <span className="font-semibold text-gray-800">{c.progress}%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${c.progress === 100 ? "bg-gray-400" : "bg-emerald-500"}`} style={{ width: `${c.progress}%` }} />
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {c.contributors}</span>
              <span className="flex items-center gap-1"><FileText className="h-3 w-3" /> {c.phrases}</span>
              <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {c.endDate}</span>
            </div>
            <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
              <button className="flex-1 text-xs font-medium text-emerald-600 border border-emerald-200 rounded-lg py-1.5 hover:bg-emerald-50 transition-colors"><Eye className="h-3 w-3 inline mr-1" /> Détails</button>
              <button className="p-1.5 rounded-lg hover:bg-gray-100"><MoreVertical className="h-4 w-4 text-gray-400" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

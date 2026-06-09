"use client";

import { Upload, Search, Filter, Plus, FileText, ChevronDown, MoreVertical, Eye, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const phrases = [
  { id: "PHR-00456", text: "Naka nga def sa alal?", language: "Wolof", type: "Audio", theme: "Santé", status: "Actif", statusColor: "bg-emerald-100 text-emerald-700", submissions: 23, avatar: "WO" },
  { id: "PHR-00455", text: "I cɛ la bɛnɛ n'o tɔgɔ?", language: "Bambara", type: "Traduction", theme: "Agriculture", status: "Actif", statusColor: "bg-emerald-100 text-emerald-700", submissions: 18, avatar: "BA" },
  { id: "PHR-00454", text: "A yɛ kɛɛ i wuliɛ?", language: "Dioula", type: "Audio", theme: "Vie Quotidienne", status: "Inactif", statusColor: "bg-gray-100 text-gray-600", submissions: 12, avatar: "DI" },
  { id: "PHR-00453", text: "Miɗɗo heɓɓay ngam nyaamo?", language: "Pulaar", type: "Traduction", theme: "Éducation", status: "Actif", statusColor: "bg-emerald-100 text-emerald-700", submissions: 9, avatar: "PU" },
  { id: "PHR-00452", text: "Alhamdulillah, naka la waɗɓe?", language: "Wolof", type: "Audio", theme: "Commerce", status: "Actif", statusColor: "bg-emerald-100 text-emerald-700", submissions: 31, avatar: "WO" },
  { id: "PHR-00451", text: "Mɔgɔw be timinɛ kɛ?", language: "Bambara", type: "Traduction", theme: "Finance", status: "Inactif", statusColor: "bg-gray-100 text-gray-600", submissions: 5, avatar: "BA" },
  { id: "PHR-00450", text: "N be se ka wele ka bɔ?", language: "Dioula", type: "Audio", theme: "Santé", status: "Actif", statusColor: "bg-emerald-100 text-emerald-700", submissions: 27, avatar: "DI" },
  { id: "PHR-00449", text: "Min nda ballal e ndiyam?", language: "Pulaar", type: "Traduction", theme: "Agriculture", status: "Actif", statusColor: "bg-emerald-100 text-emerald-700", submissions: 14, avatar: "PU" },
];

export default function PhrasesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Phrases Sources</h2>
          <p className="text-sm text-gray-500 mt-1">Importez et gérez les phrases pour la collecte vocale et la traduction</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2 text-gray-600">
            <Upload className="h-4 w-4" /> Importer CSV/JSON
          </Button>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white gap-2">
            <Plus className="h-4 w-4" /> Ajouter Phrase
          </Button>
        </div>
      </div>

      {/* Import Zone */}
      <div className="bg-white border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-emerald-400 transition-colors">
        <Upload className="h-10 w-10 text-gray-400 mx-auto mb-3" />
        <p className="text-sm font-medium text-gray-700 mb-1">Glissez-déposez votre fichier CSV ou JSON ici</p>
        <p className="text-xs text-gray-500 mb-3">Format attendu : colonnes phrase, langue, thématique, type</p>
        <Button variant="outline" size="sm" className="text-emerald-600 border-emerald-300">
          Parcourir les fichiers
        </Button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input placeholder="Rechercher une phrase..." className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
        </div>
        <button className="flex items-center gap-1.5 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50"><Filter className="h-3.5 w-3.5" /> Langue <ChevronDown className="h-3 w-3" /></button>
        <button className="flex items-center gap-1.5 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50"><Filter className="h-3.5 w-3.5" /> Thématique <ChevronDown className="h-3 w-3" /></button>
        <button className="flex items-center gap-1.5 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50"><Filter className="h-3.5 w-3.5" /> Statut <ChevronDown className="h-3 w-3" /></button>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">ID</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Phrase</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Langue</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Type</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Thématique</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Soumissions</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Statut</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {phrases.map((p) => (
              <tr key={p.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4 text-sm font-medium text-emerald-600">{p.id}</td>
                <td className="py-3 px-4 text-sm text-gray-800 max-w-xs truncate">{p.text}</td>
                <td className="py-3 px-4">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">{p.language}</span>
                </td>
                <td className="py-3 px-4">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${p.type === "Audio" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"}`}>{p.type}</span>
                </td>
                <td className="py-3 px-4 text-sm text-gray-600">{p.theme}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-1.5">
                    <FileText className="h-3.5 w-3.5 text-gray-400" />
                    <span className="text-sm text-gray-700">{p.submissions}</span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${p.statusColor}`}>{p.status}</span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-1">
                    <button className="p-1 rounded hover:bg-gray-100"><Eye className="h-4 w-4 text-gray-400" /></button>
                    <button className="p-1 rounded hover:bg-gray-100"><Trash2 className="h-4 w-4 text-gray-400" /></button>
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

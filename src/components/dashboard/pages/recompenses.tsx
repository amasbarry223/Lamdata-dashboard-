"use client";

import { useState } from "react";
import {
  Gift,
  Search,
  Filter,
  Eye,
  TrendingUp,
  Star,
  Zap,
  Settings2,
  Coins,
  Trophy,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const contributors = [
  { id: "USR-001", name: "Fatou Ndiaye", level: 4, totalEarned: "125,000 XOF", pending: "15,000 XOF", contributions: 342, language: "Wolof", badge: "⭐", avatar: "FN", avatarColor: "bg-blue-100 text-blue-700", joinDate: "Jan 2024", streak: 28 },
  { id: "USR-002", name: "Moussa Traoré", level: 3, totalEarned: "78,500 XOF", pending: "8,500 XOF", contributions: 218, language: "Bambara", badge: "🔥", avatar: "MT", avatarColor: "bg-orange-100 text-orange-700", joinDate: "Fév 2024", streak: 14 },
  { id: "USR-003", name: "Aissatou Ba", level: 4, totalEarned: "198,000 XOF", pending: "22,000 XOF", contributions: 456, language: "Dioula", badge: "⭐", avatar: "AB", avatarColor: "bg-purple-100 text-purple-700", joinDate: "Déc 2023", streak: 42 },
  { id: "USR-004", name: "Ibrahim Coulibaly", level: 1, totalEarned: "8,200 XOF", pending: "3,200 XOF", contributions: 24, language: "Pulaar", badge: "🌱", avatar: "IC", avatarColor: "bg-red-100 text-red-700", joinDate: "Avr 2024", streak: 3 },
  { id: "USR-005", name: "Mariam Sow", level: 3, totalEarned: "92,750 XOF", pending: "12,750 XOF", contributions: 289, language: "Wolof", badge: "🔥", avatar: "MS", avatarColor: "bg-pink-100 text-pink-700", joinDate: "Jan 2024", streak: 19 },
  { id: "USR-006", name: "Omar Diallo", level: 2, totalEarned: "45,000 XOF", pending: "6,000 XOF", contributions: 134, language: "Bambara", badge: "💪", avatar: "OD", avatarColor: "bg-green-100 text-green-700", joinDate: "Mars 2024", streak: 7 },
  { id: "USR-007", name: "Awa Keita", level: 5, totalEarned: "312,000 XOF", pending: "0 XOF", contributions: 612, language: "Wolof", badge: "👑", avatar: "AK", avatarColor: "bg-teal-100 text-teal-700", joinDate: "Nov 2023", streak: 65 },
];

const levelConfig: Record<number, { label: string; color: string; bg: string }> = {
  1: { label: "Débutant", color: "text-gray-600", bg: "bg-gray-100" },
  2: { label: "Apprenti", color: "text-blue-600", bg: "bg-blue-100" },
  3: { label: "Confirmé", color: "text-purple-600", bg: "bg-purple-100" },
  4: { label: "Expert", color: "text-amber-600", bg: "bg-amber-100" },
  5: { label: "Maître", color: "text-emerald-600", bg: "bg-emerald-100" },
};

export default function RecompensesPage() {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [selectedContributor, setSelectedContributor] = useState<(typeof contributors)[0] | null>(null);

  const openDetail = (c: (typeof contributors)[0]) => {
    setSelectedContributor(c);
    setShowDetailModal(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Gift className="h-6 w-6 text-emerald-600" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Récompenses</h2>
            <p className="text-sm text-gray-500 mt-1">Suivez les gains et niveaux des contributeurs</p>
          </div>
        </div>
        <Button variant="outline" className="gap-2 text-gray-600" onClick={() => setShowConfigModal(true)}>
          <Settings2 className="h-4 w-4" /> Configurer les Récompenses
        </Button>
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
                    <button className="p-1 rounded hover:bg-gray-100" onClick={() => openDetail(c)}><Eye className="h-4 w-4 text-gray-400" /></button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Modal: Détails Contributeur */}
      <Dialog open={showDetailModal} onOpenChange={setShowDetailModal}>
        <DialogContent className="sm:max-w-xl">
          {selectedContributor && (() => {
            const lvl = levelConfig[selectedContributor.level];
            return (
              <>
                <DialogHeader>
                  <DialogTitle>Profil du Contributeur</DialogTitle>
                  <DialogDescription>{selectedContributor.id}</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-2">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-14 w-14"><AvatarFallback className={`${selectedContributor.avatarColor} text-lg font-semibold`}>{selectedContributor.avatar}</AvatarFallback></Avatar>
                    <div>
                      <p className="text-lg font-bold text-gray-800">{selectedContributor.name} {selectedContributor.badge}</p>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${lvl.bg} ${lvl.color}`}>Niveau {selectedContributor.level} — {lvl.label}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    <div className="bg-emerald-50 rounded-lg p-3 text-center">
                      <p className="text-lg font-bold text-emerald-700">{selectedContributor.contributions}</p>
                      <p className="text-[10px] text-emerald-600">Contributions</p>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-3 text-center">
                      <p className="text-lg font-bold text-amber-700">{selectedContributor.totalEarned.split(" ")[0]}</p>
                      <p className="text-[10px] text-amber-600">Total Gagné</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 text-center">
                      <p className="text-lg font-bold text-blue-700">{selectedContributor.streak}</p>
                      <p className="text-[10px] text-blue-600">Jours Consécutifs</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3 text-center">
                      <p className="text-lg font-bold text-purple-700">{selectedContributor.language}</p>
                      <p className="text-[10px] text-purple-600">Langue</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                    <p className="text-xs font-semibold text-gray-500 mb-2">Progression Niveau</p>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-1">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${Math.min((selectedContributor.contributions / 500) * 100, 100)}%` }} />
                    </div>
                    <p className="text-[10px] text-gray-500">{selectedContributor.contributions} / {selectedContributor.level < 5 ? (selectedContributor.level + 1) * 150 : 612} contributions pour le prochain niveau</p>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">En attente de paiement : <strong className="text-amber-600">{selectedContributor.pending}</strong></span>
                    <span className="text-gray-500">Membre depuis : <strong>{selectedContributor.joinDate}</strong></span>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setShowDetailModal(false)}>Fermer</Button>
                </DialogFooter>
              </>
            );
          })()}
        </DialogContent>
      </Dialog>

      {/* Modal: Configurer Récompenses */}
      <Dialog open={showConfigModal} onOpenChange={setShowConfigModal}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <div className="flex items-center gap-2">
              <Settings2 className="h-5 w-5 text-emerald-600" />
              <DialogTitle>Configuration des Récompenses</DialogTitle>
            </div>
            <DialogDescription>Définissez les montants de récompense par type et niveau</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Récompenses par Type de Contribution</p>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                  <p className="text-xs font-semibold text-blue-700 mb-1.5">Audio</p>
                  <div className="flex items-center gap-2">
                    <input defaultValue="50" type="number" className="w-full text-sm border border-gray-200 rounded-lg px-2 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                    <span className="text-xs text-gray-500">XOF</span>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
                  <p className="text-xs font-semibold text-purple-700 mb-1.5">Traduction</p>
                  <div className="flex items-center gap-2">
                    <input defaultValue="40" type="number" className="w-full text-sm border border-gray-200 rounded-lg px-2 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                    <span className="text-xs text-gray-500">XOF</span>
                  </div>
                </div>
                <div className="bg-amber-50 rounded-lg p-3 border border-amber-100">
                  <p className="text-xs font-semibold text-amber-700 mb-1.5">Image</p>
                  <div className="flex items-center gap-2">
                    <input defaultValue="30" type="number" className="w-full text-sm border border-gray-200 rounded-lg px-2 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                    <span className="text-xs text-gray-500">XOF</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Bonus par Niveau</p>
              <div className="space-y-2">
                {Object.entries(levelConfig).map(([level, config]) => (
                  <div key={level} className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2 border border-gray-100">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${config.bg} ${config.color}`}>Nv. {level} — {config.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">Bonus</span>
                      <input defaultValue={level === "1" ? "0" : `${(parseInt(level) - 1) * 10}`} type="number" className="w-16 text-sm border border-gray-200 rounded-lg px-2 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right" />
                      <span className="text-xs text-gray-500">%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Seuils de Paiement</p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] text-gray-500 block mb-1">Minimum de retrait</label>
                  <div className="flex items-center gap-2">
                    <input defaultValue="5000" type="number" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                    <span className="text-xs text-gray-500">XOF</span>
                  </div>
                </div>
                <div>
                  <label className="text-[10px] text-gray-500 block mb-1">Maximum par transaction</label>
                  <div className="flex items-center gap-2">
                    <input defaultValue="50000" type="number" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                    <span className="text-xs text-gray-500">XOF</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfigModal(false)}>Annuler</Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white gap-1.5" onClick={() => setShowConfigModal(false)}>
              <Coins className="h-4 w-4" /> Enregistrer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

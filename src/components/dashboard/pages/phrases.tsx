"use client";

import { useState } from "react";
import {
  Upload,
  Search,
  Filter,
  Plus,
  FileText,
  ChevronDown,
  MoreVertical,
  Eye,
  Trash2,
  Pencil,
  Play,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const phrases = [
  { id: "PHR-00456", text: "Naka nga def sa alal?", translation: "Comment vas-tu ce matin?", language: "Wolof", type: "Audio", theme: "Santé", status: "Actif", statusColor: "bg-emerald-100 text-emerald-700", submissions: 23, avatar: "WO", createdDate: "Mai 10, 2024", campaign: "CAMP-001" },
  { id: "PHR-00455", text: "I cɛ la bɛnɛ n'o tɔgɔ?", translation: "Comment t'appelles-tu?", language: "Bambara", type: "Traduction", theme: "Agriculture", status: "Actif", statusColor: "bg-emerald-100 text-emerald-700", submissions: 18, avatar: "BA", createdDate: "Mai 09, 2024", campaign: "CAMP-002" },
  { id: "PHR-00454", text: "A yɛ kɛɛ i wuliɛ?", translation: "Qu'est-ce que tu fais?", language: "Dioula", type: "Audio", theme: "Vie Quotidienne", status: "Inactif", statusColor: "bg-gray-100 text-gray-600", submissions: 12, avatar: "DI", createdDate: "Mai 08, 2024", campaign: "CAMP-003" },
  { id: "PHR-00453", text: "Miɗɗo heɓɓay ngam nyaamo?", translation: "Où puis-je trouver à manger?", language: "Pulaar", type: "Traduction", theme: "Éducation", status: "Actif", statusColor: "bg-emerald-100 text-emerald-700", submissions: 9, avatar: "PU", createdDate: "Mai 07, 2024", campaign: "CAMP-004" },
  { id: "PHR-00452", text: "Alhamdulillah, naka la waɗɓe?", translation: "Merci à Dieu, comment vont les choses?", language: "Wolof", type: "Audio", theme: "Commerce", status: "Actif", statusColor: "bg-emerald-100 text-emerald-700", submissions: 31, avatar: "WO", createdDate: "Mai 06, 2024", campaign: "CAMP-006" },
  { id: "PHR-00451", text: "Mɔgɔw be timinɛ kɛ?", translation: "Que font les gens?", language: "Bambara", type: "Traduction", theme: "Finance", status: "Inactif", statusColor: "bg-gray-100 text-gray-600", submissions: 5, avatar: "BA", createdDate: "Mai 05, 2024", campaign: "CAMP-005" },
  { id: "PHR-00450", text: "N be se ka wele ka bɔ?", translation: "Je ne peux pas sortir?", language: "Dioula", type: "Audio", theme: "Santé", status: "Actif", statusColor: "bg-emerald-100 text-emerald-700", submissions: 27, avatar: "DI", createdDate: "Mai 04, 2024", campaign: "CAMP-001" },
  { id: "PHR-00449", text: "Min nda ballal e ndiyam?", translation: "Où puis-je trouver de l'eau?", language: "Pulaar", type: "Traduction", theme: "Agriculture", status: "Actif", statusColor: "bg-emerald-100 text-emerald-700", submissions: 14, avatar: "PU", createdDate: "Mai 03, 2024", campaign: "CAMP-002" },
];

export default function PhrasesPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedPhrase, setSelectedPhrase] = useState<(typeof phrases)[0] | null>(null);

  const openDetail = (p: (typeof phrases)[0]) => {
    setSelectedPhrase(p);
    setShowDetailModal(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Phrases Sources</h2>
          <p className="text-sm text-gray-500 mt-1">Importez et gérez les phrases pour la collecte vocale et la traduction</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2 text-gray-600" onClick={() => setShowImportModal(true)}>
            <Upload className="h-4 w-4" /> Importer CSV/JSON
          </Button>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white gap-2" onClick={() => setShowAddModal(true)}>
            <Plus className="h-4 w-4" /> Ajouter Phrase
          </Button>
        </div>
      </div>

      {/* Import Zone */}
      <div className="bg-white border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-emerald-400 transition-colors cursor-pointer" onClick={() => setShowImportModal(true)}>
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
                    <button className="p-1 rounded hover:bg-gray-100" onClick={() => openDetail(p)}><Eye className="h-4 w-4 text-gray-400" /></button>
                    <button className="p-1 rounded hover:bg-gray-100"><Pencil className="h-4 w-4 text-gray-400" /></button>
                    <button className="p-1 rounded hover:bg-gray-100"><Trash2 className="h-4 w-4 text-gray-400" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal: Ajouter Phrase */}
      <Dialog open={showAddModal} onOpenChange={setShowAddModal}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Ajouter une Phrase</DialogTitle>
            <DialogDescription>Ajoutez une nouvelle phrase source pour la collecte</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase block mb-1.5">Phrase Originale</label>
              <textarea rows={3} placeholder="Entrez la phrase dans la langue source..." className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none" />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase block mb-1.5">Traduction Française</label>
              <input placeholder="Traduction en français..." className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase block mb-1.5">Langue</label>
                <select className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>Wolof</option><option>Bambara</option><option>Dioula</option><option>Pulaar</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase block mb-1.5">Type de Collecte</label>
                <select className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>Audio</option><option>Traduction</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase block mb-1.5">Thématique</label>
                <select className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>Santé</option><option>Agriculture</option><option>Éducation</option><option>Finance</option><option>Commerce</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase block mb-1.5">Campagne Associée</label>
                <select className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>Aucune</option><option>CAMP-001</option><option>CAMP-002</option><option>CAMP-003</option>
                </select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddModal(false)}>Annuler</Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white" onClick={() => setShowAddModal(false)}>Ajouter la Phrase</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal: Importer CSV/JSON */}
      <Dialog open={showImportModal} onOpenChange={setShowImportModal}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Importer des Phrases</DialogTitle>
            <DialogDescription>Importez un fichier CSV ou JSON contenant vos phrases sources</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="bg-white border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-emerald-400 transition-colors">
              <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700 mb-1">Glissez-déposez votre fichier ici</p>
              <p className="text-xs text-gray-500">CSV ou JSON — Max 10 MB</p>
              <Button variant="outline" size="sm" className="text-emerald-600 border-emerald-300 mt-3">Parcourir</Button>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
              <p className="text-xs font-semibold text-gray-700 mb-1.5">Format attendu :</p>
              <p className="text-[11px] text-gray-500 mb-1"><strong>CSV :</strong> colonnes — phrase, traduction, langue, thématique, type</p>
              <p className="text-[11px] text-gray-500"><strong>JSON :</strong> tableau d&apos;objets avec les mêmes clés</p>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase block mb-1.5">Campagne Destination</label>
              <select className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>Aucune (phrases orphelines)</option><option>CAMP-001</option><option>CAMP-002</option><option>CAMP-003</option>
              </select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowImportModal(false)}>Annuler</Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white gap-2" onClick={() => setShowImportModal(false)}>
              <Upload className="h-4 w-4" /> Lancer l&apos;Import
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal: Détails Phrase */}
      <Dialog open={showDetailModal} onOpenChange={setShowDetailModal}>
        <DialogContent className="sm:max-w-lg">
          {selectedPhrase && (
            <>
              <DialogHeader>
                <DialogTitle>Détails de la Phrase</DialogTitle>
                <DialogDescription>{selectedPhrase.id}</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-2">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Phrase Originale</p>
                  <p className="text-base font-medium text-gray-800">{selectedPhrase.text}</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <p className="text-xs font-semibold text-blue-500 uppercase mb-1">Traduction Française</p>
                  <p className="text-sm text-blue-800">{selectedPhrase.translation}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">Langue :</span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">{selectedPhrase.language}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">Type :</span>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${selectedPhrase.type === "Audio" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"}`}>{selectedPhrase.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">Thème :</span>
                    <span className="font-medium text-gray-800">{selectedPhrase.theme}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">Statut :</span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${selectedPhrase.statusColor}`}>{selectedPhrase.status}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm pt-2 border-t border-gray-100">
                  <span className="text-gray-500">Soumissions : <strong className="text-gray-800">{selectedPhrase.submissions}</strong></span>
                  <span className="text-gray-500">Campagne : <strong className="text-emerald-600">{selectedPhrase.campaign}</strong></span>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" className="gap-1.5" onClick={() => setShowDetailModal(false)}>
                  <Pencil className="h-3.5 w-3.5" /> Modifier
                </Button>
                <Button className="bg-red-500 hover:bg-red-600 text-white gap-1.5" onClick={() => setShowDetailModal(false)}>
                  <Trash2 className="h-3.5 w-3.5" /> Supprimer
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

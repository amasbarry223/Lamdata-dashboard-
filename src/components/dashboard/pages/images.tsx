"use client";

import { Upload, Search, Filter, Plus, Image as ImageIcon, Eye, MoreVertical, Tag, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const images = [
  { id: "IMG-001", name: "Marché Dakar", tags: ["marché", "commerce", "nourriture"], questions: 3, validations: 45, status: "Active", statusColor: "bg-emerald-100 text-emerald-700" },
  { id: "IMG-002", name: "Champ Mil Bamako", tags: ["agriculture", "mil", "champ"], questions: 2, validations: 32, status: "Active", statusColor: "bg-emerald-100 text-emerald-700" },
  { id: "IMG-003", name: "Clinique Abidjan", tags: ["santé", "clinique", "hôpital"], questions: 4, validations: 28, status: "En Revue", statusColor: "bg-yellow-100 text-yellow-700" },
  { id: "IMG-004", name: "École Primaire Ouaga", tags: ["éducation", "école", "enfants"], questions: 2, validations: 51, status: "Active", statusColor: "bg-emerald-100 text-emerald-700" },
  { id: "IMG-005", name: "Transport Commun", tags: ["transport", "bus", "rue"], questions: 3, validations: 19, status: "Active", statusColor: "bg-emerald-100 text-emerald-700" },
  { id: "IMG-006", name: "Atelier Artisanat", tags: ["artisanat", "travail", "bois"], questions: 1, validations: 8, status: "Inactive", statusColor: "bg-gray-100 text-gray-600" },
];

export default function ImagesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Gestion des Images</h2>
          <p className="text-sm text-gray-500 mt-1">Téléversez les images de référence pour les campagnes de labellisation</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2 text-gray-600">
            <Upload className="h-4 w-4" /> Importer en Masse
          </Button>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white gap-2">
            <Plus className="h-4 w-4" /> Ajouter Image
          </Button>
        </div>
      </div>

      {/* Upload Zone */}
      <div className="bg-white border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-emerald-400 transition-colors">
        <Upload className="h-10 w-10 text-gray-400 mx-auto mb-3" />
        <p className="text-sm font-medium text-gray-700 mb-1">Glissez-déposez vos images ici</p>
        <p className="text-xs text-gray-500 mb-3">PNG, JPG, WebP — Max 5 MB par image</p>
        <Button variant="outline" size="sm" className="text-emerald-600 border-emerald-300">
          Parcourir les fichiers
        </Button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input placeholder="Rechercher une image..." className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
        </div>
        <button className="flex items-center gap-1.5 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50"><Filter className="h-3.5 w-3.5" /> Statut</button>
        <button className="flex items-center gap-1.5 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50"><Filter className="h-3.5 w-3.5" /> Tags</button>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-3 gap-4">
        {images.map((img) => (
          <div key={img.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
            {/* Image placeholder */}
            <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
              <ImageIcon className="h-12 w-12 text-gray-300" />
              <span className={`absolute top-3 right-3 text-[10px] font-semibold px-2 py-0.5 rounded-full ${img.statusColor}`}>{img.status}</span>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-emerald-600">{img.id}</span>
              </div>
              <h4 className="text-sm font-semibold text-gray-800 mb-2">{img.name}</h4>
              <div className="flex flex-wrap gap-1 mb-3">
                {img.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-blue-50 text-blue-600 flex items-center gap-0.5">
                    <Tag className="h-2.5 w-2.5" />{tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1"><MessageSquare className="h-3 w-3" /> {img.questions} questions</span>
                <span className="flex items-center gap-1"><Eye className="h-3 w-3" /> {img.validations} validations</span>
              </div>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
                <button className="flex-1 text-xs font-medium text-emerald-600 border border-emerald-200 rounded-lg py-1.5 hover:bg-emerald-50">Configurer</button>
                <button className="p-1.5 rounded-lg hover:bg-gray-100"><MoreVertical className="h-4 w-4 text-gray-400" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

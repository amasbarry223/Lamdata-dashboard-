"use client";

import { Download, FileJson, FileArchive, FileSpreadsheet, Filter, Play, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const recentExports = [
  { id: "EXP-012", type: "Audio", format: "ZIP + JSON", language: "Wolof", records: 12840, score: "> 0.8", date: "Mai 14, 2024", size: "2.4 GB", status: "Terminé", statusColor: "bg-emerald-100 text-emerald-700" },
  { id: "EXP-011", type: "Traduction", format: "CSV", language: "Bambara", records: 9650, score: "> 0.7", date: "Mai 12, 2024", size: "45 MB", status: "Terminé", statusColor: "bg-emerald-100 text-emerald-700" },
  { id: "EXP-010", type: "Image", format: "ZIP + JSON", language: "Dioula", records: 7230, score: "> 0.75", date: "Mai 10, 2024", size: "5.1 GB", status: "Terminé", statusColor: "bg-emerald-100 text-emerald-700" },
  { id: "EXP-009", type: "Audio", format: "ZIP + JSON", language: "Pulaar", records: 5890, score: "> 0.8", date: "Mai 08, 2024", size: "1.8 GB", status: "Échoué", statusColor: "bg-red-100 text-red-700" },
];

export default function ExportPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Download className="h-6 w-6 text-emerald-600" />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Export Corpus de Données IA</h2>
          <p className="text-sm text-gray-500 mt-1">Extrayez les jeux de données validés dans des formats standards</p>
        </div>
      </div>

      {/* Export Engine */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-5">
          <Settings2 className="h-5 w-5 text-emerald-600" />
          <h3 className="text-base font-semibold text-gray-800">Moteur d&apos;Exportation</h3>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          {/* Type */}
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase block mb-1.5">Type de Contribution</label>
            <select className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>Tous les Types</option>
              <option>Audio</option>
              <option>Traduction</option>
              <option>Image</option>
            </select>
          </div>
          {/* Language */}
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase block mb-1.5">Langue Cible</label>
            <select className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>Toutes les Langues</option>
              <option>Wolof</option>
              <option>Bambara</option>
              <option>Dioula</option>
              <option>Pulaar</option>
            </select>
          </div>
          {/* Score */}
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase block mb-1.5">Score Qualité Min.</label>
            <select className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>{"> 0.5"}</option>
              <option>{"> 0.6"}</option>
              <option>{"> 0.7"}</option>
              <option>{"> 0.8"}</option>
              <option>{"> 0.9"}</option>
            </select>
          </div>
          {/* Format */}
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase block mb-1.5">Format d&apos;Export</label>
            <select className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>Auto (recommandé)</option>
              <option>CSV</option>
              <option>JSON</option>
              <option>ZIP + JSON</option>
            </select>
          </div>
        </div>

        {/* Format Info */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
            <div className="flex items-center gap-2 mb-1.5">
              <FileSpreadsheet className="h-4 w-4 text-emerald-600" />
              <span className="text-xs font-semibold text-gray-700">Textes / Traductions</span>
            </div>
            <p className="text-[11px] text-gray-500">Fichiers CSV ou JSON structurés avec métadonnées de validation</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
            <div className="flex items-center gap-2 mb-1.5">
              <FileArchive className="h-4 w-4 text-blue-600" />
              <span className="text-xs font-semibold text-gray-700">Audio</span>
            </div>
            <p className="text-[11px] text-gray-500">Archive ZIP (.webm/.wav) + fichier d&apos;indexation JSON</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
            <div className="flex items-center gap-2 mb-1.5">
              <FileJson className="h-4 w-4 text-purple-600" />
              <span className="text-xs font-semibold text-gray-700">Images</span>
            </div>
            <p className="text-[11px] text-gray-500">ZIP des images labellisées + métadonnées d&apos;annotation JSON</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500">
            <span className="font-semibold text-gray-700">38,730</span> contributions éligibles après filtrage
          </div>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white gap-2">
            <Play className="h-4 w-4" /> Lancer l&apos;Export
          </Button>
        </div>
      </div>

      {/* Recent Exports */}
      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <h3 className="text-base font-semibold text-gray-800 mb-4">Exports Récents</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-500 uppercase">ID</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-500 uppercase">Type</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-500 uppercase">Format</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-500 uppercase">Langue</th>
                <th className="text-right py-2.5 px-3 text-xs font-semibold text-gray-500 uppercase">Enregistrements</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-500 uppercase">Score Min.</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-500 uppercase">Date</th>
                <th className="text-right py-2.5 px-3 text-xs font-semibold text-gray-500 uppercase">Taille</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-500 uppercase">Statut</th>
              </tr>
            </thead>
            <tbody>
              {recentExports.map((e) => (
                <tr key={e.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                  <td className="py-3 px-3 text-sm font-medium text-emerald-600">{e.id}</td>
                  <td className="py-3 px-3"><span className={`text-xs font-medium px-2 py-0.5 rounded-full ${e.type === "Audio" ? "bg-blue-100 text-blue-700" : e.type === "Traduction" ? "bg-purple-100 text-purple-700" : "bg-amber-100 text-amber-700"}`}>{e.type}</span></td>
                  <td className="py-3 px-3 text-sm text-gray-600">{e.format}</td>
                  <td className="py-3 px-3 text-sm text-gray-600">{e.language}</td>
                  <td className="py-3 px-3 text-right text-sm font-medium text-gray-800">{e.records.toLocaleString()}</td>
                  <td className="py-3 px-3 text-sm text-gray-500">{e.score}</td>
                  <td className="py-3 px-3 text-sm text-gray-500">{e.date}</td>
                  <td className="py-3 px-3 text-right text-sm text-gray-700 font-medium">{e.size}</td>
                  <td className="py-3 px-3"><span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${e.statusColor}`}>{e.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

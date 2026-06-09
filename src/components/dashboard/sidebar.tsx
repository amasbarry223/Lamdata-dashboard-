"use client";

import {
  LayoutDashboard,
  Megaphone,
  FileText,
  Image,
  ShieldCheck,
  ThumbsUp,
  Gift,
  Wallet,
  Download,
  Settings,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { icon: LayoutDashboard, label: "Tableau de Bord", active: true },
  { icon: Megaphone, label: "Campagnes", active: false },
  { icon: FileText, label: "Phrases Sources", active: false },
  { icon: Image, label: "Images", active: false },
  { icon: ShieldCheck, label: "Modération", active: false },
  { icon: ThumbsUp, label: "Consensus", active: false },
  { icon: Gift, label: "Récompenses", active: false },
  { icon: Wallet, label: "Paiements", active: false },
  { icon: Download, label: "Export Corpus", active: false },
  { icon: Settings, label: "Paramètres", active: false },
];

export function Sidebar() {
  return (
    <aside className="w-60 min-w-60 bg-white border-r border-gray-200 flex flex-col h-full">
      {/* Logo */}
      <div className="px-5 py-4 flex items-center gap-2.5 border-b border-gray-200">
        <div className="w-7 h-7 bg-emerald-500 rounded-md flex items-center justify-center">
          <span className="text-white font-bold text-sm">L</span>
        </div>
        <span className="text-gray-800 font-semibold text-base">
          Lambdata
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-3 px-3 overflow-y-auto">
        <div className="space-y-0.5">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                item.active
                  ? "bg-emerald-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Help Section */}
      <div className="p-4 border-t border-gray-200">
        <div className="bg-gray-50 rounded-lg p-3.5">
          <div className="flex items-center gap-2 mb-1">
            <HelpCircle className="h-4 w-4 text-gray-700" />
            <span className="text-sm font-semibold text-gray-800">
              Besoin d&apos;aide ?
            </span>
          </div>
          <p className="text-xs text-gray-500 mb-3">
            Consultez la documentation ou contactez le support.
          </p>
          <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs h-8">
            Centre d&apos;Aide
          </Button>
        </div>
      </div>
    </aside>
  );
}

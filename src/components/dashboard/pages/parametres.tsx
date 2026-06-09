"use client";

import { useState } from "react";
import {
  Settings,
  Globe,
  Bell,
  ShieldCheck,
  Database,
  Mail,
  Save,
  User,
  Lock,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

export default function ParametresPage() {
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Settings className="h-6 w-6 text-emerald-600" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Paramètres</h2>
            <p className="text-sm text-gray-500 mt-1">Configurez les préférences de la plateforme</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2 text-gray-600" onClick={() => setShowPasswordModal(true)}>
            <Lock className="h-4 w-4" /> Changer le Mot de Passe
          </Button>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white gap-2" onClick={() => setShowSaveModal(true)}>
            <Save className="h-4 w-4" /> Enregistrer
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left column - General */}
        <div className="col-span-2 space-y-6">
          {/* General */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-4 w-4 text-emerald-600" />
              <h3 className="text-base font-semibold text-gray-800">Général</h3>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase block mb-1.5">Nom de la Plateforme</label>
                  <input defaultValue="Lambdata" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase block mb-1.5">Langue par Défaut</label>
                  <select className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option>Français</option><option>English</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase block mb-1.5">Fuseau Horaire</label>
                  <select className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option>Africa/Dakar (GMT+0)</option><option>Africa/Bamako (GMT+0)</option><option>Africa/Abidjan (GMT+0)</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase block mb-1.5">Devise</label>
                  <input defaultValue="XOF (Franc CFA)" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <Bell className="h-4 w-4 text-emerald-600" />
              <h3 className="text-base font-semibold text-gray-800">Notifications</h3>
            </div>
            <div className="space-y-3">
              {[
                { label: "Nouvelles demandes de paiement", desc: "Recevoir une alerte quand un contributeur demande un retrait", checked: true },
                { label: "Contributions signalées", desc: "Notification lorsqu'une contribution est marquée comme signalée", checked: true },
                { label: "Export terminé", desc: "Alerter quand un export de corpus est prêt", checked: true },
                { label: "Rapport hebdomadaire", desc: "Recevoir un récapitulatif chaque lundi", checked: false },
              ].map((n) => (
                <div key={n.label} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                  <div>
                    <p className="text-sm font-medium text-gray-800">{n.label}</p>
                    <p className="text-xs text-gray-500">{n.desc}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked={n.checked} className="sr-only peer" />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Security */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <h3 className="text-base font-semibold text-gray-800">Sécurité & Modération</h3>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase block mb-1.5">Seuil de Consensus</label>
                  <input defaultValue="0.70" type="number" step="0.05" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                  <p className="text-[10px] text-gray-400 mt-1">Pourcentage minimum de votes positifs pour valider</p>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase block mb-1.5">Score Qualité Minimum</label>
                  <input defaultValue="0.60" type="number" step="0.05" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                  <p className="text-[10px] text-gray-400 mt-1">Score en dessous duquel une contribution est signalée</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase block mb-1.5">Nombre Minimum de Reviews</label>
                  <input defaultValue="3" type="number" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                  <p className="text-[10px] text-gray-400 mt-1">Reviews communautaires avant décision</p>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase block mb-1.5">Limite de Signalement</label>
                  <input defaultValue="2" type="number" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                  <p className="text-[10px] text-gray-400 mt-1">Signalements avant flag automatique</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Profile */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <User className="h-4 w-4 text-emerald-600" />
              <h3 className="text-base font-semibold text-gray-800">Profil Admin</h3>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-700 font-bold">AD</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">Amadou Diallo</p>
                <p className="text-xs text-gray-500">admin@lambdata.ai</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase block mb-1.5">Nom Complet</label>
                <input defaultValue="Amadou Diallo" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase block mb-1.5">Email</label>
                <input defaultValue="admin@lambdata.ai" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
            </div>
          </div>

          {/* Data */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <Database className="h-4 w-4 text-emerald-600" />
              <h3 className="text-base font-semibold text-gray-800">Données</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Total Contributions</span>
                <span className="font-semibold text-gray-800">45,832</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Stockage Utilisé</span>
                <span className="font-semibold text-gray-800">12.4 GB</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Dernière Sauvegarde</span>
                <span className="font-medium text-emerald-600">Mai 15, 03:00</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mt-2">
                <div className="h-full rounded-full bg-emerald-500" style={{ width: "62%" }} />
              </div>
              <p className="text-[10px] text-gray-400">62% du stockage utilisé</p>
              <Button variant="outline" size="sm" className="w-full text-xs mt-2 gap-1.5">
                <Database className="h-3.5 w-3.5" /> Sauvegarder Maintenant
              </Button>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="h-4 w-4 text-emerald-600" />
              <h3 className="text-base font-semibold text-gray-800">Contact Support</h3>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase block mb-1.5">Email</label>
                <input defaultValue="support@lambdata.ai" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase block mb-1.5">Serveur Discord</label>
                <input defaultValue="discord.gg/lambdata" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
            </div>
          </div>

          {/* Save */}
          <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white gap-2" onClick={() => setShowSaveModal(true)}>
            <Save className="h-4 w-4" /> Enregistrer les Modifications
          </Button>
        </div>
      </div>

      {/* Modal: Confirmation Sauvegarde */}
      <Dialog open={showSaveModal} onOpenChange={setShowSaveModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              <DialogTitle>Confirmer les Modifications</DialogTitle>
            </div>
            <DialogDescription>Voulez-vous enregistrer ces changements ?</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-center">
              <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-emerald-800">Les paramètres suivants seront mis à jour :</p>
              <ul className="text-xs text-emerald-600 mt-2 space-y-1 text-left max-w-xs mx-auto">
                <li>• Paramètres généraux (nom, langue, fuseau)</li>
                <li>• Préférences de notification</li>
                <li>• Seuils de sécurité et modération</li>
                <li>• Informations de contact</li>
              </ul>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowSaveModal(false)}>Annuler</Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white gap-1.5" onClick={() => setShowSaveModal(false)}>
              <Save className="h-4 w-4" /> Enregistrer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal: Changer Mot de Passe */}
      <Dialog open={showPasswordModal} onOpenChange={setShowPasswordModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-emerald-600" />
              <DialogTitle>Changer le Mot de Passe</DialogTitle>
            </div>
            <DialogDescription>Mettez à jour votre mot de passe administrateur</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase block mb-1.5">Mot de Passe Actuel</label>
              <input type="password" placeholder="••••••••" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase block mb-1.5">Nouveau Mot de Passe</label>
              <input type="password" placeholder="••••••••" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <p className="text-[10px] text-gray-400 mt-1">Minimum 8 caractères, 1 majuscule, 1 chiffre</p>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase block mb-1.5">Confirmer le Mot de Passe</label>
              <input type="password" placeholder="••••••••" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowPasswordModal(false)}>Annuler</Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white gap-1.5" onClick={() => setShowPasswordModal(false)}>
              <Lock className="h-4 w-4" /> Mettre à Jour
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

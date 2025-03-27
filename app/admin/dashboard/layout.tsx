import type React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  LayoutDashboard,
  LogOut,
  Bell,
  Settings,
  ChevronDown,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* En-tête */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <Image
                  src="/imgs/logoInsamIcon.png"
                  alt="Logo Institut"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
                <span className="ml-2 text-xl font-semibold text-gray-900">
                IUEs / Insam
                </span>
              </div>
              <nav className="ml-6 flex space-x-8">
                <Link
                  href="/admin/dashboard"
                  className="inline-flex items-center border-b-2 border-blue-500 px-1 pt-1 text-sm font-medium text-gray-900"
                >
                  Tableau de bord
                </Link>
                <Link
                  href="/admin/dashboard/inscriptions"
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Inscriptions
                </Link>
              </nav>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span className="sr-only">Voir les notifications</span>
                <Bell className="h-6 w-6" />
              </button>

              {/* Profil dropdown */}
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="flex items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    id="user-menu-button"
                  >
                    <span className="sr-only">Ouvrir le menu utilisateur</span>
                    <Image
                      className="h-8 w-8 rounded-full"
                      src="/imgs/logoInsamIcon.png"
                      alt="Photo de profil"
                      width={32}
                      height={32}
                    />
                    <span className="ml-2 hidden md:block text-sm font-medium text-gray-700">
                      Administrateur
                    </span>
                    <ChevronDown className="ml-1 h-4 w-4 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Barre latérale */}
        <div className="hidden md:flex md:w-64 md:flex-col h-auto">
          <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <nav className="mt-5 flex-1 space-y-1 bg-white px-2">
                <Link
                  href="/admin/dashboard"
                  className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-900"
                >
                  <LayoutDashboard className="mr-3 h-5 w-5 flex-shrink-0 text-gray-500 group-hover:text-gray-500" />
                  Tableau de bord
                </Link>
                <Link
                  href="/admin/dashboard/inscriptions"
                  className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                >
                  <Users className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                  Inscriptions
                </Link>
                <Link
                  href="/admin/dashboard/settings"
                  className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                >
                  <Settings className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                  Paramètres
                </Link>
                <Link
                  href="/admin/"
                  className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                >
                  <LogOut className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                  Déconnexion
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

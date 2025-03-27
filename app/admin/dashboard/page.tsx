"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Users,
  CheckCircle,
  Clock,
  XCircle,
  TrendingUp,
  BarChart4,
  ArrowRight,
  UserPlus,
} from "lucide-react";

// Types pour les statistiques
type StatisticItem = {
  name: string;
  stat: string;
  icon: React.ReactNode;
  color: string;
};

// Types pour les inscriptions récentes
type Inscription = {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  formation: string;
  date: string;
  statut: "en_attente" | "approuvee" | "rejetee";
};

export default function AdminDashboard() {
  const [stats, setStats] = useState<StatisticItem[]>([]);
  const [recentInscriptions, setRecentInscriptions] = useState<Inscription[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler le chargement des données
    const loadData = () => {
      // Données de statistiques fictives
      const statsData: StatisticItem[] = [
        {
          name: "Total des inscriptions",
          stat: "156",
          icon: <Users className="h-6 w-6" />,
          color: "bg-blue-500",
        },
        {
          name: "Inscriptions approuvées",
          stat: "98",
          icon: <CheckCircle className="h-6 w-6" />,
          color: "bg-green-500",
        },
        {
          name: "En attente",
          stat: "42",
          icon: <Clock className="h-6 w-6" />,
          color: "bg-yellow-500",
        },
        {
          name: "Rejetées",
          stat: "16",
          icon: <XCircle className="h-6 w-6" />,
          color: "bg-red-500",
        },
      ];

      // Données d'inscriptions récentes fictives
      const inscriptionsData: Inscription[] = [
        {
          id: 1,
          nom: "Dupont",
          prenom: "Marie",
          email: "marie.dupont@example.com",
          formation: "Master en Sciences Économiques et Gestion",
          date: "2023-03-08",
          statut: "en_attente",
        },
        {
          id: 2,
          nom: "Martin",
          prenom: "Thomas",
          email: "thomas.martin@example.com",
          formation: "Licence en Informatique et Sciences des Données",
          date: "2023-03-07",
          statut: "approuvee",
        },
        {
          id: 3,
          nom: "Petit",
          prenom: "Sophie",
          email: "sophie.petit@example.com",
          formation: "Doctorat",
          date: "2023-03-06",
          statut: "rejetee",
        },
        {
          id: 4,
          nom: "Bernard",
          prenom: "Lucas",
          email: "lucas.bernard@example.com",
          formation: "Licence en Sciences de l'Ingénieur",
          date: "2023-03-05",
          statut: "approuvee",
        },
        {
          id: 5,
          nom: "Dubois",
          prenom: "Emma",
          email: "emma.dubois@example.com",
          formation: "Master en Informatique et Sciences des Données",
          date: "2023-03-04",
          statut: "en_attente",
        },
      ];

      setStats(statsData);
      setRecentInscriptions(inscriptionsData);
      setIsLoading(false);
    };

    // Simuler un délai de chargement
    const timer = setTimeout(() => {
      loadData();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Fonction pour obtenir la classe de couleur en fonction du statut
  const getStatusColor = (statut: string) => {
    switch (statut) {
      case "approuvee":
        return "bg-green-100 text-green-800";
      case "en_attente":
        return "bg-yellow-100 text-yellow-800";
      case "rejetee":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Fonction pour obtenir le texte du statut
  const getStatusText = (statut: string) => {
    switch (statut) {
      case "approuvee":
        return "Approuvée";
      case "en_attente":
        return "En attente";
      case "rejetee":
        return "Rejetée";
      default:
        return "Inconnu";
    }
  };

  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          Tableau de bord
        </h1>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Statistiques */}
        <div className="mt-8">
          <h2 className="text-lg font-medium leading-6 text-gray-900">
            Aperçu
          </h2>
          <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {isLoading
              ? // Afficher des placeholders pendant le chargement
                Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow animate-pulse"
                    >
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-md bg-gray-200"></div>
                        <div className="ml-5 w-full">
                          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                          <div className="mt-2 h-8 bg-gray-200 rounded w-1/4"></div>
                        </div>
                      </div>
                    </div>
                  ))
              : // Afficher les statistiques
                stats.map((item) => (
                  <div
                    key={item.name}
                    className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow"
                  >
                    <div className="flex items-center">
                      <div
                        className={`flex-shrink-0 rounded-md p-3 ${item.color} text-white`}
                      >
                        {item.icon}
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="truncate text-sm font-medium text-gray-500">
                            {item.name}
                          </dt>
                          <dd>
                            <div className="text-lg font-medium text-gray-900">
                              {item.stat}
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>

        {/* Graphiques */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-3 w-0 flex-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    Tendance des inscriptions
                  </h3>
                  <p className="text-sm text-gray-500">Derniers 30 jours</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <div className="text-sm">
                <Link
                  href="/admin/statistiques"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Voir les détails
                </Link>
              </div>
            </div>
            <div className="h-64 p-5 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <BarChart4 className="mx-auto h-12 w-12" />
                <p className="mt-2 text-sm">
                  Graphique des inscriptions par jour
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <UserPlus className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-3 w-0 flex-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    Inscriptions par formation
                  </h3>
                  <p className="text-sm text-gray-500">Répartition actuelle</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <div className="text-sm">
                <Link
                  href="/admin/statistiques"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Voir les détails
                </Link>
              </div>
            </div>
            <div className="h-64 p-5 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <BarChart4 className="mx-auto h-12 w-12" />
                <p className="mt-2 text-sm">
                  Graphique des inscriptions par formation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Inscriptions récentes */}
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">
              Inscriptions récentes
            </h2>
            <Link
              href="/admin/inscriptions"
              className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center"
            >
              Voir toutes les inscriptions
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Nom
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    Formation
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Statut
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {isLoading
                  ? // Afficher des placeholders pendant le chargement
                    Array(5)
                      .fill(0)
                      .map((_, index) => (
                        <tr key={index}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6">
                            <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
                          </td>
                          <td className="hidden px-3 py-4 sm:table-cell">
                            <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
                          </td>
                          <td className="hidden px-3 py-4 lg:table-cell">
                            <div className="h-4 bg-gray-200 rounded w-40 animate-pulse"></div>
                          </td>
                          <td className="px-3 py-4">
                            <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
                          </td>
                          <td className="px-3 py-4">
                            <div className="h-6 bg-gray-200 rounded w-20 animate-pulse"></div>
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <div className="h-4 bg-gray-200 rounded w-12 animate-pulse ml-auto"></div>
                          </td>
                        </tr>
                      ))
                  : // Afficher les inscriptions récentes
                    recentInscriptions.map((inscription) => (
                      <tr key={inscription.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                          <div className="flex items-center">
                            <div className="font-medium text-gray-900">
                              {inscription.prenom} {inscription.nom}
                            </div>
                          </div>
                        </td>
                        <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                          {inscription.email}
                        </td>
                        <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                          {inscription.formation}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {new Date(inscription.date).toLocaleDateString(
                            "fr-FR"
                          )}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          <span
                            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusColor(
                              inscription.statut
                            )}`}
                          >
                            {getStatusText(inscription.statut)}
                          </span>
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <Link
                            href={`/admin/inscriptions/${inscription.id}`}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            Voir
                            <span className="sr-only">, {inscription.nom}</span>
                          </Link>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  ChevronDown,
  CheckCircle,
  Clock,
  XCircle,
  Download,
} from "lucide-react";

// Types pour les inscriptions
type Inscription = {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  formation: string;
  date: string;
  statut: "en_attente" | "approuvee" | "rejetee";
};

export default function InscriptionsList() {
  const [inscriptions, setInscriptions] = useState<Inscription[]>([]);
  const [filteredInscriptions, setFilteredInscriptions] = useState<
    Inscription[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("tous");
  const [formationFilter, setFormationFilter] = useState<string>("tous");

  useEffect(() => {
    // Simuler le chargement des données
    const loadData = () => {
      // Données d'inscriptions fictives
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
        {
          id: 6,
          nom: "Leroy",
          prenom: "Hugo",
          email: "hugo.leroy@example.com",
          formation: "Licence en Sciences Économiques et Gestion",
          date: "2023-03-03",
          statut: "approuvee",
        },
        {
          id: 7,
          nom: "Moreau",
          prenom: "Camille",
          email: "camille.moreau@example.com",
          formation: "Master en Sciences de l'Ingénieur",
          date: "2023-03-02",
          statut: "en_attente",
        },
        {
          id: 8,
          nom: "Garcia",
          prenom: "Léa",
          email: "lea.garcia@example.com",
          formation: "Doctorat",
          date: "2023-03-01",
          statut: "rejetee",
        },
        {
          id: 9,
          nom: "Roux",
          prenom: "Nathan",
          email: "nathan.roux@example.com",
          formation: "Licence en Informatique et Sciences des Données",
          date: "2023-02-28",
          statut: "approuvee",
        },
        {
          id: 10,
          nom: "Fournier",
          prenom: "Chloé",
          email: "chloe.fournier@example.com",
          formation: "Master en Sciences Économiques et Gestion",
          date: "2023-02-27",
          statut: "en_attente",
        },
      ];

      setInscriptions(inscriptionsData);
      setFilteredInscriptions(inscriptionsData);
      setIsLoading(false);
    };

    // Simuler un délai de chargement
    const timer = setTimeout(() => {
      loadData();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Filtrer les inscriptions en fonction des critères de recherche et de filtre
  useEffect(() => {
    let result = inscriptions;

    // Filtrer par terme de recherche
    if (searchTerm) {
      result = result.filter(
        (inscription) =>
          inscription.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
          inscription.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
          inscription.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtrer par statut
    if (statusFilter !== "tous") {
      result = result.filter(
        (inscription) => inscription.statut === statusFilter
      );
    }

    // Filtrer par formation
    if (formationFilter !== "tous") {
      result = result.filter((inscription) =>
        inscription.formation.includes(formationFilter)
      );
    }

    setFilteredInscriptions(result);
  }, [searchTerm, statusFilter, formationFilter, inscriptions]);

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

  // Liste des formations uniques pour le filtre
  const formations = [
    "Licence en Sciences Économiques et Gestion",
    "Master en Sciences Économiques et Gestion",
    "Licence en Informatique et Sciences des Données",
    "Master en Informatique et Sciences des Données",
    "Licence en Sciences de l'Ingénieur",
    "Master en Sciences de l'Ingénieur",
    "Doctorat",
  ];

  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          Gestion des inscriptions
        </h1>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Filtres et recherche */}
        <div className="mt-8 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative flex-1 max-w-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-10 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              placeholder="Rechercher par nom, prénom ou email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  id="status-filter-button"
                >
                  <Filter className="mr-2 h-5 w-5 text-gray-400" />
                  Statut:{" "}
                  {statusFilter === "tous"
                    ? "Tous"
                    : getStatusText(statusFilter)}
                  <ChevronDown className="ml-2 h-5 w-5 text-gray-400" />
                </button>
              </div>
              <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden">
                <div className="py-1">
                  <button
                    className={`block px-4 py-2 text-sm w-full text-left ${
                      statusFilter === "tous"
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-700"
                    }`}
                    onClick={() => setStatusFilter("tous")}
                  >
                    Tous
                  </button>
                  <button
                    className={`flex items-center px-4 py-2 text-sm w-full text-left ${
                      statusFilter === "approuvee"
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-700"
                    }`}
                    onClick={() => setStatusFilter("approuvee")}
                  >
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Approuvée
                  </button>
                  <button
                    className={`flex items-center px-4 py-2 text-sm w-full text-left ${
                      statusFilter === "en_attente"
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-700"
                    }`}
                    onClick={() => setStatusFilter("en_attente")}
                  >
                    <Clock className="mr-2 h-4 w-4 text-yellow-500" />
                    En attente
                  </button>
                  <button
                    className={`flex items-center px-4 py-2 text-sm w-full text-left ${
                      statusFilter === "rejetee"
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-700"
                    }`}
                    onClick={() => setStatusFilter("rejetee")}
                  >
                    <XCircle className="mr-2 h-4 w-4 text-red-500" />
                    Rejetée
                  </button>
                </div>
              </div>
            </div>

            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  id="formation-filter-button"
                >
                  <Filter className="mr-2 h-5 w-5 text-gray-400" />
                  Formation:{" "}
                  {formationFilter === "tous"
                    ? "Toutes"
                    : formationFilter.split(" ")[0]}
                  <ChevronDown className="ml-2 h-5 w-5 text-gray-400" />
                </button>
              </div>
              <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden">
                <div className="py-1 max-h-60 overflow-y-auto">
                  <button
                    className={`block px-4 py-2 text-sm w-full text-left ${
                      formationFilter === "tous"
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-700"
                    }`}
                    onClick={() => setFormationFilter("tous")}
                  >
                    Toutes les formations
                  </button>
                  {formations.map((formation) => (
                    <button
                      key={formation}
                      className={`block px-4 py-2 text-sm w-full text-left ${
                        formationFilter === formation
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-700"
                      }`}
                      onClick={() => setFormationFilter(formation)}
                    >
                      {formation}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <Download className="mr-2 h-5 w-5 text-gray-400" />
              Exporter
            </button>
          </div>
        </div>

        {/* Liste des inscriptions */}
        <div className="mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
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
              {isLoading ? (
                // Afficher des placeholders pendant le chargement
                Array(10)
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
              ) : filteredInscriptions.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-10 text-center text-sm text-gray-500"
                  >
                    Aucune inscription trouvée
                  </td>
                </tr>
              ) : (
                // Afficher les inscriptions filtrées
                filteredInscriptions.map((inscription) => (
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
                      {new Date(inscription.date).toLocaleDateString("fr-FR")}
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
                        href={`/admin/dashboard/inscriptions/${inscription.id}`}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        Voir<span className="sr-only">, {inscription.nom}</span>
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Précédent
            </button>
            <button className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Suivant
            </button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Affichage de <span className="font-medium">1</span> à{" "}
                <span className="font-medium">
                  {filteredInscriptions.length}
                </span>{" "}
                sur{" "}
                <span className="font-medium">
                  {filteredInscriptions.length}
                </span>{" "}
                résultats
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <button className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                  <span className="sr-only">Précédent</span>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  aria-current="page"
                  className="relative z-10 inline-flex items-center border border-blue-500 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 focus:z-20"
                >
                  1
                </button>
                <button className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                  <span className="sr-only">Suivant</span>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  XCircle,
  Mail,
  Phone,
  MapPin,
  Calendar,
  BookOpen,
  Globe,
  User,
  Flag,
} from "lucide-react";

// Types pour les inscriptions
type Inscription = {
  id: number;
  civilite: string;
  nom: string;
  prenom: string;
  dateNaissance: string;
  lieuNaissance: string;
  nationalite: string;
  adresse: string;
  codePostal: string;
  ville: string;
  pays: string;
  telephone: string;
  email: string;
  niveauEtude: string;
  diplomeActuel: string;
  anneeDiplome: string;
  formationSouhaitee: string;
  experiencePro: string;
  langues: string;
  motivations: string;
  commentDecouverte: string;
  date: string;
  statut: "en_attente" | "approuvee" | "rejetee";
};

export default function InscriptionDetail({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const [inscription, setInscription] = useState<Inscription | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [statusUpdating, setStatusUpdating] = useState(false);

  useEffect(() => {
    // Simuler le chargement des données
    const loadData = () => {
      // Données d'inscription fictive
      const inscriptionData: Inscription = {
        id: Number.parseInt(params.id),
        civilite: "M.",
        nom: "Dupont",
        prenom: "Jean",
        dateNaissance: "1995-05-15",
        lieuNaissance: "Paris",
        nationalite: "Française",
        adresse: "123 Rue de la République",
        codePostal: "75001",
        ville: "Paris",
        pays: "France",
        telephone: "+33 6 12 34 56 78",
        email: "jean.dupont@example.com",
        niveauEtude: "bac+3",
        diplomeActuel: "Licence en Informatique",
        anneeDiplome: "2022",
        formationSouhaitee: "Master en Informatique et Sciences des Données",
        experiencePro:
          "Stage de 6 mois chez XYZ Technologies en tant que développeur web.",
        langues: "Français (natif), Anglais (B2), Espagnol (A2)",
        motivations:
          "Je souhaite approfondir mes connaissances en science des données et intelligence artificielle pour me spécialiser dans ce domaine en pleine expansion.",
        commentDecouverte: "Salon étudiant",
        date: "2023-03-10",
        statut: "en_attente",
      };

      setInscription(inscriptionData);
      setIsLoading(false);
    };

    // Simuler un délai de chargement
    const timer = setTimeout(() => {
      loadData();
    }, 1000);

    return () => clearTimeout(timer);
  }, [params.id]);

  // Fonction pour mettre à jour le statut
  const updateStatus = (newStatus: "approuvee" | "en_attente" | "rejetee") => {
    setStatusUpdating(true);

    // Simuler une requête API
    setTimeout(() => {
      if (inscription) {
        setInscription({ ...inscription, statut: newStatus });
      }
      setStatusUpdating(false);
    }, 1000);
  };

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

  // Fonction pour obtenir l'icône du statut
  const getStatusIcon = (statut: string) => {
    switch (statut) {
      case "approuvee":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "en_attente":
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case "rejetee":
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <button
            onClick={() => router.back()}
            className="mr-4 rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-2xl font-semibold text-gray-900">
            Détails de l'inscription
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {isLoading ? (
          // Afficher un placeholder pendant le chargement
          <div className="mt-8 overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                {Array(8)
                  .fill(0)
                  .map((_, index) => (
                    <div key={index} className="animate-pulse">
                      <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                      <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ) : inscription ? (
          <div className="mt-8 overflow-hidden bg-white shadow sm:rounded-lg">
            {/* En-tête avec statut */}
            <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Demande d'inscription #{inscription.id}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Soumise le{" "}
                  {new Date(inscription.date).toLocaleDateString("fr-FR")}
                </p>
              </div>
              <div className="flex items-center">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium ${getStatusColor(
                    inscription.statut
                  )}`}
                >
                  {getStatusIcon(inscription.statut)}
                  <span className="ml-1">
                    {getStatusText(inscription.statut)}
                  </span>
                </span>
              </div>
            </div>

            {/* Informations personnelles */}
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                Informations personnelles
              </h3>
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <User className="mr-1 h-4 w-4 text-gray-400" />
                    Nom complet
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {inscription.civilite} {inscription.prenom}{" "}
                    {inscription.nom}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <Calendar className="mr-1 h-4 w-4 text-gray-400" />
                    Date de naissance
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {new Date(inscription.dateNaissance).toLocaleDateString(
                      "fr-FR"
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <MapPin className="mr-1 h-4 w-4 text-gray-400" />
                    Lieu de naissance
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {inscription.lieuNaissance}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <Flag className="mr-1 h-4 w-4 text-gray-400" />
                    Nationalité
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {inscription.nationalite}
                  </dd>
                </div>
              </div>
            </div>

            {/* Coordonnées */}
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                Coordonnées
              </h3>
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <Mail className="mr-1 h-4 w-4 text-gray-400" />
                    Email
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {inscription.email}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <Phone className="mr-1 h-4 w-4 text-gray-400" />
                    Téléphone
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {inscription.telephone}
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <MapPin className="mr-1 h-4 w-4 text-gray-400" />
                    Adresse
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {inscription.adresse}
                    <br />
                    {inscription.codePostal} {inscription.ville}
                    <br />
                    {inscription.pays}
                  </dd>
                </div>
              </div>
            </div>

            {/* Formation */}
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                Formation
              </h3>
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Niveau d'études actuel
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {inscription.niveauEtude}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Diplôme le plus élevé obtenu
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {inscription.diplomeActuel}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Année d'obtention
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {inscription.anneeDiplome}
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <BookOpen className="mr-1 h-4 w-4 text-gray-400" />
                    Formation souhaitée
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {inscription.formationSouhaitee}
                  </dd>
                </div>
              </div>
            </div>

            {/* Informations complémentaires */}
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                Informations complémentaires
              </h3>
              <div className="grid grid-cols-1 gap-y-6 gap-x-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <Globe className="mr-1 h-4 w-4 text-gray-400" />
                    Langues parlées
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {inscription.langues}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Expérience professionnelle
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {inscription.experiencePro || "Aucune"}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Motivations
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {inscription.motivations}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Comment a-t-il découvert l'institut?
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {inscription.commentDecouverte}
                  </dd>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                Actions
              </h3>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <button
                  type="button"
                  onClick={() => updateStatus("approuvee")}
                  disabled={
                    statusUpdating || inscription.statut === "approuvee"
                  }
                  className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
                    inscription.statut === "approuvee"
                      ? "bg-green-300 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  }`}
                >
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Approuver
                </button>
                <button
                  type="button"
                  onClick={() => updateStatus("en_attente")}
                  disabled={
                    statusUpdating || inscription.statut === "en_attente"
                  }
                  className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
                    inscription.statut === "en_attente"
                      ? "bg-yellow-300 cursor-not-allowed"
                      : "bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                  }`}
                >
                  <Clock className="mr-2 h-4 w-4" />
                  Mettre en attente
                </button>
                <button
                  type="button"
                  onClick={() => updateStatus("rejetee")}
                  disabled={statusUpdating || inscription.statut === "rejetee"}
                  className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
                    inscription.statut === "rejetee"
                      ? "bg-red-300 cursor-not-allowed"
                      : "bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  }`}
                >
                  <XCircle className="mr-2 h-4 w-4" />
                  Rejeter
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-8 bg-white shadow sm:rounded-lg p-6 text-center">
            <p className="text-gray-500">Inscription non trouvée</p>
            <Link
              href="/admin/inscriptions"
              className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-500"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à la liste des inscriptions
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

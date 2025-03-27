"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";
import { Footer } from "@/components/Footer";


interface Specialty {
  code: string;
  fullName: string;
  institution: string;
}

type AcademicSpecialties = Record<string, Specialty[]>;

const academicSpecialties: AcademicSpecialties = {

    "BTS": [
      { "code": "GAP", "fullName": "Gestion et Administrations des Ports", "institution": "INSAM" },
      { "code": "HSE", "fullName": "Hygiène Sécurité Environnement", "institution": "ISTE" },
      { "code": "CFP", "fullName": "Comptabilité et Finances Publique", "institution": "INSAM" },
      { "code": "FCT", "fullName": "Fiscalité des Collectivités Territoriales", "institution": "INSAM" },
      { "code": "ACT", "fullName": "Administration des Collectivités Territoriales", "institution": "INSAM" },
      { "code": "GMH", "fullName": "Gestion et Management Hôtelier", "institution": "INSAM" },
      { "code": "MTH", "fullName": "Management et Technique d'Hébergement", "institution": "INSAM" },
      { "code": "GCU", "fullName": "Génie Culinaire", "institution": "INSAM" },
      { "code": "CSR", "fullName": "Commercialisation et Service de Restauration", "institution": "INSAM" },
      { "code": "AJ", "fullName": "Assistant Judiciaire", "institution": "INSAM" },
      { "code": "AS", "fullName": "Assurance", "institution": "INSAM" },
      { "code": "BAF", "fullName": "Banque et Finance", "institution": "INSAM" },
      { "code": "BAT", "fullName": "Bâtiment", "institution": "ISTE" },
      { "code": "CI", "fullName": "Commerce International", "institution": "INSAM" },
      { "code": "CO", "fullName": "Communication des Organisations", "institution": "INSAM" },
      { "code": "CGE", "fullName": "Comptabilité et Gestion des Entreprises", "institution": "INSAM" },
      { "code": "CIR", "fullName": "Contrôle Instrument et Régulation", "institution": "INSAM" },
      { "code": "DFD", "fullName": "Droit des Affaires de l'Entreprise", "institution": "INSAM" },
      { "code": "ET", "fullName": "Électronique", "institution": "ISTE" },
      { "code": "GL", "fullName": "Génie Logiciel", "institution": "ISTE" },
      { "code": "GSI", "fullName": "Gestion des Systèmes d'Information", "institution": "ISTE" },
      { "code": "GLT", "fullName": "Gestion Logistique et Transport", "institution": "INSAM" },
      { "code": "IH", "fullName": "Industrie de l'Habillement", "institution": "ISTE" },
      { "code": "IWD", "fullName": "Infographie et Web Design", "institution": "ISTE" },
      { "code": "IIA", "fullName": "Informatique Industrielle et Automatique", "institution": "ISTE" },
      { "code": "JO", "fullName": "Journalisme", "institution": "INSAM" },
      { "code": "KT", "fullName": "Kinésithérapie", "institution": "ISSAS" },
      { "code": "MSE", "fullName": "Maintenance des Systèmes Électroniques", "institution": "ISTE" },
      { "code": "MSI", "fullName": "Maintenance des Systèmes Informatiques", "institution": "ISTE" },
      { "code": "MCV", "fullName": "Marketing-Commerce-Vente", "institution": "INSAM" },
      { "code": "MECA", "fullName": "Mécatronique", "institution": "ISTE" },
      { "code": "ODO", "fullName": "Odontostomatologie", "institution": "ISSAS" },
      { "code": "PV", "fullName": "Production Végétale", "institution": "ISSAS" },
      { "code": "PG", "fullName": "Puériculture et Gérontologie", "institution": "ISSAS" },
      { "code": "RIM", "fullName": "Radiologie et Imagerie Médicale", "institution": "ISSAS" },
      { "code": "RS", "fullName": "Réseaux et Sécurité", "institution": "ISTE" },
      { "code": "SF", "fullName": "Sage-Femme", "institution": "ISSAS" },
      { "code": "SI", "fullName": "Sciences Infirmières", "institution": "ISSAS" },
      { "code": "TL", "fullName": "Techniques de Laboratoire", "institution": "ISSAS" },
      { "code": "TPH", "fullName": "Techniques Pharmaceutiques", "institution": "ISSAS" },
      { "code": "TEL", "fullName": "Télécommunication", "institution": "ISTE" },
      { "code": "TP", "fullName": "Travaux Publics", "institution": "ISTE" }
    ],
    "HND": [
      { "code": "SWE", "fullName": "Software Engineering", "institution": "ISTE" },
      { "code": "CSN", "fullName": "Computer Sciences and Networks", "institution": "ISTE" },
      { "code": "DBM", "fullName": "Database Management", "institution": "ISTE" },
      { "code": "ASM", "fullName": "Assistant Manager", "institution": "INSAM" },
      { "code": "ACC", "fullName": "Accountancy", "institution": "INSAM" },
      { "code": "BIF", "fullName": "Banking and Finance", "institution": "INSAM" },
      { "code": "DTH", "fullName": "Dental Therapy", "institution": "ISSAS" },
      { "code": "DCT", "fullName": "Didactic Curriculum Development and Teaching", "institution": "INSAM" },
      { "code": "EPS", "fullName": "Electrical Power System", "institution": "ISTE" },
      { "code": "HVR", "fullName": "Human Resource Management", "institution": "INSAM" },
      { "code": "INS", "fullName": "Insurance", "institution": "INSAM" },
      { "code": "INT", "fullName": "International Trade", "institution": "INSAM" },
      { "code": "LTM", "fullName": "Logistics and Transport Management", "institution": "INSAM" },
      { "code": "MTS", "fullName": "Marketing-Trade-Sales", "institution": "INSAM" },
      { "code": "MIT", "fullName": "Medical Imaging Technology", "institution": "ISSAS" },
      { "code": "MLS", "fullName": "Medical Laboratory Sciences", "institution": "ISSAS" },
      { "code": "MID", "fullName": "Midwifery", "institution": "ISSAS" },
      { "code": "NUS", "fullName": "Nursing", "institution": "ISSAS" },
      { "code": "PHT", "fullName": "Pharmacy Technician", "institution": "ISSAS" },
      { "code": "PHY", "fullName": "Physiotherapy", "institution": "ISSAS" },
      { "code": "HMC", "fullName": "Hotel Management and Catering", "institution": "INSAM" }
    ]
};

// Types pour le formulaire
type FormData = {
  // Étape 1: Informations personnelles
  civilite: string;
  nom: string;
  prenom: string;
  dateNaissance: string;
  lieuNaissance: string;
  nationalite: string;

  // Étape 2: Coordonnées
  adresse: string;
  departement: string;
  ville: string;
  pays: string;
  telephone: string;
  email: string;

  // Étape 3: Formation
  cycle: string;
  diplomeActuel: string;
  anneeDiplome: string;
  specialite: string;

  // Étape 4: Informations complémentaires
  personeUrgenteNom: string;
  telephonePersoneUrgent: string;
  langues: string;
  motivations: string;
  commentDecouverte: string;
};

// État initial du formulaire
const initialFormData: FormData = {
  civilite: "",
  nom: "",
  prenom: "",
  dateNaissance: "",
  lieuNaissance: "",
  nationalite: "",

  adresse: "",
  departement: "",
  ville: "",
  pays: "",
  telephone: "",
  email: "",

  cycle: "",
  diplomeActuel: "",
  anneeDiplome: "",
  specialite: "",

  personeUrgenteNom: "",
  telephonePersoneUrgent: "",
  langues: "",
  motivations: "",
  commentDecouverte: "",
};

export default function InscriptionPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formSubmitted, setFormSubmitted] = useState(false);

  console.log(formData);

  // Nombre total d'étapes
  const totalSteps = 5;

  // Gestion des changements dans le formulaire
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Navigation entre les étapes
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  // Soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Ici, vous pourriez envoyer les données à votre backend
    console.log("Formulaire soumis:", formData);
  };

  // Calcul du pourcentage de progression
  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;


  const [selectedDegree, setSelectedDegree] = useState<string>("");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("");

  const handleDegreeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDegree(event.target.value);
    setSelectedSpecialty("");
  };

  const handleSpecialtyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSpecialty(event.target.value);
  };

  const getSpecialties = (): Specialty[] => {
    return selectedDegree ? academicSpecialties[selectedDegree] : [];
  };

  const getSelectedSpecialtyDetails = (): Specialty | undefined => {
    return getSpecialties().find(spec => spec.code === selectedSpecialty);
  };



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/imgs/logoInsamIcon.png"
              alt="Logo Institut"
              width={40}
              height={40}
              className="w-8 h-auto"
            />
            <span className="font-bold text-xl text-gray-800">IUEs/Insam</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Titre de la page */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Inscription en ligne
          </h1>
          <p className="text-gray-600 mt-2">
            Complétez le formulaire ci-dessous pour vous inscrire à l'Institut
            Universitaire INSAM
          </p>
        </div>

        {/* Barre de progression */}
        <div className="mb-8">
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                  Étape {currentStep} sur {totalSteps}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-blue-600">
                  {progressPercentage.toFixed(0)}%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
              <div
                style={{ width: `${progressPercentage}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 transition-all duration-500"
              ></div>
            </div>
          </div>

          {/* Étapes */}
          <div className="hidden md:flex justify-between">
            <div
              className={`text-center ${currentStep >= 1 ? "text-blue-600" : "text-gray-400"
                }`}
            >
              <div
                className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${currentStep >= 1 ? "bg-blue-600 text-white" : "bg-gray-200"
                  }`}
              >
                1
              </div>
              <div className="text-xs mt-1">Informations personnelles</div>
            </div>
            <div
              className={`text-center ${currentStep >= 2 ? "text-blue-600" : "text-gray-400"
                }`}
            >
              <div
                className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${currentStep >= 2 ? "bg-blue-600 text-white" : "bg-gray-200"
                  }`}
              >
                2
              </div>
              <div className="text-xs mt-1">Coordonnées</div>
            </div>
            <div
              className={`text-center ${currentStep >= 3 ? "text-blue-600" : "text-gray-400"
                }`}
            >
              <div
                className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${currentStep >= 3 ? "bg-blue-600 text-white" : "bg-gray-200"
                  }`}
              >
                3
              </div>
              <div className="text-xs mt-1">Formation</div>
            </div>
            <div
              className={`text-center ${currentStep >= 4 ? "text-blue-600" : "text-gray-400"
                }`}
            >
              <div
                className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${currentStep >= 4 ? "bg-blue-600 text-white" : "bg-gray-200"
                  }`}
              >
                4
              </div>
              <div className="text-xs mt-1">Informations complémentaires</div>
            </div>
            <div
              className={`text-center ${currentStep >= 5 ? "text-blue-600" : "text-gray-400"
                }`}
            >
              <div
                className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${currentStep >= 5 ? "bg-blue-600 text-white" : "bg-gray-200"
                  }`}
              >
                5
              </div>
              <div className="text-xs mt-1">Récapitulatif</div>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          {formSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Inscription réussie !
              </h2>
              <p className="text-gray-600 mb-6">
                Votre demande d'inscription a été soumise avec succès. Vous
                recevrez un email de confirmation dans les prochaines minutes.
              </p>
              <Link
                href="/"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Retour à l'accueil
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Étape 1: Informations personnelles */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Informations personnelles
                  </h2>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Civilité
                    </label>
                    <div className="flex space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="civilite"
                          value="M."
                          checked={formData.civilite === "M."}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="ml-2">M.</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="civilite"
                          value="Mme"
                          checked={formData.civilite === "Mme"}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="ml-2">Mme</span>
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="nom"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Votre nom de famille"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="prenom"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Prénom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Votre prénom"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="dateNaissance"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Date de naissance <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="dateNaissance"
                      name="dateNaissance"
                      value={formData.dateNaissance}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="lieuNaissance"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Lieu de naissance{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lieuNaissance"
                        name="lieuNaissance"
                        value={formData.lieuNaissance}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Ville de naissance"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="nationalite"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nationalité <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="nationalite"
                        name="nationalite"
                        value={formData.nationalite}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Votre nationalité"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Étape 2: Coordonnées */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Coordonnées
                  </h2>

                  <div className="space-y-2">
                    <label
                      htmlFor="adresse"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Adresse <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="adresse"
                      name="adresse"
                      value={formData.adresse}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Numéro et nom de rue"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="departement"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Departement <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="departement"
                        name="departement"
                        value={formData.departement}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Departement"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="ville"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Ville <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="ville"
                        name="ville"
                        value={formData.ville}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Ville"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="pays"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Pays <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="pays"
                      name="pays"
                      value={formData.pays}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Pays"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="telephone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Téléphone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Numéro de téléphone"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="votre.email@exemple.com"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Étape 3: Formation */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Formation souhaitée
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="diplomeActuel"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Baccalauréat obtenu{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="diplomeActuel"
                        name="diplomeActuel"
                        value={formData.diplomeActuel}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Ex: BACC A4ALL"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="anneeDiplome"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Année d'obtention{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="anneeDiplome"
                        name="anneeDiplome"
                        value={formData.anneeDiplome}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Ex: 2022"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="cycle"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Cycle <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="cycle"
                      name="cycle"
                      value={formData.cycle}
                      onChange={(e) => {
                        handleInputChange(e);
                        handleDegreeChange(e);
                      }}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"

                    >
                      <option value="">Sélectionnez votre cycle</option>
                      {Object.keys(academicSpecialties).map((degree) => (
                        <option key={degree} value={degree}>
                          {degree}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="specialite"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Spécialité <span className="text-red-500">*</span>
                    </label>
                    {
                      <select
                        id="specialite"
                        name="specialite"
                        value={formData.specialite}
                        onChange={(e) => {
                          handleInputChange(e);
                          handleSpecialtyChange(e);
                        }}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        {getSpecialties().map((specialty) => (
                          <option key={specialty.code} value={specialty.code}>
                            {`${specialty.code} - ${specialty.fullName} (${specialty.institution})`}
                          </option>
                        ))}
                      </select>
                    }
                  </div>
                </div>
              )}

              {/* Étape 4: Informations complémentaires */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Informations complémentaires
                  </h2>

                  <div className="space-y-2">
                    <label
                      htmlFor="personeUrgenteNom"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Personne à appeler en cas d'urgence
                    </label>
                    <input
                      type="text"
                      id="personeUrgenteNom"
                      name="personeUrgenteNom"
                      value={formData.personeUrgenteNom}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Nom"
                    />

                    <label
                      htmlFor="telephonePersoneUrgent"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Téléphone de la personne à appeler en cas d'urgence 
                    </label>
                    <input
                      type="tel"
                      id="telephonePersoneUrgent"
                      name="telephonePersoneUrgent"
                      value={formData.telephonePersoneUrgent}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Numéro de téléphone"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="langues"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Langues parlées <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="langues"
                      name="langues"
                      value={formData.langues}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ex: Français (natif), Anglais (B2), Espagnol (A2)"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="motivations"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Motivations <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="motivations"
                      name="motivations"
                      value={formData.motivations}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Expliquez vos motivations pour rejoindre notre institut et suivre cette formation"
                    ></textarea>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="commentDecouverte"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Comment avez-vous découvert notre institut?
                    </label>
                    <select
                      id="commentDecouverte"
                      name="commentDecouverte"
                      value={formData.commentDecouverte}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Sélectionnez une option</option>
                      <option value="internet">Recherche internet</option>
                      <option value="reseaux_sociaux">Réseaux sociaux</option>
                      <option value="salon">Salon étudiant</option>
                      <option value="presse">Presse</option>
                      <option value="bouche_oreille">Bouche à oreille</option>
                      <option value="ancien_etudiant">Ancien étudiant</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Étape 5: Récapitulatif */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Récapitulatif de votre inscription
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Veuillez vérifier les informations ci-dessous avant de
                    soumettre votre demande d'inscription.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-gray-900 mb-2">
                        Informations personnelles
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Civilité</p>
                          <p className="font-medium">
                            {formData.civilite || "-"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Nom</p>
                          <p className="font-medium">{formData.nom || "-"}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Prénom</p>
                          <p className="font-medium">
                            {formData.prenom || "-"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">
                            Date de naissance
                          </p>
                          <p className="font-medium">
                            {formData.dateNaissance || "-"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">
                            Lieu de naissance
                          </p>
                          <p className="font-medium">
                            {formData.lieuNaissance || "-"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Nationalité</p>
                          <p className="font-medium">
                            {formData.nationalite || "-"}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-gray-900 mb-2">
                        Coordonnées
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                          <p className="text-sm text-gray-500">Adresse</p>
                          <p className="font-medium">
                            {formData.adresse || "-"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Departement</p>
                          <p className="font-medium">
                            {formData.departement || "-"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Ville</p>
                          <p className="font-medium">{formData.ville || "-"}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Pays</p>
                          <p className="font-medium">{formData.pays || "-"}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Téléphone</p>
                          <p className="font-medium">
                            {formData.telephone || "-"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="font-medium">{formData.email || "-"}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-gray-900 mb-2">
                        Formation
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">
                          Cycle
                          </p>
                          <p className="font-medium">{formData.cycle || "-"}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">
                          Baccalauréat obtenu
                          </p>
                          <p className="font-medium">
                            {formData.diplomeActuel || "-"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">
                            Année d'obtention
                          </p>
                          <p className="font-medium">
                            {formData.anneeDiplome || "-"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">
                            Formation souhaitée
                          </p>
                          <p className="font-medium">
                            {formData.specialite || "-"}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-gray-900 mb-2">
                        Informations complémentaires
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-500">
                          Personne à appeler en cas d'urgence
                          </p>
                          <p className="font-medium">
                            {formData.personeUrgenteNom || "-"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">
                          Téléphone de la personne à appeler en cas d'urgence
                          </p>
                          <p className="font-medium">
                            {formData.telephonePersoneUrgent || "-"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">
                            Langues parlées
                          </p>
                          <p className="font-medium">
                            {formData.langues || "-"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Motivations</p>
                          <p className="font-medium">
                            {formData.motivations || "-"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">
                            Comment avez-vous découvert notre institut?
                          </p>
                          <p className="font-medium">
                            {formData.commentDecouverte || "-"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        required
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="terms"
                        className="ml-2 block text-sm text-gray-700"
                      >
                        J'accepte les{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          conditions d'utilisation
                        </a>{" "}
                        et la{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          politique de confidentialité
                        </a>{" "}
                        de l'Institut Universitaire INSAM{" "}
                        <span className="text-red-500">*</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Boutons de navigation */}
              <div className="mt-8 flex justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Précédent
                  </button>
                ) : (
                  <div></div>
                )}

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Suivant
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Soumettre ma demande
                    <Check className="ml-2 h-4 w-4" />
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

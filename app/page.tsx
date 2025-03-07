"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Check, Menu, X } from "lucide-react"
import { useState } from "react"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Logo Institut"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="font-bold text-xl text-gray-800">Institut Universitaire INSAM</span>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#accueil" className="text-gray-600 hover:text-blue-600 font-medium">
              Accueil
            </Link>
            <Link href="#programmes" className="text-gray-600 hover:text-blue-600 font-medium">
              Programmes
            </Link>
            <Link href="#avantages" className="text-gray-600 hover:text-blue-600 font-medium">
              Avantages
            </Link>
            <Link href="/inscription" className="text-gray-600 hover:text-blue-600 font-medium">
              Inscription
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 font-medium">
              Contact
            </Link>
          </nav>

          {/* Bouton d'inscription */}
          <Link
            href="/inscription"
            className="hidden md:inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            S'inscrire
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>

          {/* Menu mobile */}
          <button className="md:hidden text-gray-500 hover:text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menu mobile déroulant */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t py-2">
            <div className="container mx-auto px-4 flex flex-col space-y-3">
              <Link
                href="#accueil"
                className="text-gray-600 hover:text-blue-600 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="#programmes"
                className="text-gray-600 hover:text-blue-600 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Programmes
              </Link>
              <Link
                href="#avantages"
                className="text-gray-600 hover:text-blue-600 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Avantages
              </Link>
              <Link
                href="/inscription"
                className="text-gray-600 hover:text-blue-600 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Inscription
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-blue-600 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/inscription"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                S'inscrire
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="accueil" className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Formation universitaire d'excellence et inscription en ligne
              </h1>
              <p className="text-lg text-gray-600">
                L'Institut Universitaire INSAM vous offre des programmes académiques de qualité et un processus
                d'inscription entièrement numérisé pour faciliter votre parcours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/inscription"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  S'inscrire maintenant
                  <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
                <Link
                  href="#programmes"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 border border-blue-200 rounded-md font-medium hover:bg-blue-50 transition-colors"
                >
                  Découvrir nos programmes
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Étudiants heureux"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Programmes Section */}
        <section id="programmes" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Programmes de Formation</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Découvrez notre large éventail de programmes conçus pour vous préparer aux défis du monde professionnel.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Programme 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="h-48 bg-blue-100 relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Programme Business"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sciences Économiques et Gestion</h3>
                  <p className="text-gray-600 mb-4">
                    Formation complète en gestion d'entreprise, marketing et finance pour les futurs leaders.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-medium">Durée: 3 ans</span>
                    <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                      Détails
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Programme 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="h-48 bg-green-100 relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Programme Informatique"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Informatique et Sciences des Données</h3>
                  <p className="text-gray-600 mb-4">
                    Maîtrisez les langages de programmation et les technologies web les plus demandés.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-medium">Durée: 2 ans</span>
                    <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                      Détails
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Programme 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="h-48 bg-purple-100 relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Programme Design"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sciences de l'Ingénieur</h3>
                  <p className="text-gray-600 mb-4">
                    Développez votre créativité et apprenez à concevoir des visuels impactants.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-medium">Durée: 2 ans</span>
                    <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                      Détails
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link
                href="#"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 border border-blue-200 rounded-md font-medium hover:bg-blue-50 transition-colors"
              >
                Voir tous les programmes
                <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Avantages Section */}
        <section id="avantages" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Pourquoi choisir notre institut?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nous offrons une expérience d'apprentissage unique avec des avantages qui vous aideront à réussir.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Avantage 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Professeurs experts</h3>
                <p className="text-gray-600">
                  Nos enseignants sont des professionnels reconnus dans leur domaine avec une vaste expérience.
                </p>
              </div>

              {/* Avantage 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Installations modernes</h3>
                <p className="text-gray-600">
                  Campus équipé des dernières technologies pour un apprentissage optimal et pratique.
                </p>
              </div>

              {/* Avantage 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Stages garantis</h3>
                <p className="text-gray-600">
                  Partenariats avec plus de 100 entreprises pour assurer des stages de qualité à nos étudiants.
                </p>
              </div>

              {/* Avantage 4 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Accompagnement personnalisé</h3>
                <p className="text-gray-600">
                  Suivi individuel pour vous aider à atteindre vos objectifs académiques et professionnels.
                </p>
              </div>

              {/* Avantage 5 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Réseau d'anciens élèves</h3>
                <p className="text-gray-600">
                  Accès à un réseau professionnel solide pour faciliter votre insertion professionnelle.
                </p>
              </div>

              {/* Avantage 6 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Diplômes reconnus</h3>
                <p className="text-gray-600">
                  Formations certifiées et reconnues par l'État et les entreprises du secteur.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Recherche */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Excellence en Recherche</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Notre institut est reconnu pour ses contributions significatives dans plusieurs domaines de recherche.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Laboratoires de pointe</h3>
                <p className="text-gray-600">
                  Nos laboratoires équipés des dernières technologies permettent à nos chercheurs et étudiants de mener
                  des recherches innovantes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Collaborations internationales</h3>
                <p className="text-gray-600">
                  Nos partenariats avec des universités et instituts de recherche du monde entier enrichissent notre
                  écosystème académique.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Publications scientifiques</h3>
                <p className="text-gray-600">
                  Nos chercheurs publient régulièrement dans des revues scientifiques prestigieuses, contribuant à
                  l'avancement des connaissances.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Vie Étudiante */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Vie Étudiante Dynamique</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                À l'INSAM, nous croyons qu'une expérience universitaire complète va au-delà des salles de classe.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-blue-100 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Activités étudiantes"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Associations et clubs</h3>
                  <p className="text-gray-600">
                    Plus de 30 associations et clubs étudiants vous permettent de développer vos passions, d'acquérir de
                    nouvelles compétences et de créer des liens durables.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-green-100 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Campus universitaire"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Campus moderne</h3>
                  <p className="text-gray-600">
                    Notre campus offre des espaces d'étude confortables, des installations sportives, des résidences
                    étudiantes et des lieux de détente pour une expérience universitaire complète.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Contactez-nous</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Notre équipe est à votre disposition pour répondre à toutes vos questions concernant nos programmes et
                  le processus d'inscription.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Email</h4>
                      <p className="text-gray-600">contact@institut-excellence.fr</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Téléphone</h4>
                      <p className="text-gray-600">+33 1 23 45 67 89</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Adresse</h4>
                      <p className="text-gray-600">123 Avenue de l'Éducation, 75001 Paris, France</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Envoyez-nous un message</h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="contact-nom" className="block text-sm font-medium text-gray-700">
                        Nom
                      </label>
                      <input
                        type="text"
                        id="contact-nom"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Votre nom"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="votre.email@exemple.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-sujet" className="block text-sm font-medium text-gray-700">
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="contact-sujet"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Votre message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Logo Institut"
                  width={40}
                  height={40}
                  className="w-10 h-10 brightness-200"
                />
                <span className="font-bold text-xl">Institut Universitaire INSAM</span>
              </Link>
              <p className="text-gray-400 mb-4">Formation d'excellence pour les professionnels de demain.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Liens rapides</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#accueil" className="text-gray-400 hover:text-white">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="#programmes" className="text-gray-400 hover:text-white">
                    Programmes
                  </Link>
                </li>
                <li>
                  <Link href="#avantages" className="text-gray-400 hover:text-white">
                    Avantages
                  </Link>
                </li>
                <li>
                  <Link href="/inscription" className="text-gray-400 hover:text-white">
                    Inscription
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Programmes</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Sciences Économiques et Gestion
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Informatique et Sciences des Données
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Sciences de l'Ingénieur
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Tous les programmes
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Informations légales</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Politique de confidentialité
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Conditions d'utilisation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Institut Universitaire INSAM. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


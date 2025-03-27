"use client";

import { ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image.js";
import Link from "next/link.js";
import React, { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-12 py-4 flex justify-between items-center">
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

        {/* Navigation desktop */}
        <nav className="hidden md:flex space-x-4">
          <Link
            href="#accueil"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Accueil
          </Link>
          <Link
            href="#programmes"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Programmes
          </Link>
          <Link
            href="#avantages"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Avantages
          </Link>
          <Link
            href="/inscription"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Inscription
          </Link>
          <Link
            href="#contact"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
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
        <button
          className="md:hidden text-gray-500 hover:text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
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
  );
};


'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
              <i className="ri-map-pin-fill text-white text-lg w-5 h-5 flex items-center justify-center"></i>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-900" style={{fontFamily: 'Pacifico, serif'}}>
                Kilometer Travel Solution
              </h1>
              <p className="text-xs text-gray-600">Your Journey, Our Expertise</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-blue-900 hover:text-red-600 font-medium transition-colors whitespace-nowrap cursor-pointer">
              Home
            </Link>
            <Link href="#about" className="text-blue-900 hover:text-red-600 font-medium transition-colors whitespace-nowrap cursor-pointer">
              About
            </Link>
            <Link href="#services" className="text-blue-900 hover:text-red-600 font-medium transition-colors whitespace-nowrap cursor-pointer">
              Services
            </Link>
            <Link href="#destinations" className="text-blue-900 hover:text-red-600 font-medium transition-colors whitespace-nowrap cursor-pointer">
              Destinations
            </Link>
            <Link href="#reviews" className="text-blue-900 hover:text-red-600 font-medium transition-colors whitespace-nowrap cursor-pointer">
              Reviews
            </Link>
            <Link href="#contact" className="text-blue-900 hover:text-red-600 font-medium transition-colors whitespace-nowrap cursor-pointer">
              Contact
            </Link>
          </nav>
          
          <div className="md:hidden">
            <button className="text-blue-900 hover:text-red-600 w-6 h-6 flex items-center justify-center cursor-pointer">
              <i className="ri-menu-line text-xl w-6 h-6 flex items-center justify-center"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

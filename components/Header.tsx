
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div>
              <Image src="/logo.png" alt="Kilometer Logo" width={64} height={64} style={{ objectFit: 'contain' }} />
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

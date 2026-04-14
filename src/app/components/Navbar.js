'use client';

import Link from 'next/link';
import { useState } from 'react';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Bio', href: '/#bio' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Links', href: '/#links' },
  ];

  return (
    <nav className="relative z-50 bg-[#121212] text-gray-200 rounded-full">
      <div className="flex justify-between items-center px-4 py-3">
        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-xl font-bold text-white">A</span>
        </div>

        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="hover:text-[#00C2E8] transition-colors">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden p-2 rounded-full hover:bg-gray-700 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <IoCloseOutline size={24} /> : <IoMenuOutline size={24} />}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 pb-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="hover:text-[#00C2E8] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

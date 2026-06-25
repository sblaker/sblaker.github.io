'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { IoMenuOutline, IoCloseOutline, IoDocumentTextOutline } from 'react-icons/io5';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Chi Sono', href: '/#bio' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contatti', href: '/#links' },
  ];

  const isActive = (href) => {
    if (href === '/portfolio') return pathname.startsWith('/portfolio');
    return false;
  };

  return (
    <nav className="relative z-50 bg-[#121212]/90 backdrop-blur-md text-gray-200 rounded-full border border-[#00C2E8]/20 shadow-lg shadow-[#00C2E8]/5">
      <div className="flex justify-between items-center px-4 py-3">

        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#00C2E8]/10 border border-[#00C2E8]/30 group-hover:bg-[#00C2E8]/20 transition-colors">
            <span className="text-sm font-bold text-[#00C2E8]">AT</span>
          </div>
        </Link>

        <ul className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-[#00C2E8] bg-[#00C2E8]/10'
                    : 'hover:text-[#00C2E8] hover:bg-[#00C2E8]/10'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/cv-antonino-trifiro.pdf"
              download
              className="ml-2 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm bg-[#00C2E8]/10 border border-[#00C2E8]/30 text-[#00C2E8] hover:bg-[#00C2E8]/20 transition-all duration-200"
            >
              <IoDocumentTextOutline size={15} />
              CV
            </a>
          </li>
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
        <ul className="md:hidden flex flex-col items-center gap-3 pb-4">
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
          <li>
            <a
              href="/cv-antonino-trifiro.pdf"
              download
              className="flex items-center gap-1.5 text-[#00C2E8] hover:underline"
              onClick={() => setIsOpen(false)}
            >
              <IoDocumentTextOutline size={15} />
              CV
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

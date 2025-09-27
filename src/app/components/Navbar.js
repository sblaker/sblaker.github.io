import Link from 'next/link';
import { IoSunnyOutline } from 'react-icons/io5';

export default function Navbar() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Bio', href: '/#bio' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Links', href: '/#links' },
  ];

  return (
    // 👇 Aggiunta la classe "text-gray-200" per rendere testo e icone visibili
    <nav className="relative z-50 flex justify-between items-center px-4 py-3 bg-[#121212] rounded-full text-gray-200">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center shadow-lg">
          {/* Questo testo è già bianco perché è su uno sfondo più scuro, ma non fa male */}
          <span className="text-xl font-bold text-white">A</span>
        </div>
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
      
      <div className="flex space-x-4 items-center">
        
      </div>
    </nav>
  );
}
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'ACCUEIL', icon: 'fa-solid fa-house' },
  { href: '/about', label: 'À PROPOS', icon: 'fa-regular fa-user' },
  { href: '/work', label: 'PROJETS', icon: 'fa-solid fa-briefcase' },
  { href: '/skills', label: 'COMPÉTENCES', icon: 'fa-solid fa-sliders' },
  { href: '/contact', label: 'CONTACT', icon: 'fa-regular fa-paper-plane' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggle = () => setOpen((v) => !v);

  return (
    <>
      {/* Desktop Navbar (Hidden on mobile) */}
      <nav className="hidden md:flex absolute top-0 flex-row w-full h-[45px] justify-center z-40 bg-black/50 backdrop-blur-md">
        <div id="nav" className="flex items-center">
          <ul className="flex items-center gap-[40px] list-none font-lato text-[15px] uppercase mt-4">
            {links.map(({ href, label }) => (
              <li key={href} className="relative py-2">
                <Link
                  href={href}
                  className={`relative tracking-widest transition-colors duration-300 
                    ${pathname === href ? 'text-white' : 'text-[#a0a0a0] hover:text-white'}
                    after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:bg-aqua after:transition-all after:duration-300
                    ${pathname === href ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Bottom Navbar (Hidden on desktop) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full h-[75px] bg-[#0a0a0a]/90 backdrop-blur-xl border-t border-white/10 z-[100] px-4 pb-[env(safe-area-inset-bottom)] flex items-center justify-around shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
        {links.map(({ href, icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center justify-center w-[50px] h-[50px] rounded-full transition-all duration-300 border
              ${pathname === href 
                ? 'bg-aqua/20 border-aqua text-aqua shadow-[0_0_15px_rgba(0,255,255,0.2)] scale-110' 
                : 'bg-white/5 border-transparent text-gray-400 hover:bg-white/10 hover:text-white'}
            `}
          >
            <i className={`${icon} text-[20px] transition-transform duration-300`} />
          </Link>
        ))}
      </nav>
    </>
  );
}

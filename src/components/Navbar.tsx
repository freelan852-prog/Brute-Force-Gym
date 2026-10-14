import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

interface NavbarProps {
  onOpenMembership: () => void;
  onOpenTour: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMembership }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'PROGRAMS', href: '#programs' },
    { label: 'MEMBERSHIP', href: '#membership' },
    { label: 'CONTACT', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0B0D]/95 backdrop-blur-md border-b border-[#F5F3EF]/10 shadow-2xl py-3.5'
          : 'bg-[#0B0B0D]/60 backdrop-blur-sm border-b border-[#F5F3EF]/5 py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF5A24]"
        >
          <div className="w-8 h-8 bg-[#171719] border border-[#FF5A24]/60 flex items-center justify-center text-[#FF5A24] font-black text-sm tracking-tighter group-hover:border-[#FF5A24] transition-colors">
            <span className="font-condensed font-bold text-lg leading-none">B</span>
          </div>
          <span className="font-condensed font-extrabold tracking-wider text-xl text-[#F5F3EF] uppercase whitespace-nowrap">
            BRUTE FORCE
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-condensed font-bold text-sm tracking-[0.14em] text-[#929292] hover:text-[#F5F3EF] transition-colors whitespace-nowrap focus:outline-none focus-visible:text-[#FF5A24]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Status */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="/brute-force-gym.zip"
            download="brute-force-gym.zip"
            title="Download full project source code as ZIP"
            className="px-3.5 py-2 bg-[#171719] border border-[#F5F3EF]/20 hover:border-[#FF5A24] text-[#F5F3EF] hover:text-[#FF5A24] font-condensed font-bold text-xs tracking-wider uppercase transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>DOWNLOAD ZIP</span>
          </a>

          <div className="hidden lg:flex items-center gap-2 text-[11px] font-condensed tracking-widest text-[#929292] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#FF5A24] animate-ping" />
            <span className="text-[#FF5A24] font-bold">24/7 ARMORY</span>
          </div>

          <button
            onClick={onOpenMembership}
            className="px-5 py-2.5 bg-[#FF5A24] text-[#0B0B0D] font-condensed font-bold text-sm tracking-wider uppercase transition-transform hover:translate-x-1 active:translate-x-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            JOIN THE GYM
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 text-[#F5F3EF] hover:text-[#FF5A24] focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#131315] border-b border-[#F5F3EF]/10 px-6 py-6 transition-all animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-condensed font-bold text-lg tracking-wider text-[#929292] hover:text-[#F5F3EF] py-2 border-b border-[#F5F3EF]/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-condensed tracking-wider text-[#FF5A24] mb-1">
              <span className="w-2 h-2 rounded-full bg-[#FF5A24]" />
              OPERATIONAL ACCESS 24/7/365
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMembership();
              }}
              className="w-full py-3 bg-[#FF5A24] text-[#0B0B0D] font-condensed font-bold text-base tracking-wider uppercase"
            >
              JOIN THE GYM
            </button>
            <a
              href="/brute-force-gym.zip"
              download="brute-force-gym.zip"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 bg-[#201F21] border border-[#F5F3EF]/20 text-center font-condensed font-bold text-xs tracking-wider uppercase text-[#F5F3EF] hover:border-[#FF5A24]"
            >
              DOWNLOAD SOURCE (.ZIP)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

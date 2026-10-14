import React from 'react';

interface FooterProps {
  onOpenMembership: () => void;
  onOpenTour: () => void;
  onOpenPrograms: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenMembership,
  onOpenTour,
  onOpenPrograms,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0B0D] border-t border-[#F5F3EF]/10 pt-16 pb-12 px-5 sm:px-8 md:px-12 text-[#929292]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#F5F3EF]/5">
          {/* Brand Manifesto Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#171719] border border-[#FF5A24]/60 flex items-center justify-center text-[#FF5A24] font-black text-sm tracking-tighter">
                  <span className="font-condensed font-bold text-lg leading-none">B</span>
                </div>
                <span className="font-condensed font-extrabold tracking-wider text-xl text-[#F5F3EF] uppercase">
                  BRUTE FORCE GYM
                </span>
              </div>

              <div className="text-xs font-condensed font-bold tracking-[0.14em] text-[#F5F3EF] uppercase mb-4">
                MINIMAL DESIGN. MAXIMUM IMPACT. BUILT BY DISCIPLINE.
              </div>

              <p className="font-manrope text-xs sm:text-sm text-[#929292] leading-relaxed max-w-sm">
                Engineered for athletic performance, monolithic strength protocols, and non-negotiable physical infrastructure.
              </p>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3">
            <h4 className="font-condensed font-bold text-xs tracking-[0.2em] text-[#F5F3EF] uppercase mb-6">
              NAVIGATION
            </h4>
            <ul className="space-y-3 font-manrope text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="hover:text-[#FF5A24] transition-colors cursor-pointer text-left"
                >
                  About the Facility
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('programs')}
                  className="hover:text-[#FF5A24] transition-colors cursor-pointer text-left"
                >
                  Disciplines & Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('facility')}
                  className="hover:text-[#FF5A24] transition-colors cursor-pointer text-left"
                >
                  Armory Infrastructure
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('membership')}
                  className="hover:text-[#FF5A24] transition-colors cursor-pointer text-left"
                >
                  Membership Tiers
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('faq')}
                  className="hover:text-[#FF5A24] transition-colors cursor-pointer text-left"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Command Center Column */}
          <div className="md:col-span-4">
            <h4 className="font-condensed font-bold text-xs tracking-[0.2em] text-[#F5F3EF] uppercase mb-6">
              COMMAND CENTER
            </h4>
            <div className="space-y-2 text-xs sm:text-sm font-manrope text-[#929292] mb-6">
              <p className="text-[#F5F3EF]">Sector 04 Industrial Zone, North Docklands</p>
              <p>Calibrated Platform Wing B, Building 12</p>
              <p className="text-[#FF5A24] font-condensed tracking-wider">
                OPEN 24/7/365 TO TIER 1 MEMBERS
              </p>
            </div>

            <div className="text-xs font-manrope space-y-1">
              <div>
                <span className="text-[#929292]">DIRECT: </span>
                <a href="mailto:ops@bruteforcegym.com" className="text-[#F5F3EF] hover:text-[#FF5A24]">
                  ops@bruteforcegym.com
                </a>
              </div>
              <div>
                <span className="text-[#929292]">COORDINATOR: </span>
                <a href="mailto:book@bruteforcegym.com" className="text-[#F5F3EF] hover:text-[#FF5A24]">
                  book@bruteforcegym.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Attribution Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-manrope text-[#929292]">
          <p>© 2025 BRUTE FORCE GYM. All rights reserved. | Demonstration Deployment Only.</p>
          <p>
            Designed by <span className="text-[#F5F3EF] font-bold">JEETX STUDIO</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

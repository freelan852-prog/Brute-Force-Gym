import React from 'react';
import { Clock, MapPin, Radio, MessageSquare, Calendar, ArrowUpRight } from 'lucide-react';

interface CommandCenterSectionProps {
  onOpenTour: () => void;
  onOpenDirections: () => void;
  onOpenWhatsApp: () => void;
}

export const CommandCenterSection: React.FC<CommandCenterSectionProps> = ({
  onOpenTour,
  onOpenDirections,
  onOpenWhatsApp,
}) => {
  return (
    <section id="contact" className="py-24 sm:py-32 px-5 sm:px-8 md:px-12 bg-[#0B0B0D] relative border-t border-[#F5F3EF]/5">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#FF5A24]" />
              <span className="font-condensed font-bold text-xs sm:text-sm tracking-[0.2em] text-[#FF5A24] uppercase">
                DIRECT ACCESS & FACILITY HQ
              </span>
            </div>
            <h2 className="font-condensed font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-[#F5F3EF] uppercase">
              COMMAND CENTER & <span className="text-[#FF5A24]">LOCATION.</span>
            </h2>
          </div>

          <p className="max-w-md font-manrope text-sm sm:text-base text-[#929292] leading-relaxed">
            Reach our training directors, drop into the armory, or initiate a priority intake walkthrough.
          </p>
        </div>

        {/* 3 Strategic Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Schedule // Hours */}
          <div className="bg-[#171719] border border-[#F5F3EF]/10 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-condensed tracking-widest text-[#929292] uppercase mb-6">
                <span>SCHEDULE // HOURS</span>
                <Clock className="w-4 h-4 text-[#FF5A24]" />
              </div>

              <h3 className="font-condensed font-bold text-2xl text-[#F5F3EF] tracking-wider uppercase mb-6">
                OPERATING HOURS
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between text-sm py-2 border-b border-[#F5F3EF]/5 font-manrope">
                  <span className="text-[#929292]">Mon – Fri</span>
                  <span className="text-[#F5F3EF] font-bold font-mono-data">05:00 – 23:00</span>
                </div>
                <div className="flex items-center justify-between text-sm py-2 border-b border-[#F5F3EF]/5 font-manrope">
                  <span className="text-[#929292]">Sat – Sun</span>
                  <span className="text-[#F5F3EF] font-bold font-mono-data">06:00 – 21:00</span>
                </div>
              </div>
            </div>

            {/* Keycard note */}
            <div className="pt-4 border-t border-[#F5F3EF]/10">
              <div className="flex items-center gap-2 text-xs font-condensed tracking-wider text-[#FF5A24] uppercase font-bold mb-1">
                <span className="w-2 h-2 bg-[#FF5A24]" />
                KEYCARD ACCESS
              </div>
              <p className="font-manrope text-xs text-[#929292]">
                24/7 / 365 Unrestricted Access (Tier 1 Members)
              </p>
            </div>
          </div>

          {/* Card 2: Facility HQ // Address */}
          <div className="bg-[#171719] border border-[#F5F3EF]/10 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-condensed tracking-widest text-[#929292] uppercase mb-6">
                <span>FACILITY HQ // ADDRESS</span>
                <MapPin className="w-4 h-4 text-[#FF5A24]" />
              </div>

              <h3 className="font-condensed font-bold text-2xl text-[#F5F3EF] tracking-wider uppercase mb-4">
                LOCATION
              </h3>

              <div className="font-manrope text-sm text-[#E5E1E4] space-y-1 mb-6">
                <p className="font-bold text-base text-[#F5F3EF]">Sector 04 Industrial Zone</p>
                <p className="text-[#929292]">North Docklands, Calibrated Platform Wing B</p>
                <p className="text-[#929292]">Building 12, Industrial Parkway</p>
              </div>

              <div className="flex items-start gap-2 text-xs font-condensed tracking-wider text-[#929292] mb-6">
                <span className="text-[#FF5A24]">↗</span>
                <span>PROXIMITY: 4 MIN FROM CENTRAL TRANSIT HUB</span>
              </div>
            </div>

            {/* Directions link */}
            <div className="pt-4 border-t border-[#F5F3EF]/10">
              <button
                onClick={onOpenDirections}
                className="inline-flex items-center gap-2 text-xs font-condensed font-bold tracking-widest text-[#FF5A24] hover:text-white uppercase transition-colors cursor-pointer"
              >
                <span>GET DIRECTIONS (MAP)</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3: Priority Dispatch */}
          <div className="bg-[#171719] border border-[#F5F3EF]/10 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-condensed tracking-widest text-[#929292] uppercase mb-6">
                <span>PRIORITY DISPATCH</span>
                <Radio className="w-4 h-4 text-[#FF5A24]" />
              </div>

              <h3 className="font-condensed font-bold text-2xl text-[#F5F3EF] tracking-wider uppercase mb-6">
                DIRECT CONTACT
              </h3>

              <div className="space-y-4 mb-6 font-manrope text-xs sm:text-sm">
                <div>
                  <div className="text-[11px] font-condensed tracking-widest text-[#929292] uppercase mb-0.5">
                    PRIORITY DISPATCH DESK
                  </div>
                  <a
                    href="mailto:ops@bruteforcegym.com"
                    className="text-[#F5F3EF] hover:text-[#FF5A24] transition-colors"
                  >
                    ops@bruteforcegym.com
                  </a>
                </div>

                <div>
                  <div className="text-[11px] font-condensed tracking-widest text-[#929292] uppercase mb-0.5">
                    DIRECT PHONE
                  </div>
                  <a
                    href="tel:+18005554766"
                    className="text-[#F5F3EF] font-mono-data hover:text-[#FF5A24] transition-colors"
                  >
                    +1 (800) 555-IRON / +91 98765 43210
                  </a>
                </div>

                <div>
                  <div className="text-[11px] font-condensed tracking-widest text-[#929292] uppercase mb-0.5">
                    INSTANT WHATSAPP DESK
                  </div>
                  <span className="text-[#F5F3EF] font-mono-data">+91 98765 43210</span>
                </div>
              </div>
            </div>

            {/* Dispatch Buttons */}
            <div className="space-y-2.5 pt-4 border-t border-[#F5F3EF]/10">
              <button
                onClick={onOpenWhatsApp}
                className="w-full py-3 bg-[#FF5A24] text-[#0B0B0D] font-condensed font-bold text-xs tracking-widest uppercase hover:bg-[#FF7043] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>CHAT ON WHATSAPP</span>
              </button>

              <button
                onClick={onOpenTour}
                className="w-full py-3 bg-[#201F21] text-[#F5F3EF] border border-[#F5F3EF]/10 font-condensed font-bold text-xs tracking-widest uppercase hover:border-[#FF5A24] hover:text-[#FF5A24] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>SCHEDULE TOUR</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FACILITY_ZONES, FacilityZone } from '../data/gymData';
import armoryImg from '../assets/images/facility_zones_armory_1791967107064.jpg';
import { useInView } from '../hooks/useInView';

interface FacilitySectionProps {
  onOpenArmoryZone: (zone: FacilityZone) => void;
  onOpenAllArmory: () => void;
}

export const FacilitySection: React.FC<FacilitySectionProps> = ({ onOpenArmoryZone, onOpenAllArmory }) => {
  const { ref: sectionRef, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="facility"
      ref={sectionRef}
      className="py-24 sm:py-32 px-5 sm:px-8 md:px-12 bg-[#0B0B0D] relative border-t border-[#F5F3EF]/5"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#FF5A24]" />
              <span className="font-condensed font-bold text-xs sm:text-sm tracking-[0.2em] text-[#FF5A24] uppercase">
                THE INDUSTRIAL SANCTUARY // FACILITY INFRASTRUCTURE
              </span>
            </div>
            <h2 className="font-condensed font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-[#F5F3EF] uppercase">
              DESIGNED FOR <span className="text-[#FF5A24]">PEAK OUTPUT.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-manrope text-sm sm:text-base text-[#929292] leading-relaxed mb-4">
              Over 4,500 square feet of competition-grade biomechanical infrastructure. No filler machines, no waiting lines, zero compromises.
            </p>
            <button
              onClick={onOpenAllArmory}
              className="inline-flex items-center gap-2 text-xs font-condensed font-bold tracking-widest text-[#FF5A24] hover:text-[#F5F3EF] uppercase transition-colors cursor-pointer"
            >
              <span>INSPECT FACILITY ARMORY SCHEMATIC</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Feature Hero Panorama of the Armory */}
        <div
          className={`relative w-full aspect-[21/9] sm:aspect-[24/9] mb-8 bg-[#171719] border border-[#F5F3EF]/10 overflow-hidden group transition-all duration-700 delay-100 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <img
            src={armoryImg}
            alt="Brute Force Armory Infrastructure"
            className="w-full h-full object-cover filter contrast-[1.15] brightness-[0.65] group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-[#0B0B0D]/40" />

          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-[11px] font-condensed tracking-widest text-[#FF5A24] uppercase mb-1 font-bold">
                MAIN FACILITY // MONOLITHIC RIG ARRAY
              </div>
              <div className="font-condensed font-extrabold text-2xl sm:text-3xl text-[#F5F3EF] uppercase">
                SECTOR PRIME & 30-METER SLED CORRIDOR
              </div>
            </div>
            <button
              onClick={onOpenAllArmory}
              className="self-start sm:self-auto px-4 py-2 bg-[#FF5A24] text-[#0B0B0D] font-condensed font-bold text-xs tracking-wider uppercase hover:bg-white transition-colors cursor-pointer"
            >
              VIEW FULL SPECS
            </button>
          </div>
        </div>

        {/* 4 Infrastructure Zone Cards with staggered scroll reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FACILITY_ZONES.map((zone, index) => {
            const delayClasses = [
              'delay-150',
              'delay-200',
              'delay-300',
              'delay-350'
            ];
            const delayClass = delayClasses[index] || 'delay-150';

            return (
              <div
                key={zone.id}
                onClick={() => onOpenArmoryZone(zone)}
                className={`bg-[#171719] border border-[#F5F3EF]/10 hover:border-[#FF5A24]/60 p-6 sm:p-8 flex flex-col justify-between group cursor-pointer relative overflow-hidden transition-all duration-500 ease-out ${delayClass} ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                {/* Top Row with Area Code & Highlight Tag */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="font-condensed font-bold text-xs tracking-[0.16em] text-[#929292] uppercase">
                    {zone.code}
                  </span>

                  {zone.highlightTag ? (
                    <span className="inline-flex items-center px-2.5 py-1 bg-[#26262B] border border-[#FF5A24]/30 text-[#FF5A24] font-condensed font-bold text-xs tracking-wider uppercase">
                      {zone.highlightTag}
                    </span>
                  ) : (
                    <span className="text-xs font-condensed tracking-wider text-[#929292]">
                      CAPACITY: {zone.capacity}
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <div className="mb-6">
                  <h3 className="font-condensed font-black text-2xl sm:text-3xl text-[#F5F3EF] tracking-tight uppercase group-hover:text-[#FF5A24] transition-colors mb-3">
                    {zone.title}
                  </h3>
                  <p className="font-manrope text-sm text-[#929292] leading-relaxed">
                    {zone.description}
                  </p>
                </div>

                {/* Spec Bullet Strip */}
                <div className="border-t border-[#F5F3EF]/10 pt-4 mt-auto">
                  <div className="flex items-center justify-between text-xs font-condensed tracking-wider text-[#929292] group-hover:text-[#F5F3EF] transition-colors uppercase">
                    <span>{zone.equipmentList.slice(0, 2).join(' · ')}</span>
                    <div className="flex items-center gap-1.5 text-[#FF5A24]">
                      <span>EXPLORE SPECS</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

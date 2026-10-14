import React from 'react';
import { ArrowRight, ArrowUpRight, Mouse } from 'lucide-react';
import { HERO_STATS } from '../data/gymData';
import heroImg from '../assets/images/hero_gym_atmospheric_1791967105364.jpg';

interface HeroProps {
  onOpenMembership: () => void;
  onOpenPrograms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenMembership, onOpenPrograms }) => {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-5 sm:px-8 md:px-12 bg-[#0B0B0D] overflow-hidden"
    >
      {/* Background Photography with Scrim & Lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Brute Force Gym Elite Lifting Platform"
          className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.18] saturate-[0.8]"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic Scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/65 to-[#0B0B0D]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D] via-[#0B0B0D]/75 to-transparent" />
        {/* Atmospheric Radial Bloom Accent */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF5A24]/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full flex-1 flex flex-col justify-center py-10 lg:py-16">
        <div className="max-w-3xl">
          {/* Kicker badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#171719]/90 border border-[#F5F3EF]/10 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#FF5A24]" />
            <span className="font-condensed font-bold text-xs sm:text-sm tracking-[0.2em] text-[#F5F3EF] uppercase">
              STRENGTH · DISCIPLINE · PERFORMANCE
            </span>
          </div>

          {/* Monolithic Display Headline */}
          <h1 className="font-condensed font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-[-0.02em] text-[#F5F3EF] mb-6 uppercase">
            BUILT BY
            <br />
            <span className="text-[#FF5A24]">DISCIPLINE.</span>
          </h1>

          {/* Subtext */}
          <p className="font-manrope text-base sm:text-lg md:text-xl text-[#929292] leading-relaxed max-w-xl mb-10 font-normal">
            Train with purpose. Build uncompromising strength. Enter an environment engineered for personal physical supremacy.
          </p>

          {/* Primary Action Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenMembership}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FF5A24] text-[#0B0B0D] font-condensed font-bold text-base sm:text-lg tracking-wider uppercase transition-all duration-200 hover:bg-[#FF7043] hover:translate-x-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>EXPLORE MEMBERSHIPS</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenPrograms}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-[#F5F3EF]/20 text-[#F5F3EF] font-condensed font-bold text-base sm:text-lg tracking-wider uppercase hover:border-[#FF5A24] hover:text-[#FF5A24] transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF5A24]"
            >
              <span>EXPLORE TRAINING</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry & Scroll Strip */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full pt-8 border-t border-[#F5F3EF]/10 flex flex-col md:flex-row md:items-end justify-between gap-8">
        {/* Metric Readouts */}
        <div className="grid grid-cols-3 gap-6 sm:gap-12 md:gap-16">
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-condensed font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F5F3EF] font-mono-data leading-none">
                {stat.value}
              </span>
              <span className="font-condensed font-bold text-xs sm:text-sm tracking-[0.14em] text-[#929292] mt-2 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll prompt */}
        <button
          onClick={scrollToAbout}
          className="group inline-flex items-center gap-3 text-left focus:outline-none self-start md:self-auto cursor-pointer"
        >
          <div className="w-6 h-10 border border-[#F5F3EF]/30 flex items-start justify-center p-1.5 group-hover:border-[#FF5A24] transition-colors">
            <div className="w-1.5 h-2 bg-[#FF5A24] rounded-full animate-bounce" />
          </div>
          <span className="font-condensed font-bold text-xs tracking-[0.16em] text-[#929292] group-hover:text-[#F5F3EF] uppercase transition-colors">
            SCROLL TO DISCOVER
          </span>
        </button>
      </div>
    </section>
  );
};

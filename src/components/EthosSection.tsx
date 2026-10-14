import React from 'react';

export const EthosSection: React.FC = () => {
  return (
    <section className="py-28 sm:py-36 px-5 sm:px-8 md:px-12 bg-[#0E0E10] relative border-t border-[#F5F3EF]/5 overflow-hidden flex items-center justify-center">
      {/* Huge Kinetic Typography Backdrop */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.035] overflow-hidden">
        <span className="font-condensed font-black text-[22vw] leading-none tracking-tighter text-[#F5F3EF] whitespace-nowrap">
          UNBROKEN
        </span>
      </div>

      <div className="max-w-[1000px] mx-auto text-center relative z-10">
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#FF5A24]" />
          <span className="font-condensed font-bold text-xs sm:text-sm tracking-[0.22em] text-[#FF5A24] uppercase">
            THE ETHOS
          </span>
        </div>

        {/* Monolithic Statement */}
        <h2 className="font-condensed font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.88] tracking-tight text-[#F5F3EF] uppercase mb-8">
          SHOW UP.
          <br />
          PUT IN THE WORK.
          <br />
          <span className="text-[#FF5A24]">GET STRONGER.</span>
        </h2>

        {/* Subtext */}
        <p className="font-manrope text-base sm:text-lg md:text-xl text-[#929292] max-w-xl mx-auto leading-relaxed">
          There are no shortcuts, hacks, or bypasses. The weight never changes — only your capacity to conquer it.
        </p>
      </div>
    </section>
  );
};

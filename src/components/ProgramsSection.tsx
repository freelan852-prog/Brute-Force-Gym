import React from 'react';
import { ArrowRight, ListFilter } from 'lucide-react';
import { PROGRAMS, Program } from '../data/gymData';

interface ProgramsSectionProps {
  onOpenProgram: (program: Program) => void;
  onExploreAll: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenProgram, onExploreAll }) => {
  return (
    <section id="programs" className="py-24 sm:py-32 px-5 sm:px-8 md:px-12 bg-[#0B0B0D] relative border-t border-[#F5F3EF]/5">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#FF5A24]" />
              <span className="font-condensed font-bold text-xs sm:text-sm tracking-[0.2em] text-[#FF5A24] uppercase">
                FIND YOUR STRENGTH
              </span>
            </div>
            <h2 className="font-condensed font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-[#F5F3EF] uppercase">
              TRAIN YOUR <span className="text-[#FF5A24]">WAY.</span>
            </h2>
          </div>

          <p className="max-w-md font-manrope text-sm sm:text-base text-[#929292] leading-relaxed">
            Structured programming engineered by elite strength coaches to deliver sustained physical progress and eliminate plateaus.
          </p>
        </div>

        {/* 4 Program Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PROGRAMS.map((program) => (
            <div
              key={program.id}
              onClick={() => onOpenProgram(program)}
              className="bg-[#171719] border border-[#F5F3EF]/10 hover:border-[#FF5A24]/60 p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-condensed font-black text-2xl sm:text-3xl text-[#929292] group-hover:text-[#FF5A24] transition-colors">
                  {program.number}
                </span>
                <span className="text-[11px] font-condensed tracking-widest text-[#929292] uppercase">
                  {program.tagline}
                </span>
              </div>

              {/* Title & Description */}
              <div className="mb-8">
                <h3 className="font-condensed font-extrabold text-2xl sm:text-3xl text-[#F5F3EF] tracking-tight uppercase group-hover:text-[#FF5A24] transition-colors mb-4">
                  {program.title}
                </h3>
                <p className="font-manrope text-sm text-[#929292] leading-relaxed">
                  {program.description}
                </p>
              </div>

              {/* Bottom Learn More link */}
              <div className="pt-4 border-t border-[#F5F3EF]/10 flex items-center justify-between text-xs font-condensed font-bold tracking-widest text-[#F5F3EF] group-hover:text-[#FF5A24] transition-colors uppercase">
                <span>LEARN MORE</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Programs Button */}
        <div className="flex justify-center">
          <button
            onClick={onExploreAll}
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#171719] border border-[#F5F3EF]/20 text-[#F5F3EF] hover:border-[#FF5A24] hover:text-[#FF5A24] font-condensed font-bold text-sm tracking-widest uppercase transition-all duration-200 cursor-pointer"
          >
            <span>EXPLORE ALL PROGRAMS</span>
            <ListFilter className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

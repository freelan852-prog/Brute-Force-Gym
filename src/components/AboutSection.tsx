import React from 'react';
import { ArrowRight, ChevronRight, ShieldCheck, Activity } from 'lucide-react';
import precisionImg from '../assets/images/gym_precision_rigs_1791967106211.jpg';
import deadliftImg from '../assets/images/gym_deadlift_suite_1791967107086.jpg';

interface AboutSectionProps {
  onOpenArmory: () => void;
  onOpenTour: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenArmory }) => {
  return (
    <section id="about" className="py-24 sm:py-32 px-5 sm:px-8 md:px-12 bg-[#0B0B0D] relative border-t border-[#F5F3EF]/5">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Brand Thesis */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Kicker */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-[2px] bg-[#FF5A24]" />
              <span className="font-condensed font-bold text-xs sm:text-sm tracking-[0.2em] text-[#FF5A24] uppercase">
                MORE THAN A GYM
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-condensed font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-[#F5F3EF] mb-8 uppercase">
              STRONGER IS A
              <br />
              <span className="text-[#FF5A24]">WAY OF LIFE.</span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6 text-[#929292] font-manrope text-base sm:text-lg leading-relaxed mb-10">
              <p>
                Build strength, develop discipline, and work toward your fitness goals in an environment designed strictly to help you perform at your best. We strip away the unnecessary distractions of commercial clubs to focus purely on biomechanics, progressive overload, and mental resilience.
              </p>
              <p>
                Whether your goal is stepping onto the competitive lifting platform, increasing lean mass, or cultivating tactical athletic output, our facility provides the exact stimulus and equipment required.
              </p>
            </div>

            {/* Direct action link */}
            <div>
              <button
                onClick={onOpenArmory}
                className="group inline-flex items-center gap-2 text-[#FF5A24] font-condensed font-bold text-base sm:text-lg tracking-wider uppercase hover:text-white transition-colors cursor-pointer"
              >
                <span>DISCOVER OUR GYM</span>
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: High-Impact Industrial Visual Architecture */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Top Card: Precision Rigs */}
            <div className="bg-[#171719] border border-[#F5F3EF]/10 p-4 sm:p-6 group relative overflow-hidden">
              <div className="aspect-[16/9] w-full overflow-hidden bg-[#131315] mb-5">
                <img
                  src={precisionImg}
                  alt="Precision Rigs and Olympic Calibrated Steel"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter contrast-[1.15]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-[#F5F3EF]/10 pt-4">
                <div>
                  <h3 className="font-condensed font-bold text-lg sm:text-xl text-[#F5F3EF] tracking-wider uppercase">
                    PRECISION RIGS
                  </h3>
                  <p className="font-manrope text-xs sm:text-sm text-[#929292]">
                    Calibrated Olympic steel & Eleiko platforms
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-condensed tracking-widest text-[#FF5A24]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>IPF CERTIFIED</span>
                </div>
              </div>
            </div>

            {/* Lower Card: Deadlift Suite & Zero Compromise */}
            <div className="bg-[#171719] border border-[#F5F3EF]/10 p-4 sm:p-6 group relative overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-6 aspect-[4/3] w-full overflow-hidden bg-[#131315] relative">
                  <img
                    src={deadliftImg}
                    alt="Athlete in Deadlift Suite"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter contrast-[1.2] grayscale"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B0B0D]/90 border border-[#F5F3EF]/20 px-2 py-0.5 text-[11px] font-condensed font-bold tracking-widest text-[#F5F3EF] uppercase">
                    DEADLIFT SUITE
                  </div>
                </div>

                <div className="sm:col-span-6 flex flex-col justify-between py-2">
                  <div className="flex items-center justify-between text-xs font-condensed tracking-widest text-[#929292] mb-3">
                    <span>OPERATIONAL CODE</span>
                    <span className="text-[#FF5A24] font-bold">ACTIVE 04</span>
                  </div>

                  <h3 className="font-condensed font-black text-3xl sm:text-4xl text-[#F5F3EF] tracking-tight uppercase mb-3">
                    ZERO <span className="text-[#FF5A24]">COMPROMISE</span>
                  </h3>

                  <p className="font-manrope text-xs sm:text-sm text-[#929292] leading-relaxed mb-6">
                    Every square foot is engineered for biomechanical advantage and pure effort.
                  </p>

                  <button
                    onClick={onOpenArmory}
                    className="inline-flex items-center gap-2 text-xs font-condensed font-bold tracking-widest text-[#F5F3EF] hover:text-[#FF5A24] transition-colors uppercase self-start"
                  >
                    <span>VIEW RIG SPECIFICATIONS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

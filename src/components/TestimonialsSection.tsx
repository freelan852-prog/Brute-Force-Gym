import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/gymData';
import { useInView } from '../hooks/useInView';

export const TestimonialsSection: React.FC = () => {
  const { ref: sectionRef, isInView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 px-5 sm:px-8 md:px-12 bg-[#0B0B0D] relative border-t border-[#F5F3EF]/5"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF5A24]" />
            <span className="font-condensed font-bold text-xs sm:text-sm tracking-[0.2em] text-[#FF5A24] uppercase">
              PROOF OF DISCIPLINE
            </span>
          </div>
          <h2 className="font-condensed font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-[#F5F3EF] uppercase">
            VOICES OF THE <span className="text-[#FF5A24]">ARMORY.</span>
          </h2>
        </div>

        {/* 3 Testimonials Grid with staggered scroll entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item, index) => {
            const delays = ['delay-150', 'delay-300', 'delay-450'];
            const delayClass = delays[index] || 'delay-150';

            return (
              <div
                key={item.id}
                className={`bg-[#171719] border border-[#F5F3EF]/10 p-8 flex flex-col justify-between group hover:border-[#FF5A24]/40 transition-all duration-500 ease-out ${delayClass} ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <div>
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1 text-[#FF5A24] mb-6">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FF5A24] text-[#FF5A24]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-manrope text-sm sm:text-base text-[#E5E1E4] leading-relaxed mb-8 italic">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author & Initial Badge */}
                <div className="flex items-center gap-4 pt-6 border-t border-[#F5F3EF]/10">
                  <div className="w-10 h-10 bg-[#26262B] border border-[#FF5A24]/40 text-[#FF5A24] font-condensed font-bold text-base flex items-center justify-center">
                    {item.initial}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-condensed font-bold text-base text-[#F5F3EF] tracking-wider uppercase">
                      {item.name}
                    </span>
                    <span className="font-condensed text-xs text-[#929292] tracking-widest uppercase">
                      {item.tenure}
                    </span>
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

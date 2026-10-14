import React from 'react';
import { Check, Minus, MessageSquare, ArrowUpRight } from 'lucide-react';
import { MEMBERSHIP_PLANS, MembershipPlan } from '../data/gymData';

interface MembershipSectionProps {
  onSelectPlan: (plan: MembershipPlan) => void;
  onTalkToTeam: () => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onSelectPlan, onTalkToTeam }) => {
  return (
    <section id="membership" className="py-24 sm:py-32 px-5 sm:px-8 md:px-12 bg-[#0B0B0D] relative border-t border-[#F5F3EF]/5">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF5A24]" />
            <span className="font-condensed font-bold text-xs sm:text-sm tracking-[0.2em] text-[#FF5A24] uppercase">
              YOUR NEXT CHAPTER STARTS HERE
            </span>
          </div>
          <h2 className="font-condensed font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-[#F5F3EF] mb-6 uppercase">
            INVEST IN YOUR <span className="text-[#FF5A24]">STRONGER SELF.</span>
          </h2>
          <p className="font-manrope text-sm sm:text-base text-[#929292] leading-relaxed">
            Straightforward commitments with no hidden fees, no predatory contracts, and total facility access.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {MEMBERSHIP_PLANS.map((plan) => {
            const isHighlight = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`flex flex-col justify-between bg-[#171719] border transition-all duration-300 relative ${
                  isHighlight
                    ? 'border-[#FF5A24] shadow-2xl lg:-translate-y-2'
                    : 'border-[#F5F3EF]/10 hover:border-[#F5F3EF]/30'
                }`}
              >
                {/* Orange Banner for Recommended Protocol */}
                {plan.badge && (
                  <div className="bg-[#FF5A24] text-[#0B0B0D] py-2 px-4 text-center font-condensed font-extrabold text-xs tracking-[0.2em] uppercase">
                    {plan.badge}
                  </div>
                )}

                {/* Card Content */}
                <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header line */}
                    <div className="flex items-center justify-between text-xs font-condensed tracking-widest text-[#929292] uppercase mb-4">
                      <span>{plan.code}</span>
                      <span className={`font-bold ${isHighlight ? 'text-[#FF5A24]' : 'text-[#929292]'}`}>
                        {plan.commitmentTag}
                      </span>
                    </div>

                    {/* Plan Name */}
                    <h3 className="font-condensed font-black text-3xl sm:text-4xl text-[#F5F3EF] tracking-tight uppercase mb-4">
                      {plan.name}
                    </h3>

                    {/* Price read-out */}
                    <div className="flex items-baseline gap-2 mb-8 pb-8 border-b border-[#F5F3EF]/10">
                      <span className="font-condensed font-extrabold text-5xl sm:text-6xl text-[#F5F3EF] tracking-tight font-mono-data">
                        {plan.price}
                      </span>
                      <span className="font-condensed text-base text-[#929292] tracking-wider uppercase">
                        {plan.period}
                      </span>
                    </div>

                    {/* Features list */}
                    <ul className="space-y-4 mb-10">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          {feature.included ? (
                            <Check className="w-4 h-4 text-[#FF5A24] shrink-0 mt-0.5" />
                          ) : (
                            <Minus className="w-4 h-4 text-[#929292]/40 shrink-0 mt-0.5" />
                          )}
                          <span
                            className={`font-manrope text-sm leading-snug ${
                              feature.included ? 'text-[#E5E1E4]' : 'text-[#929292]/50 line-through'
                            }`}
                          >
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action CTA Button */}
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-4 font-condensed font-bold text-base tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                      isHighlight
                        ? 'bg-[#FF5A24] text-[#0B0B0D] hover:bg-[#FF7043]'
                        : 'bg-[#201F21] text-[#F5F3EF] hover:bg-[#FF5A24] hover:text-[#0B0B0D] border border-[#F5F3EF]/10'
                    }`}
                  >
                    ENQUIRE NOW
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Notes & Talk to Team */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-manrope text-[#929292] pt-6 border-t border-[#F5F3EF]/5">
          <p>
            * Demo pricing shown for presentation purposes. Final membership plans and customized corporate packages are subject to gym management confirmation.
          </p>
          <button
            onClick={onTalkToTeam}
            className="inline-flex items-center gap-1.5 text-xs font-condensed font-bold tracking-widest text-[#FF5A24] hover:text-[#F5F3EF] uppercase whitespace-nowrap cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>TALK TO OUR TEAM</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';

interface CtaBannerProps {
  onOpenMembership: () => void;
  onOpenContact: () => void;
  onOpenWhatsApp: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  onOpenMembership,
  onOpenContact,
  onOpenWhatsApp,
}) => {
  return (
    <section className="py-20 px-5 sm:px-8 md:px-12 bg-[#0E0E10] border-t border-[#F5F3EF]/5 relative overflow-hidden">
      {/* Background ambient burn */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#FF5A24]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto bg-[#171719] border border-[#F5F3EF]/10 p-8 sm:p-12 lg:p-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading & Subtext */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF5A24]" />
              <span className="font-condensed font-bold text-xs sm:text-sm tracking-[0.2em] text-[#FF5A24] uppercase">
                ENROLLMENT OPEN
              </span>
            </div>

            <h2 className="font-condensed font-black text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-[#F5F3EF] uppercase mb-4">
              YOUR STRONGER CHAPTER
              <br />
              <span className="text-[#FF5A24]">STARTS NOW.</span>
            </h2>

            <p className="font-manrope text-sm sm:text-base text-[#929292] max-w-xl leading-relaxed mb-6">
              Take the first step toward your fitness goals. Connect with our coaching staff or secure your facility membership today.
            </p>

            {/* Quick button */}
            <button
              onClick={onOpenWhatsApp}
              className="inline-flex items-center gap-2 text-xs font-condensed font-bold tracking-widest text-[#929292] hover:text-[#FF5A24] uppercase transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#FF5A24]" />
              <span>DIRECT WHATSAPP ENQUIRY</span>
            </button>
          </div>

          {/* Right Column: CTA Buttons */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center">
            <button
              onClick={onOpenMembership}
              className="w-full py-4 px-6 bg-[#FF5A24] text-[#0B0B0D] font-condensed font-bold text-base tracking-widest uppercase hover:bg-[#FF7043] transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>ENQUIRE ABOUT MEMBERSHIP</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenContact}
              className="w-full py-4 px-6 bg-[#201F21] text-[#F5F3EF] border border-[#F5F3EF]/10 font-condensed font-bold text-base tracking-widest uppercase hover:border-[#FF5A24] hover:text-[#FF5A24] transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>CONTACT THE GYM</span>
              <Phone className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

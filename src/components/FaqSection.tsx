import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { FAQS } from '../data/gymData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 px-5 sm:px-8 md:px-12 bg-[#0B0B0D] relative border-t border-[#F5F3EF]/5">
      <div className="max-w-[960px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF5A24]" />
            <span className="font-condensed font-bold text-xs sm:text-sm tracking-[0.2em] text-[#FF5A24] uppercase">
              CLARITY BEFORE COMMITMENT
            </span>
          </div>
          <h2 className="font-condensed font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-[#F5F3EF] uppercase">
            FREQUENTLY ASKED <span className="text-[#FF5A24]">QUESTIONS.</span>
          </h2>
        </div>

        {/* Quick Filter Search Bar */}
        <div className="mb-10 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#929292]">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (plans, access, equipment, coaching)..."
            className="w-full pl-11 pr-4 py-3.5 bg-[#171719] border border-[#F5F3EF]/10 text-sm text-[#F5F3EF] placeholder-[#929292] focus:border-[#FF5A24] focus:outline-none transition-colors"
          />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.id}
                className="bg-[#171719] border border-[#F5F3EF]/10 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF5A24]"
                >
                  <span className="font-condensed font-bold text-lg sm:text-xl text-[#F5F3EF] tracking-wider uppercase">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 flex items-center justify-center border border-[#F5F3EF]/10 text-[#FF5A24] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#26262B]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#F5F3EF]/5 animate-in fade-in duration-200">
                    <p className="font-manrope text-sm sm:text-base text-[#929292] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="p-8 text-center bg-[#171719] border border-[#F5F3EF]/10 text-[#929292] text-sm">
              No matching questions found for "{searchQuery}". Contact our command center directly.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FacilitySection } from './components/FacilitySection';
import { ProgramsSection } from './components/ProgramsSection';
import { MembershipSection } from './components/MembershipSection';
import { EthosSection } from './components/EthosSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { CommandCenterSection } from './components/CommandCenterSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import {
  MembershipModal,
  TourModal,
  ProgramModal,
  ArmoryModal,
  DirectionsModal
} from './components/Modals';
import { MembershipPlan, Program, FacilityZone, MEMBERSHIP_PLANS, PROGRAMS } from './data/gymData';

export default function App() {
  // Modal state
  const [membershipModalOpen, setMembershipModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<MembershipPlan | null>(MEMBERSHIP_PLANS[1]);

  const [tourModalOpen, setTourModalOpen] = useState(false);

  const [programModalOpen, setProgramModalOpen] = useState(false);
  const [activeProgram, setActiveProgram] = useState<Program | null>(null);

  const [armoryModalOpen, setArmoryModalOpen] = useState(false);
  const [selectedZone, setSelectedZone] = useState<FacilityZone | null>(null);

  const [directionsModalOpen, setDirectionsModalOpen] = useState(false);

  // Handlers
  const handleOpenMembership = (plan?: MembershipPlan) => {
    setSelectedPlan(plan || MEMBERSHIP_PLANS[1]);
    setMembershipModalOpen(true);
  };

  const handleOpenProgram = (program: Program) => {
    setActiveProgram(program);
    setProgramModalOpen(true);
  };

  const handleExploreAllPrograms = () => {
    setActiveProgram(PROGRAMS[0]);
    setProgramModalOpen(true);
  };

  const handleOpenArmoryZone = (zone: FacilityZone) => {
    setSelectedZone(zone);
    setArmoryModalOpen(true);
  };

  const handleOpenAllArmory = () => {
    setSelectedZone(null);
    setArmoryModalOpen(true);
  };

  const handleOpenWhatsApp = () => {
    handleOpenMembership();
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-[#E5E1E4] selection:bg-[#FF5A24] selection:text-[#0B0B0D]">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenMembership={() => handleOpenMembership(MEMBERSHIP_PLANS[1])}
        onOpenTour={() => setTourModalOpen(true)}
      />

      <main>
        {/* High-Impact Full-Screen Hero Section */}
        <Hero
          onOpenMembership={() => handleOpenMembership(MEMBERSHIP_PLANS[1])}
          onOpenPrograms={() => handleScrollToSection('programs')}
        />

        {/* More Than a Gym / Philosophical Thesis */}
        <AboutSection
          onOpenArmory={handleOpenAllArmory}
          onOpenTour={() => setTourModalOpen(true)}
        />

        {/* Training Disciplines / Train Your Way */}
        <ProgramsSection
          onOpenProgram={handleOpenProgram}
          onExploreAll={handleExploreAllPrograms}
        />

        {/* Industrial Sanctuary / Facility Infrastructure */}
        <FacilitySection
          onOpenArmoryZone={handleOpenArmoryZone}
          onOpenAllArmory={handleOpenAllArmory}
        />

        {/* Membership Commitments / Invest In Your Stronger Self */}
        <MembershipSection
          onSelectPlan={(plan) => handleOpenMembership(plan)}
          onTalkToTeam={() => handleOpenMembership()}
        />

        {/* Ethos Monolith Banner */}
        <EthosSection />

        {/* Voices of the Armory / Member Reviews */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Direct Access & Facility HQ / Location & Dispatch */}
        <CommandCenterSection
          onOpenDirections={() => setDirectionsModalOpen(true)}
          onOpenTour={() => setTourModalOpen(true)}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* Bottom Conversion Banner */}
        <CtaBanner
          onOpenMembership={() => handleOpenMembership(MEMBERSHIP_PLANS[1])}
          onOpenContact={() => handleScrollToSection('contact')}
          onOpenWhatsApp={handleOpenWhatsApp}
        />
      </main>

      {/* Industrial Footer */}
      <Footer
        onOpenMembership={() => handleOpenMembership(MEMBERSHIP_PLANS[1])}
        onOpenTour={() => setTourModalOpen(true)}
        onOpenPrograms={handleExploreAllPrograms}
      />

      {/* Interactive Modals */}
      <MembershipModal
        isOpen={membershipModalOpen}
        onClose={() => setMembershipModalOpen(false)}
        selectedPlan={selectedPlan}
        onSelectPlan={(plan) => setSelectedPlan(plan)}
      />

      <TourModal
        isOpen={tourModalOpen}
        onClose={() => setTourModalOpen(false)}
      />

      <ProgramModal
        isOpen={programModalOpen}
        onClose={() => setProgramModalOpen(false)}
        program={activeProgram}
        onEnroll={(prog) => {
          setProgramModalOpen(false);
          handleOpenMembership(MEMBERSHIP_PLANS[1]);
        }}
      />

      <ArmoryModal
        isOpen={armoryModalOpen}
        onClose={() => setArmoryModalOpen(false)}
        selectedZone={selectedZone}
      />

      <DirectionsModal
        isOpen={directionsModalOpen}
        onClose={() => setDirectionsModalOpen(false)}
      />
    </div>
  );
}

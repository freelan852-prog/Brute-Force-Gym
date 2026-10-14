import React, { useState } from 'react';
import { X, Check, Calendar, Clock, MapPin, Dumbbell, ShieldCheck, ArrowRight, UserCheck, MessageSquare } from 'lucide-react';
import { MembershipPlan, Program, FacilityZone, MEMBERSHIP_PLANS, PROGRAMS, FACILITY_ZONES } from '../data/gymData';

// ----------------------------------------------------
// 1. Membership Intake Modal
// ----------------------------------------------------
interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: MembershipPlan | null;
  onSelectPlan: (plan: MembershipPlan) => void;
}

export const MembershipModal: React.FC<MembershipModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
  onSelectPlan,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    goal: 'Absolute Strength & Powerlifting',
    startDate: new Date().toISOString().split('T')[0],
  });
  const [submitted, setSubmitted] = useState(false);
  const [passId, setPassId] = useState('');

  if (!isOpen) return null;

  const currentPlan = selectedPlan || MEMBERSHIP_PLANS[1];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `BF-${Math.floor(1000 + Math.random() * 9000)}-T1`;
    setPassId(generatedId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#171719] border border-[#F5F3EF]/15 w-full max-w-xl max-h-[90vh] overflow-y-auto text-[#E5E1E4] relative shadow-2xl">
        {/* Modal Header */}
        <div className="p-6 border-b border-[#F5F3EF]/10 flex items-center justify-between sticky top-0 bg-[#171719] z-10">
          <div>
            <span className="text-[11px] font-condensed tracking-widest text-[#FF5A24] uppercase font-bold">
              MEMBERSHIP INTAKE // ARMORY CREDENTIALS
            </span>
            <h3 className="font-condensed font-black text-2xl text-[#F5F3EF] uppercase">
              {submitted ? 'CREDENTIALS GENERATED' : 'SECURE FACILITY ACCESS'}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 text-[#929292] hover:text-[#F5F3EF] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Plan Selector */}
              <div>
                <label className="block text-xs font-condensed tracking-wider text-[#929292] uppercase mb-2">
                  SELECTED COMMITMENT TIER
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {MEMBERSHIP_PLANS.map((plan) => (
                    <button
                      type="button"
                      key={plan.id}
                      onClick={() => onSelectPlan(plan)}
                      className={`p-3 text-left border transition-all cursor-pointer ${
                        currentPlan.id === plan.id
                          ? 'bg-[#201F21] border-[#FF5A24] text-[#F5F3EF]'
                          : 'bg-[#131315] border-[#F5F3EF]/10 text-[#929292] hover:border-[#F5F3EF]/30'
                      }`}
                    >
                      <div className="font-condensed font-bold text-sm tracking-wider uppercase">
                        {plan.name}
                      </div>
                      <div className="font-condensed text-xs text-[#FF5A24] font-mono-data">
                        {plan.price}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-condensed tracking-wider text-[#929292] uppercase mb-1">
                    FULL LEGAL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Vikram Sharma"
                    className="w-full px-4 py-3 bg-[#0B0B0D] border border-[#F5F3EF]/15 text-[#F5F3EF] text-sm focus:border-[#FF5A24] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-condensed tracking-wider text-[#929292] uppercase mb-1">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vikram@domain.com"
                      className="w-full px-4 py-3 bg-[#0B0B0D] border border-[#F5F3EF]/15 text-[#F5F3EF] text-sm focus:border-[#FF5A24] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-condensed tracking-wider text-[#929292] uppercase mb-1">
                      MOBILE / WHATSAPP *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 00000"
                      className="w-full px-4 py-3 bg-[#0B0B0D] border border-[#F5F3EF]/15 text-[#F5F3EF] text-sm focus:border-[#FF5A24] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-condensed tracking-wider text-[#929292] uppercase mb-1">
                      PRIMARY ATHLETIC DISCIPLINE
                    </label>
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0B0B0D] border border-[#F5F3EF]/15 text-[#F5F3EF] text-sm focus:border-[#FF5A24] focus:outline-none"
                    >
                      <option>Absolute Strength & Powerlifting</option>
                      <option>Biomechanical Hypertrophy</option>
                      <option>Tactical Conditioning & Sleds</option>
                      <option>1-on-1 Personal Training</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-condensed tracking-wider text-[#929292] uppercase mb-1">
                      TARGET START DATE
                    </label>
                    <input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0B0B0D] border border-[#F5F3EF]/15 text-[#F5F3EF] text-sm focus:border-[#FF5A24] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-[#F5F3EF]/10">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#FF5A24] text-[#0B0B0D] font-condensed font-bold text-base tracking-widest uppercase hover:bg-[#FF7043] transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>SUBMIT INTAKE FOR {currentPlan.name} ({currentPlan.price})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="font-manrope text-[11px] text-[#929292] text-center mt-3">
                  Zero hidden fees. Our coordinator contacts you within 60 minutes for RFID keycard issuance.
                </p>
              </div>
            </form>
          ) : (
            /* Submission Confirmation Card */
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 bg-[#201F21] border border-[#FF5A24] text-[#FF5A24] flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>

              <div>
                <span className="font-condensed font-bold text-xs tracking-widest text-[#FF5A24] uppercase">
                  APPLICATION CONFIRMED
                </span>
                <h4 className="font-condensed font-black text-3xl text-[#F5F3EF] uppercase mt-1">
                  WELCOME TO BRUTE FORCE, {formData.fullName.toUpperCase()}
                </h4>
                <p className="font-manrope text-sm text-[#929292] mt-2">
                  Your registration for the <strong className="text-[#F5F3EF]">{currentPlan.name} Tier ({currentPlan.price})</strong> has been received by operations.
                </p>
              </div>

              {/* Digital Pass Preview */}
              <div className="bg-[#0B0B0D] border border-[#FF5A24]/40 p-6 text-left relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-[#F5F3EF]/10 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-[#FF5A24] text-black font-condensed font-bold text-xs flex items-center justify-center">
                      B
                    </div>
                    <span className="font-condensed font-bold text-sm tracking-wider text-[#F5F3EF]">
                      ARMORY KEYCARD PASS
                    </span>
                  </div>
                  <span className="font-condensed text-xs text-[#FF5A24] tracking-widest font-mono-data font-bold">
                    {passId}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs font-manrope mb-4">
                  <div>
                    <span className="text-[#929292] block">Athlete:</span>
                    <span className="text-[#F5F3EF] font-bold">{formData.fullName}</span>
                  </div>
                  <div>
                    <span className="text-[#929292] block">Discipline:</span>
                    <span className="text-[#F5F3EF]">{formData.goal}</span>
                  </div>
                  <div>
                    <span className="text-[#929292] block">Access Clearance:</span>
                    <span className="text-[#FF5A24] font-bold">24/7 Monolithic Pass</span>
                  </div>
                  <div>
                    <span className="text-[#929292] block">Start Date:</span>
                    <span className="text-[#F5F3EF]">{formData.startDate}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F5F3EF]/10 flex items-center justify-between text-[11px] text-[#929292]">
                  <span>Sector 04 Industrial Zone</span>
                  <span className="text-[#FF5A24] font-bold">ACTIVE PROTOCOL</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={handleReset}
                  className="w-full py-3 bg-[#FF5A24] text-[#0B0B0D] font-condensed font-bold text-sm tracking-widest uppercase hover:bg-[#FF7043]"
                >
                  DONE
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 2. Schedule Tour Modal
// ----------------------------------------------------
interface TourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TourModal: React.FC<TourModalProps> = ({ isOpen, onClose }) => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [slot, setSlot] = useState('18:00 - PEAK EFFORT');
  const [coach, setCoach] = useState('Marcus Vance (Head Strength Director)');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const slots = [
    '07:00 - MORNING DAWN',
    '12:30 - MIDDAY POWER',
    '18:00 - PEAK EFFORT',
    '20:30 - LATE NIGHT ARMORY',
  ];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-[#171719] border border-[#F5F3EF]/15 w-full max-w-lg max-h-[90vh] overflow-y-auto text-[#E5E1E4]">
        <div className="p-6 border-b border-[#F5F3EF]/10 flex items-center justify-between sticky top-0 bg-[#171719] z-10">
          <div>
            <span className="text-[11px] font-condensed tracking-widest text-[#FF5A24] uppercase font-bold">
              PRIORITY INTAKE WALKTHROUGH
            </span>
            <h3 className="font-condensed font-black text-2xl text-[#F5F3EF] uppercase">
              {booked ? 'TOUR SCHEDULED' : 'SCHEDULE ARMORY TOUR'}
            </h3>
          </div>
          <button onClick={onClose} aria-label="Close dialog" className="p-2 text-[#929292] hover:text-[#F5F3EF]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {!booked ? (
            <form onSubmit={handleBook} className="space-y-5">
              <p className="font-manrope text-sm text-[#929292] leading-relaxed">
                Step inside the facility before committing. Test the Eleiko platforms, inspect the hydro-contrast suite, and discuss your biomechanics with a senior coach.
              </p>

              <div>
                <label className="block text-xs font-condensed tracking-wider text-[#929292] uppercase mb-1">
                  SELECT DATE *
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0B0B0D] border border-[#F5F3EF]/15 text-[#F5F3EF] text-sm focus:border-[#FF5A24] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-condensed tracking-wider text-[#929292] uppercase mb-2">
                  CHOOSE TIME SLOT *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {slots.map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setSlot(s)}
                      className={`p-3 text-left border text-xs font-condensed font-bold tracking-wider uppercase transition-colors ${
                        slot === s
                          ? 'bg-[#26262B] border-[#FF5A24] text-[#F5F3EF]'
                          : 'bg-[#131315] border-[#F5F3EF]/10 text-[#929292] hover:border-[#F5F3EF]/30'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-condensed tracking-wider text-[#929292] uppercase mb-1">
                  ASSIGNED COACH / GUIDE
                </label>
                <select
                  value={coach}
                  onChange={(e) => setCoach(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0B0B0D] border border-[#F5F3EF]/15 text-[#F5F3EF] text-sm focus:border-[#FF5A24] focus:outline-none"
                >
                  <option>Marcus Vance (Head Strength Director)</option>
                  <option>Sarah Chen (Biomechanics & Hypertrophy Lead)</option>
                  <option>David Miller (Tactical Conditioning Specialist)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-condensed tracking-wider text-[#929292] uppercase mb-1">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    className="w-full px-4 py-3 bg-[#0B0B0D] border border-[#F5F3EF]/15 text-[#F5F3EF] text-sm focus:border-[#FF5A24] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-condensed tracking-wider text-[#929292] uppercase mb-1">
                    CONTACT NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91..."
                    className="w-full px-4 py-3 bg-[#0B0B0D] border border-[#F5F3EF]/15 text-[#F5F3EF] text-sm focus:border-[#FF5A24] focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#FF5A24] text-[#0B0B0D] font-condensed font-bold text-base tracking-widest uppercase hover:bg-[#FF7043] transition-colors mt-4 cursor-pointer"
              >
                CONFIRM WALKTHROUGH RESERVATION
              </button>
            </form>
          ) : (
            <div className="text-center space-y-5">
              <div className="w-14 h-14 bg-[#201F21] border border-[#FF5A24] text-[#FF5A24] flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="font-condensed font-black text-2xl text-[#F5F3EF] uppercase">
                RESERVATION CONFIRMED
              </h4>
              <p className="font-manrope text-sm text-[#929292]">
                We look forward to hosting you on <strong className="text-[#F5F3EF]">{date}</strong> at <strong className="text-[#FF5A24]">{slot}</strong> with <strong className="text-[#F5F3EF]">{coach}</strong>.
              </p>
              <div className="p-4 bg-[#0B0B0D] border border-[#F5F3EF]/10 text-left font-manrope text-xs space-y-1">
                <p className="text-[#F5F3EF] font-bold">Intake Location:</p>
                <p className="text-[#929292]">Sector 04 Industrial Zone, North Docklands (Platform Wing B)</p>
                <p className="text-[#929292]">A SMS passes credentials have been dispatched to {phone}.</p>
              </div>
              <button
                onClick={() => {
                  setBooked(false);
                  onClose();
                }}
                className="w-full py-3 bg-[#FF5A24] text-[#0B0B0D] font-condensed font-bold text-sm tracking-widest uppercase hover:bg-[#FF7043]"
              >
                CLOSE
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 3. Program Detail Modal
// ----------------------------------------------------
interface ProgramModalProps {
  isOpen: boolean;
  onClose: () => void;
  program: Program | null;
  onEnroll: (program: Program) => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({
  isOpen,
  onClose,
  program,
  onEnroll,
}) => {
  if (!isOpen || !program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-[#171719] border border-[#F5F3EF]/15 w-full max-w-2xl max-h-[90vh] overflow-y-auto text-[#E5E1E4]">
        <div className="p-6 border-b border-[#F5F3EF]/10 flex items-center justify-between sticky top-0 bg-[#171719] z-10">
          <div>
            <span className="text-[11px] font-condensed tracking-widest text-[#FF5A24] uppercase font-bold">
              DISCIPLINE PROTOCOL // {program.number}
            </span>
            <h3 className="font-condensed font-black text-3xl text-[#F5F3EF] uppercase">
              {program.title}
            </h3>
          </div>
          <button onClick={onClose} aria-label="Close dialog" className="p-2 text-[#929292] hover:text-[#F5F3EF]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="font-condensed font-bold text-xs tracking-wider text-[#929292] uppercase mb-2">
              DISCIPLINE OVERVIEW
            </h4>
            <p className="font-manrope text-base text-[#E5E1E4] leading-relaxed">
              {program.description}
            </p>
          </div>

          <div>
            <h4 className="font-condensed font-bold text-xs tracking-wider text-[#929292] uppercase mb-3">
              CORE CURRICULUM & ARCHITECTURE
            </h4>
            <ul className="space-y-2.5">
              {program.curriculum.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm font-manrope text-[#929292]">
                  <span className="w-1.5 h-1.5 bg-[#FF5A24] rounded-full mt-2 shrink-0" />
                  <span className="text-[#E5E1E4]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#0B0B0D] border border-[#F5F3EF]/10">
            <div>
              <span className="text-xs font-condensed tracking-wider text-[#929292] uppercase block">
                WEEKLY TIME COMMITMENT
              </span>
              <span className="font-condensed font-bold text-base text-[#F5F3EF]">
                {program.schedule}
              </span>
            </div>
            <div>
              <span className="text-xs font-condensed tracking-wider text-[#929292] uppercase block">
                PRIMARY FOCUS MOVEMENTS
              </span>
              <span className="font-condensed font-bold text-base text-[#FF5A24]">
                {program.keyLifts.join(' · ')}
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-condensed font-bold text-xs tracking-wider text-[#929292] uppercase mb-2">
              TARGET AUDIENCE
            </h4>
            <p className="font-manrope text-sm text-[#929292]">
              {program.targetAthletes}
            </p>
          </div>

          <div className="pt-4 border-t border-[#F5F3EF]/10 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onEnroll(program);
              }}
              className="flex-1 py-4 bg-[#FF5A24] text-[#0B0B0D] font-condensed font-bold text-base tracking-widest uppercase hover:bg-[#FF7043] transition-colors"
            >
              ENROLL IN THIS DISCIPLINE
            </button>
            <button
              onClick={onClose}
              className="px-6 py-4 bg-[#201F21] text-[#F5F3EF] font-condensed font-bold text-base tracking-widest uppercase hover:border-[#FF5A24] border border-[#F5F3EF]/10"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 4. Armory Zone Details Modal
// ----------------------------------------------------
interface ArmoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedZone: FacilityZone | null;
}

export const ArmoryModal: React.FC<ArmoryModalProps> = ({
  isOpen,
  onClose,
  selectedZone,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-[#171719] border border-[#F5F3EF]/15 w-full max-w-3xl max-h-[90vh] overflow-y-auto text-[#E5E1E4]">
        <div className="p-6 border-b border-[#F5F3EF]/10 flex items-center justify-between sticky top-0 bg-[#171719] z-10">
          <div>
            <span className="text-[11px] font-condensed tracking-widest text-[#FF5A24] uppercase font-bold">
              ARMORY INFRASTRUCTURE CATALOG
            </span>
            <h3 className="font-condensed font-black text-3xl text-[#F5F3EF] uppercase">
              {selectedZone ? selectedZone.title : 'FULL FACILITY BLUEPRINT'}
            </h3>
          </div>
          <button onClick={onClose} aria-label="Close dialog" className="p-2 text-[#929292] hover:text-[#F5F3EF]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          {FACILITY_ZONES.map((zone) => (
            <div
              key={zone.id}
              className={`p-6 bg-[#131315] border transition-colors ${
                selectedZone?.id === zone.id
                  ? 'border-[#FF5A24]'
                  : 'border-[#F5F3EF]/10'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-condensed text-xs tracking-widest text-[#FF5A24] uppercase font-bold">
                  {zone.code}
                </span>
                <span className="font-condensed text-xs text-[#929292] tracking-wider uppercase">
                  {zone.capacity}
                </span>
              </div>

              <h4 className="font-condensed font-black text-2xl text-[#F5F3EF] uppercase mb-2">
                {zone.title}
              </h4>
              <p className="font-manrope text-sm text-[#929292] mb-4">
                {zone.description}
              </p>

              <div className="space-y-2 mb-4">
                <span className="text-[11px] font-condensed tracking-wider text-[#929292] uppercase block">
                  TECHNICAL SPECIFICATIONS:
                </span>
                <ul className="space-y-1.5 text-xs font-manrope text-[#E5E1E4]">
                  {zone.specs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#FF5A24]">▪</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-[#F5F3EF]/10 flex flex-wrap gap-2">
                {zone.equipmentList.map((eq, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-[#201F21] text-[11px] font-condensed tracking-wider text-[#F5F3EF] uppercase"
                  >
                    {eq}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 5. Directions / Map Modal
// ----------------------------------------------------
interface DirectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DirectionsModal: React.FC<DirectionsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-[#171719] border border-[#F5F3EF]/15 w-full max-w-xl max-h-[90vh] overflow-y-auto text-[#E5E1E4]">
        <div className="p-6 border-b border-[#F5F3EF]/10 flex items-center justify-between sticky top-0 bg-[#171719] z-10">
          <div>
            <span className="text-[11px] font-condensed tracking-widest text-[#FF5A24] uppercase font-bold">
              TRANSIT & NAVIGATION HQ
            </span>
            <h3 className="font-condensed font-black text-2xl text-[#F5F3EF] uppercase">
              FACILITY LOCATION & TRANSIT
            </h3>
          </div>
          <button onClick={onClose} aria-label="Close dialog" className="p-2 text-[#929292] hover:text-[#F5F3EF]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="bg-[#0B0B0D] p-6 border border-[#F5F3EF]/10 text-center">
            <div className="w-12 h-12 bg-[#201F21] text-[#FF5A24] flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="font-condensed font-black text-xl text-[#F5F3EF] uppercase">
              SECTOR 04 INDUSTRIAL ZONE
            </h4>
            <p className="font-manrope text-sm text-[#929292] mt-1">
              Building 12, Calibrated Platform Wing B, North Docklands
            </p>
            <div className="mt-3 text-xs font-mono text-[#FF5A24]">
              GPS: 19.0760° N, 72.8777° E (Demo Coordinates)
            </div>
          </div>

          <div className="space-y-4 font-manrope text-sm">
            <div className="p-4 bg-[#131315] border border-[#F5F3EF]/5">
              <span className="font-condensed font-bold text-xs text-[#FF5A24] tracking-wider uppercase block mb-1">
                METRO & TRANSIT ACCESS
              </span>
              <p className="text-[#929292]">
                4-minute direct pedestrian corridor from Central Transit Station (Exit B4). Follow signage for Docklands Industrial Parkway.
              </p>
            </div>

            <div className="p-4 bg-[#131315] border border-[#F5F3EF]/5">
              <span className="font-condensed font-bold text-xs text-[#FF5A24] tracking-wider uppercase block mb-1">
                VEHICLE PARKING & SECURE BAY
              </span>
              <p className="text-[#929292]">
                Complimentary 60-slot private parking garage for all registered members with dedicated EV charging armaments and bike lockers.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full py-4 bg-[#FF5A24] text-[#0B0B0D] font-condensed font-bold text-sm tracking-widest uppercase hover:bg-[#FF7043]"
          >
            RETURN TO ARMORY PORTAL
          </button>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 6. WhatsApp Instant Desk Modal
// ----------------------------------------------------
interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAction: (topic: string) => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  onSelectAction,
}) => {
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const quickPrompts = [
    'I want to enquire about the Quarterly plan.',
    'I would like to book a tour tomorrow evening.',
    'Are there personal coaching slots available for powerlifting?',
    'What are the keycard access rules for late night training?',
  ];

  const handleSend = (text: string) => {
    setMessage(text);
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-[#171719] border border-[#F5F3EF]/15 w-full max-w-lg text-[#E5E1E4]">
        <div className="p-6 border-b border-[#F5F3EF]/10 flex items-center justify-between bg-[#171719]">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-[#FF5A24] rounded-full animate-ping" />
            <div>
              <span className="text-[11px] font-condensed tracking-widest text-[#FF5A24] uppercase font-bold">
                DIRECT PRIORITY DISPATCH
              </span>
              <h3 className="font-condensed font-black text-2xl text-[#F5F3EF] uppercase">
                WHATSAPP DESK // +91 98765 43210
              </h3>
            </div>
          </div>
          <button onClick={onClose} aria-label="Close dialog" className="p-2 text-[#929292] hover:text-[#F5F3EF]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {!sent ? (
            <>
              <p className="font-manrope text-sm text-[#929292]">
                Connect immediately with an on-duty training director. Tap any quick prompt below or type your inquiry:
              </p>

              <div className="space-y-2">
                <span className="text-[11px] font-condensed tracking-wider text-[#929292] uppercase block">
                  QUICK DISPATCH PROMPTS:
                </span>
                {quickPrompts.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(p)}
                    className="w-full text-left p-3 bg-[#0B0B0D] hover:bg-[#201F21] border border-[#F5F3EF]/10 hover:border-[#FF5A24] text-xs font-manrope text-[#E5E1E4] transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>{p}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FF5A24] shrink-0 ml-2" />
                  </button>
                ))}
              </div>

              <div>
                <label className="block text-xs font-condensed tracking-wider text-[#929292] uppercase mb-1">
                  CUSTOM MESSAGE
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message to coach..."
                    className="flex-1 px-4 py-3 bg-[#0B0B0D] border border-[#F5F3EF]/15 text-sm text-[#F5F3EF] focus:border-[#FF5A24] focus:outline-none"
                  />
                  <button
                    onClick={() => message && handleSend(message)}
                    className="px-5 py-3 bg-[#FF5A24] text-black font-condensed font-bold text-sm tracking-wider uppercase hover:bg-[#FF7043]"
                  >
                    SEND
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-[#201F21] text-[#FF5A24] flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-condensed font-bold text-xl text-[#F5F3EF] uppercase">
                DISPATCH TRANSMITTED
              </h4>
              <p className="font-manrope text-sm text-[#929292]">
                Your message: <em className="text-[#F5F3EF]">"{message}"</em>
              </p>
              <p className="font-manrope text-xs text-[#929292]">
                Our operational desk at +91 98765 43210 has queued your request. You will receive an immediate response on WhatsApp.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  onClose();
                }}
                className="w-full py-3 bg-[#FF5A24] text-[#0B0B0D] font-condensed font-bold text-sm tracking-widest uppercase hover:bg-[#FF7043]"
              >
                RETURN TO SITE
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

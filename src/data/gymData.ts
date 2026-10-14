export interface Program {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  curriculum: string[];
  schedule: string;
  targetAthletes: string;
  keyLifts: string[];
}

export interface FacilityZone {
  id: string;
  code: string;
  areaNumber: string;
  title: string;
  description: string;
  highlightTag?: string;
  specs: string[];
  equipmentList: string[];
  capacity: string;
}

export interface MembershipPlan {
  id: string;
  code: string;
  commitmentTag: string;
  badge?: string;
  isPopular?: boolean;
  name: string;
  price: string;
  period: string;
  features: { text: string; included: boolean }[];
  accessLevel: string;
}

export interface Testimonial {
  id: string;
  name: string;
  tenure: string;
  initial: string;
  rating: number;
  quote: string;
  focus: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Membership' | 'Training' | 'Facility' | 'Access';
}

export const HERO_STATS = [
  { value: '4,500', unit: 'SQ FT', label: 'BIO FACILITY' },
  { value: '100%', unit: 'CALIBRATED', label: 'OLYMPIC CALIBRATED' },
  { value: '24/7', unit: 'ACCESS', label: 'KEYCARD ACCESS' },
];

export const PROGRAMS: Program[] = [
  {
    id: 'strength',
    number: '01',
    title: 'STRENGTH TRAINING',
    tagline: 'MAXIMAL FORCE PRODUCTION',
    description: 'Build fundamental absolute force through structured barbell resistance cycles, linear progression, and maximal effort protocols.',
    curriculum: [
      'Wave-loading periodization for squat, bench press, and deadlift',
      'Velocity-based bar tracking with calibrated competition plates',
      'Posterior chain reinforcement and kinetic chain stabilization',
      'Central nervous system fatigue management cycles'
    ],
    schedule: '4 Sessions / Week (75-90 min)',
    targetAthletes: 'Competitive powerlifters, strongmen, and athletes demanding pure structural strength.',
    keyLifts: ['Low-Bar Squat', 'Competition Bench Press', 'Deadlift', 'Overhead Press']
  },
  {
    id: 'muscle',
    number: '02',
    title: 'MUSCLE BUILDING',
    tagline: 'BIOMECHANICAL HYPERTROPHY',
    description: 'Work toward your muscle development goals using biomechanically sound hypertrophy schemes, tempo variation, and targeted volume.',
    curriculum: [
      'Engineered resistance profile matching with Hammer Strength levers',
      'Lengthened-partial overloads and high mechanical tension windows',
      'Systematic volume accumulation cycles and deload taper phases',
      'Metabolic stress finishers and connective tissue recovery protocols'
    ],
    schedule: '5 Sessions / Week (60-75 min)',
    targetAthletes: 'Bodybuilders and trainees pursuing dense myofibrillar hypertrophy and aesthetic definition.',
    keyLifts: ['Incline Lever Press', 'Pendlay Row', 'Hack Squat', 'Romanian Deadlift']
  },
  {
    id: 'personal',
    number: '03',
    title: 'PERSONAL TRAINING',
    tagline: 'DIRECT 1-ON-1 COACHING',
    description: 'Direct 1-on-1 coaching customized for specific body composition targets, injury rehabilitation, and personal athletic metrics.',
    curriculum: [
      'Full biomechanical movement screen and mobility assessment',
      'Customized intra-workout cueing and velocity autoregulation',
      'Targeted nutrition architecture and micronutrient timing strategies',
      'Private platform reservations and dedicated recovery suite booking'
    ],
    schedule: 'Customized schedule (2 to 4 sessions / week)',
    targetAthletes: 'Executives, post-rehab lifters, and athletes seeking focused oversight and accelerated timelines.',
    keyLifts: ['Customized Movement Matrix', 'Targeted Accessory Work']
  },
  {
    id: 'conditioning',
    number: '04',
    title: 'CONDITIONING',
    tagline: 'TACTICAL WORK CAPACITY',
    description: 'Develop exceptional work capacity, cardiovascular threshold, agility, and functional movement through intense conditioning blocks.',
    curriculum: [
      'Zone 2 aerobic base building and VO2 max threshold intervals',
      '30-meter high-friction sled sprints and farmer carry gauntlets',
      'Assault airbike lactic acid clearance complexes',
      'Tactical breath control and heart rate recovery down-regulation'
    ],
    schedule: '3-4 Sessions / Week (45-60 min)',
    targetAthletes: 'Cross-discipline athletes, martial artists, and tactical service personnel.',
    keyLifts: ['Prowler Sled Push', 'Farmer Carries', 'AirBike Sprints', 'Kettlebell Snatch']
  }
];

export const FACILITY_ZONES: FacilityZone[] = [
  {
    id: 'sector-prime',
    code: 'AREA 01 // SECTOR PRIME',
    areaNumber: '01',
    title: 'STRENGTH EQUIPMENT',
    description: 'Hammer Strength plate-loaded machinery, custom calibrated bars, and monolithic competition platforms.',
    highlightTag: '12 SQUAT RACKS',
    specs: [
      '12 Monolithic 3x3" 11-gauge steel power racks with laser-cut numbering',
      'Eleiko IPF-certified competition powerlifting barbells & calibrated discs',
      'Oak-core inlaid deadlift platforms with vibration-dampening subflooring',
      'Texas Power Bars, Safety Squat Bars, Duffalo Bars & Trap Bars'
    ],
    equipmentList: ['Eleiko IPF Plates', 'Hammer Strength Racks', 'Kabuki Strength Bars', 'Inlaid Oak Platforms'],
    capacity: '32 Lifters Simultaneously'
  },
  {
    id: 'dumbbell-bay',
    code: 'AREA 02 // DUMBBELL BAY',
    areaNumber: '02',
    title: 'FREE WEIGHTS',
    description: 'Custom-machined steel pairs extending continuously up to 150 lbs.',
    specs: [
      'Solid round urethane dumbbells from 5 lbs to 150 lbs in 2.5/5 lb increments',
      '6 Heavy-duty 0-90° multi-angle adjustable benches with zero-gap design',
      'Dual adjustable cable columns with 1:1 and 2:1 ratio selectors',
      'Heavy-duty cast iron kettlebells from 8 kg to 48 kg'
    ],
    equipmentList: ['Urethane Machined Dumbbells', 'Zero-Gap Benches', 'Custom Cable Towers', 'Cast Iron Kettlebells'],
    capacity: '24 Lifters'
  },
  {
    id: 'turf-zone',
    code: 'AREA 03 // MOVEMENT',
    areaNumber: '03',
    title: 'FUNCTIONAL FITNESS TURF',
    description: '30-meter high-density sled track and tactical conditioning zone.',
    specs: [
      '30-meter continuous padded indoor high-friction sprint and sled turf',
      'Rogue Dog Sleds with replaceable UHMW plastic skid feet',
      'Concept2 SkiErgs, RowErgs, and Echo air bikes with telemetry monitor mounts',
      'Wall-mounted pull-up rig arrays and gymnastic wood ring stations'
    ],
    equipmentList: ['30m Turf Track', 'Rogue Dog Sleds', 'Concept2 Suite', 'Ring Rig Array'],
    capacity: '20 Athletes'
  },
  {
    id: 'recovery-lounge',
    code: 'AREA 04 // REGENERATION',
    areaNumber: '04',
    title: 'RECOVERY LOUNGE',
    description: 'Contrast therapy hydro-tubs, infrared sauna, and pneumatic compression systems.',
    highlightTag: 'VIEW ARMORY',
    specs: [
      'Twin filtered stainless steel cold plunge tubs maintained at 4°C (39°F)',
      'Finnish cedar dry sauna operating at 90°C (194°F) with volcanic stone core',
      'Normatec 3 pneumatic compression boots and hip recovery suits',
      'Percussive therapy station with Hyperice massage armaments'
    ],
    equipmentList: ['Cold Plunges (4°C)', 'Finnish Sauna (90°C)', 'Normatec 3 Suites', 'Hypervolt Armament'],
    capacity: '12 Athletes'
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'monthly',
    code: 'COMMITMENT // 01',
    commitmentTag: 'FLEXIBLE',
    name: 'MONTHLY',
    price: '₹1,499',
    period: '/ month',
    accessLevel: 'Standard Hours Access',
    features: [
      { text: 'Full access to all training floors', included: true },
      { text: 'Lockers, sauna & rain showers', included: true },
      { text: 'Initial baseline fitness assessment', included: true },
      { text: 'Guest privileges', included: false }
    ]
  },
  {
    id: 'quarterly',
    code: 'COMMITMENT // 02',
    commitmentTag: 'SAVE 15%',
    badge: 'RECOMMENDED PROTOCOL',
    isPopular: true,
    name: 'QUARTERLY',
    price: '₹3,999',
    period: '/ 3 months',
    accessLevel: 'Priority Access + Assessment',
    features: [
      { text: 'All Monthly features included', included: true },
      { text: '2 complimentary guest passes / mo', included: true },
      { text: 'Bi-weekly InBody composition scans', included: true },
      { text: '1 program design consultation', included: true }
    ]
  },
  {
    id: 'annual',
    code: 'COMMITMENT // 03',
    commitmentTag: 'BEST VALUE',
    name: 'ANNUAL',
    price: '₹11,999',
    period: '/ year',
    accessLevel: '24/7/365 VIP All-Floor Access',
    features: [
      { text: 'Unlimited 24/7 keycard access', included: true },
      { text: 'Dedicated reserved VIP locker', included: true },
      { text: '3 complimentary 1-on-1 trainer sessions', included: true },
      { text: 'Unlimited guest privileges on weekends', included: true }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'ROHAN MEHTA',
    tenure: 'MEMBER // 14 MONTHS',
    initial: 'R',
    rating: 5,
    focus: 'Powerlifting & Biomechanics',
    quote: 'The atmosphere here is unlike any generic gym chain. Zero fluff, top-tier calibrated plates, and members who treat their training with genuine respect. Marcus completely transformed my squat mechanics.'
  },
  {
    id: 't2',
    name: 'ANANYA DESHMUKH',
    tenure: 'MEMBER // 2 YEARS',
    initial: 'A',
    rating: 5,
    focus: 'Executive Performance & Recovery',
    quote: 'I work 60+ hour weeks in finance. The 24/7 keycard access and the ice bath contrast suite keep my physical and cognitive performance razor sharp. Brute Force is an essential part of my daily architecture.'
  },
  {
    id: 't3',
    name: 'KABIR VERMA',
    tenure: 'MEMBER // 8 MONTHS',
    initial: 'K',
    rating: 5,
    focus: 'Strength & Hypertrophy',
    quote: 'The facility layout is intentional down to the millimeter. You never waste time hunting down collars or waiting for racks. The community holds you accountable just by showing up.'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'f1',
    category: 'Membership',
    question: 'WHAT MEMBERSHIP PLANS ARE AVAILABLE?',
    answer: 'We provide three straightforward commitment options: Monthly (₹1,499/mo) for flexible training, Quarterly (₹3,999/3 mo) which saves 15% and adds InBody composition scans, and our Annual tier (₹11,999/yr) featuring unlimited 24/7 keycard access, reserved VIP locker, and 1-on-1 coaching blocks.'
  },
  {
    id: 'f2',
    category: 'Membership',
    question: 'HOW CAN I ENQUIRE ABOUT JOINING?',
    answer: 'You can tap any "Enquire Now" button on this site to initiate immediate intake. Alternatively, contact our desk directly via WhatsApp at +91 98765 43210 or email ops@bruteforcegym.com to arrange your onboarding.'
  },
  {
    id: 'f3',
    category: 'Training',
    question: 'WHAT TRAINING PROGRAMS ARE OFFERED?',
    answer: 'We deliver 4 proprietary athletic disciplines: 01. Absolute Strength Training (barbell periodization), 02. Biomechanical Muscle Building (hypertrophy & tension overload), 03. 1-on-1 Personal Coaching (rehab & individualized programming), and 04. Tactical Conditioning (sleds, VO2 max, and work capacity).'
  },
  {
    id: 'f4',
    category: 'Facility',
    question: 'WHAT ARE THE GYM\'S OPERATING HOURS?',
    answer: 'Staffed and coached training hours operate Monday to Friday from 05:00 to 23:00, and Saturday to Sunday from 06:00 to 21:00. Annual and keycard credential holders enjoy 24/7/365 unrestricted magnetic badge entry.'
  },
  {
    id: 'f5',
    category: 'Facility',
    question: 'WHERE IS THE GYM LOCATED?',
    answer: 'We are situated at Sector 04 Industrial Zone, North Docklands, Calibrated Platform Wing B, Building 12. We are exactly a 4-minute commute from the Central Transit Hub with dedicated private parking for members.'
  },
  {
    id: 'f6',
    category: 'Access',
    question: 'CAN I ARRANGE A VISIT BEFORE JOINING?',
    answer: 'Yes. We encourage serious lifters to experience the armory prior to enrollment. Click "Schedule Tour" to select a time slot for a full facility walkthrough with a training director.'
  }
];

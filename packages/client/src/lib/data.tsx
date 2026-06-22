import {
  Atom,
  BinocularsIcon,
  FactoryIcon,
  CogIcon,
  FlaskConicalIcon,
  HandshakeIcon,
  LeafIcon,
  StarIcon,
  TrophyIcon,
  TruckElectricIcon,
  TestTube2Icon,
  TruckIcon,
} from 'lucide-react';

export const paths = {
  home: '/',
  aboutUs: '/about',
  solutions: '/solutions',
  qhse: '/qhse',
  industrial: '/solutions/industrial-manufacturing',
  oilfield: '/solutions/oilfield-chemicals',
  industries: '/industries',
  technical: '/technical',
  knowledge: '/knowledge',
  brochures: '/knowledge/brochures',
  partners: '/partners',
  contact: '/contact',
  management: '/management',
  csr: '/csr',
};

export const specialties = [
  {
    legend: 'production chemicals',
    title: 'production optimization',
    description:
      'Corrosion Inhibitors · Scale Inhibitors · Demulsifiers · Paraffin Inhibitors · Asphaltene Treatments · H₂S Scavengers · Oxygen Scavengers',
  },
  {
    legend: 'Flow Assurance Solutions',
    title: 'Flow Assurance',
    description: 'Wax Management · Hydrate Control · Pipeline Integrity Solutions',
  },
  {
    legend: 'Wellness Intervention Chemicals',
    title: 'Wellness Intervention',
    description: 'Acid Systems · Stimulation Chemicals · Specialty Treatments',
  },
  {
    legend: 'WATER TREATMENT CHEMICALS',
    title: 'Water Treatment',
    description: 'Produced Water Treatment · Deoiling Chemicals · Clarifiers · Water Quality Management',
  },
];

export const services = [
  {
    Icon: FlaskConicalIcon,
    title: 'Chemical Blending',
    description: 'Custom chemical blending solutions engineered for precision and performance.',
    path: paths.home,
  },
  {
    Icon: TruckIcon,
    title: 'Chemical Supply & Distribution',
    description: 'Reliable supply and distribution of industrial and specialty chemicals across Africa.',
    path: paths.home,
  },
  {
    Icon: TestTube2Icon,
    title: 'Laboratory Testing',
    description: 'Advanced analytical testing, compatibility studies, and performance evaluation.',
    path: paths.home,
  },
  {
    Icon: FactoryIcon,
    title: 'Production Support',
    description: 'On-site technical support for production optimization and chemical programme management.',
    path: paths.home,
  },
  {
    Icon: CogIcon,
    title: 'Technical Services',
    description: 'Engineering consultation, process optimization, and custom chemical programme design.',
    path: paths.home,
  },
  {
    Icon: Atom,
    title: 'Industrial Process Solutions',
    description: 'Tailored chemical solutions for industrial processing, plant maintenance, and operations.',
    path: paths.home,
  },
];

export const reasons = [
  {
    id: '01',
    Icon: StarIcon,
    title: 'Decades of Industry Experience',
    description: "Proven performance across Africa's most demanding industrial and energy sectors.",
  },
  {
    id: '02',
    Icon: BinocularsIcon,
    title: 'Comprehensive Chemical Portfolio',
    description: 'Industrial, oilfield, and specialty chemicals for diverse operational needs.',
  },
  {
    id: '03',
    Icon: FlaskConicalIcon,
    title: 'Strong Technical Capabilities',
    description: 'Advanced laboratory, engineering, and field technical support.',
  },
  {
    id: '04',
    Icon: TrophyIcon,
    title: 'Proven Track Record',
    description: 'Trusted by IOCs, LOCs, and industrial operators across Africa.',
  },
  {
    id: '05',
    Icon: HandshakeIcon,
    title: 'Customer-Focused Delivery',
    description: "Solution design and delivery tailored to each client's unique requirements.",
  },
  {
    id: '06',
    Icon: LeafIcon,
    title: 'Safety, Quality & Sustainability',
    description: 'International QHSE standards embedded in every operation.',
  },
  {
    id: '07',
    Icon: TruckElectricIcon,
    title: 'Reliable Supply Chain',
    description: 'Responsive logistics and supply chain supporting critical operations.',
  },
];

export const team = [
  {
    src: '/management/director.svg',
    name: 'Chika Ikenga',
    title: 'Group Managing Director',
    url: '',
    description: 'Visionary founder with deep expertise in chemical specialty and energy sectors.',
    paragraphs: [
      `
                Chika Ikenga founded Eunisell in 1996 with a clear mission: to provide world-class chemical
                solutions and specialty chemicals to the Nigerian oil and gas industry. His journey began with a
                degree in Industrial Chemistry, providing the technical foundation for what would become a
                major industrial conglomerate.
            `,
      `
                Under his leadership, Eunisell has achieved significant milestones, including becoming a
                preferred partner for global chemical manufacturers and a key player in offshore production
                chemicals. His commitment to "The Eunisell Way"—a philosophy of integrity, technical
                excellence, and client satisfaction—has been the cornerstone of the company's success.
            `,
      `
                Chika is also a dedicated philanthropist and advocate for African sports, famously sponsoring
                the Eunisell Boot Award to celebrate Nigerian football talent. His strategic vision continues to
                drive Eunisell's expansion into new markets and energy sectors across the continent.
            `,
    ],
  },
  {
    src: '/management/kenneth.svg',
    name: 'Kenneth Okeiyi',
    title: 'Chief Executive Officer',
    url: '',
    description: 'Drives operational strategy and regional expansion across West Africa.',
    paragraphs: [],
  },
  {
    src: '/management/lain.svg',
    name: 'Lain Fraiser',
    title: 'Director of Projects',
    url: '',
    description: 'Specialist in complex industrial engineering and large-scale facility management.',
    paragraphs: [],
  },
  {
    src: '/management/odekina.svg',
    name: 'Philip Odekina',
    title: 'Chief Financial Officer',
    url: '',
    description: 'Ensures fiscal discipline and strategic financial planning for long-term growth.',
    paragraphs: [],
  },
];

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
import { PartnerCategory } from './entities';

export const paths = {
  home: '/',
  aboutUs: '/about',
  solutions: '/solutions',
  qhse: '/qhse',
  hsePolicy: '/qhse/hse-policy',
  industrial: '/solutions/industrial-manufacturing',
  oilfield: '/solutions/oilfield-chemicals',
  industries: '/industries',
  technical: '/technical',
  knowledge: '/knowledge',
  knowledgeDetail: '/knowledge/:slug',
  brochures: '/knowledge/brochures',
  partners: '/partners',
  contact: '/contact',
  management: '/management',
  csr: '/csr',
  careers: '/careers',
  graduateTrainee: '/careers/graduate-trainee-programme',
  careerDetail: '/careers/:slug',
  industrialDetail: '/solutions/industrial-manufacturing/detail',
  blog: '/blog',
  blogDetail: '/blog/:slug',
  chemicals: '/chemicals',
  processFluids: '/chemicals/industrial-process-fluids',
  waterSolutions: '/chemicals/water-solutions',
  fluidMonitoring: '/chemicals/fluid-condition-monitoring',
  cleaningHygiene: '/chemicals/cleaning-hygiene',
  login: '/admin/login',
  dashboard: '/admin/dashboard',
  blogAdmin: '/admin/dashboard/blog',
  chemicalsAdmin: '/admin/dashboard/chemicals',
  solutionsAdmin: '/admin/dashboard/solutions',
  brochuresAdmin: '/admin/dashboard/brochures',
  careersAdmin: '/admin/dashboard/careers',
};

export const specialties = [
  {
    legend: 'Production Chemicals',
    title: 'Production Optimization',
    description: 'Corrosion Inhibitors · Scale Inhibitors · Demulsifiers · Paraffin Inhibitors · Asphaltene Treatments · H₂S Scavengers',
  },
  {
    legend: 'Flow Assurance',
    title: 'Integrity Solutions',
    description: 'Wax Management · Hydrate Control · Pipeline Integrity · Drag Reducers · Pour Point Depressants',
  },
  {
    legend: 'Well Intervention',
    title: 'Stimulation & Acidizing',
    description: 'Acid Systems · Stimulation Chemicals · Specialty Treatments · Iron Control · Surfactants',
  },
  {
    legend: 'Water Treatment',
    title: 'Produced Water',
    description: 'Deoiling Chemicals · Clarifiers · Biocides · Oxygen Scavengers · Reverse Osmosis Solutions',
  },
];

export const services = [
  {
    Icon: FlaskConicalIcon,
    title: 'Chemical Blending',
    description: 'Custom blending solutions engineered for precision and operational scale.',
    path: paths.chemicals,
  },
  {
    Icon: TruckIcon,
    title: 'Chemical Supply & Distribution',
    description: 'Reliable supply and distribution of industrial and specialty chemicals across Africa.',
    path: paths.chemicals,
  },
  {
    Icon: TestTube2Icon,
    title: 'Laboratory Testing',
    description: 'Advanced analytical testing, compatibility studies, and performance evaluation.',
    path: paths.technical,
  },
  {
    Icon: FactoryIcon,
    title: 'Production Support',
    description: 'On-site technical support for production optimization and chemical programme management.',
    path: paths.technical,
  },
  {
    Icon: CogIcon,
    title: 'Technical Services',
    description: 'Engineering consultation, process optimization, and custom chemical programme design.',
    path: paths.technical,
  },
  {
    Icon: Atom,
    title: 'Industrial Solutions',
    description: 'Bespoke processing solutions for plant maintenance and efficiency.',
    path: paths.industrial,
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

export enum NavDropdown {
  Company = 'Company',
  Solutions = 'Other Solutions',
  KnowledgeCentre = 'Knowledge Centre',
  OurChemicals = 'Our Chemicals',
}

export interface NavLink {
  label: string;
  path: string;
  semibold?: boolean;
}

export const companyLinks: NavLink[] = [
  { label: 'About Us', path: paths.aboutUs },
  { label: 'Executive Management', path: paths.management },
  { label: 'Careers', path: paths.careers },
  { label: 'Partners', path: paths.partners },
  { label: 'Graduate Trainee Program', path: paths.graduateTrainee },
];

export const responsibilityLinks: NavLink[] = [
  { label: 'QHSE Standards', path: paths.qhse },
  { label: 'Health Safety & Environment', path: paths.hsePolicy },
  { label: 'Corporate Social Responsibility', path: paths.csr },
];

export const coreSolutionLinks: NavLink[] = [
  { label: 'Our Solutions Overview', path: paths.solutions, semibold: true },
  { label: 'Industrial & Manufacturing Chemicals', path: paths.industrial },
  { label: 'Oilfield Chemicals', path: paths.oilfield },
];

export const technicalCapabilityLinks: NavLink[] = [
  { label: 'Technical Services', path: paths.technical, semibold: true },
  { label: 'Laboratory Services', path: `${paths.technical}#lab-services` },
  { label: 'Chemical Blending', path: paths.chemicals },
];

export const resourceLinks: NavLink[] = [
  { label: 'Knowledge Centre Hub', path: paths.knowledge, semibold: true },
  { label: 'Technical Articles', path: `${paths.knowledge}#articles` },
  { label: 'Industry Insights', path: `${paths.knowledge}#insights` },
  { label: 'Our Blog', path: paths.blog },
];

export const downloadLinks: NavLink[] = [
  { label: 'Brochures', path: paths.brochures, semibold: true },
  { label: 'Corporate Brochures', path: paths.brochures },
  { label: 'Technical Bulletins', path: paths.brochures },
  { label: 'Product Catalogues', path: paths.brochures },
];

export const knowledgeTopics: string[] = ['Oilfield', 'Industrial', 'Laboratory', 'Water', 'Sustainability', 'QHSE'];

export const chemicalsPrimaryLinks: NavLink[] = [
  { label: 'Industrial Process Fluids', path: paths.processFluids },
  { label: 'Cleaning & Hygiene', path: paths.cleaningHygiene },
  { label: 'Water Solutions', path: paths.waterSolutions },
];

export const chemicalsSecondaryLinks: NavLink[] = [
  { label: 'Oilfield Chemicals', path: paths.oilfield },
  { label: 'Fluid Condition Monitoring', path: paths.fluidMonitoring },
];

export const oilfieldChemicalLinks = [
  {
    label: 'Production Chemicals',
    path: `${paths.oilfield}#production-chemicals`,
  },
  {
    label: 'Subsea Fluids',
    path: `${paths.oilfield}#flow-assurance`,
  },
  {
    label: 'Drilling & Completion Chemicals',
    path: `${paths.oilfield}#well-intervention`,
  },
  {
    label: 'Dewaxing Services',
    path: `${paths.oilfield}#flow-assurance`,
  },
  {
    label: 'Descaling Services',
    path: `${paths.oilfield}#production-chemicals`,
  },
  {
    label: 'Water Filtration & Purification',
    path: `${paths.oilfield}#water-treatment`,
  },
  {
    label: 'Produced Water Treatment Chemicals & Technology',
    path: `${paths.oilfield}#water-treatment`,
  },
  {
    label: 'Gas Treatment Chemicals',
    path: `${paths.oilfield}#production-chemicals`,
  },
  {
    label: 'Stimulation Chemicals',
    path: `${paths.oilfield}#well-intervention`,
  },
  {
    label: 'Process & Pipeline Chemicals',
    path: `${paths.oilfield}#flow-assurance`,
  },
  {
    label: 'Workover Fluids',
    path: `${paths.oilfield}#well-intervention`,
  },
  {
    label: 'Cleaning & Hygiene Chemicals',
    path: paths.cleaningHygiene,
  },
  {
    label: '⁠Heat Transfer Fluids',
    path: paths.chemicals,
  },
  {
    label: '⁠Specialty Lubricants',
    path: paths.chemicals,
  },
  {
    label: 'General Chemicals',
    path: paths.chemicals,
  },
];

export const dropdownNav = [
  { label: NavDropdown.Company, items: companyLinks },
  {
    label: NavDropdown.OurChemicals,
    items: [{ label: 'View All Chemicals', path: paths.chemicals }],
  },
  {
    label: NavDropdown.Solutions,
    items: [
      { label: 'Industrial Manufacturing', path: paths.industrial },
      { label: 'Oilfield Chemicals', path: paths.oilfield },
      { label: 'All Solutions', path: paths.solutions },
    ],
  },
  { label: 'Industries Served', path: paths.industries, items: [] },
  { label: 'Technical Services', path: paths.technical, items: [] },
  {
    label: NavDropdown.KnowledgeCentre,
    items: [
      { label: 'Articles & Insights', path: paths.knowledge },
      { label: 'Brochures', path: paths.brochures },
    ],
  },
  { label: 'Contact', path: paths.contact, items: [] },
];

export const team = [
  {
    src: '/management/director.svg',
    name: 'Chika Ikenga',
    title: 'Founder',
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
    highlights: ['30+ Years Global Experience', 'Strategic M&A Expert', 'Industrial Chemist Pioneer'],
  },
  {
    src: '/management/kenneth.svg',
    name: 'Kenneth Okeiyi',
    title: 'Chief Executive Officer',
    url: '',
    description: 'Drives operational strategy and regional expansion across West Africa.',
    paragraphs: [
      `
        Kenneth Okeiyi oversees the daily operations of the company.
        He holds a B.Sc. degree in Banking & Finance from the Imo
        State University and an MBA in Business Finance from the
        University of Nigeria, Nsukka.
      `,
      `
        With over 20 years of experience in banking, finance, the
        capital market and business advisory services across Africa.
        He possesses strong experience in offering purpose fit
        business finance structures across a wide range of industries.
        Kenneth Okeiyi has a strong network of relationships across
        financial institutions globally.
      `,
    ],
    highlights: ['20+ Years of Experience'],
  },
];

export const partners = [
  {
    id: 1,
    category: PartnerCategory.Technical,
    src: '/partners/antara-groupe.png',
    sphere: '/partners/spheres/antara-groupe.png',
    alt: 'Technical Services',
    name: 'Antara Groupe',
    description: 'Expert consultancy and laboratory services for specialized industrial chemical applications.',
  },
  {
    id: 2,
    category: PartnerCategory.Chemical,
    src: '/partners/basf.png',
    sphere: '/partners/spheres/basf.png',
    alt: 'Global Manufacturer',
    name: 'BASF',
    description: 'Leading provider of high-performance chemicals for automotive and industrial sectors.',
  },
  {
    id: 3,
    category: PartnerCategory.Chemical,
    src: '/partners/clariant.png',
    sphere: '/partners/spheres/clariant.png',
    alt: 'Specialty Chemicals',
    name: 'Clariant',
    description: 'Innovating sustainable specialty chemical solutions for energy and resources.',
  },
  {
    id: 4,
    category: PartnerCategory.Industrial,
    src: '/partners/dow.png',
    sphere: '/partners/spheres/dow.png',
    alt: 'Industrial Solutions',
    name: 'Dow',
    description: 'Materials science leader providing chemical intermediates and industrial plastics.',
  },
  {
    id: 5,
    category: PartnerCategory.Industrial,
    src: '/partners/dupont.png',
    sphere: '/partners/spheres/dupont.png',
    alt: 'Technical Materials',
    name: 'DuPont',
    description: 'Specialized technical polymers and protection materials for hazardous environments.',
  },
  {
    id: 6,
    category: PartnerCategory.Chemical,
    src: '/partners/honeywell.png',
    sphere: '/partners/spheres/honeywell.png',
    alt: 'Performance Materials',
    name: 'Honeywell',
    description: 'Advanced materials and process technologies for refining and petrochemical industries.',
  },
  {
    id: 7,
    category: PartnerCategory.Chemical,
    src: '/partners/nouryon.png',
    sphere: '/partners/spheres/nouryon.png',
    alt: 'Specialty Chemicals',
    name: 'Nouryon',
    description: 'Global leader in essential chemistry for paper, plastics, and personal care.',
  },
  {
    id: 8,
    category: PartnerCategory.Technical,
    src: '/partners/quaker-houghton.png',
    sphere: '/partners/spheres/quaker-houghton.png',
    alt: 'Industrial Fluids',
    name: 'Quaker Houghton',
    description: 'Primary provider of industrial process fluids for metals and heavy manufacturing.',
  },
  {
    id: 9,
    category: PartnerCategory.Industrial,
    src: '/partners/spheres/comptech.png',
    sphere: '/partners/spheres/comptech.png',
    alt: 'Technical Materials',
    name: 'Comptech',
    description: 'Specialized technical polymers and protection materials for hazardous environments.',
  },
  {
    id: 10,
    category: PartnerCategory.Oilfield,
    src: '/partners/spheres/roemex.png',
    sphere: '/partners/spheres/roemex.png',
    alt: 'Oilfield Chemicals',
    name: 'Roemex',
    description: 'Specialized technical polymers and protection materials for hazardous environments.',
  },
  {
    id: 11,
    category: PartnerCategory.Industrial,
    src: '/partners/spheres/eagle-burgmann.png',
    sphere: '/partners/spheres/eagle-burgmann.png',
    alt: 'Industrial Solutions',
    name: 'Eagle Burgmann',
    description: 'Specialized technical polymers and protection materials for hazardous environments.',
  },
  {
    id: 12,
    category: PartnerCategory.Oilfield,
    src: '/partners/spheres/iggnita.png',
    sphere: '/partners/spheres/iggnita.png',
    alt: 'Oilfield Chemicals',
    name: 'Iggnita',
    description: 'Specialized technical polymers and protection materials for hazardous environments.',
  },
  {
    id: 13,
    category: PartnerCategory.Chemical,
    src: '/partners/spheres/tmc-transmare-chemie.png',
    sphere: '/partners/spheres/tmc-transmare-chemie.png',
    alt: 'Specialty Chemicals',
    name: 'TMC Transmare Chemie',
    description: 'Specialized technical polymers and protection materials for hazardous environments.',
  },
  {
    id: 14,
    category: PartnerCategory.Technical,
    src: '/partners/spheres/tts.png',
    sphere: '/partners/spheres/tts.png',
    alt: 'Technical Services',
    name: 'TTS',
    description: 'Specialized technical polymers and protection materials for hazardous environments.',
  },
];

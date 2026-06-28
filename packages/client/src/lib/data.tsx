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
  careerDetail: '/careers/:slug',
  industrialDetail: '/solutions/industrial-manufacturing/detail',
  blog: '/blog',
  blogDetail: '/blog/:slug',
  chemicals: '/chemicals',
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
    description: 'Tailored chemical solutions for industrial processing, plant maintenance, and operations.',
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
  Solutions = 'Our Solutions',
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
];

export const responsibilityLinks: NavLink[] = [
  { label: 'QHSE Standards', path: paths.qhse },
  { label: 'Corporate Social Responsibility', path: paths.csr },
];

export const coreSolutionLinks: NavLink[] = [
  { label: 'Our Solutions Overview', path: paths.solutions, semibold: true },
  { label: 'Industrial & Manufacturing Chemicals', path: paths.industrial },
  { label: 'Oilfield Chemicals', path: paths.oilfield },
];

export const technicalCapabilityLinks: NavLink[] = [
  { label: 'Technical Services', path: paths.technical, semibold: true },
  { label: 'Laboratory Services', path: paths.technical },
  { label: 'Chemical Blending', path: paths.chemicals },
];

export const resourceLinks: NavLink[] = [
  { label: 'Knowledge Centre Hub', path: paths.knowledge, semibold: true },
  { label: 'Technical Articles', path: paths.knowledge },
  { label: 'Industry Insights', path: paths.knowledge },
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
  { label: 'Industrial Process Fluids', path: paths.chemicals },
  { label: 'Cleaning & Hygiene', path: paths.chemicals },
  { label: 'Water Solutions', path: paths.chemicals },
];

export const chemicalsSecondaryLinks: NavLink[] = [
  { label: 'Oilfield Chemicals', path: paths.oilfield },
  { label: 'Fluid Condition Monitoring', path: paths.chemicals },
];

export const dropdownNav = [
  { label: NavDropdown.Company, items: companyLinks },
  {
    label: NavDropdown.Solutions,
    items: [
      { label: 'Industrial Manufacturing', path: paths.industrial },
      { label: 'Oilfield Chemicals', path: paths.oilfield },
      { label: 'All Solutions', path: paths.solutions },
    ],
  },
  {
    label: NavDropdown.OurChemicals,
    items: [{ label: 'View All Chemicals', path: paths.chemicals }],
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
    highlights: ['30+ Years Global Experience', 'Strategic M&A Expert', 'Industrial Chemist Pioneer'],
  },
  {
    src: '/management/kenneth.svg',
    name: 'Kenneth Okeiyi',
    title: 'Chief Executive Officer',
    url: '',
    description: 'Drives operational strategy and regional expansion across West Africa.',
    paragraphs: [],
    highlights: [],
  },
  {
    src: '/management/lain.svg',
    name: 'Lain Fraiser',
    title: 'Head of International Business',
    url: '',
    description: 'Specialist in complex industrial engineering and large-scale facility management.',
    paragraphs: [],
    highlights: [],
  },
  {
    src: '/management/odekina.svg',
    name: 'Philip Odekina',
    title: 'Chief Financial Officer',
    url: '',
    description: 'Ensures fiscal discipline and strategic financial planning for long-term growth.',
    paragraphs: [],
    highlights: [],
  },
];

export const partners = [
  {
    id: 1,
    category: PartnerCategory.Technical,
    src: '/partners/antara-groupe.png',
    alt: 'Technical Services',
    name: 'Antara Groupe',
    description: 'Expert consultancy and laboratory services for specialized industrial chemical applications.',
  },
  {
    id: 2,
    category: PartnerCategory.Chemical,
    src: '/partners/basf.png',
    alt: 'Global Manufacturer',
    name: 'BASF',
    description: 'Leading provider of high-performance chemicals for automotive and industrial sectors.',
  },
  {
    id: 3,
    category: PartnerCategory.Chemical,
    src: '/partners/clariant.png',
    alt: 'Specialty Chemicals',
    name: 'Clariant',
    description: 'Innovating sustainable specialty chemical solutions for energy and resources.',
  },
  {
    id: 4,
    category: PartnerCategory.Industrial,
    src: '/partners/dow.png',
    alt: 'Industrial Solutions',
    name: 'Dow',
    description: 'Materials science leader providing chemical intermediates and industrial plastics.',
  },
  {
    id: 5,
    category: PartnerCategory.Industrial,
    src: '/partners/dupont.png',
    alt: 'Technical Materials',
    name: 'DuPont',
    description: 'Specialized technical polymers and protection materials for hazardous environments.',
  },
  {
    id: 6,
    category: PartnerCategory.Chemical,
    src: '/partners/honeywell.png',
    alt: 'Performance Materials',
    name: 'Honeywell',
    description: 'Advanced materials and process technologies for refining and petrochemical industries.',
  },
  {
    id: 7,
    category: PartnerCategory.Chemical,
    src: '/partners/nouryon.png',
    alt: 'Specialty Chemicals',
    name: 'Nouryon',
    description: 'Global leader in essential chemistry for paper, plastics, and personal care.',
  },
  {
    id: 8,
    category: PartnerCategory.Technical,
    src: '/partners/quaker-houghton.png',
    alt: 'Industrial Fluids',
    name: 'Quaker Houghton',
    description: 'Primary provider of industrial process fluids for metals and heavy manufacturing.',
  },
];

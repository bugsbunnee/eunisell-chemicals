import { useMemo } from 'react';
import useBlogAdminStore from '../store/blog-admin';

export type BlogStatus = 'PUBLISHED' | 'IN_REVIEW' | 'DRAFT' | 'SCHEDULED' | 'ARCHIVED';

export interface BlogPost {
  id: string;
  title: string;
  topic: string;
  category: string;
  authorName: string;
  authorInitials: string;
  status: BlogStatus;
  featured: boolean;
  lastUpdated: string;
}

export const ALL_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Improving Industrial Performance with Polymer Additives',
    topic: 'Chemical Engineering',
    category: 'Technical Bulletin',
    authorName: 'Dr. Smith',
    authorInitials: 'DS',
    status: 'PUBLISHED',
    featured: true,
    lastUpdated: '2 hours ago',
  },
  {
    id: '2',
    title: 'Managing Flow Assurance in Deepwater Operations',
    topic: 'Oilfield Chemicals',
    category: 'Industry Insights',
    authorName: 'Sarah K.',
    authorInitials: 'SK',
    status: 'IN_REVIEW',
    featured: false,
    lastUpdated: 'Yesterday',
  },
  {
    id: '3',
    title: 'Our Culture of QHSE Excellence at Eunisell',
    topic: 'Safety',
    category: 'Company Updates',
    authorName: 'Marketing Team',
    authorInitials: 'MT',
    status: 'DRAFT',
    featured: false,
    lastUpdated: 'Oct 22, 2023',
  },
  {
    id: '4',
    title: 'Corrosion Control Techniques for High-H2S Environments',
    topic: 'Chemical Engineering',
    category: 'Technical Bulletin',
    authorName: 'Dr. Smith',
    authorInitials: 'DS',
    status: 'PUBLISHED',
    featured: false,
    lastUpdated: 'Oct 18, 2023',
  },
  {
    id: '5',
    title: 'Specialty Lubricants for High-Temperature Applications',
    topic: 'Oilfield Chemicals',
    category: 'Technical Bulletin',
    authorName: 'Engr. Bayo',
    authorInitials: 'EB',
    status: 'PUBLISHED',
    featured: true,
    lastUpdated: 'Oct 15, 2023',
  },
  {
    id: '6',
    title: 'Digital Transformation in Chemical Supply Chains',
    topic: 'Digitalization',
    category: 'Industry Insights',
    authorName: 'Sarah K.',
    authorInitials: 'SK',
    status: 'PUBLISHED',
    featured: false,
    lastUpdated: 'Oct 10, 2023',
  },
  {
    id: '7',
    title: 'Eunisell Expands Distribution Hub in Port Harcourt',
    topic: 'Company News',
    category: 'Company Updates',
    authorName: 'Marketing Team',
    authorInitials: 'MT',
    status: 'PUBLISHED',
    featured: false,
    lastUpdated: 'Oct 5, 2023',
  },
  {
    id: '8',
    title: 'The Future of EOR: Chemical Innovations in Mature Fields',
    topic: 'Oilfield Chemicals',
    category: 'Industry Insights',
    authorName: 'Tunde F.',
    authorInitials: 'TF',
    status: 'IN_REVIEW',
    featured: false,
    lastUpdated: 'Oct 3, 2023',
  },
  {
    id: '9',
    title: 'Optimizing Water Treatment in Centralized Cooling Systems',
    topic: 'Chemical Engineering',
    category: 'Technical Bulletin',
    authorName: 'Engr. Chioma',
    authorInitials: 'EC',
    status: 'DRAFT',
    featured: false,
    lastUpdated: 'Sep 28, 2023',
  },
  {
    id: '10',
    title: 'Highlights from the 2023 Industrial Leadership Summit',
    topic: 'Events',
    category: 'Company Updates',
    authorName: 'Marketing Team',
    authorInitials: 'MT',
    status: 'PUBLISHED',
    featured: false,
    lastUpdated: 'Sep 25, 2023',
  },
  {
    id: '11',
    title: 'Polymer Flooding Applications in Nigerian Oilfields',
    topic: 'Oilfield Chemicals',
    category: 'Technical Bulletin',
    authorName: 'Dr. Smith',
    authorInitials: 'DS',
    status: 'PUBLISHED',
    featured: false,
    lastUpdated: 'Sep 20, 2023',
  },
  {
    id: '12',
    title: 'Sustainability in Chemical Manufacturing: A Roadmap',
    topic: 'Sustainability',
    category: 'Industry Insights',
    authorName: 'Tunde F.',
    authorInitials: 'TF',
    status: 'DRAFT',
    featured: false,
    lastUpdated: 'Sep 15, 2023',
  },
  {
    id: '13',
    title: 'Eunisell Q3 2023 Performance Review',
    topic: 'Company News',
    category: 'Company Updates',
    authorName: 'Marketing Team',
    authorInitials: 'MT',
    status: 'SCHEDULED',
    featured: false,
    lastUpdated: 'Sep 10, 2023',
  },
  {
    id: '14',
    title: 'Advanced Scale Inhibitors for Offshore Platforms',
    topic: 'Chemical Engineering',
    category: 'Technical Bulletin',
    authorName: 'Engr. Chioma',
    authorInitials: 'EC',
    status: 'PUBLISHED',
    featured: false,
    lastUpdated: 'Sep 5, 2023',
  },
  {
    id: '15',
    title: 'West Africa Energy Outlook 2024',
    topic: 'Market Analysis',
    category: 'Industry Insights',
    authorName: 'Sarah K.',
    authorInitials: 'SK',
    status: 'SCHEDULED',
    featured: false,
    lastUpdated: 'Sep 2, 2023',
  },
  {
    id: '16',
    title: 'Chemical Safety Procedures Vol. 1',
    topic: 'Safety',
    category: 'Technical Bulletin',
    authorName: 'Dr. Smith',
    authorInitials: 'DS',
    status: 'ARCHIVED',
    featured: false,
    lastUpdated: 'Aug 20, 2023',
  },
];

const PER_PAGE = 10;

export const useBlogStats = () => {
  return useMemo(
    () => ({
      total: ALL_POSTS.length,
      published: ALL_POSTS.filter((p) => p.status === 'PUBLISHED').length,
      drafts: ALL_POSTS.filter((p) => p.status === 'DRAFT').length,
      inReview: ALL_POSTS.filter((p) => p.status === 'IN_REVIEW').length,
      scheduled: ALL_POSTS.filter((p) => p.status === 'SCHEDULED').length,
      archived: ALL_POSTS.filter((p) => p.status === 'ARCHIVED').length,
      categoryBreakdown: {
        technical: ALL_POSTS.filter((p) => p.category === 'Technical Bulletin').length,
        insights: ALL_POSTS.filter((p) => p.category === 'Industry Insights').length,
        updates: ALL_POSTS.filter((p) => p.category === 'Company Updates').length,
      },
    }),
    []
  );
};

export const useBlogPosts = () => {
  const query = useBlogAdminStore((s) => s.query);

  return useMemo(() => {
    let filtered = [...ALL_POSTS];

    if (query.status) {
      filtered = filtered.filter((p) => p.status === query.status);
    }

    if (query.category) {
      filtered = filtered.filter((p) => p.category === query.category);
    }

    if (query.search) {
      const q = query.search.toLowerCase();
      filtered = filtered.filter((p) => p.title.toLowerCase().includes(q) || p.authorName.toLowerCase().includes(q) || p.topic.toLowerCase().includes(q));
    }

    const total = filtered.length;
    const page = query.page ?? 1;
    const data = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

    return {
      data,
      meta: { total, page, limit: PER_PAGE, totalPages: Math.ceil(total / PER_PAGE) },
    };
  }, [query]);
};

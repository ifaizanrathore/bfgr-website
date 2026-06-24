import {
  Gem,
  Building2,
  Shirt,
  Pill,
  Stethoscope,
  Globe2,
  TrendingUp,
  Shield,
  Heart,
  Scale,
  Leaf,
  Handshake,
  Lightbulb,
  Award,
  Users,
  TreePine,
  type LucideIcon,
} from 'lucide-react'

// ─── Sectors ──────────────────────────────────────────────────────────────────

export interface Sector {
  id: string
  icon: LucideIcon
  title: string
  blurb: string
  activities: string[]
  highlight?: string
}

export const sectors: Sector[] = [
  {
    id: 'mining',
    icon: Gem,
    title: 'Mining, Exploration & Natural Resources',
    blurb:
      'Unlocking the untapped mineral wealth of Azad Jammu & Kashmir and beyond through responsible extraction, processing, and global export.',
    activities: [
      'Marble mining & processing',
      'Granite quarrying & export',
      'Precious & semi-precious gemstone mining (Ruby, Sapphire, Emerald, Topaz, Aquamarine)',
      'Stone cutting, polishing & processing',
      'Geological surveys & feasibility studies',
      'International export of minerals & stones',
      'Joint ventures with international mining firms',
    ],
    highlight: 'Focus: Azad Jammu & Kashmir (AJK) mineral wealth',
  },
  {
    id: 'realestate',
    icon: Building2,
    title: 'Real Estate Development & Property Investment',
    blurb:
      'Developing landmark residential, commercial, and industrial properties that shape communities and deliver lasting investment value.',
    activities: [
      'Housing projects & residential communities',
      'Commercial complexes & office developments',
      'Tourism & hospitality properties',
      'Industrial parks & Special Economic Zones (SEZs)',
      'Urban planning & smart infrastructure',
      'Portfolio management & property investment',
      'Investment facilitation & JV developments',
    ],
  },
  {
    id: 'garments',
    icon: Shirt,
    title: 'Garments, Textiles & Apparel Manufacturing',
    blurb:
      'Delivering quality apparel manufacturing from Pakistan to global markets — from fashion to workwear, built on world-class craftsmanship.',
    activities: [
      'Ready-made garments (RMG) production',
      'Uniforms & workwear manufacturing',
      'Fashion apparel & designer lines',
      'Sportswear & activewear',
      'Home textiles & soft furnishings',
      'Private label manufacturing',
      'International sourcing & export',
    ],
  },
  {
    id: 'pharma',
    icon: Pill,
    title: 'Pharmaceuticals & Medical Supplies',
    blurb:
      'Improving healthcare access across regions through generic medicine manufacturing, supply chain management, and international procurement.',
    activities: [
      'Generic medicines manufacturing',
      'Medical consumables supply',
      'Healthcare equipment trading',
      'Pharmaceutical distribution networks',
      'Diagnostic products',
      'Hospital supplies & procurement',
      'International procurement & regulatory compliance',
    ],
  },
  {
    id: 'surgical',
    icon: Stethoscope,
    title: 'Surgical Equipment & Healthcare Products',
    blurb:
      'Leveraging Pakistan\'s world-renowned surgical instruments industry to supply premium medical devices to global healthcare systems.',
    activities: [
      'Surgical instrument manufacturing partnerships',
      'Hospital equipment supply chains',
      'Medical devices trading & distribution',
      'Surgical instruments export',
      'International distribution networks',
      'Public & private sector procurement',
    ],
    highlight: "Pakistan: world-class surgical instrument reputation",
  },
  {
    id: 'trade',
    icon: Globe2,
    title: 'Import, Export & Distribution Networks',
    blurb:
      'Connecting resource-rich regions with global markets through robust, reliable trade and distribution infrastructure.',
    activities: [
      'Minerals, gemstones & marble/granite',
      'Medical & surgical products',
      'Textiles & apparel',
      'Construction materials & industrial machinery',
      'Agricultural commodities',
      'Consumer products',
      'Cross-border trade facilitation',
    ],
  },
  {
    id: 'investments',
    icon: TrendingUp,
    title: 'Strategic Investments & Emerging Ventures',
    blurb:
      'Pursuing high-impact opportunities at the intersection of sustainability, technology, and economic development.',
    activities: [
      'Renewable energy projects',
      'Agribusiness & food processing',
      'Infrastructure & public-private partnerships (PPPs)',
      'Logistics & supply chain innovation',
      'IT & digital solutions',
      'Tourism & hospitality ventures',
      'Advanced manufacturing & international JVs',
    ],
  },
]

// ─── Core Values ─────────────────────────────────────────────────────────────

export interface CoreValue {
  icon: LucideIcon
  title: string
  description: string
  category: 'foundational' | 'operational'
}

export const coreValues: CoreValue[] = [
  {
    icon: Shield,
    title: 'Faith & Spirituality',
    description: 'Grounded in enduring spiritual principles that guide every decision.',
    category: 'foundational',
  },
  {
    icon: Scale,
    title: 'Integrity & Honesty',
    description: 'Unwavering commitment to transparency and ethical conduct.',
    category: 'foundational',
  },
  {
    icon: Heart,
    title: 'Human Welfare & Service',
    description: 'Every enterprise anchored in improving lives and communities.',
    category: 'foundational',
  },
  {
    icon: Scale,
    title: 'Fairness & Justice',
    description: 'Equal opportunity, equitable treatment, and just practices for all.',
    category: 'foundational',
  },
  {
    icon: Leaf,
    title: 'Sustainability & Responsibility',
    description: 'Balancing profit with long-term environmental and social stewardship.',
    category: 'foundational',
  },
  {
    icon: Handshake,
    title: 'Compassion & Respect',
    description: 'Treating every partner, employee, and community with dignity.',
    category: 'foundational',
  },
  {
    icon: Lightbulb,
    title: 'Innovation & Entrepreneurship',
    description: 'Embracing creative thinking and entrepreneurial spirit to pioneer solutions.',
    category: 'operational',
  },
  {
    icon: Award,
    title: 'Excellence & Professionalism',
    description: 'Delivering the highest standards in every product, service, and interaction.',
    category: 'operational',
  },
  {
    icon: Users,
    title: 'Partnership & Collaboration',
    description: 'Building relationships that multiply impact and create shared prosperity.',
    category: 'operational',
  },
  {
    icon: TreePine,
    title: 'Environmental Responsibility',
    description: 'Operating sustainably to preserve natural resources for future generations.',
    category: 'operational',
  },
]

// ─── Leadership ───────────────────────────────────────────────────────────────

export const chairman = {
  name: 'Raza Muhammad Rathore',
  title: 'Chairman & Chief Executive Officer',
  subtitle: 'Visionary Leader & Development Professional',
  imagePath: '/images/chairman.jpeg',
  bio: 'A seasoned executive and development professional with extensive leadership experience across corporate management, governance, supply chain, organizational development, public-private partnerships, and international cooperation. His visionary approach has guided BFGR from inception to a diversified multinational business group positioned at the nexus of South Asia and Central Asian markets.',
  pullQuote:
    '"Building sustainable enterprises that contribute to economic growth, employment generation, and social development while maintaining the highest standards of corporate governance."',
  expertise: [
    'Corporate Management & Governance',
    'Supply Chain Management & Logistics',
    'Organizational Development & Administration',
    'Public-Private Partnerships (PPPs)',
    'International Development & Cooperation',
    'Strategic Planning & Business Development',
    'Stakeholder Engagement & Investment Facilitation',
    'Institutional Strengthening & Capacity Building',
  ],
}

// ─── Investment Partners ──────────────────────────────────────────────────────

export const investmentPartners = [
  'Strategic Investors',
  'Joint Venture Partners',
  'Mining Companies',
  'International Buyers',
  'Importers & Exporters',
  'Real Estate Developers',
  'Manufacturers',
  'Government Agencies',
  'Development Organizations',
  'Technology Providers',
  'Financial Institutions',
  'International Partners',
]

// ─── Contact ─────────────────────────────────────────────────────────────────

export const contactInfo = {
  address: 'House 11, Street 15, Banigala, Islamabad, Pakistan 44000',
  website: 'www.babafaridglobalresources.com',
  email: 'babafaridglobalresources@gmail.com',
  phone: '+92 309 9286864',
  whatsapp: '+92 344 9565131',
  whatsappUrl: 'https://wa.me/923449565131',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.9!2d73.006!3d33.752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf0000000000%3A0x0!2sBanigala%2C+Islamabad!5e0!3m2!1sen!2spk!4v1700000000000',
}

// ─── Nav links ────────────────────────────────────────────────────────────────

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#overview' },
  { label: 'Services', href: '#sectors' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
]

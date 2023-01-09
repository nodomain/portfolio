import {
  MapIcon,
  OfficeBuildingIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import MastodonIcon from '../components/Icon/MastodonIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  Hero,
  HomepageMeta,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Fabian Fischer',
  description: "Personal portfolio of Fabian Fischer",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Fabian Fischer`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Nuremberg based <strong className="text-stone-100">Software Architect</strong>, working
        at <strong className="text-stone-100">Siemens AG</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am designing, building and operating the cloud platform that drives Siemens' corporate marketing pages.
      </p>
    </>
  ),
  actions: [],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ``,
  aboutItems: [
    {label: 'Location', text: 'Nuremberg, DE', Icon: MapIcon},
    {label: 'Employment', text: 'Siemens AG', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'German',
        level: 10,
      },
      {
        name: 'English',
        level: 10,
      },
    ],
  },
  {
    name: 'Architecture',
    skills: [
      {
        name: 'Cloud-Native Architecture',
        level: 10,
      },
      {
        name: 'System Architecture',
        level: 10,
      },
    ],
  },
  {
    name: 'Infrastructure development',
    skills: [
      {
        name: 'Terraform',
        level: 10,
      },
      {
        name: 'CloudFormation',
        level: 5,
      },
    ],
  },
  {
    name: 'System administration',
    skills: [
      {
        name: 'Linux',
        level: 10,
      },
      {
        name: 'Windows',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 3,
      },
      {
        name: 'Vue.js',
        level: 5,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Golang',
        level: 3,
      },
    ],
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
];

export const experience: TimelineItem[] = [
];



/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/nodomain'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/fabian-fischer/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/nodomain'},
  {label: 'Mastodon', Icon: MastodonIcon, href: 'https://home.social/@fabian'},
];

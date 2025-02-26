import { StaticImageData } from 'next/image';
import { projectImages } from './project-images';
import { Tech } from './techIcons';

export interface Project {
  name: string;
  year: number;
  title: string;
  description: string;
  results: string[];
  technologies: Tech[];
  links: {
    website?: string;
    github?: string;
  };
  images: StaticImageData[];
}

export const projects: Project[] = [
  {
    name: 'Monsai',
    year: 2023,
    title: 'AI Growth Companion',
    description:
      'Monsai is a personal growth app designed to be your daily companion in self-improvement. It simplifies your journey towards achieving personal goals by providing bite-sized lessons, practical tools, and progress tracking features, helping you make consistent, small steps towards big changes in areas like financial literacy, health, and personal development.',
    results: [
      'Built a production-grade mobile app with AI-driven coaching, habit tracking, and journaling',
      'Designed and deployed a scalable cloud architecture using AWS + Terraform',
      'Integrated Firebase Authentication, analytics, and subscription monetization for a seamless user experience',
    ],
    technologies: ['React Native', 'Django', 'AWS', 'PostgreSQL', 'Firebase'],
    images: projectImages.monsai,
    links: {
      website: 'https://monsaiapp.com',
    },
  },
  {
    name: 'Beakr',
    year: 2021,
    title: 'Social/Dating App',
    description:
      'Demonstrated success in designing, developing, and publishing a social and dating mobile application utilizing the latest technologies.',
    results: [
      'Reached 5,000+ downloads within two months of launch',
      'Developed real-time chat & social networking features using WebSockets',
      'Built a secure, scalable backend infrastructure to handle high user engagement',
    ],
    technologies: ['React Native', 'Django', 'AWS', 'PostgreSQL', 'Firebase'],
    images: projectImages.beakr,
    links: {},
  },
  {
    name: 'Autove',
    year: 2019,
    title: 'Auto-Parts Locator',
    description:
      'Demonstrated success in designing, developing, and publishing a mobile application to facilitate users in finding any parts, color codes, information, and more for any vehicle by using the app.',
    results: [
      'Created my first end-to-end mobile app, turning an idea into a functional product',
      'Developed VIN scanning & part lookup with integrated Google Maps API',
      'Integrated Google Maps & Yelp APIs to help users find nearby mechanics',
    ],
    technologies: ['React Native', 'Laravel', 'MySQL', 'Firebase'],
    images: projectImages.autove,
    links: {},
  },
];

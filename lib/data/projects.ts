import { StaticImageData } from 'next/image';
import { projectImages } from './project-images';

export interface Project {
  name: string;
  year: number;
  title: string;
  description: string;
  results: string[];
  //   technologies: string[];
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
      'Enhanced user experience by 40%',
      'Engineered a robust and scalable, full-stack solution',
      'Implemented advanced personalization algorithms',
    ],
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
      'Reached 5,000+ downloads within two months after launch',
      'Real-time chat, feed, and groups system',
      'Monetized via subscription-based premium features',
    ],
    images: projectImages.beakr,
    links: {},
  },
  {
    name: 'HW Todo',
    year: 2020,
    title: 'Homework Todo',
    description:
      'Created an application using Python framework Flask along with a group that helps students with assignments that synchronize with Canvas LMS and lets you add your own',
    results: [],
    images: projectImages.hwTodo,
    links: {
      github: 'https://github.com/francisseverino/hw-todo',
    },
  },
  {
    name: 'SocialApp',
    year: 2020,
    title: 'Social App',
    description:
      'Applied remarkable efficiency and developed a social application that allows people to chat, make friends, or date.',
    results: [],
    images: projectImages.socialApp,
    links: {},
  },
  {
    name: 'Autove',
    year: 2019,
    title: 'Auto-Parts Locator',
    description:
      'Demonstrated success in designing, developing, and publishing a mobile application to facilitate users in finding any parts, color codes, information, and more for any vehicle by using the app.',

    results: [
      'Built my first app from concept to realization',
      'Published to App Store and Play Store',
      'Integrated various APIs to get needed data',
    ],
    images: projectImages.autove,
    links: {},
  },
  {
    name: 'Flixo',
    year: 2019,
    title: 'Movie Catalog',
    description:
      'Flixio React app that uses “themoviedb” API to display a catalog of movies and TV shows.',
    results: [],

    images: projectImages.flixo,
    links: {
      github: 'https://github.com/francisseverino/Flixo',
    },
  },
  {
    name: 'COVID-19',
    year: 2020,
    title: 'COVID-19 Tracker',
    description:
      'Flixio React app that uses “themoviedb” API to display a catalog of movies and TV shows.',
    results: [],

    images: projectImages.covid,
    links: {
      website: 'https://francisseverino.github.io/covid19-app/',
      github: 'https://github.com/francisseverino/covid19-app',
    },
  },
];

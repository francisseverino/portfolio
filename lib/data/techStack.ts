import { Tech, techIcons } from './techIcons';

export interface TechStack {
  title: Tech;
  icon: React.ElementType;
}

export const techStack: TechStack[] = [
  {
    title: 'React',
    icon: techIcons.React,
  },
  {
    title: 'React Native',
    icon: techIcons.React,
  },
  {
    title: 'Vue.js',
    icon: techIcons['Vue.js'],
  },
  {
    title: 'TypeScript',
    icon: techIcons.TypeScript,
  },
  {
    title: 'Python',
    icon: techIcons.Python,
  },
  {
    title: 'Django',
    icon: techIcons.Django,
  },
  {
    title: 'Node.js',
    icon: techIcons['Node.js'],
  },
  {
    title: 'Go',
    icon: techIcons.Go,
  },
  {
    title: 'PostgreSQL',
    icon: techIcons.PostgreSQL,
  },
  {
    title: 'AWS',
    icon: techIcons.AWS,
  },
  {
    title: 'Terraform',
    icon: techIcons.Terraform,
  },
];

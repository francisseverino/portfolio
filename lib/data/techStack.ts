import React from 'react';
import ReactIcon from '@/assets/icons/react.svg';
import VueIcon from '@/assets/icons/vuedotjs.svg';
import TypescriptIcon from '@/assets/icons/typescript.svg';
import DjangoIcon from '@/assets/icons/django.svg';
import NodeIcon from '@/assets/icons/nodedotjs.svg';
import GoIcon from '@/assets/icons/go.svg';
import PostgresIcon from '@/assets/icons/postgresql.svg';
import PythonIcon from '@/assets/icons/python.svg';
import AWSIcon from '@/assets/icons/aws.svg';
import TerraformIcon from '@/assets/icons/terraform.svg';

export interface TechStack {
  title: string;
  icon: React.ElementType;
}

export const techStack: TechStack[] = [
  {
    title: 'React',
    icon: ReactIcon,
  },
  {
    title: 'React Native',
    icon: ReactIcon,
  },
  {
    title: 'Vue.js',
    icon: VueIcon,
  },
  {
    title: 'Typescript',
    icon: TypescriptIcon,
  },
  {
    title: 'Python',
    icon: PythonIcon,
  },
  {
    title: 'Django',
    icon: DjangoIcon,
  },
  {
    title: 'Node.js',
    icon: NodeIcon,
  },
  {
    title: 'Go',
    icon: GoIcon,
  },
  {
    title: 'PostgreSQL',
    icon: PostgresIcon,
  },
  {
    title: 'AWS',
    icon: AWSIcon,
  },
  {
    title: 'Terraform',
    icon: TerraformIcon,
  },
];

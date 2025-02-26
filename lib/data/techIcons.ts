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
import FirebaseIcon from '@/assets/icons/firebase.svg';
import MySQLIcon from '@/assets/icons/mysql.svg';
import LaravelIcon from '@/assets/icons/laravel.svg';

export type Tech =
  | 'React'
  | 'React Native'
  | 'Vue.js'
  | 'TypeScript'
  | 'Python'
  | 'Django'
  | 'Node.js'
  | 'Go'
  | 'Laravel'
  | 'PostgreSQL'
  | 'MySQL'
  | 'AWS'
  | 'Terraform'
  | 'Firebase';

export const techIcons: Record<Tech, React.ElementType> = {
  React: ReactIcon,
  'React Native': ReactIcon,
  'Vue.js': VueIcon,
  TypeScript: TypescriptIcon,
  Python: PythonIcon,
  Django: DjangoIcon,
  'Node.js': NodeIcon,
  Go: GoIcon,
  Laravel: LaravelIcon,
  PostgreSQL: PostgresIcon,
  MySQL: MySQLIcon,
  AWS: AWSIcon,
  Terraform: TerraformIcon,
  Firebase: FirebaseIcon,
};

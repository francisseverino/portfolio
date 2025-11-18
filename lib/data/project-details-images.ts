import { StaticImageData } from 'next/image';
import monsai1 from '@/assets/projects/monsai/monsai-1.jpg';
import monsai2 from '@/assets/projects/monsai/monsai-2.jpg';
import monsai3 from '@/assets/projects/monsai/monsai-3.jpg';
import monsai4 from '@/assets/projects/monsai/monsai-4.jpg';
import monsai5 from '@/assets/projects/monsai/monsai-5.jpg';
import monsai6 from '@/assets/projects/monsai/monsai-6.jpg';
import monsai7 from '@/assets/projects/monsai/monsai-7.jpg';

import beakr1 from '@/assets/projects/beakr/beakr-1.jpg';
import beakr2 from '@/assets/projects/beakr/beakr-2.jpg';
import beakr3 from '@/assets/projects/beakr/beakr-3.jpg';
import beakr4 from '@/assets/projects/beakr/beakr-4.jpg';

import autove1 from '@/assets/projects/autove/autove-1.jpg';
import autove2 from '@/assets/projects/autove/autove-2.jpg';
import autove3 from '@/assets/projects/autove/autove-3.jpg';
import autove4 from '@/assets/projects/autove/autove-4.jpg';
import autove5 from '@/assets/projects/autove/autove-5.jpg';

export const projectDetailsImages: Record<string, StaticImageData[]> = {
  monsai: [monsai1, monsai2, monsai3, monsai4, monsai5, monsai6, monsai7],
  beakr: [beakr1, beakr2, beakr3, beakr4],
  autove: [autove1, autove2, autove3, autove4, autove5],
};

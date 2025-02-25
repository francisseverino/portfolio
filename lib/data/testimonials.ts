import memojiAvatar1 from '@/assets/memoji-avatar-1.png';
import memojiAvatar2 from '@/assets/memoji-avatar-2.png';
import memojiAvatar3 from '@/assets/memoji-avatar-3.png';
import memojiAvatar4 from '@/assets/memoji-avatar-4.png';
import memojiAvatar5 from '@/assets/memoji-avatar-5.png';
import { StaticImageData } from 'next/image';

interface Testimonial {
  name: string;
  position: string;
  text: string;
  avatar: StaticImageData;
}

export const testimonials: Testimonial[] = [
  {
    name: 'John Doe',
    position: 'Team Lead @ Ezoic',
    text: 'Incredibly fast learner—picked up Go and Vue.js in just days and delivered high-quality production code right away. His refactoring work dramatically improved performance and usability.',
    avatar: memojiAvatar1,
  },
  {
    name: 'Jane Doe',
    position: 'Engineering Manager @ Ezoic',
    text: 'Highly proactive and independent—can tackle complex projects with minimal guidance and delivers beyond expectations.',
    avatar: memojiAvatar2,
  },
  {
    name: 'Alice Doe',
    position: 'Software Engineer @ Ezoic',
    text: 'Great team player—always willing to help others and share knowledge. His mentorship has been invaluable to our team.',
    avatar: memojiAvatar3,
  },
  {
    name: 'Bob Doe',
    position: 'Software Engineer @ Ezoic',
    text: 'Excellent problem solver—his creative solutions to challenging problems have saved our team countless hours of debugging.',
    avatar: memojiAvatar4,
  },
  {
    name: 'Eve Doe',
    position: 'Software Engineer @ Ezoic',
    text: 'Strong communicator—his clear and concise documentation has been instrumental in onboarding new team members and maintaining our codebase.',
    avatar: memojiAvatar5,
  },
];

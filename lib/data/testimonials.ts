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
    text: "It was a pleasure working with Francis at Ezoic. He is a very talented software engineer who does not shy away from taking on challenging and complex projects. He successfully led several application redesign projects for the company's products which vastly improved UI/UX. He excels in the frontend and also made many instrumental contributions to the backend, demonstrating a clear focus on designing solutions with scalability and efficiency in mind. His talents and expertise will make a fantastic addition to any software engineering team.",
    avatar: memojiAvatar1,
  },
  {
    name: 'Jane Doe',
    position: 'Software Engineer @ Ezoic',
    text: "Working with Francis for the last year and a half was an awesome experience. Francis' skills as a full stack software engineer are not to be trifled with, though especially his skills in the frontend. He takes great initiative working with the team, and on numerous occasions presented alternative approaches to problems when we weren't satisfied with the current approach, as though he'd prepared for hours for an impromptu discussion. Francis will undoubtedly be a standout asset for any team he's on and I strongly recommend adding him to yours.",
    avatar: memojiAvatar2,
  },
  {
    name: 'Alice Doe',
    position: 'Product Manager @ Ezoic',
    text: 'Francis is remarkably talented in all areas, and his front end development skills brought immense value to our team. He took on the most challenging projects while simultaneously helping his colleagues excel. Francis is an incredibly persistent, thoughtful developer and a fantastic team player.',
    avatar: memojiAvatar3,
  },
  {
    name: 'Bob Doe',
    position: 'Software Engineer @ Ezoic',
    text: "Francis's onboarding was remarkably swift, especially considering he was working with an entirely new tech stack. Despite being new to Vue.js and Golang, he shipped his first bug fix by day two, and within his first week, he delivered a complete feature, a process that typically requires significantly more time. His talent for rapidly comprehending intricate codebases, adapting to unfamiliar technologies, and implementing solutions with precision made an immediate and valuable impact on our team",
    avatar: memojiAvatar4,
  },
  {
    name: 'Eve Doe',
    position: 'Senior Software Engineer',
    text: "I've had the chance to watch Francis grow as an engineer over the years, and his progress has been nothing short of impressive. From building full-scale production applications to mastering system design and backend optimization, his ability to turn ideas into scalable solutions is outstanding. He writes clean, maintainable code, thinks critically about performance and architecture, and is always pushing himself to improve. Any team would be lucky to have him",
    avatar: memojiAvatar5,
  },
];

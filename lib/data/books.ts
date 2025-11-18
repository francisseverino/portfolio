import { StaticImageData } from 'next/image';

import atomicHabits from '@/assets/books/atomic-habits.jpg';
import cleanCode from '@/assets/books/clean-code.jpg';
import crucialConversations from '@/assets/books/crucial-conversations.jpg';
import dareToLead from '@/assets/books/dare-to-lead.jpg';
import habitsOfHighlyEffectivePeople from '@/assets/books/habits-of-highly-effective-people.jpg';
import thePragmaticProgrammer from '@/assets/books/the-pragmatic-programmer.jpg';
import designingDataIntensiveApplications from '@/assets/books/designing-data-intensive-applications.jpg';

export interface Book {
  title: string;
  img: StaticImageData;
}

export const Books: Book[] = [
  {
    title: 'The Pragmatic Programmer',
    img: thePragmaticProgrammer,
  },
  {
    title: 'Designing Data-Intensive Applications',
    img: designingDataIntensiveApplications,
  },
  {
    title: 'Crucial Conversations',
    img: crucialConversations,
  },
  {
    title: 'Dare To Lean',
    img: dareToLead,
  },
  {
    title: '7 Habits of Highly Effective People',
    img: habitsOfHighlyEffectivePeople,
  },
  {
    title: 'Atomic Habits',
    img: atomicHabits,
  },
  {
    title: 'Clean Code',
    img: cleanCode,
  },
];

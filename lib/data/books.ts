import { StaticImageData } from 'next/image';

import atomicHabits from '@/assets/books/atomic-habits.jpg';
import thePragmaticProgrammer from '@/assets/books/the-pragmatic-programmer.jpg';
import dareToLead from '@/assets/books/dare-to-lead.jpg';
import hellYeahOrNo from '@/assets/books/hell-yeah-or-no.jpg';
import theFourHourWorkweek from '@/assets/books/the-4-hour-workweek.jpg';
import thePsychologyOfMoney from '@/assets/books/the-psychology-of-money.jpg';
import theMillionaireFastlane from '@/assets/books/the-millionaire-fastlane.jpg';

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
    title: 'Atomic Habits',
    img: atomicHabits,
  },
  {
    title: 'Dare To Lean',
    img: dareToLead,
  },
  {
    title: 'Hell Yeah or No',
    img: hellYeahOrNo,
  },
  {
    title: 'The 4 Hour Workweek',
    img: theFourHourWorkweek,
  },
  {
    title: 'The Psychology of Money',
    img: thePsychologyOfMoney,
  },
  {
    title: 'The Millionaire Fastlane',
    img: theMillionaireFastlane,
  },
];

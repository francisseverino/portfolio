import React from 'react';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

interface FooterLink {
  title: string;
  href: string;
}
const footerLinks: FooterLink[] = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/francisseverino/',
  },
  {
    title: 'Github',
    href: 'https://github.com/francisseverino',
  },
];

const Footer = () => {
  return (
    <footer className='relative -z-5 overflow-x-clip'>
      <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'></div>
      <div className='container'>
        <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8'>
          <div className='text-white/70'>
            &copy; 2025 Francis Severino - All rights reserved
          </div>
          <nav className='flex flex-col md:flex-row items-center gap-8'>
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-1.5'>
                <span className='font-semibold'>{link.title}</span>
                <ArrowUpRightIcon className='size-4' />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

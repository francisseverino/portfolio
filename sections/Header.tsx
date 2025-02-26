'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { twMerge } from 'tailwind-merge';

const navItems = [
  { title: 'Home', href: '#' },
  { title: 'Projects', href: '#projects' },
  { title: 'Testimonials', href: '#testimonials' },
  { title: 'About', href: '#about' },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll('section[id]');
    let current = '';

    sections.forEach((section) => {
      const sectionTop = (section as HTMLElement).offsetTop;
      if (window.scrollY >= sectionTop - 100) {
        current = section.getAttribute('id') || '';
      }
    });

    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Call once on mount to set initial active section
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const isActive = useCallback(
    (section: string) => {
      console.log(section, activeSection);
      const normalizedSection = section.replace('#', '').toLowerCase();
      const normalizedActiveSection = activeSection.toLowerCase();
      return normalizedActiveSection === normalizedSection;
    },
    [activeSection],
  );

  return (
    <div className='flex justify-center items-center fixed top-3 w-full z-10'>
      <nav className='flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur'>
        {navItems.map(({ title, href }) => (
          <a
            key={href}
            href={href}
            className={twMerge(
              'nav-item',
              isActive(href) && 'nav-item-active',
            )}>
            {title}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Header;

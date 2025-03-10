import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
}) => {
  return (
    <>
      <div className='flex justify-center'>
        <p className='uppercase font-semibold tracking-widest gradient-primary text-transparent bg-clip-text'>
          {eyebrow}
        </p>
      </div>
      <h2 className='font-serif text-3xl md:text-5xl text-center mt-6'>
        {title}
      </h2>
      <p className='text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-lg mx-auto'>
        {description}
      </p>
    </>
  );
};

export default SectionHeader;

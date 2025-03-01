import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { Book } from '@/lib/data/books';
import Image from 'next/image';

type PropType = {
  books: Book[];
  options?: EmblaOptionsType;
};

const BooksCarousel: React.FC<PropType> = ({ books, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <section className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {books.map(({ title, img }) => (
            <div className='embla__slide' key={title}>
              <Image src={img} alt={`${title} Book Cover`} />
              {/* <div className='embla__slide__number'>{title + 1}</div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksCarousel;

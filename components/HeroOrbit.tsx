import React, { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface HeroOrbitProps {
  size: number;
  rotation: number;
  shouldOrbit?: boolean;
  orbitDuration?: number;
  shouldSpin?: boolean;
  spinDuration?: number;
}

const HeroOrbit: React.FC<PropsWithChildren<HeroOrbitProps>> = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  shouldSpin = false,
  orbitDuration,
  spinDuration,
}) => {
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div
        className={twMerge(shouldOrbit && 'animate-spin')}
        style={{
          animationDuration: `${orbitDuration}s`,
        }}>
        <div
          className='flex items-start justify-start'
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}>
          <div
            className={twMerge(shouldSpin && 'animate-spin')}
            style={{
              animationDuration: `${spinDuration}s`,
            }}>
            <div
              className=' inline-flex'
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;

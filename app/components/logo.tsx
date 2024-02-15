import Image from 'next/image';
import { LogoProps } from '../../types';

function Logo({ src, alt, className, priority, width, height }: LogoProps) {
  return (
    <button className="cursor-pointer" aria-label="Return Home Page" type="button">
      <Image src={`/images/${src}`} alt={alt} className={className} priority={priority} width={width} height={height} />
    </button>
  );
}

export default Logo;

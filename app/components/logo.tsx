import Image from 'next/image';
import { LogoProps } from '../../types';

function Logo({ src, alt, className, priority, width, height }: LogoProps) {
  return (
    <button className="cursor-pointer" aria-label="Return Home Page" type="button">
      <Image src={`/images/${src}`} alt={alt} className={className} width={width} height={height} priority={priority} />
    </button>
  );
}

export default Logo;

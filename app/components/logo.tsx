import Image from 'next/image';
import Link from 'next/link';
import { LogoProps } from '../../types';

function Logo({ src, alt, className, priority, width, height }: LogoProps) {
  return (
    <button className="cursor-pointer" aria-label="Return Home Page" type="button">
      <Link href="/">
        <Image src={`/images/${src}`} alt={alt} className={className} width={width} height={height} priority={priority} />
      </Link>
    </button>
  );
}

export default Logo;

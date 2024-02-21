import { ButtonLink } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
interface buttonContactProps {
  src: string;
  buttonLink: ButtonLink;
  // title: string;
}

function ButtonContact({ src, buttonLink }: buttonContactProps) {
  return (
    <Link href={buttonLink.url} className="flex justify-center rounded-full bg-menu cursor-pointer min-w-28 p-3 w-full" type="button">
      <div className="flex gap-1 lg:gap-3">
        <Image className="w-5 h-5" src={src} alt="logo next" width={500} height={500} priority />
        <p className="text-text flex flex-wrap min-w-full">{buttonLink.title}</p>
      </div>
    </Link>
  );
}

export default ButtonContact;

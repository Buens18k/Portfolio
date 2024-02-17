import Image from 'next/image';
import { ButtonLink } from '@/types';
interface buttonContactProps {
  svg: string;
  buttonLink: ButtonLink;
  // title: string;
}

function ButtonContact({ svg, buttonLink }: buttonContactProps) {
  return (
    <a href={buttonLink.url} className="flex justify-center items-center gap-3 rounded-full bg-menu p-3 cursor-pointer w-full" type="button">
      <Image className="w-5 h-5" src={svg} alt="logo next" width={500} height={500} priority />
      <p>{buttonLink.title}</p>
    </a>
  );
}

export default ButtonContact;

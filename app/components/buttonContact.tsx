import Image from 'next/image';

interface buttonContactProps {
  svg: string;
  title: string;
}

function ButtonContact({ svg, title }: buttonContactProps) {
  return (
    <a className="flex justify-center items-center gap-3 rounded-full bg-menu p-3 cursor-pointer w-full" type="button">
      <Image className="w-5 h-5" src={svg} alt="logo next" width={500} height={500} priority />
      <p>{title}</p>
    </a>
  );
}

export default ButtonContact;

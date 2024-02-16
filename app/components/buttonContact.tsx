import Image from 'next/image';

interface buttonContactProps {
  svg: string;
  title: string;
}

function ButtonContact({ svg, title }: buttonContactProps) {
  return (
    <a className="flex justify-center items-center gap-3 rounded-full bg-menu p-3 w-full cursor-pointer" type="button">
      <Image src={svg} alt="logo next" width={50} height={30} priority />
      {title}
    </a>
  );
}

export default ButtonContact;

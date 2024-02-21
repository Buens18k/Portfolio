import Image from 'next/image';

interface skillProps {
  src: string;
  alt: string;
  skill: string;
}

function Skills({ src, skill, alt }: skillProps) {
  return (
    <div className="flex text-xl flex-wrap items-center gap-1">
      <Image className="w-5 h-5" src={`/images/${src}`} alt={alt} width={500} height={500} priority />
      <p>{skill}</p>
    </div>
  );
}

export default Skills;

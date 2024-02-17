import Image from 'next/image';

interface skillProps {
  svg: string;
  alt: string;
  skill: string;
}

function Skills({ svg, skill, alt }: skillProps) {
  return (
    <div className="flex gap-x-3 items-center">
      <p className="flex">
        <Image className="w-5 h-5" src={svg} alt={alt} width={500} height={500} priority />
        {skill}
      </p>
    </div>
  );
}

export default Skills;

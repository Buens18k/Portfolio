import Image from 'next/image';

interface projectProps {
  src: string;
  alt: string;
  titleProject: string;
  text: string;
}

function Project({ src, alt, titleProject, text }: projectProps) {
  return (
    <div className="group flex flex-col relative border-solid border-4 border-text p-3 rounded-xl cursor-pointer">
      <Image
        className="w-96 h-72 md:h-80 lg:h-96 opacity-100 group-hover:opacity-50 transition-opacity duration-300 bg-cover rounded-xl"
        src={`/images/${src}`}
        alt={alt}
        width={500}
        height={500}
        priority
      />
      <div className="hidden rounded-xl group-hover:flex group-hover:flex-col gap-2 group-hover:items-center group-hover:justify-center absolute inset-0 bg-menu p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-full group-hover:translate-x-0 animate-slideIn ease-in-out">
        <h5 className="text-2xl underline">{titleProject}</h5>
        <p className="text-center text-xl">{text}</p>
      </div>
    </div>
  );
}

export default Project;

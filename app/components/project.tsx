import Image from 'next/image';
import Link from 'next/link';

interface projectProps {
  link: string;
  src: string;
  alt: string;
  titleProject: string;
  text: string;
}

function Project({ link, src, alt, titleProject, text }: projectProps) {
  return (
    <div className="group flex flex-col relative border-solid border-4 border-text p-3 rounded-xl cursor-pointer overflow-hidden transition-all duration-300 transform hover:scale-105 hover:drop-shadow-banner">
      <Link href={`/${link}`} target="blank">
        <Image
          className="w-96 h-72 md:h-80 lg:h-96 opacity-100 group-hover:opacity-50 transition-opacity duration-300 bg-cover rounded-xl before:scale-50"
          src={`/images/projects/${src}`}
          alt={alt}
          width={500}
          height={500}
          priority
        />
        <div className="hidden rounded-xl group-hover:flex group-hover:flex-col gap-2 group-hover:items-center group-hover:justify-center absolute inset-0 bg-menu p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-full group-hover:translate-x-0 animate-slideIn ease-in-out">
          <h5 className="text-base sm:text-lg xl:text-3xl font-semibold">{titleProject}</h5>
          <p className="text-sm lg:text-xl text-center">{text}</p>
          <Image src="/images/github.svg" alt="Logo gitHub" width={30} height={30} />
        </div>
      </Link>
    </div>
  );
}

export default Project;

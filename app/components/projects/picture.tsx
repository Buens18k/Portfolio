import Image from 'next/image';
interface PictureProps {
  src: string;
  alt: string;
}
function PictureProject({ src, alt }: PictureProps) {
  return (
    <div className="flex justify-center relative overflow-hidden group rounded-xl">
      <Image
        className="flex object-cover rounded-xl w-full md:w-96 max-w-96 h-auto transition-transform duration-300 transform-gpu group-hover:scale-125 cursor-pointer"
        src={`/images/projects/${src}`}
        alt={alt}
        priority
        width={500}
        height={500}
      />
      <div className="absolute object-cover rounded-xl inset-0 bg-black-50 bg-opacity-0 hover:bg-opacity-25 transition-opacity duration-300 cursor-pointer"></div>
    </div>
  );
}

export default PictureProject;

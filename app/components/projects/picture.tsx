import Image from 'next/image';
interface PictureProps {
  src: string;
  alt: string;
}
function PictureProject({ src, alt }: PictureProps) {
  return (
    <div className="relative overflow-hidden group rounded-3xl">
      <Image
        className="flex object-cover rounded-3xl w-full h-auto transition-transform duration-300 transform-gpu group-hover:scale-125"
        src={`/images/projects/${src}`}
        alt={alt}
        priority
        width={250}
        height={250}
      />
      <div className="absolute rounded-3xl inset-0 bg-white bg-opacity-0 hover:bg-opacity-25 transition-opacity duration-300"></div>
    </div>
  );
}

export default PictureProject;

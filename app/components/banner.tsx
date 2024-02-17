import Image from 'next/image';

interface PictureProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

function Banner({ src, alt, width, height }: PictureProps) {
  return (
    <div className="flex rounded-full w-52 h-52 lg:w-96 lg:h-96 md:w-72 md:h-72">
      <Image className="flex object-cover rounded-full w-100 h-100 " src={`/images/${src}`} alt={alt} priority width={width} height={height} />
    </div>
  );
}

export default Banner;

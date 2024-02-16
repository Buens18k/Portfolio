import Image from 'next/image';

interface PictureProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

function Banner({ src, alt, width, height }: PictureProps) {
  return (
    <div className="flex border-solid border-2 border-yellow-600 rounded-full w-96 h-96">
      <Image className="flex object-cover rounded-full w-100 h-100 " src={`/images/${src}`} alt={alt} priority width={width} height={height} />
    </div>
  );
}

export default Banner;

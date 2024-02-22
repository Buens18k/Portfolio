import Image from 'next/image';
interface PictureProps {
  src: string;
  alt: string;
}
function PictureProject({ src, alt }: PictureProps) {
  return (
    <div>
      <Image className="flex object-cover rounded-3xl w-full h-full " src={`/images/projects/${src}`} alt={alt} priority width={500} height={500} />
    </div>
  );
}

export default PictureProject;

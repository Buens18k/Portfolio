import Image from 'next/image';
import MissingItems from './missingItems';

interface missingProps {
  titleName: string;
  projectName: string;
  ssProjectName: string | null;
  src: string;
  alt: string;
  missingItems: {
    title: string;
    items: string[];
  }[];
}

export default function Missing({ titleName, projectName, ssProjectName, src, alt, missingItems }: missingProps) {
  return (
    <>
      <h1 className="flex justify-center text-2xl md:text-3xl lg:text-5xl font-bold underline">{titleName}</h1>
      <div className="flex flex-col gap-4 xl:gap-8">
        <div className="flex flex-col justify-center items-center">
          <p className="flex font-semibold justify-center underline md:text-xl lg:text-2xl">{projectName}</p>
          <span className="flex text-center justify-center text-sm md:text-base lg:text-xl">{`(${ssProjectName})`}</span>
        </div>
        <div className="flex justify-center">
          <Image className="object-contain rounded-xl w-auto h-auto" src={`/images/projects/${src}`} alt={alt} priority width={5000} height={5000} />
        </div>
        <div className="flex flex-col md:flex-row md:justify-around gap-4 flex-wrap content-center">
          {missingItems.map((missingItem, index) => (
            <MissingItems key={index} title={missingItem.title} items={missingItem.items} />
          ))}
        </div>
      </div>
    </>
  );
}

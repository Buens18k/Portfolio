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
      <h1 className="flex justify-center text-2xl lg:text-5xl font-bold underline">{titleName};</h1>
      <div className="flex flex-col gap-4 xl:gap-8">
        <div className="flex flex-col justify-center items-center">
          <p className="flex font-semibold justify-center underline lg:text-2xl">{projectName}</p>
          <span className="flex justify-center text-sm lg:text-xl">{`(${ssProjectName})`}</span>
        </div>
        <Image className="object-cover rounded-xl w-auto h-96" src={`/images/projects/${src}`} alt={alt} priority width={5000} height={5000} />
        <div className="flex flex-col lg:flex-row lg:justify-around gap-4">
          {missingItems.map((missingItem, index) => (
            <MissingItems key={index} title={missingItem.title} items={missingItem.items} />
          ))}
        </div>
      </div>
    </>
  );
}

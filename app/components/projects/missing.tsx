import MissingItems from './missingItems';
import PictureProject from './picture';

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
      <h1 className="flex justify-center text-2xl font-bold underline">{titleName};</h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col justify-center items-center">
          <p className="flex font-semibold justify-center underline">{projectName}</p>
          <span className="flex justify-center text-sm">{`(${ssProjectName})`}</span>
        </div>
        <PictureProject src={src} alt={alt} />
        <div className="flex flex-col gap-4">
          {missingItems.map((missingItem, index) => (
            <MissingItems key={index} title={missingItem.title} items={missingItem.items} />
          ))}
        </div>
      </div>
    </>
  );
}

import PictureProject from './picture';

interface itemProjectProps {
  src: string;
  alt: string;
  items: string[];
  layout?: 'flex-row' | 'flex-row-reverse';
}

function ItemProject({ src, alt, items, layout }: itemProjectProps) {
  return (
    <>
      <PictureProject src={src} alt={alt} />
      <div className="flex flex-col justify-center flex-wrap items-center lg:max-w-96">
        <ul className="flex flex-col items-start list-disc text-sm lg:text-xl">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ItemProject;

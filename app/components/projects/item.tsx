import PictureProject from './picture';

interface itemProps {
  title: string;
  src: string;
  alt: string;
  items: string[];
  layout?: 'flex-row' | 'flex-row-reverse';
}

function Item({ title, src, alt, items, layout = 'flex-row' }: itemProps) {
  return (
    <>
      <h3 className="flex justify-center font-semibold lg:text-2xl underline">{title}</h3>
      <div className={`flex flex-col lg:${layout} lg:justify-around  gap-5 md:gap-10`}>
        <PictureProject src={src} alt={alt} />
        <div className="flex flex-col justify-center lg:max-w-96">
          <ul className="flex flex-col items-start list-disc lg:text-xl">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Item;

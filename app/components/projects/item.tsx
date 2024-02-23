import PictureProject from './picture';

interface itemProps {
  title: string;
  src: string;
  alt: string;
  items: string[];
}

function Item({ title, src, alt, items }: itemProps) {
  return (
    <>
      {/* <div className="flex justify-center"> */}
      <h3 className="flex justify-center font-semibold underline">{title}</h3>
      {/* </div> */}
      <PictureProject src={src} alt={alt} />
      <div className="flex flex-col justify-center">
        <ul className="flex flex-col items-start list-disc">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Item;

interface MissingItemsProps {
  title: string;
  items: string[];
}

function MissingItems({ title, items }: MissingItemsProps) {
  return (
    <div className="flex flex-col">
      <h2 className="flex font-semibold underline lg:text-xl">{title}</h2>
      <div className="flex flex-col">
        <ul className="flex flex-col list-disc text-sm md:text-base xl:text-lg">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MissingItems;

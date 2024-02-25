interface MissingItemsProps {
  title: string;
  items: string[];
}

function MissingItems({ title, items }: MissingItemsProps) {
  return (
    <div className="flex flex-col">
      <h2 className="font-semibold underline lg:text-xl">{title}</h2>
      <div>
        {items.map((item, index) => (
          <ul key={index} className="flex flex-col list-disc text-sm xl:text-lg">
            <li>{item}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default MissingItems;

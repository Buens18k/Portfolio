interface MissingItemsProps {
  title: string;
  items: string[];
}

function MissingItems({ title, items }: MissingItemsProps) {
  return (
    <div className="flex flex-col">
      <h2 className="font-semibold underline lg:text-xl">{title}</h2>
      <ul className="flex flex-col list-disc xl:text-lg">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default MissingItems;

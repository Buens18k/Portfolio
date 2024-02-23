interface MissingItemsProps {
  title: string;
  items: string[];
}

function MissingItems({ title, items }: MissingItemsProps) {
  return (
    <div className="flex flex-col ">
      <h2 className="font-semibold underline">{title}</h2>
      <ul className="flex flex-col items-start list-disc">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default MissingItems;

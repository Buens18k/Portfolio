interface ListItemProjectProps {
  items: string[];
}

function ListItemProject({ items }: ListItemProjectProps) {
  return (
    <div className="flex flex-col justify-center flex-wrap items-center lg:max-w-96">
      <ul className="flex flex-col items-start list-disc text-sm md:text-lg lg:text-xl">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListItemProject;

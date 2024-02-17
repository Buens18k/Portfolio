interface MultilineText {
  lines: string[];
}

interface biographyProps {
  name: string;
  trade: string;
  text: MultilineText;
}

function Biography({ name, trade, text }: biographyProps) {
  return (
    <div className="flex flex-col items-center md:items-start gap-3">
      <h1 className="flex justify-center text-5xl font-bold underline decoration-white-500">
        {name}
        <br />
      </h1>
      <h2 className="flex justify-center items-center text-2xl md:text-4xl font-semibold">
        {trade}
        <br />
      </h2>
      <p className="flex flex-col justify-center md:justify-start text-center md:text-left items-center md:items-start text-wrap gap-2 md:text-2xl">
        {text.lines.map((line, index) => (
          <span className="flex justify-center items-center md:items-start" key={index}>
            {line} <br />
          </span>
        ))}
      </p>
    </div>
  );
}

export default Biography;

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
    <div className="w-1/2 md:mr-20 border-solid border-2 border-yellow-600">
      <h1 className="text-6xl font-bold underline decoration-white-500">
        {name}
        <br />
      </h1>
      <h2 className="text-5xl font-bold">
        {trade}
        <br />
      </h2>
      <p className="text-wrap text-2xl">
        {text.lines.map((line, index) => (
          <span key={index}>
            {line} <br />
          </span>
        ))}
      </p>
    </div>
  );
}

export default Biography;

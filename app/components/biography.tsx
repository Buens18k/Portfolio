interface biographyProps {
  name: string;
  trade: string;
  text: string;
}

function Biography({ name, trade, text }: biographyProps) {
  return (
    <div className="flex flex-col items-center md:items-start gap-3">
      <p className="text-xl">
        <span className="text-2xl font-semibold">Hi&nbsp;!!! &nbsp;</span>
        I&apos;m ...
      </p>
      <h1 className="flex justify-center items-end text-2xl font-bold">
        <span className=" text-5xl drop-shadow-name"> {name} </span>
        <br />
      </h1>
      <h2 className="flex justify-center items-center text-2xl md:text-4xl xl:text-5xl font-semibold">
        {trade}
        <br />
      </h2>
      <p className="flex flex-col justify-center md:justify-start text-center text-xl md:text-left items-center md:items-start text-wrap gap-2 md:text-2xl">
        <span className="flex text-base md:text-lg xl:text-2xl justify-center items-center md:items-start">
          {text} <br />
        </span>
      </p>
    </div>
  );
}

export default Biography;

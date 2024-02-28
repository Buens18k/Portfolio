import Image from 'next/image';
import data from '../../lib/dataAbout.json';

function About() {
  return (
    <main className="flex justify-center gap-3">
      <div className="flex flex-col justify-center items-center p-7 gap-10">
        <Image
          src="/images/moiPNG.webp"
          alt="Image de bruno"
          width={500}
          height={500}
          priority
          className="w-auto h-auto rounded-2xl flex justify-center"
        />
        <div className="flex flex-col justify-center items-center text-center gap-5 md:gap-10">
          <h1 className="text-xl font-bold xl:text-3xl underline">{data.aboutData.title}</h1>
          <div className="flex flex-col gap-5 bg-menu rounded-2xl p-3 xl:">
            {data.aboutData.paragraphs.map((paragraph, index) => (
              <p className="md:text-xl xl:text-2xl" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;

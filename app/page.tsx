import Image from 'next/image';
import Banner from './components/banner';
import Biography from './components/biography';
import ButtonContact from './components/buttonContact';
import SkillsContent from './components/skillsContent';

export default function Home() {
  const mutliText = {
    lines: [
      'Hello !!!',
      'My passion lies in creating user experiences using innovative web technologies and modern development practices to create interactive, responsive, and aesthetically pleasing user interfaces.',
    ],
  };

  return (
    <main className="flex flex-col min-h-screen p-10 max-w-screen-2xl gap-10">
      <section className="flex flex-col gap-5 justify-center md:justify-between items-center md:flex-row w-full">
        <Banner src="moi.webp" alt="Photo Profil de Bruno" width={500} height={500} />
        <div className=" flex flex-col gap-8 md:w-7/12 lg:w-1/2">
          <Biography name="Bruno Vang" trade="Develloppeur Front-end" text={mutliText} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full">
            <ButtonContact svg="/images/github.svg" buttonLink={{ title: 'GitHub', url: 'https://github.com/Buens18k' }} />
            <ButtonContact svg="/images/linkedin.svg" buttonLink={{ title: 'Linkedin', url: 'https://www.linkedin.com/in/bruno-vang/' }} />
            <ButtonContact svg="/images/xtwitter.svg" buttonLink={{ title: 'Twitter', url: 'https://twitter.com/_B18k' }} />
            <ButtonContact svg="/images/instagram.svg" buttonLink={{ title: 'Instagram', url: 'https://www.instagram.com/vang_bruno18/' }} />
          </div>
        </div>
      </section>
      <section className="flex w-full">
        <div className="flex flex-col justify-center w-full items-center gap-5">
          <h2 className="text-4xl font-bold text-text">Skills</h2>
          <div className="flex flex-col w-full gap-3 lg:flex-row lg:gap-7 md:flex-row md:w-3/4">
            <SkillsContent
              title="Design"
              skills={[
                { src: 'figma.svg', alt: 'logo figma', skill: 'Figma' },
                { src: 'tailwind.svg', alt: 'logo tailwind', skill: 'Tailwind' },
              ]}
            />
            <SkillsContent
              title="Front-end"
              skills={[
                { src: 'react.svg', alt: 'logo react', skill: 'React' },
                { src: 'typescript.svg', alt: 'logo TypeScript', skill: 'TypeScript' },
              ]}
            />
            <SkillsContent title="Other" skills={[{ src: 'github.svg', alt: 'logo git & github', skill: 'git&gitHub' }]} />
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="flex flex-col items-center gap-5">
          <h4 className="text-3xl font-bold text-text">Projects</h4>
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="group flex flex-col relative border-solid border-4 border-text p-3 rounded-xl">
              <Image
                className="w-96 h-96 opacity-100 group-hover:opacity-50 transition-opacity duration-300 bg-cover rounded-xl"
                src="/images/p6.webp"
                alt="Image du projet 1"
                width={500}
                height={500}
                priority
              />
              <div className="hidden rounded-xl group-hover:flex group-hover:flex-col  group-hover:items-center group-hover:justify-center absolute inset-0 bg-menu p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-full group-hover:translate-x-0 animate-slideIn ease-in-out">
                <h5 className="text-2xl">JavaScript</h5>
                <p className="text-center text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, velit? Repellat similique voluptatibus sit ullam blanditiis
                  nihil, incidunt aspernatur placeat autem magnam suscipit ipsam quibusdam alias iste maiores! Eligendi, commodi.
                </p>
              </div>
            </div>
            <div className="group flex flex-col relative border-solid border-4 border-text">
              <Image
                className="w-96 h-96 opacity-100 group-hover:opacity-50  transition-opacity duration-300"
                src="/images/p8.webp"
                alt="Image du projet 1"
                width={500}
                height={500}
                priority
              />
              <p className=" text-text hidden group-hover:flex absolute inset-0 bg-menu p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-full group-hover:translate-x-0 animate-slideIn ease-in-out">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, velit? Repellat similique voluptatibus sit ullam blanditiis
                nihil, incidunt aspernatur placeat autem magnam suscipit ipsam quibusdam alias iste maiores! Eligendi, commodi.
              </p>
            </div>
            <div className="group flex flex-col relative border-solid border-4 border-text">
              <Image
                className="w-96 h-96 opacity-100 group-hover:opacity-50  transition-opacity duration-300"
                src="/images/p11.webp"
                alt="Image du projet 1"
                width={500}
                height={500}
                priority
              />
              <p className=" text-text hidden group-hover:flex absolute inset-0 bg-menu p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-full group-hover:translate-x-0 animate-slideIn ease-in-out">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, velit? Repellat similique voluptatibus sit ullam blanditiis
                nihil, incidunt aspernatur placeat autem magnam suscipit ipsam quibusdam alias iste maiores! Eligendi, commodi.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>Contact</div>
      </section>
    </main>
  );
}

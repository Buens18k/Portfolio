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
      <section className="flex flex-col justify-center md:justify-between items-center md:flex-row w-full">
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
          <h2 className="text-5xl font-bold text-text">Skills</h2>
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-7 md:flex-row md:w-3/4">
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
      <section>
        <div>Projects</div>
      </section>
    </main>
  );
}

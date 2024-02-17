import Banner from './components/banner';
import Biography from './components/biography';
import ButtonContact from './components/buttonContact';
import Skills from './components/skills';

export default function Home() {
  const mutliText = {
    lines: [
      'Hello !!!',
      "Passionné par la création d'experience utilisateur en utilisant des technologies web innovantes et des pratiques de développement moderners pour concevoir des interfaces utilisateur interactives, réactives et esthétiques.",
    ],
  };

  return (
    <main className="flex flex-col min-h-screen p-10 max-w-screen-2xl gap-10">
      <section className="flex flex-col justify-center md:justify-between items-center md:flex-row w-full">
        <Banner src="photoBruno.webp" alt="Photo Profil de Bruno" width={500} height={500} />
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
        <div className="flex flex-col justify-center w-full items-center">
          <h2 className="text-5xl font-bold text-text">Skills</h2>

          <div className="flex md:flex-row justify-center w-full gap-1">
            <h3 className="flex text-2xl font-semibold items-center md:flex md:text-3xl">Design</h3>
            <Skills svg="/images/figma.svg" alt="logo figma" skill="Figma" />
            <Skills svg="/images/tailwind.svg" alt="logo Tailwind" skill="Tailwind" />
            {/* <Skills title="Front-end" svg="/images/figma.svg" alt="logo figma" skills="React" /> */}
            {/* <Skills title="Other" svg="/images/figma.svg" alt="logo figma" skills="git&gitHub" /> */}
          </div>
        </div>
      </section>
      <section>
        <div>Projects</div>
      </section>
    </main>
  );
}

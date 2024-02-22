import data from '../lib/data.json';
import Banner from './components/banner';
import Biography from './components/biography';
import ButtonContact from './components/buttonContact';
import Project from './components/project';
import SkillsContent from './components/skillsContent';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-10 max-w-screen-2xl gap-40">
      <section className="flex flex-col gap-5 justify-center md:justify-between items-center md:flex-row w-full">
        <Banner src="moi.webp" alt="Photo Profil de Bruno" />
        <div className=" flex flex-col gap-8 md:w-7/12 lg:w-2/3">
          <Biography name={data.userName.name} trade="Develloppeur Front-end" text={data.mutliText.lines} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full">
            <ButtonContact src="/images/github.svg" buttonLink={{ title: 'GitHub', url: 'https://github.com/Buens18k' }} />
            <ButtonContact src="/images/linkedin.svg" buttonLink={{ title: 'Linkedin', url: 'https://www.linkedin.com/in/bruno-vang/' }} />
            <ButtonContact src="/images/xtwitter.svg" buttonLink={{ title: 'Twitter', url: 'https://twitter.com/_B18k' }} />
            <ButtonContact src="/images/instagram.svg" buttonLink={{ title: 'Instagram', url: 'https://www.instagram.com/vang_bruno18/' }} />
            {/* <ButtonContact src="/images/mail.svg" buttonLink={{ title: 'Me contacter', url: 'mailto:buens@outlook.fr' }} /> */}
          </div>
        </div>
      </section>
      <section className="flex w-full">
        <div className="flex flex-col justify-center w-full items-center gap-6">
          <h2 className="text-4xl font-bold text-text underline" id="skills">
            Skills
          </h2>
          <div className="flex flex-col w-full gap-3 lg:flex-row lg:gap-7 md:flex-row md:w-3/4">
            <SkillsContent
              title="Design"
              skills={[
                { src: 'figma.svg', alt: 'logo figma', skill: 'Figma' },
                { src: 'sass.svg', alt: 'logo sass', skill: 'Sass' },
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
            <SkillsContent title="Other" skills={[{ src: 'github.svg', alt: 'logo git & github', skill: 'git & gitHub' }]} />
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="flex flex-col items-center gap-8 ">
          <h4 className="text-3xl font-bold text-text underline" id="projects">
            Projects
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Project link="project/sophiebluel" src="p6.webp" alt="picture Project 6" titleProject="Agence ArchiWebos" text={data.textProject.js} />
            <Project link="project/kasa" src="p8.webp" alt="picture Project 8" titleProject="Agence KASA" text={data.textProject.reactJS} />
            <Project
              link="project/argentbank"
              src="p11.webp"
              alt="picture Project 11"
              titleProject="Agence ArgentBank"
              text={data.textProject.reactRedux}
            />
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="flex flex-col items-center justify-center gap-8 p-10">
          <h5 className="text-3xl font-bold text-text underline">Contact</h5>
          <div className="grid grid-cols-2 justify-center items-center md:grid-cols-5 gap-5 w-full min-w-80">
            <ButtonContact src="/images/github.svg" buttonLink={{ title: 'GitHub', url: 'https://github.com/Buens18k' }} />
            <ButtonContact src="/images/linkedin.svg" buttonLink={{ title: 'Linkedin', url: 'https://www.linkedin.com/in/bruno-vang/' }} />
            <ButtonContact src="/images/xtwitter.svg" buttonLink={{ title: 'Twitter', url: 'https://twitter.com/_B18k' }} />
            <ButtonContact src="/images/instagram.svg" buttonLink={{ title: 'Instagram', url: 'https://www.instagram.com/vang_bruno18/' }} />
            <ButtonContact src="/images/mail.svg" buttonLink={{ title: 'Contact', url: 'mailto:buens@outlook.fr' }} />
          </div>
        </div>
      </section>
    </main>
  );
}

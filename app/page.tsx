import Banner from './components/banner';
import Biography from './components/biography';
import ButtonContact from './components/buttonContact';

export default function Home() {
  const mutliText = {
    lines: [
      'Hello !!!',
      "Passionné par la création d'experience utilisateur en utilisant des technologies web innovantes et des pratiques de développement moderners pour concevoir des interfaces utilisateur interactives, réactives et esthétiques.",
    ],
  };

  return (
    <main className="flex flex-col min-h-screen p-10 max-w-screen-2xl">
      <section className="flex flex-col justify-center md:justify-between items-center md:flex-row w-full">
        <Banner src="photoBruno.webp" alt="Photo Profil de Bruno" width={500} height={500} />
        <div className=" flex flex-col gap-8 md:w-7/12 lg:w-1/2">
          <Biography name="Bruno Vang" trade="Develloppeur Frontend" text={mutliText} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full">
            <ButtonContact svg="/images/github.svg" title="GitHub" />
            <ButtonContact svg="/images/linkedin.svg" title="Linkedin" />
            <ButtonContact svg="/images/xtwitter.svg" title="Twitter" />
            <ButtonContact svg="/images/instagram.svg" title="Instagram" />
          </div>
        </div>
      </section>
      <section>
        <div>Projects</div>
      </section>
    </main>
  );
}

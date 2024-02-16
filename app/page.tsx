import Banner from './components/banner';
import Biography from './components/biography';

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
        <div className=" flex flex-col gap-5 md:w-2/3">
          <Biography name="Bruno Vang" trade="Develloppeur Frontend" text={mutliText} />
          <div className="flex gap-5 md:w-1/2">
            <button className="rounded-full bg-slate-400 p-2 w-full" type="button">
              Github
            </button>
            <button className="rounded-full bg-slate-400 p-2 w-full" type="button">
              Linkedin
            </button>{' '}
            <button className="rounded-full bg-slate-400 p-2 w-full" type="button">
              Twitter
            </button>{' '}
            <button className="rounded-full bg-slate-400 p-2 w-full" type="button">
              Instagram
            </button>
          </div>
        </div>
      </section>
      <section>
        <div>Projects</div>
      </section>
    </main>
  );
}

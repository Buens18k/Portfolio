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
        <Biography name="Bruno Vang" trade="Develloppeur Frontend" text={mutliText} />
      </section>
      <section>
        <div>Projects</div>
      </section>
    </main>
  );
}

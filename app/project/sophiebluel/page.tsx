import ButtonContact from '@/app/components/buttonContact';
import PictureProject from '@/app/components/projects/picture';

function Project() {
  return (
    <main className="flex flex-col min-h-screen p-10 max-w-screen-2xl gap-20">
      <section className="flex flex-col justify-center gap-5">
        <h1 className="flex justify-center text-lg font-bold underline">&quot; Agence ArchiWebos &quot;</h1>
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col justify-center items-center">
            <p className="flex justify-center underline">&laquo; Sophie Bluel &raquo;, Architecte d&apos;intèrieur.</p>
            <span>(Projet JavaScript avec OpenClassRoom)</span>
          </div>
          <PictureProject src="bluel.webp" alt="Photo de Sophie Bluel" />
          <div className="flex flex-col gap-2">
            <div className="flex flex-col ">
              <h2 className="underline">Mission</h2>
              <ul className="flex flex-col items-start list-disc">
                <li>Page de présentaion des travaux</li>
                <li>Page de connexion de l&apos;administrateur</li>
                <li>Modale</li>
              </ul>
            </div>
            <div className="flex flex-col ">
              <h2 className="underline">Gestion & outil</h2>
              <ul className="flex flex-col items-start list-disc">
                <li>Kanban</li>
                <li>Figma</li>
              </ul>
            </div>
            <div className="flex flex-col ">
              <h2 className="underline">Language de programmation</h2>
              <div>
                <ul className="flex flex-col items-start list-disc">
                  <li>JavaScript</li>
                  <li>CSS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-3">
        <h3 className="underline">Home Page</h3>
        <PictureProject src="p6.webp" alt="Photo de Sophie Bluel" />
        <div className="flex flex-col">
          <ul className="flex flex-col items-start list-disc">
            <li>Récuparation des travaux depuis le back-end.</li>
            <li>Possibilité de filtrer la galerie par catégorie de projet.</li>
          </ul>
        </div>
      </section>
      <section>
        <div>
          <ButtonContact src="/images/github.svg" buttonLink={{ title: 'Lien Repo', url: 'https://github.com/Buens18k/Projet6-ArchiWebos' }} />
        </div>
      </section>
    </main>
  );
}

export default Project;

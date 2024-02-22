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
      <section className="flex flex-col gap-3">
        <div className="flex justify-center">
          <h3 className="underline">Page d&apos;accueil.</h3>
        </div>
        <PictureProject src="p6.webp" alt="Photo de Sophie Bluel" />
        <ul className="flex flex-col items-start list-disc">
          <li>Récuparation des travaux depuis le back-end.</li>
          <li>Possibilité de filtrer la galerie par catégorie de projet.</li>
        </ul>
      </section>
      <section className="flex flex-col gap-3">
        <div className="flex justify-center">
          <h3 className="underline">Page d&apos;authentification.</h3>
        </div>
        <PictureProject src="loginBluel.webp" alt="Photo de Sophie Bluel" />
        <ul className="flex flex-col justify-start items-start list-disc">
          <li>Conformité du design.</li>
          <li>Requête de type &quot; POST &quot; soumettant le formulaire.</li>
          <li>Gestion des réponses de l&apos;API.</li>
          <li>Enregistrement du &quot; JWT &quot; dans le Local Storage.</li>
          <li>Redirection vers la page &quot; Mode Édition &quot;.</li>
        </ul>
      </section>
      <section className="flex flex-col gap-3">
        <div className="flex justify-center">
          <h3 className="underline">Page Mode Édition.</h3>
        </div>
        <PictureProject src="authBluel.webp" alt="Photo de Sophie Bluel" />
        <div>
          <ul className="flex flex-col justify-start items-start list-disc">
            <li>Manipulation du DOM.</li>
            <li>Conformité du design.</li>
            <li>Déconnexion de l&apos;utilisateur.</li>
          </ul>
        </div>
      </section>
      <section className="flex flex-col gap-3">
        <div className="flex justify-center">
          <h3 className="underline">Modale de suppression.</h3>
        </div>
        <PictureProject src="modalDelBluel.webp" alt="Photo de Sophie Bluel" />
        <div>
          <ul className="flex flex-col justify-start items-start list-disc">
            <li>Création d&apos;une modale de suppression de travaux existant.</li>
            <li>Requête de type &quot;DELETE&quot;.</li>
            <li>Conformité du design.</li>
          </ul>
        </div>
      </section>
      <section className="flex flex-col gap-3">
        <div className="flex justify-center">
          <h3 className="underline">Modale d&apos;ajout d&apos;un nouveau projet.</h3>
        </div>
        <PictureProject src="modalAddBluel.webp" alt="Photo de Sophie Bluel" />
        <div>
          <ul className="flex flex-col justify-start items-start list-disc">
            <li>Création d&apos;une modale de suppression de travaux existant.</li>
            <li>Requête de type &quot;ADD&quot;.</li>
            <li>Conformité du design.</li>
          </ul>
        </div>
      </section>
      <section className="flex flex-col items-center gap-3">
        <div>
          <ButtonContact src="/images/github.svg" buttonLink={{ title: 'Lien Repo', url: 'https://github.com/Buens18k/Projet6-ArchiWebos' }} />
        </div>
      </section>
    </main>
  );
}

export default Project;

import ButtonContact from '@/app/components/buttonContact';
import MissingItems from '@/app/components/projects/missingItems';
import PictureProject from '@/app/components/projects/picture';

function Project() {
  return (
    <main className="flex flex-col min-h-screen p-10 max-w-screen-2xl gap-20">
      <section className="flex flex-col justify-center gap-7">
        <h1 className="flex justify-center text-2xl font-bold underline">&quot; Agence ArchiWebos &quot;</h1>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col justify-center items-center">
            <p className="flex font-semibold justify-center underline">&laquo; Sophie Bluel &raquo;, Architecte d&apos;intèrieur.</p>
            <span className="text-sm">(Projet JavaScript avec OpenClassRoom)</span>
          </div>
          <PictureProject src="bluel.webp" alt="Photo de Sophie Bluel" />
          <div className="flex flex-col gap-4">
            <MissingItems title="Mission" items={['Page de présentaion des travaux', "Page de connexion de l'administrateur", 'Modale']} />
            <MissingItems title="Gestion & outil" items={['Kanban', 'Figma']} />
            <MissingItems title="Language de programmation" items={['JavaScript', 'CSS']} />
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-3">
        <div className="flex justify-center">
          <h3 className="font-semibold underline">Page d&apos;accueil.</h3>
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
            <li>Affichage des travaux existant.</li>
            <li>Fonctionnalité de suppression de travaux, en communiquant avec l&apos;API et en actualisant le DOM</li>
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
            <li>Création d&apos;une modale d&apos;ajout de travaux.</li>
            <li>Message d&apos;erreur dans le cas d&apos;un mauvais remplissage du formulaire.</li>
            <li>Envoie du nouveaux projet à l&apos;API en respectant la documentation</li>
            <li>
              Affichage du nouveaux projet dynamiquement dans le portfolio ainsi que dans la modale de suppression sans rechargement de la page Web.
            </li>
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

import ButtonContact from '@/app/components/buttonContact';
import Item from '@/app/components/projects/item';
import Missing from '@/app/components/projects/missing';

function Project() {
  const missingItemData = [
    { title: 'Mission', items: ['Page de présentaion des travaux', "Page de connexion de l'administrateur", 'Modale'] },
    { title: 'Gestion & outil', items: ['Kanban', 'Figma'] },
    { title: 'Language de programmation', items: ['JavaScript', 'CSS'] },
  ];

  return (
    <main className="flex flex-col min-h-screen p-10 max-w-screen-2xl gap-20">
      <section className="flex flex-col justify-center gap-7 lg:gap-14 bg-menu rounded-xl p-3">
        <Missing
          titleName="Agence ArchiWebos"
          projectName="Sophie Bluel, Architecte d'intèrieur."
          ssProjectName="Projet JavaScript avec OpenClassRoom"
          src="bluel.webp"
          alt="Photo de Sophie Bluel"
          missingItems={missingItemData}
        />
      </section>
      <section className="flex flex-col gap-3 bg-menu rounded-xl p-3">
        <Item
          title="Page d'accueil."
          src="p6.webp"
          alt="Photo de Sophie Bluel"
          items={['Récuparation des travaux depuis le back-end.', 'Possibilité de filtrer la galerie par catégorie de projet.']}
          layout="flex-row-reverse"
        />
      </section>
      <section className="flex flex-col gap-3 bg-menu rounded-xl p-3">
        <Item
          title="Page d'authentification."
          src="loginBluel.webp"
          alt="Photo de Sophie Bluel"
          items={[
            'Conformité du design.',
            "Requête à l'API pour soumission du formulaire.",
            "Gestion des réponses de l'API",
            'Enregistrement du " JWT " dans le Local Storage.',
            'Redirection vers la page " Mode Édition ".',
          ]}
        />
      </section>
      <section className="flex flex-col gap-3 bg-menu rounded-xl p-3">
        <Item
          title="Page Mode Édition."
          src="authBluel.webp"
          alt="Photo de Sophie Bluel"
          items={["Fonctionnalité avancer pour l'administrateur d'accéder à des fonctions.", 'Conformité du design', "Déconnexion de l'utilisateur."]}
          layout="flex-row-reverse"
        />
      </section>
      <section className="flex flex-col gap-3 bg-menu rounded-xl p-3">
        <Item
          title="Modale de suppression."
          src="modalDelBluel.webp"
          alt="Photo de Sophie Bluel"
          items={[
            "Création d'une modale de suppression de travaux existant.",
            'Affichage des travaux existant.',
            "Fonctionnalité de suppression de travaux, en communiquant avec l'API et en actualisant le DOM",
          ]}
        />
      </section>
      <section className="flex flex-col gap-3 bg-menu rounded-xl p-3">
        <Item
          title="Modale d'ajout d'un nouveau projet."
          src="modalAddBluel.webp"
          alt="Photo de Sophie Bluel"
          items={[
            "Création d&apos;une modale d'ajout de travaux.",
            "Message d'erreur dans le cas d'un mauvais remplissage du formulaire.",
            "Envoie du nouveaux projet à l'API en respectant la documentation.",
            'Affichage du nouveaux projet dynamiquement dans le portfolio ainsi que dans la modale de suppression sans rechargement de la page Web.',
          ]}
          layout="flex-row-reverse"
        />
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

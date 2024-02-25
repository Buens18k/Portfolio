import ButtonContact from '@/app/components/buttonContact';
import ItemProject from '@/app/components/projects/itemProject';
import Missing from '@/app/components/projects/missing';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Sophie Bluel',
};

function Project() {
  const missingItemData = [
    { title: 'Mission', items: ['Page de présentaion des travaux', "Page de connexion de l'administrateur", 'Modale'] },
    { title: 'Gestion & outil', items: ['Kanban', 'Figma'] },
    { title: 'Language de programmation', items: ['JavaScript', 'CSS'] },
  ];

  const titleItemProject = {
    title1: "Page d'accueil",
    title2: "Page d'authentification",
    title3: 'Page Mode Édition',
    title4: 'Modale de suppression',
    title5: "Modale d'ajout d'un nouveau projet",
  };

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
      <section className="flex flex-col gap-3 lg:gap-12 bg-menu rounded-xl p-3 lg:p-8">
        <h3 className="flex justify-center font-semibold lg:text-2xl underline">{titleItemProject.title1}</h3>
        <div className="flex flex-col gap-5 lg:flex-row lg:justify-around">
          <ItemProject
            src="p6.webp"
            alt="Image Page d'accueil"
            items={['Conformité du design.', 'Récuparation des travaux depuis le back-end.', 'Filtrage galerie par catégorie de projet.']}
          />
        </div>
      </section>
      <section className="flex flex-col gap-3 lg:gap-12 bg-menu rounded-xl p-3 lg:p-8">
        <h3 className="flex justify-center font-semibold lg:text-2xl underline">{titleItemProject.title2}</h3>
        <div className="flex flex-col gap-5 lg:flex-row-reverse lg:justify-around">
          <ItemProject
            src="loginBluel.webp"
            alt="Image page d'authentification"
            items={[
              'Conformité du design.',
              'Requête de soumission du formulaire.',
              "Gestion des réponses de l'API",
              'Register " JWT " in the Local Storage.',
              'Redirection vers la page " Mode Édition ".',
            ]}
          />
        </div>
      </section>
      <section className="flex flex-col gap-3 lg:gap-12 bg-menu rounded-xl p-3 lg:p-8">
        <h3 className="flex justify-center font-semibold lg:text-2xl underline">{titleItemProject.title3}</h3>
        <div className="flex flex-col gap-5 lg:flex-row lg:justify-around">
          <ItemProject
            src="authBluel.webp"
            alt="Image page mode édition"
            items={["Fonction avancée pour l'admnistrateur.", "Affichage d'une Modale depuis un button", "Déconnexion de l'utilisateur."]}
          />
        </div>
      </section>
      <section className="flex flex-col gap-3 lg:gap-12 bg-menu rounded-xl p-3 lg:p-8">
        <h3 className="flex justify-center font-semibold lg:text-2xl underline">{titleItemProject.title4}</h3>
        <div className="flex flex-col gap-5 lg:flex-row-reverse lg:justify-around">
          <ItemProject
            src="modalDelBluel.webp"
            alt="Image modale de suppression"
            items={['Affichage des travaux existant.', 'Requête API "DELETE" travaux existant.', 'MAJ en temps réel "galerie" et "modale".']}
          />
        </div>
      </section>
      <section className="flex flex-col gap-3 lg:gap-12 bg-menu rounded-xl p-3 lg:p-8">
        <h3 className="flex justify-center font-semibold lg:text-2xl underline">{titleItemProject.title5}</h3>
        <div className="flex flex-col gap-5 lg:flex-row lg:justify-around">
          <ItemProject
            src="modalAddBluel.webp"
            alt="Image modale d'ajout"
            items={["Formulaire d'ajout projet.", 'Requête API "POST" un nouveaux projet.', 'Gestion erreur.', 'MAJ en temp réel "portfolio".']}
          />
        </div>
      </section>
      <section className="flex flex-col items-center gap-3 ">
        <div>
          <ButtonContact src="/images/github.svg" buttonLink={{ title: 'Lien Repo', url: 'https://github.com/Buens18k/Projet6-ArchiWebos' }} />
        </div>
      </section>
    </main>
  );
}

export default Project;

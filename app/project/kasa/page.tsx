import ButtonContact from '@/app/components/buttonContact';
import ItemProject from '@/app/components/projects/itemProject';
import Missing from '@/app/components/projects/missing';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Kasa',
};

function Project() {
  const missingItemData = [
    { title: 'Mission', items: ['Home Page', 'House Page', 'About Page', 'Error Page', 'Conformité Design'] },
    { title: 'Gestion & outils', items: ['Figma', 'Coding guidelines'] },
    { title: 'Language de programmation', items: ['ReactJs', 'SCSS'] },
  ];

  const titleItemProject = {
    title1: 'Home Page',
    title2: 'House Page',
    title3: 'About Page',
    title4: 'Error Page',
  };

  return (
    <main className="flex flex-col min-h-screen p-10 max-w-screen-2xl gap-20">
      <section className="flex flex-col justify-center gap-7 lg:gap-14 bg-menu rounded-xl p-3">
        <Missing
          titleName="Kasa"
          projectName="Application Web de Location immobilière"
          ssProjectName="Projet React avec OpenClassRoom"
          src="logoKasa.webp"
          alt="Logo Kasa"
          missingItems={missingItemData}
        />
      </section>
      <section className="flex flex-col gap-3 bg-menu rounded-xl p-3 lg:p-10 lg:gap-12">
        <h3 className="flex justify-center font-semibold lg:text-2xl underline">{titleItemProject.title1}</h3>
        <div className="flex flex-col gap-5 lg:flex-row-reverse lg:justify-around">
          <ItemProject
            src="p8.webp"
            alt="Image Home Page"
            items={[
              'Composant Banner et Card.',
              'Récupération des données depuis le fichier JSON.',
              'Logique de routage.',
              'Ajout effet visuel sur les cartes.',
            ]}
          />
        </div>
      </section>
      <section className="flex flex-col gap-3 bg-menu rounded-xl p-3 lg:p-10 lg:gap-12">
        <h3 className="flex justify-center font-semibold lg:text-2xl underline">{titleItemProject.title2}</h3>
        <div className="flex flex-col gap-5 lg:flex-row lg:justify-around">
          <ItemProject
            src="housePageKasa.webp"
            alt="Image House Page"
            items={['URL correspondant au logement.', 'Composant "Carrousel".', 'Composant réutilisable avec Props du logement.']}
          />
        </div>
      </section>
      <section className="flex flex-col gap-3 bg-menu rounded-xl p-3 lg:p-10 lg:gap-12">
        <h3 className="flex justify-center font-semibold lg:text-2xl underline">{titleItemProject.title3}</h3>
        <div className="flex flex-col gap-5 lg:flex-row-reverse lg:justify-around">
          <ItemProject
            src="aboutPageKasa.webp"
            alt="Image About Page"
            items={['Composant "Accordion" réutilisable.', 'Personnalisation du contenue par les props.']}
          />
        </div>
      </section>
      <section className="flex flex-col gap-3 bg-menu rounded-xl p-3 lg:p-10 lg:gap-12">
        <h3 className="flex justify-center font-semibold lg:text-2xl underline">{titleItemProject.title4}</h3>
        <div className="flex flex-col gap-5 lg:flex-row lg:justify-around">
          <ItemProject src="errorPageKasa.webp" alt="Image Error Page" items={["Définie à la base du router en tant qu'erreur élément."]} />
        </div>
      </section>
      <section className="flex flex-col items-center gap-3 ">
        <div>
          <ButtonContact src="/images/github.svg" buttonLink={{ title: 'Lien Repo', url: 'https://github.com/Buens18k/projet-kasa' }} />
        </div>
      </section>
    </main>
  );
}

export default Project;

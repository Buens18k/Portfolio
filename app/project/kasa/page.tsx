import ButtonContact from '@/app/components/buttonContact';
import Item from '@/app/components/projects/item';
import Missing from '@/app/components/projects/missing';

function Project() {
  const missingItemData = [
    { title: 'Mission', items: ['Home Page', 'House Page', 'About Page', 'Error Page', 'Conformité Design'] },
    { title: 'Gestion & outils', items: ['Figma', 'Coding guidelines'] },
    { title: 'Language de programmation', items: ['ReactJs', 'SCSS'] },
  ];

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
        <Item
          title="Home Page"
          src="p8.webp"
          alt="Image Page d'accueil"
          items={[
            'Composant Banner et Card.',
            'Récupération des données depuis le fichier JSON.',
            'Logique de routage.',
            'Ajout effet visuel sur les cartes.',
          ]}
          layout="flex-row-reverse"
        />
      </section>
      <section className="flex flex-col gap-3 bg-menu rounded-xl p-3 lg:gap-12">
        <Item
          title="House Page"
          src="housePageKasa.webp"
          alt="Photo de Sophie Bluel"
          items={[
            'URL correspondant au logement.',
            'Composant "Carrousel".',
            'Composant "Information" avec propriétés du logement en question.',
            "Redirection vers la page Erreur en cas d'id incorrect.",
          ]}
          layout="flex-row"
        />
      </section>
      <section className="flex flex-col gap-3 bg-menu rounded-xl p-3 lg:gap-12">
        <Item
          title="About Page."
          src="aboutPageKasa.webp"
          alt="Image About Page"
          items={['Composant "Accordion" réutilisable.', 'Définition du contenue personnalisé par les props.']}
          layout="flex-row-reverse"
        />
      </section>
      <section className="flex flex-col gap-3 bg-menu rounded-xl p-3 lg:gap-12">
        <Item
          title="Error Page."
          src="errorPageKasa.webp"
          alt="Image Error Page"
          items={["Définie à la base du router en tant qu'erreur élément."]}
          layout="flex-row"
        />
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

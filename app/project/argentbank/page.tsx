import ButtonContact from '@/app/components/buttonContact';
import ItemProject from '@/app/components/projects/itemProject';
import Missing from '@/app/components/projects/missing';

function Project() {
  const missingItemData = [
    {
      title: 'Mission',
      items: ['Mettre en place le front-end', 'Conformité wireframes', "Authentification d'un utilisateur", 'Personnalisation du nom utilsateur'],
    },
    { title: 'Gestion & outils', items: ['Figma', 'Coding guidelines'] },
    { title: 'Language de programmation', items: ['ReactJs', 'SCSS', 'Redux', 'MongoDB'] },
  ];

  const titleItemProject = {
    title1: 'Home Page',
    title2: 'Login Page',
    title3: 'Account User Page',
    title4: 'Edit Page',
  };

  return (
    <main className="flex flex-col min-h-screen p-10 max-w-screen-2xl gap-20">
      <section className="flex flex-col justify-center gap-7 lg:gap-14 bg-menu rounded-xl p-3">
        <Missing
          titleName="ArgentBank"
          projectName="Implémentation du Front-end pour une application Bancaire"
          ssProjectName="Projet React/Redux avec OpenClassRoom"
          src="argentBankLogo.webp"
          alt="Logo ArgentBank"
          missingItems={missingItemData}
        />
      </section>
      <section className="flex flex-col gap-3 bg-menu rounded-xl p-3 lg:p-10 lg:gap-12">
        <h3 className="flex justify-center font-semibold lg:text-2xl underline">{titleItemProject.title1}</h3>
        <div className="flex flex-col gap-5 lg:flex-row lg:justify-around">
          <ItemProject
            src="p11.webp"
            alt="Image Page d'accueil"
            items={['Composant "Hero".', 'Composant réutilisable "FeatureItems".', 'Logique de routage.']}
          />
        </div>
      </section>
      <section className="flex flex-col gap-3 bg-menu rounded-xl p-3 lg:p-10 lg:gap-12">
        <h3 className="flex justify-center font-semibold lg:text-2xl underline">{titleItemProject.title2}</h3>
        <div className="flex flex-col gap-5 lg:flex-row-reverse lg:justify-around">
          <ItemProject
            src="loginPageArgentBank.webp"
            alt="Image Login Page"
            items={[
              "Formulaire d'authentification.",
              'Requête API "POST" pour authentification.',
              'Stockage du "JWT" dans le LocalStorage.',
              'Redux store "auth" gèrant l\nauthentification.',
            ]}
          />
        </div>
      </section>
      <section className="flex flex-col gap-3 bg-menu rounded-xl p-3 lg:p-10 lg:gap-12">
        <h3 className="flex justify-center font-semibold lg:text-2xl underline">{titleItemProject.title3}</h3>
        <div className="flex flex-col gap-5 lg:flex-row lg:justify-around">
          <ItemProject
            src="accountPageArgentBank.webp"
            alt="Image Account Page User"
            items={[
              "Récupère les informations du User depuis le l'API.",
              'MAJ des informations dans le Redux Store "User".',
              'Composant "Account" réutilisable.',
            ]}
          />
        </div>
      </section>
      <section className="flex flex-col gap-3 bg-menu rounded-xl p-3 lg:p-10 lg:gap-12">
        <h3 className="flex justify-center font-semibold lg:text-2xl underline">{titleItemProject.title4}</h3>
        <div className="flex flex-col gap-5 lg:flex-row-reverse lg:justify-around">
          <ItemProject
            src="accountPageEditNameArgentBank.webp"
            alt="Image formulaire d'édition du nom utilisateur depuis la Page Account"
            items={[
              'Personnalisation seulement du nom utilisateur.',
              'Sauvegarder ou annuler la modification en cours.',
              'MAJ BDD et Store Redux en conséquence.',
            ]}
          />
        </div>
      </section>
      <section className="flex flex-col items-center gap-3 ">
        <div>
          <ButtonContact
            src="/images/github.svg"
            buttonLink={{ title: 'Lien Repo', url: 'https://github.com/Buens18k/Projet11-ArgentBank-website' }}
          />
        </div>
      </section>
    </main>
  );
}

export default Project;

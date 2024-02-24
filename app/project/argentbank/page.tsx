import ButtonContact from '@/app/components/buttonContact';
import Item from '@/app/components/projects/item';
import Missing from '@/app/components/projects/missing';

function Project() {
  const missingItemData = [
    {
      title: 'Mission',
      items: [
        'Mettre en place le front-end',
        'Créer les Pages correspondants aux wireframes',
        "Authentification d'un utilisateur",
        'Personnalisation du nom utilsateur',
      ],
    },
    { title: 'Gestion & outils', items: ['Figma', 'Coding guidelines'] },
    { title: 'Language de programmation', items: ['ReactJs', 'SCSS', 'Redux', 'MongoDB'] },
  ];

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
        <Item
          title="Home Page"
          src="p11.webp"
          alt="Image Page d'accueil"
          items={['Composant "Hero".', 'Composant réutilisable "FeatureItems".', 'Logique de routage.']}
          layout="flex-row"
        />
      </section>
      <section className="flex flex-col gap-3 bg-menu rounded-xl p-3 lg:gap-12">
        <Item
          title="Login Page"
          src="loginPageArgentBank.webp"
          alt="Image Login Page"
          items={[
            "Formulaire d'authentification.",
            "Requête vers l'API pour authentification.",
            'Enregistrement du Token dans le LocalStorage et le Redux Store "auth".',
            "Le store gérant l'authentification et la deconnexion.",
          ]}
          layout="flex-row-reverse"
        />
      </section>
      <section className="flex flex-col gap-3 bg-menu rounded-xl p-3 lg:gap-12">
        <Item
          title="Account Page User"
          src="accountPageArgentBank.webp"
          alt="Image Account Page User"
          items={[
            "Récupération des informations de l'utilisateur depuis le l'API.",
            'Stockage et récupération des informations dans le Redux Store "User".',
            'Composant "Account" réutilisable.',
          ]}
          layout="flex-row"
        />
      </section>
      <section className="flex flex-col gap-3 bg-menu rounded-xl p-3 lg:gap-12">
        <Item
          title="Edit User Name"
          src="accountPageEditNameArgentBank.webp"
          alt="Image formulaire d'édition du nom utilisateur depuis la Page Account"
          items={[
            'Personnalisation seulement du nom utilisateur.',
            'Sauvegarder ou annuler la modification en cours.',
            'En cas de sauvegarde du nom utilisateur modifier, mise à jour de la base de donnée et du nom utilisateur dans le Redux Store " user." ',
          ]}
          layout="flex-row-reverse"
        />
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

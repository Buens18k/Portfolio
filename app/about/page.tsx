import Image from 'next/image';

function About() {
  return (
    <main className="flex justify-center">
      <div className="flex flex-col justify-center items-center gap-5">
        <Image
          src="/images/moiPNG.webp"
          alt="Image de bruno"
          width={500}
          height={500}
          loading="lazy"
          className="w-auto h-auto rounded-2xl flex justify-center"
        />
        <div className="flex flex-col justify-center items-center text-center gap-3">
          <h1>Salut c&apos;est moi .... Bruno VANG ^^.</h1>
          <div className="flex flex-col gap-5">
            <p>
              Passionné par la programmation et fasciné par la puissance des ordinateurs moderners, j&apos;ai décidé de me reconvertir dans ce
              domaine.
            </p>
            <p>
              Anciennement chef d&apos;équipe dans le secteur de la logistique, j&apos;ai entrepris une formation de &quot; Programmeur de Jeux Vidéos
              en ligne &quot; avec l&apos;école &quot; GAMING CAMPUS &quot; en collaboration avec &quot; GameCodeur &quot;.
            </p>
            <p>Cette expérience m&apos;as permis d&apos;acquerir des bases solides dans le domaine de la programmation de jeux vidéos.</p>
            <p>
              Désireux d&apos;enrichir mon parcours et d&apos;élargir mes compétences pour répondre à une diversité de demandes, j&apos;ai ensuite
              décider de me former en tant qu&apos;Intégrateur Web à l&apos;école &quot; OpenClassRoom &quot;, me spécialisant dans l&apos;aspect
              visuel et ergonomique des sites web.
            </p>
            <p>Malgrès les défis que cela représentait, sans aucune notion préalable en programmation, j&apos;ai persévéré et obtenu mes diplômes.</p>
            <p>
              Aujourd&apos;hui, fort de ces expériences et motivé par ma passion pour la programmation, je suis prêt à relever de nouveaux défis et à
              contribuer activement au developpement de projets innovants.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;

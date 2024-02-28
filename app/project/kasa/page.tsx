import ItemProject from '@/app/components/projects/itemProject';
import Missing from '@/app/components/projects/missing';
import { Metadata } from 'next';
import data from '../../../lib/dataReact.json';

export const metadata: Metadata = {
  title: 'Project Kasa',
};

function Project() {
  // Constante qui stock les données depuis le fichier dataReact.json
  const projectInfo = data;

  return (
    <main className="flex flex-col min-h-screen p-10 max-w-screen-2xl gap-20">
      <section className="flex flex-col justify-center gap-7 lg:gap-14 bg-menu rounded-xl p-3">
        <Missing
          titleName={projectInfo.title}
          projectName={projectInfo.projectName}
          ssProjectName={projectInfo.sstitle}
          src={projectInfo.src}
          alt={projectInfo.alt}
          missingItems={projectInfo.missingItemReact}
        />
      </section>
      {/* Pour chaque objet du tableau des données,créer la section ci-dessous pour chaque objet du tableau*/}
      {projectInfo.sections.map((section, index) => (
        <section key={index} className="flex flex-col gap-3 lg:gap-12 bg-menu rounded-xl p-3 lg:p-8">
          <h3 className="flex justify-center font-semibold lg:text-2xl underline">{section.title}</h3>
          {/* Pour chaque item créer cette div avec sa class passé en paramètre */}
          {section.itemProjects.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className={`flex flex-col items-center gap-5 md:${
                item.flexDirection === 'row-reverse' ? 'flex-row-reverse' : 'flex-row'
              } md:justify-around`}
            >
              <ItemProject src={item.src} alt={item.alt} items={item.items} />
            </div>
          ))}
        </section>
      ))}
    </main>
  );
}

export default Project;

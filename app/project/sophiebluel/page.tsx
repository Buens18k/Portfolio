import LinkContact from '@/app/components/linkContact';
import ItemProject from '@/app/components/projects/itemProject';
import Missing from '@/app/components/projects/missing';
import { Metadata } from 'next';
import data from '../../../lib/dataJS.json';

export const metadata: Metadata = {
  title: 'Project Sophie Bluel',
  description: 'JavaScript Project with OpenClassRoom school',
};

function Project() {
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
          missingItems={projectInfo.missingItemJS}
        />
      </section>
      {projectInfo.sections.map((section, index) => (
        <section key={index} className="flex flex-col gap-3 lg:gap-12 bg-menu rounded-xl p-7 lg:p-10">
          {section.itemProjects.map((item, itemIndex) => (
            <ItemProject key={itemIndex} title={section.title} src={item.src} alt={item.alt} items={item.items} flexDirection={item.flexDirection} />
          ))}
        </section>
      ))}
      <div className="flex justify-center max-w-screen-2xl mx-auto">
        <LinkContact src="/images/github.svg" link={{ title: 'GitHub repository link', url: projectInfo.gitHubRepoUrl }} />
      </div>
    </main>
  );
}

export default Project;

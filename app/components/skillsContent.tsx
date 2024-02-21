import Skills from './skills';

interface skillContentProps {
  title: string;
  skills: {
    src: string;
    alt: string;
    skill: string;
  }[];
}

function SkillsContent({ title, skills }: skillContentProps) {
  return (
    <div className="flex flex-col w-full gap-2 lg:gap-3 bg-menu rounded-2xl p-2 lg:p-5 ">
      <h3 className="flex flex-wrap justify-center text-2xl font-semibold items-center md:flex md:text-3xl underline">{title}</h3>
      <div className="flex md:flex-col gap-5 md:gap-3 justify-center md:items-center">
        {skills.map((skill, index) => (
          <Skills key={index} src={skill.src} alt={skill.alt} skill={skill.skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillsContent;

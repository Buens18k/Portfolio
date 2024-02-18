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
    <div className="flex flex-col w-full gap-1 bg-menu rounded-2xl lg:p-5 ">
      <h3 className="flex flex-wrap text-2xl font-semibold items-center md:flex md:text-3xl">{title}</h3>
      <div className="flex md:flex-col gap-3">
        {skills.map((skill, index) => (
          <Skills key={index} src={skill.src} alt={skill.alt} skill={skill.skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillsContent;

'use client';
import AnimateSection from '../animateSection';
import ListItemProject from './listItemProject';
import PictureProject from './picture';

interface itemProjectProps {
  title: string;
  src: string;
  alt: string;
  items: string[];
  flexDirection: string;
}

function ItemProject({ title, src, alt, items, flexDirection }: itemProjectProps) {
  return (
    <AnimateSection>
      <h3 className="flex justify-center font-semibold lg:text-2xl pb-3 md:pb-10 drop-shadow-name">{title}</h3>
      <div
        className={`flex flex-col items-center gap-5 md:justify-around ${flexDirection === 'row-reverse' ? 'md:flex-row-reverse' : 'md:flex-row'}`}
      >
        <PictureProject src={src} alt={alt} />
        <ListItemProject items={items} />
      </div>
    </AnimateSection>
  );
}

export default ItemProject;

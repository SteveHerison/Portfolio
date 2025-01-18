import { TitleSection } from "@/components/Title/title";
import ExperienceItem from "./experienceItem";

const Experience = () => {
  return (
    <section className="py-16 flex gap-10 md:gap-4 lg:gap-16 md:flex-row flex-col containers text-zinc-500">
      <div className="max-w-96  space-y-6">
        <TitleSection subtitle="experiencias" title="Experiência Prof" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          perspiciatis sunt officiis autem dignissimos ea voluptate sint nihil
          ut voluptatibus!
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <ExperienceItem />
        <ExperienceItem />
      </div>
    </section>
  );
};

export default Experience;

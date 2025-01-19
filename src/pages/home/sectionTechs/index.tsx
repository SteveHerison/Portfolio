import { TechCards } from "@/components/Techs";
import { TitleSection } from "@/components/Title/title";
import { KnowTech } from "@/types/projects";

type KnowTechsProps = {
  techs: KnowTech[];
};
export const Techs = ({ techs }: KnowTechsProps) => {
  return (
    <section className="py-16 containers">
      <TitleSection
        title="Conhecimentos"
        subtitle="competências"
        className="text-zinc-500"
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-2 mt-14">
        {techs?.map((tech) => (
          <TechCards key={tech.name} tech={tech} />
        ))}
      </div>
    </section>
  );
};

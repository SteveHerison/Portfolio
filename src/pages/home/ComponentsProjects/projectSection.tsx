import Image from "next/image";

import Gard from "../../../../public/commerce-business-and-finance-svgrepo-com.svg";
import { Link } from "@/components/Link";
import { ArrowBigRightDash } from "lucide-react";
import { Project } from "@/types/projects";
import { TechBadge } from "@/components/TechBadge";

type ProjectsCardsProps = {
  project: Project;
};

export const ProjectsCards = ({ project }: ProjectsCardsProps) => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-12 gap-6">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src={project.thumbnail.url}
          alt={`Thumbnail do projeto ${project.title}`}
          className="rounded-xl bg-cover border md:min-h-full w-full h-52 sm:h-80 lg:w-[420px]"
        />
      </div>
      <div className="flex lg:items-center gap-3  text-xl flex-col items-start">
        <h3 className="flex flex-col items-center text-base md:text-xl">
          <Image src={Gard} alt="dfd" width={40} height={34} /> {project.title}
        </h3>
        <p className="text-sm">{project.shortDescription}</p>
        <div className="flex space-x-2 gap-y-3 flex-wrap mb-8 md:max-w-96 text-sm">
          {project.technology.map((tech) => (
            <div key={`${project.title}-tech-${tech.name}`}>
              <TechBadge name={tech.name} />
            </div>
          ))}
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="text-base flex items-center hover:text-purple-950 transition-colors"
        >
          Ver Projeto
          <ArrowBigRightDash />
        </Link>
      </div>
    </div>
  );
};

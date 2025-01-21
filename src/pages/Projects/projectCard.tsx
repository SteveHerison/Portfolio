import Image from "next/image";
import { Project } from "@/types/projects";

type ProjectCardProps = {
  project: Project;
};
const ProjectCard = ({ project }: ProjectCardProps) => {
  const technologies = project.technology.map((x) => x.name).join(", ");
  return (
    <div className="rounded-xl h-[436px] flex flex-col overflow-y-hidden border-2 hover:border-purple-950 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full  overflow-hidden ">
        <Image
          width={380}
          height={200}
          src={project.thumbnail.url}
          alt={`Thumbnail do projeto ${project.title}`}
          unoptimized
          className="group-hover:scale-110 transition-all object-cover w-full h-full duration-500"
        />
      </div>

      <div className="flex-1 flex flex-col p-8 ">
        <strong className="group-hover:text-purple-950 transition-colors">
          {project.title}
        </strong>
        <p className="mt-2 line-clamp-4 mb-2">{project.shortDescription}</p>
        <span className="text-sm mt-auto block truncate">{technologies}</span>
      </div>
    </div>
  );
};

export default ProjectCard;

"use client";
import { RicheText } from "@/components/RichText";
import { TechBadge } from "@/components/TechBadge";
import { TitleSection } from "@/components/Title/title";
import { Button } from "@/components/ui/button";
import { Project } from "@/types/projects";
import { ArrowBigLeftDash } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "@/lib/animations";
type ProjectDetailsProps = {
  project: Project;
};
const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <div className="w-full sm:min-h-[700px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden ">
      <motion.div
        className="absolute inset-0 z-[-1]"
        style={{
          background: `url(/assets/img/hero.png) no-repeat bottom/cover, url(${project.pageThumbnail.url}) no-repeat center/cover`,
          backgroundBlendMode: "multiply", // Mistura as imagens
        }}
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <TitleSection
        subtitle="projetos"
        title={project.title}
        className="text-center items-center  sm:[&>h3]:text-4xl sm:[&>span]:text-xl [&>h3]:font-semibold [&>span]:bg-clip-text [&>span]:text-transparent [&>span]:bg-gradient-to-r from-purple-600 to-zinc-300"
      />
      <motion.div
        className="text-center text-zinc-300 max-w-[640px] my-4 sm:my-6 text-sm sm:text-base"
        {...fadeUpAnimation}
      >
        <RicheText content={project.description.raw} />
      </motion.div>
      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        {project.technology.map((tech) => (
          <TechBadge
            key={tech.name}
            name={tech.name}
            // initial={{ opacity: 0, scale: 0 }}
            // whileInView={{ opacity: 1, x: 1 }}
            // exit={{ opacity: 0, scale: 0 }}
            // transition={{ duration: 0.3, delay: i * 0.1 }}
          />
        ))}
      </div>
      <motion.div
        className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row"
        {...fadeUpAnimation}
      >
        {project?.githubUrl && (
          <a href={project.githubUrl} target="_blank">
            <Button className="bg-purple-950 shadow-lg shadow-purple-500 hover:shadow-zinc-800 transition-all text-zinc-300">
              repositorio
            </Button>
          </a>
        )}
        {project?.liveProjectUrl && (
          <a target="_blank" href={project.liveProjectUrl}>
            <Button className="bg-purple-950 shadow-lg shadow-purple-500 hover:shadow-zinc-800 transition-all text-zinc-300">
              Project Online
            </Button>
          </a>
        )}
      </motion.div>

      <Link
        href="/projects"
        className="text-sm flex items-center hover:text-purple-600 transition-colors"
      >
        <ArrowBigLeftDash /> Voltar para projetos
      </Link>
    </div>
  );
};

export default ProjectDetails;

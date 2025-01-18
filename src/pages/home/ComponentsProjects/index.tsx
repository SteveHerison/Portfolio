import React from "react";
import { ProjectsCards } from "./projectSection";
import { TitleSection } from "@/components/Title/title";
import { Horizontal } from "@/components/divider/Horizontal";
import { Link } from "@/components/Link";

import { ArrowBigRightDash } from "lucide-react";

export const ProjectsComponent = () => {
  return (
    <div className="py-16 containers text-zinc-500">
      <TitleSection subtitle="destaques" title="Projetos" />
      <Horizontal className="mb-16" />

      <div className="">
        <ProjectsCards />
        <Horizontal className="mb-16" />
        <ProjectsCards />
        <Horizontal className="mb-16" />

        <p className="flex items-center gap-1.5">
          <span>Se interessou?</span>
          <Link
            href="/projects"
            className="inline-flex hover:text-purple-950 transition-colors"
          >
            Ver todos
            <ArrowBigRightDash />
          </Link>
        </p>
      </div>
    </div>
  );
};

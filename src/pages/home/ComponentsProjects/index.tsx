import React from "react";
import { ProjectsCards } from "./projectSection";
import { TitleSection } from "@/components/Title/title";
import { Horizontal } from "@/components/divider/Horizontal";
import { Link } from "@/components/Link";
import Gard from "@/assets/img/De.png";
import Image from "next/image";

export const ProjectsComponent = () => {
  return (
    <div className="py-16">
      <TitleSection subtitle="destaques" title="Projetos" />
      <Horizontal className="mb-16" />

      <div className="">
        <ProjectsCards />
        <Horizontal className="mb-16" />
        <ProjectsCards />
        <Horizontal className="mb-16" />

        <p className="flex items-center gap-1.5">
          <span>Se interessou?</span>
          <Link href="/projects" className="inline-flex">
            Ver todos
            <Image src={Gard} alt="dfd" width={40} height={34} />
          </Link>
        </p>
      </div>
    </div>
  );
};

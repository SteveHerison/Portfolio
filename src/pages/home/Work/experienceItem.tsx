import { RicheText } from "@/components/RichText";
import { TechBadge } from "@/components/TechBadge";
import { WorkExperience } from "@/types/workExperiences";

import Image from "next/image";
import React from "react";

type ExperienceItemProps = {
  experience: WorkExperience;
};

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex  flex-col items-center gap-4 ">
        <div className="rounded-full border border-purple-950 p-0.5">
          <Image
            src={experience.companyLogo.url}
            alt={`${experience.companyName}`}
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div className="h-full w-0.5 bg-purple-950" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm md:text-base">
          <a
            href={experience.companyUrl}
            target="_blank"
            className="hover:text-purple-950 transition-colors"
          >
            @{experience.companyName}
          </a>
          <h4>{experience.role}</h4>
          <span className="text-zinc-500/50">
            mês ano . mes ano . (tempo trabalhado)
          </span>
          <div className="flex flex-col gap-4">
            <RicheText content={experience.description.raw} />
          </div>
        </div>
        <p className="font-semibold text-sm text-zinc-500/50 mb-3 mt-6 ">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-96 mb-8">
          {experience.technology.map((tech) => (
            <TechBadge
              key={`experience-${experience.technology}-tech-${tech.name}`}
              name={tech.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;

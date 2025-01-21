import { WorkExperience } from "./workExperiences";
import type { RichTextContent } from "@graphcms/rich-text-types";
import { KnowTech, Project } from "./projects";

export type Social = {
  url: string;
  iconSvg: string;
};
export type HomePageInfo = {
  introduction: {
    raw: RichTextContent;
  };
  technologies: KnowTech[];
  profilePicture: {
    url: string;
  };
  socials: Social[];
  knownTechsh: KnowTech[];
  highlightProjects: Project[];
};

export type ProjectPageData = {
  project: Project;
};
export type ProjectsPageData = {
  projects: Project[];
};
export type ProjectsPageStaticData = {
  projects: {
    slug: string;
  };
};
export type HomePageData = {
  page: HomePageInfo;
  workExperiences: WorkExperience[];
};

import type { RichTextContent } from "@graphcms/rich-text-types";
import { KnowTech } from "./projects";

export type WorkExperience = {
  companyLogo: {
    url: string;
  };
  role: string;
  companyName: string;
  companyUrl: string;
  startDate: string;
  endDate: string;
  technology: KnowTech[];
  description: {
    raw: RichTextContent;
  };
};

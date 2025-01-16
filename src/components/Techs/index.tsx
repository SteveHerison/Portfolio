import { getRelativeTimeString } from "@/utils/relativeTime";
import React, { ReactNode } from "react";

type TechsProps = {
  tech: {
    icon: ReactNode;
    name: string;
    startData: string;
  };
};

export const TechCards = ({ tech }: TechsProps) => {
  const relativeTime = getRelativeTimeString(new Date(tech.startData), "pt-BR");
  return (
    <div className="p-6 rounded-xl bg-zinc-200 shadow-md flex flex-col">
      <div className="flex items-center justify-between">
        <p className="font-semibold">{tech.name}</p>
        <div className="w-7 h-7">{tech.icon}</div>
      </div>
      <span>{relativeTime}</span>
    </div>
  );
};

export default TechCards;

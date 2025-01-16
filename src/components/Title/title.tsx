import { cn } from "@/lib/utils";

type TitleProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export const TitleSection = ({ title, subtitle, className }: TitleProps) => {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <span className="font-semibold text-purple-950">{`../${subtitle}`}</span>
      <h3 className="text-2xl">{title}</h3>
    </div>
  );
};

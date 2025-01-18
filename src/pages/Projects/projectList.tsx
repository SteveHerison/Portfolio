import Link from "next/link";
import ProjectCard from "./projectCard";

const ProjectList = () => {
  return (
    <section className="containers py-32 grid grid-cols-1 text-zinc-600 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-3">
      <Link href={"/projects/projeto"}>
        <ProjectCard />
      </Link>
    </section>
  );
};

export default ProjectList;

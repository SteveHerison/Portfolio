import Home from "@/pages/home";
import { ProjectsComponent } from "@/pages/home/componentsProjects";
import { Techs } from "@/pages/home/sectionTechs";
import Experience from "@/pages/home/Work";

export default function Page() {
  return (
    <main className="">
      <Home />
      <Techs />
      <ProjectsComponent />
      <Experience />
    </main>
  );
}

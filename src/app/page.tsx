import Home from "@/pages/home";
import { ProjectsComponent } from "@/pages/home/projectsComponent";
import { Techs } from "@/pages/home/sectionTechs";
import Experience from "@/pages/home/Work";

export default function Page() {
  return (
    <main className="container mx-auto">
      <Home />
      <Techs />
      <ProjectsComponent />
      <Experience />
    </main>
  );
}

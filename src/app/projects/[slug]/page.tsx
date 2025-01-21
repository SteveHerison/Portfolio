import ProjectDatails from "@/pages/Projects/projectDatals";
import { ProjectSection } from "@/pages/Projects/projectDatals/projectSection";

import { ProjectPageData, ProjectsPageStaticData } from "@/types/pageInfo";
import { fetchHygrapQuery } from "@/utils/fetchHygrapQuery"; // Corrigido aqui

import { Metadata } from "next";
import { notFound } from "next/navigation";

type ProjectProps = {
  params: {
    slug: string;
  };
};

// Função para buscar detalhes do projeto
const getProjectDetails = async (slug: string): Promise<ProjectPageData> => {
  const query = `
    query ProjectQuery {
      project(where: {slug: "${slug}"}) {
        pageThumbnail {
          url
        }
        thumbnail {
          url
        }
        sections {
          title
          image {
            url
          }
        }
        title
        shortDescription
        description {
          raw
          text
        }
        technology {
          name
        }
        liveProjectUrl
        githubUrl
      }
    }
  `;
  // Certifique-se de que está chamando o nome correto da função
  const data = fetchHygrapQuery<ProjectPageData>(
    query,
    1000 * 60 * 60 * 24 // 1 dia
  );

  return data;
};

// Restante do código continua o mesmo

// Componente da página do projeto
export default async function Project({ params: { slug } }: ProjectProps) {
  const { project } = await getProjectDetails(slug);

  if (!project?.title) return notFound();

  return (
    <>
      <ProjectDatails project={project} />
      <ProjectSection sections={project.sections} />
    </>
  );
}

// Gerar os parâmetros estáticos para as páginas
export async function generateStaticParams() {
  const query = `
    query ProjectsSlugsQuery() {
      projects(first: 100) {
        slug
      }
    }
  `;
  const { projects } = await fetchHygrapQuery<ProjectsPageStaticData>(query);

  return projects;
}

export async function generateMetadata({
  params: { slug },
}: ProjectProps): Promise<Metadata> {
  const data = await getProjectDetails(slug);
  const project = data.project;

  return {
    title: project.title,
    description: project.description.text,
    openGraph: {
      images: [
        {
          url: project.thumbnail.url,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

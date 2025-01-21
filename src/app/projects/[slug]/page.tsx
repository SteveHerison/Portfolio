import ProjectDatails from "@/pages/Projects/projectDatals";
import ProjectSection from "@/pages/Projects/projectDatals/projectSection";
import { ProjectPageData, ProjectsPageStaticData } from "@/types/pageInfo";
import { fetchHygrapQuery } from "@/utils/fetchHygrapQuery";
import { Metadata } from "next";

type ProjectProps = {
  params: {
    slug: string;
  };
};

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

  return fetchHygrapQuery(query, 1000 * 60 * 60 * 24); // 1 day
};

export default async function Project({ params: { slug } }: ProjectProps) {
  const { project } = await getProjectDetails(slug);

  return (
    <>
      <ProjectDatails project={project} />
      <ProjectSection sections={project.sections} />
    </>
  );
}

export async function generateStaticParams() {
  const query = `
    query ProjectsSlugsQuery() {
      projects(first: 100) {
        slug
      }
    }
  `;

  try {
    const response = await fetchHygrapQuery<ProjectsPageStaticData>(query);

    if (!response.projects || !Array.isArray(response.projects)) {
      console.error("Dados de projetos inválidos ou ausentes");
      return [];
    }

    return response.projects.map((project) => ({
      slug: project.slug,
    }));
  } catch (error) {
    console.error("Erro ao buscar slugs de projetos:", error);
    return []; // Retorna um array vazio em caso de erro
  }
}

export async function generateMetadata({
  params,
}: ProjectProps): Promise<Metadata> {
  // Aguardar a obtenção de `slug`
  const { slug } = params;

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
    icons: {
      icon: "/src/app/favicon.svg",
    },
  };
}

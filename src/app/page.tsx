import Home from "@/pages/home";
import { ProjectsComponent } from "@/pages/home/componentsProjects";
import { Techs } from "@/pages/home/sectionTechs";
import Experience from "@/pages/home/Work";
import { HomePageData } from "@/types/pageInfo";
import { fetchHygrapQuery } from "@/utils/fetchHygrapQuery";

const getPageData = async (): Promise<HomePageData> => {
  const query = `
  query PageInfoQuery {
  page(where: {slug: "home"}) {
    introduction {
      raw
    }
    technologies {   # Esse campo está correto para 'Page'
      name
    }
    profilePicture {
      url
    }
    socials {
      url
      iconSvg
    }
    knownTechsh {
      iconSvg
      name
      startDate
    }
    highlightProjects {
      slug
      thumbnail {
        url
      }
      title
      shortDescription
      technology { 
        name
      }
    }
  }
}
`;
  return fetchHygrapQuery(query, 60 * 60 * 24);
};

export default async function Page() {
  const data = await getPageData();

  // Verifica se data.page existe antes de tentar desestruturar
  if (!data?.page) {
    // Caso o retorno seja nulo ou sem dados, trata o erro ou retorna uma resposta alternativa
    return <div>Erro ao carregar os dados da página.</div>;
  }

  const { page: pageData } = data;

  return (
    <>
      <Home homeInfo={pageData} />
      <Techs techs={pageData.knownTechsh} />
      <ProjectsComponent projects={pageData.highlightProjects} />
      <Experience />
    </>
  );
}

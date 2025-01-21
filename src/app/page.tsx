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
     workExperiences {
        companyLogo {
          url
        }
        role
        companyName
        companyUrl
        startDate
        endDate
        description {
          raw
        }
        technology {
          name
        }
      }
}
`;
  return fetchHygrapQuery(query, 60 * 60 * 24);
};

export default async function Page() {
  const { page: pageData, workExperiences } = await getPageData();

  return (
    <>
      <Home homeInfo={pageData} />
      <Techs techs={pageData.knownTech} />
      <ProjectsComponent projects={pageData.highlightProjects} />
      <Experience experiences={workExperiences} />
    </>
  );
}

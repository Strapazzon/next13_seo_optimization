import { LanguageSelector } from "@components/LanguageSelector";
import { MoviesGrid } from "@components/MoviesGrid";
import { PageHeader } from "@components/PageHeader";
import { ToggleThemeButton } from "@components/ToggleThemeButton";
import { DeePlService } from "@modules/deeplService";
import { MovieRepository } from "@modules/moviesRepository";
import { PageSeoProps, SEO } from "@modules/seo";
import { Container, Flex } from "@radix-ui/themes";
import { NextPage } from "next";

const pageSeo: PageSeoProps = {
  title: "In theatres today",
  description: "All movies in theatres today",
  keywords: "films, movies, popular, today, theatres",
};

type HomePageProps = {
  params: {
    lang: string;
  };
};

export const revalidate = 604800;

export async function generateMetadata(props: HomePageProps) {
  const { params } = props;
  const { lang } = params;
  return await SEO.buildI18nSeoMetadata(pageSeo, lang);
}

const HomePage: NextPage<HomePageProps> = async ({ params }) => {
  const { lang } = params;
  const data = await MovieRepository.inTheatresList(1, lang);
  const [title] = await DeePlService.translate(
    ["In theatres today"],
    lang,
    "en"
  );
  return (
    <Container size="4">
      <PageHeader
        pageTitle={`🎬 ${title}`}
        rightSlot={
          <Flex align="center">
            <ToggleThemeButton />
            <LanguageSelector selectedLanguage={lang} />
          </Flex>
        }
      />
      <MoviesGrid data={data.results} />
    </Container>
  );
};

export default HomePage;

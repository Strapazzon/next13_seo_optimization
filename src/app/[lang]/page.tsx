import { MovieCard } from "@components/MovieCard";
import { MoviesGrid } from "@components/MoviesGrid";
import { PageHeader } from "@components/PageHeader";
import { ToggleThemeButton } from "@components/ToggleThemeButton";
import { DeePlService } from "@modules/deeplService";
import { MovieRepository } from "@modules/moviesRepository";
import { PageSeoProps } from "@modules/seo";
import { Container } from "@radix-ui/themes";
import { Metadata, NextPage } from "next";
const pageSeo: PageSeoProps = {
  title: "In theatres today",
  description: "All movies in theatres today",
  keywords: "films, movies, popular, today, theatres",
};

export const metadata: Metadata = {
  title: pageSeo.title,
  description: pageSeo.description,
  keywords: pageSeo.keywords,
  openGraph: {
    title: pageSeo.title,
    description: pageSeo.description,
    type: "website",
  },
};

type HomePageProps = {
  params: {
    lang: string;
  };
};

const HomePage: NextPage<HomePageProps> = async ({ params }) => {
  const { lang } = params;
  const data = await MovieRepository.inTheatresList(1, lang);
  const title = await DeePlService.translate(["In theatres today"], lang, "en");
  return (
    <Container size="4">
      <PageHeader
        pageTitle={`🎬 ${title[0]}`}
        rightSlot={<ToggleThemeButton />}
      />

      <MoviesGrid
        data={data.results}
        renderCard={(movie) => <MovieCard data={movie} key={movie.id} />}
      />
    </Container>
  );
};

export default HomePage;

import { Metadata, NextPage } from "next";
import Image from "next/image";
import { PageHeader } from "@components/PageHeader";
import { ToggleThemeButton } from "@components/ToggleThemeButton";
import { MovieRepository } from "@modules/moviesRepository";
import { Box, Card, Container, Flex, Text } from "@radix-ui/themes";
import { DeePlService } from "@modules/deeplService";
import Link from "next/link";
import { MovieImagesMosaic } from "@components/MovieImagesMosaic";
import styles from "@styles/movie-page.module.scss";

type MoviePageProps = {
  params: {
    lang: string;
    id: number;
  };
};

const imageBaseUrl = process.env.MOVIES_API_IMAGE;

const MoviePage: NextPage<MoviePageProps> = async ({ params }) => {
  const { lang, id } = params;

  const data = await MovieRepository.movieDetails(id, lang);

  const [imgWidth, imgHeight] = [400, 600];
  const [imgAlt] = await DeePlService.translate(
    ["Movie poster image"],
    lang,
    "en"
  );
  return (
    <Container size="4">
      <PageHeader pageTitle={data.title} rightSlot={<ToggleThemeButton />} />
      <Flex
        direction={{
          initial: "column",
          xs: "column",
          md: "row",
          lg: "row",
          xl: "row",
        }}
        gap="4"
        id="detail-page"
      >
        <Card>
          <Box className={styles.poster}>
            <Image
              src={`${imageBaseUrl}${data.poster_path}`}
              alt={imgAlt}
              width={imgWidth}
              height={imgHeight}
            />
          </Box>
        </Card>

        <Flex direction="column" gap="4">
          <Text size="6" weight="bold">
            {data.tagline}
          </Text>

          <Text size="3" weight="bold">
            {data.genres.map((genre) => genre.name).join(", ")}
          </Text>

          <Text>
            {new Date(data.release_date).getFullYear()} {" - "}
            {data.production_countries.map(({ name }) => name).join(", ")}
            {" - "} ({data.runtime} min)
            {" - "} {data.spoken_languages.map(({ name }) => name).join(", ")}
          </Text>

          <Text size="2">{data.overview}</Text>

          <Link href={data.homepage}>
            <Text size="2">{data.homepage}</Text>
          </Link>

          <Text size="2">
            {data.production_companies.map(({ name }) => name).join(", ")}
          </Text>
          <MovieImagesMosaic id={id} />
        </Flex>
      </Flex>
    </Container>
  );
};

export const revalidate = 604800;

export async function generateMetadata(
  props: MoviePageProps
): Promise<Metadata> {
  const { params } = props;
  const { lang, id } = params;
  const data = await MovieRepository.movieDetails(id, lang);
  const keywordsRep = await MovieRepository.movieKeywords(id);
  const originalKeywords = keywordsRep.keywords
    .map((keyword) => keyword.name)
    .join(", ");

  const [localeKeywords] = await DeePlService.translate(
    [originalKeywords],
    lang,
    "en"
  );

  return {
    title: data.title,
    description: data.overview,
    keywords: localeKeywords,
    openGraph: {
      title: data.title,
      description: data.overview,
    },
  };
}

export default MoviePage;

import { NextPage } from "next";
import Image from "next/image";
import { PageHeader } from "@components/PageHeader";
import { ToggleThemeButton } from "@components/ToggleThemeButton";
import { MovieRepository } from "@modules/moviesRepository";
import { styled } from "@modules/theme";
import { Box, Card, Container, Flex } from "@radix-ui/themes";
import { DeePlService } from "@modules/deeplService";

type MoviePageProps = {
  params: {
    lang: string;
    id: number;
  };
};

const Poster = styled(Box, {
  height: "$full",
  borderRadius: "$m",
  overflow: "hidden",
  letterSpacing: "0",
  wordSpacing: "0",
  fontSize: "0",
});

const imageBaseUrl = process.env.MOVIES_API_IMAGE;

const MoviePage: NextPage<MoviePageProps> = async ({ params }) => {
  const { lang, id } = params;

  const data = await MovieRepository.getMovie(id, lang);
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
          <Poster>
            <Image
              src={`${imageBaseUrl}${data.poster_path}`}
              alt={imgAlt}
              width={imgWidth}
              height={imgHeight}
            />
          </Poster>
        </Card>

        <Box>a</Box>
      </Flex>
    </Container>
  );
};

export const revalidate = 604800;

export default MoviePage;

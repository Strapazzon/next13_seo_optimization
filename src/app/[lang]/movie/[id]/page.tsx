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

const ImageHolder = styled(Box, {
  minWidth: "$3500",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "$full",
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
          md: "column",
          lg: "row",
          xl: "row",
        }}
        gap="4"
        id="detail-page"
      >
        <Card>
          <ImageHolder>
            <Image
              src={`${imageBaseUrl}${data.poster_path}`}
              alt={imgAlt}
              width={imgWidth}
              height={imgHeight}
            />
          </ImageHolder>
        </Card>
      </Flex>
    </Container>
  );
};

export const revalidate = 604800;

export default MoviePage;

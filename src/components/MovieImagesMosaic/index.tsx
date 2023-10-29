import React from "react";
import { Grid } from "@radix-ui/themes";
import { MovieRepository } from "@modules/moviesRepository";
import Image from "next/image";
import { styled } from "@modules/theme";

type MovieImagesMosaicProps = {
  id: number;
};

const ImageHolder = styled("div", {
  position: "relative",
  width: "100%",
  overflow: "hidden",
  Image: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  "&:after": {
    content: "",
    display: "block",
    paddingTop: "calc(100% / (16 / 9))",
  },
});

export const MovieImagesMosaic: React.FC<MovieImagesMosaicProps> = async ({
  id,
}) => {
  const { backdrops } = await MovieRepository.movieImages(id);

  return (
    <Grid
      gap={{
        initial: "6",
        sm: "4",
      }}
      columns={{
        initial: "1",
        sm: "3",
      }}
    >
      {backdrops.slice(0, 3).map((backdrop) => (
        <ImageHolder key={backdrop.file_path}>
          <Image
            src={`${process.env.MOVIES_API_IMAGE}${backdrop.file_path}`}
            layout="fill"
            objectFit="cover"
            alt="backdrop"
          />
        </ImageHolder>
      ))}
    </Grid>
  );
};

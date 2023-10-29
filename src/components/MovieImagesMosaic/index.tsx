import React from "react";
import { Grid } from "@radix-ui/themes";
import { MovieRepository } from "@modules/moviesRepository";
import Image from "next/image";
import styles from "@styles/movie-images-mosaic.module.scss";

type MovieImagesMosaicProps = {
  id: number;
};

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
        <div className={styles.imageHolder} key={backdrop.file_path}>
          <Image
            src={`${process.env.MOVIES_API_IMAGE}${backdrop.file_path}`}
            layout="fill"
            objectFit="cover"
            alt="backdrop"
          />
        </div>
      ))}
    </Grid>
  );
};

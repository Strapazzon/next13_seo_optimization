import React from "react";
import { Grid } from "@radix-ui/themes";
import { Movie } from "@modules/moviesRepository";

type MoviesGridProps = {
  data: Movie[];
  renderCard?: (movie: Movie, index?: number) => React.ReactNode;
};

export const MoviesGrid: React.FC<MoviesGridProps> = ({
  data,
  renderCard = () => null,
}) => {
  return (
    <Grid
      columns={{ lg: "4", md: "3", sm: "2", xs: "1" }}
      gap="3"
      gapY="6"
      width="auto"
    >
      {data.map((movie, index) => renderCard(movie, index))}
    </Grid>
  );
};

import React from "react";
import { Grid } from "@radix-ui/themes";
import { Movie } from "@modules/moviesRepository";
import { MovieCard } from "@components/MovieCard";

type MoviesGridProps = {
  data: Movie[];
};

export const MoviesGrid: React.FC<MoviesGridProps> = ({ data }) => {
  return (
    <Grid
      columns={{ lg: "4", md: "3", sm: "2", xs: "1" }}
      gap="3"
      gapY="6"
      width="auto"
    >
      {data.map((movie) => (
        <MovieCard data={movie} key={movie.id} />
      ))}
    </Grid>
  );
};

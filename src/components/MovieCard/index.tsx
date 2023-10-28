import React from "react";
import Image from "next/image";
import { Card, Flex, Heading, Separator } from "@radix-ui/themes";
import Link from "next/link";
import { Movie } from "@modules/moviesRepository";
import { ShortText } from "@components/ShortText";

type MovieCardProps = {
  data: Movie;
};

const [imageWidth, imageHeight] = [200, 300];
const imageBaseUrl = process.env.MOVIES_API_IMAGE;

export const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const { id, poster_path, original_title, title, overview } = data;
  const detailUrl = `/movie/${id}`;

  return (
    <Card>
      <Link href={detailUrl}>
        <Flex justify="center" align="center">
          <Image
            src={`${imageBaseUrl}${poster_path}`}
            placeholder="empty"
            alt={`${title} poster`}
            height={imageHeight}
            width={imageWidth}
          />
        </Flex>
      </Link>

      <Separator my="4" size="4" />
      <Link href={detailUrl}>
        <Heading size="2">
          <ShortText size="2">{title}</ShortText>
        </Heading>
      </Link>
      <ShortText size="2" maxLines={1} mb="2">
        {original_title}
      </ShortText>
      <ShortText size="1" maxLines={2}>
        {overview}
      </ShortText>
    </Card>
  );
};

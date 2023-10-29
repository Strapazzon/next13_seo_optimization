import React from "react";
import Image from "next/image";
import { Card, Flex, Heading, Separator, Text } from "@radix-ui/themes";
import Link from "next/link";
import { Movie } from "@modules/moviesRepository";

type MovieCardProps = {
  data: Movie;
};

const [imageWidth, imageHeight] = [250, 350];
const imageBaseUrl = process.env.MOVIES_API_IMAGE;

export const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const { id, poster_path, original_title, title, overview } = data;
  const detailUrl = `/movie/${id}`;

  return (
    <Card size="2">
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
          <Text className="shortText l2" size="2">
            {title}
          </Text>
        </Heading>
      </Link>
      <Text className="shortText l2" size="2" mb="2">
        {original_title}
      </Text>
      <Text className="short-text l1" size="1">
        {overview}
      </Text>
    </Card>
  );
};

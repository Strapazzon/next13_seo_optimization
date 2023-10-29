/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ImageResponse } from "next/og";

import { Montserrat } from "next/font/google";
import { MovieImageProps, MovieRepository } from "@modules/moviesRepository";

export const size = { width: 1200, height: 600 };
export const contentType = "image/png";
export const runtime = "edge";

const font = Montserrat({ subsets: ["latin"] });

type ImageElementProps = {
  image: MovieImageProps;
  logo: MovieImageProps;
};

const ImageElement: React.FC<ImageElementProps> = ({ image, logo }) => {
  const logoPath = `${process.env.MOVIES_API_IMAGE}${logo.file_path}`;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        width: "100%",
        height: "100%",
        color: "#fff",
        fontSize: "2rem",
        fontWeight: "bold",
        backgroundImage: `url(${process.env.MOVIES_API_IMAGE}${image.file_path})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <img src={logoPath} width={400} alt="movie logo" />
    </div>
  );
};
type ImageProps = {
  params: {
    lang: string;
    id: number;
  };
};

const Image = async ({ params }: ImageProps) => {
  const { id } = params;
  const { backdrops, logos } = await MovieRepository.movieImages(id);
  const [image] = backdrops;
  const [logo] = logos;

  console.log(logo);
  return new ImageResponse(<ImageElement image={image} logo={logo} />, {
    emoji: "twemoji",
  });
};

export default Image;

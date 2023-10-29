import React from "react";
import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

const ImageElement: React.FC = () => (
  <div
    style={{
      fontSize: "30rem",
      background: "transparent",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      backgroundColor: "black",
      borderRadius: "50%",
    }}
  >
    🎬
  </div>
);
type ImageProps = {
  params: {
    lang: string;
  };
};

const Image = async ({}: ImageProps) => {
  return new ImageResponse(<ImageElement />, {
    emoji: "twemoji",
  });
};

export default Image;

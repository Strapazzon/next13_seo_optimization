import React from "react";
import { getCssText } from "@modules/theme";

type StitchesRegistryProps = {
  children?: React.ReactNode;
};

export const StitchesRegistry: React.FC<StitchesRegistryProps> = () => {
  return (
    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
  );
};

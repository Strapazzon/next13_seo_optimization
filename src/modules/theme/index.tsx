import { ThemeOptions } from "@radix-ui/themes";
import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      background: "var(--color-page-background)",
    },
    sizes: {
      full: "100%",
      3500: "35rem",
    },
  },
});

export const radixTheme: Partial<ThemeOptions> = {
  radius: "small",
  accentColor: "indigo",
  panelBackground: "solid",
};

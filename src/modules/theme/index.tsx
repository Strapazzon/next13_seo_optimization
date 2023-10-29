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
      border: "var(--color-border)",
    },
    sizes: {
      full: "100%",
      3500: "35rem",
    },
    radii: {
      s: "0.25rem",
      m: "0.5rem",
      l: "0.75rem",
      xl: "1rem",
    },
  },
});

export const globalStyles = globalCss({});

export const radixTheme: Partial<ThemeOptions> = {
  radius: "small",
  accentColor: "cyan",
  panelBackground: "solid",
};

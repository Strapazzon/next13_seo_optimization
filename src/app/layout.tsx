import React from "react";
import "@radix-ui/themes/styles.css";
import { NextThemeProvider } from "@modules/theme/themeProvider";
import { Theme } from "@radix-ui/themes";
import { globalStyles, radixTheme } from "@modules/theme";
import { StitchesRegistry } from "@modules/theme/StitchesRegistry";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html suppressHydrationWarning>
      <head>
        <StitchesRegistry />
      </head>
      <body>
        <NextThemeProvider>
          <Theme {...radixTheme}>
            {children} {globalStyles()}
          </Theme>
        </NextThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

import React from "react";
import { NextThemeProvider } from "@modules/theme/themeProvider";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { getCssText, radixTheme } from "@modules/theme";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <style
          id="stitches"
          type="text/css"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body>
        <NextThemeProvider>
          <Theme {...radixTheme}>{children}</Theme>
        </NextThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

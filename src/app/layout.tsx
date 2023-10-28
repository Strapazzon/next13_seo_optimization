import React from "react";
import "@radix-ui/themes/styles.css";
import { NextThemeProvider } from "@modules/theme/themeProvider";
import { Theme } from "@radix-ui/themes";
import { getCssText, radixTheme } from "@modules/theme";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
        <NextThemeProvider>
          <Theme {...radixTheme}>{children}</Theme>
        </NextThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

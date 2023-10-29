import React from "react";
import "@radix-ui/themes/styles.css";
import "@styles/global.scss";
import { NextThemeProvider } from "@modules/theme/themeProvider";
import { Theme } from "@radix-ui/themes";
import { radixTheme } from "@modules/theme";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  metadataBase: process.env.BASE_URL,
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <NextThemeProvider>
          <Theme {...radixTheme}>{children}</Theme>
        </NextThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

import React from "react";
import "@radix-ui/themes/styles.css";
import "@styles/global.scss";
import { NextThemeProvider } from "@modules/theme/themeProvider";
import { Theme } from "@radix-ui/themes";
import { radixTheme } from "@modules/theme";
import { Footer } from "@components/Footer";

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    lang?: string;
  };
};

export const metadata = {
  metadataBase: process.env.BASE_URL,
};

const RootLayout: React.FC<RootLayoutProps> = ({ children, params }) => {
  const { lang = "en" } = params;

  return (
    <html suppressHydrationWarning lang={lang}>
      <body>
        <NextThemeProvider>
          <Theme {...radixTheme}>
            {children}
            <Footer />
          </Theme>
        </NextThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

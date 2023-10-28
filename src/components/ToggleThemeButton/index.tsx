"use client";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import React, { SVGAttributes, useCallback, useContext } from "react";

type ToggleThemeButtonProps = {
  size?: SVGAttributes<SVGElement>["width"];
  ariaLabel?: string;
};

export const ToggleThemeButton: React.FC<ToggleThemeButtonProps> = ({
  size = "24",
  ariaLabel = "Toggle theme",
}) => {
  const { setTheme, theme } = useTheme();

  const toggleDarkMode = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [setTheme, theme]);

  return (
    <Button variant="ghost" onClick={toggleDarkMode} aria-label={ariaLabel}>
      {theme === "light" ? (
        <MoonIcon width={size} height={size} />
      ) : (
        <SunIcon width={size} height={size} />
      )}
    </Button>
  );
};

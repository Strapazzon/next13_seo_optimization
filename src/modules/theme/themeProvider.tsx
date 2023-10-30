"use client";
import React from "react";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

export function NextThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      {children}
    </ThemeProvider>
  );
}

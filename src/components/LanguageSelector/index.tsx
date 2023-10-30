"use client";

import React from "react";
import { Flex, Select } from "@radix-ui/themes";
import { availableLanguages } from "@modules/common/i18n/languages";
import { RedirectType, redirect } from "next/navigation";

const languageCookieName = process.env.LANGUAGE_COOKIE_NAME || "LANGUAGE";

type LanguageSelectorProps = {
  selectedLanguage?: string;
};

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLanguage = "en",
}) => {
  const handleOnChange = (value: string) => {
    setCookieLanguage(value);
    redirect("/", RedirectType.replace);
  };

  const setCookieLanguage = (value: string) => {
    document.cookie = `${languageCookieName}=${value};path=/`;
  };

  return (
    <Flex justify="center" align="center" ml="4">
      <Select.Root
        defaultValue={selectedLanguage}
        onValueChange={handleOnChange}
      >
        <Select.Trigger />
        <Select.Content>
          {availableLanguages.map(({ code, name }) => (
            <Select.Item key={code} value={code}>
              {name}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </Flex>
  );
};

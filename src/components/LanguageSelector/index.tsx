"use client";

import React from "react";
import { Flex, Select } from "@radix-ui/themes";
import { availableLanguages } from "@modules/common/i18n/languages";
import { redirect } from "next/navigation";

type LanguageSelectorProps = {
  selectedLanguage?: string;
};

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLanguage = "en",
}) => {
  const handleOnChange = (value: string) => {
    setCookieLanguage(value);
    redirect("/");
  };

  const setCookieLanguage = (value: string) => {
    document.cookie = `LANGUAGE=${value};path=/`;
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

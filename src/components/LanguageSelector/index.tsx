"use client";

import React from "react";
import { Flex, Select, Text } from "@radix-ui/themes";
import { availableLanguages } from "@modules/common/i18n/languages";

type LanguageSelectorProps = {
  value?: string;
};

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  value = "en",
}) => {
  const [selectedLanguage, setSelectedLanguage] = React.useState(value);

  const handleOnChange = (value: string) => {
    setSelectedLanguage(value);
    setCookieLanguage(value);
    window.location.href = `/${value}`;
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

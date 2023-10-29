import React from "react";
import { Box, Flex, Heading, Separator } from "@radix-ui/themes";
import styles from "@styles/page-header.module.scss";

type PageHeaderProps = {
  boxProps?: React.ComponentProps<typeof Box>;
  pageTitle?: string;
  children?: React.ReactNode;
  rightSlot?: React.ReactNode;
  leftSlot?: React.ReactNode;
};

export const PageHeader: React.FC<PageHeaderProps> = ({
  boxProps,
  pageTitle,
  children,
  leftSlot,
  rightSlot,
}) => {
  return (
    <Box className={styles.wrapper} {...boxProps} my="4">
      <Flex direction="row" align="center" justify="between">
        {leftSlot}
        <Heading
          mb="2"
          size={{
            lg: "8",
            md: "6",
            xs: "5",
            initial: "5",
          }}
        >
          {pageTitle}
        </Heading>
        {rightSlot}
      </Flex>
      {children}
      <Separator mt="4" mb="6" size="4" />
    </Box>
  );
};

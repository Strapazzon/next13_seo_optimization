import { styled } from "@modules/theme";
import { Text } from "@radix-ui/themes";

export const ShortText = styled(Text, {
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  "-webkit-box-orient": "vertical",

  variants: {
    maxLines: {
      1: {
        "-webkit-line-clamp": "1",
        "-webkit-box-orient": "vertical",
      },
      2: {
        "-webkit-line-clamp": "2",
      },
      3: {
        "-webkit-line-clamp": "3",
      },
      4: {
        "-webkit-line-clamp": "4",
      },
    },
  },
  defaultVariants: {
    maxLines: 1,
  },
});

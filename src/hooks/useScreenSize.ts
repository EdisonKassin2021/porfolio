import { useMediaQuery } from "@mui/material";

export type TScreen = "xs" | "sm" | "md" | "lg" | undefined;
export const useScreenSize = (): TScreen => {
  const isXSmall = useMediaQuery("(max-width:599px)");
  const isSmall = useMediaQuery("(min-width:600px) and (max-width:959px)");
  const isMedium = useMediaQuery("(min-width:960px) and (max-width:1279px)");
  const isLarge = useMediaQuery("(min-width:1280px)");

  if (isXSmall) {
    return "xs"; //"xsmall";
  } else if (isSmall) {
    return "sm"; //"small";
  } else if (isMedium) {
    return "md"; //"medium";
  } else if (isLarge) {
    return "lg"; //"large";
  } else {
    return undefined;
  }
};

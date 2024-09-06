import "@emotion/react";

import { image } from "../theme";
import { ThemeOptions } from "@mui/material";

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";

declare module "@emotion/react" {
  export interface Theme extends ThemeOptions {
    image: typeof image;
    color: {
      white: string;
      black: string;
    };
    fontWeight: {
      thin: number;
      extraLight: number;
      light: number;
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
      extraBold: number;
      black: number;
    };
    fontFamily: {
      primary: string;
    };
    shadow: {
      card: string;
    };
  }
}

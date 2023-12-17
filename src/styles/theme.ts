import { MediaFunction, ThemeInterface } from "@/types/ThemeTypes";
import { css } from "styled-components";
import { Interpolation } from "styled-components/dist/types";

export const breakpointsSizes = {
  /** Width equivalent to 240px */
  mobileXS: 240,
  /** Width equivalent to 320px */
  mobileS: 320,
  /** Width equivalent to 480px */
  mobileM: 480,
  /** Width equivalent to 540px */
  mobileL: 540,
  /** Width equivalent to 640px */
  mobileXL: 640,
  /** Width equivalent to 720px */
  tabletXS: 720,
  /** Width equivalent to 750px */
  tabletS: 750,
  /** Width equivalent to 800px */
  tabletM: 800,
  /** Width equivalent to 1024px */
  tabletL: 1024,
  /** Width equivalent to 1080px */
  tabletXL: 1080,
  /** Width equivalent to 1280px */
  laptopXS: 1280,
  /** Width equivalent to 1366px */
  laptopS: 1366,
  /** Width equivalent to 1440px */
  laptopM: 1440,
  /** Width equivalent to 1517px */
  laptopL: 1517,
  /** Width equivalent to 1600px */
  laptopXL: 1600,
  /** Width equivalent to 1920px */
  desktopXS: 1920,
  /** Width equivalent to 2160px */
  desktopS: 2160,
  /** Width equivalent to 2560px */
  desktopM: 2560,
  /** Width equivalent to 3840px */
  desktopL: 3840,
  /** Width equivalent to 7680px */
  desktopXL: 7680,
};

const typography = {
  fontFamily: "Open Sans",
  fontSize: {
    /**xxs: value equivalent to 12px */
    xxs: "12px",
    /**xs: value equivalent to 14px */
    xs: "14px",
    /**ssm: value equivalent to 16px */
    ssm: "16px",
    /**sm: value equivalent to 18px */
    sm: "18px",
    /**md: value equivalent to 24px */
    md: "24px",
    /**lg: value equivalent to 32px */
    lg: "32px",
    /**ml: value equivalent to 36px */
    ml: "36px",
    /**xl: value equivalent to 64px */
    xl: "64px",
  },
  fontWeight: {
    "100": 100,
    "200": 200,
    "300": 300,
    "400": 400,
    "500": 500,
    "600": 600,
    "700": 700,
    "800": 800,
    "900": 900,
    bold: "bold",
    bolder: "bolder",
    normal: "normal",
  },
};

type Size = keyof typeof breakpointsSizes;

const media = (type: "min" | "max"): MediaFunction =>
  Object.keys(breakpointsSizes).reduce((acc: any, label) => {
    acc[label] = (...args: Interpolation<object>[]) => css`
      @media (${type}-width: ${breakpointsSizes[label as Size]}px) {
        ${css`
          ${args}
        `};
      }
    `;
    return acc;
  }, {} as MediaFunction);

const mediaType = { min: media("min"), max: media("max") };

const theme: ThemeInterface = {
  media: mediaType,
  mediaValues: breakpointsSizes,
  typography: typography,
};

export default theme;

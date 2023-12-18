import { CSSProp, Interpolation, RuleSet } from "styled-components";

export interface ThemeInterface {
  media: {
    min: MediaFunction;
    max: MediaFunction;
    orientation: {
      landscape: MediaFunctionOrientation;
      portrait: MediaFunctionOrientation;
    };
  };
  mediaValues: breakpointValues;
  typography: typographyValues;
}

declare module "styled-components" {
  export interface DefaultTheme extends ThemeInterface {}
}

type breakpointsSizes =
  /** value equivalent to 240px */
  | "mobileXS"
  /** value equivalent to 320px */
  | "mobileS"
  /** value equivalent to 480px */
  | "mobileM"
  /** value equivalent to 540px */
  | "mobileL"
  /** value equivalent to 640px */
  | "mobileXL"
  /** value equivalent to 720px */
  | "tabletXS"
  /** value equivalent to 750px */
  | "tabletS"
  /** value equivalent to 800px */
  | "tabletM"
  /** value equivalent to 1024px */
  | "tabletL"
  /** value equivalent to 1080px */
  | "tabletXL"
  /** value equivalent to 1280px */
  | "laptopXS"
  /** value equivalent to 1366px */
  | "laptopS"
  /** value equivalent to 1440px */
  | "laptopM"
  /** value equivalent to 1440px */
  | "laptopL"
  /** value equivalent to 1600px */
  | "laptopXL"
  /** value equivalent to 1920px */
  | "desktopXS"
  /** value equivalent to 2160px */
  | "desktopS"
  /** value equivalent to 2560px */
  | "desktopM"
  /** value equivalent to 3840px */
  | "desktopL"
  /** value equivalent to 7680px */
  | "desktopXL";

type ColorVariantReduced =
  | "050"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600";

type ColorVariant =
  | ColorVariantReduced
  | "000"
  | "025"
  | "075"
  | "700"
  | "800"
  | "900"
  | "999";
// | string;

interface typographyValues {
  fontFamily: string;
  fontSize: {
    xxs: string;
    xs: string;
    ssm: string;
    sm: string;
    md: string;
    lg: string;
    ml: string;
    xl: string;
  };
  fontWeight: {
    "100": number;
    "200": number;
    "300": number;
    "400": number;
    "500": number;
    "600": number;
    "700": number;
    "800": number;
    "900": number;
    bold: string;
    bolder: string;
    normal: string;
  };
}

export type MediaFunction = {
  [key in breakpointsSizes]: (...args: Interpolation<object>[]) => CSSProp;
};
export type MediaFunctionOrientation = (
  ...args: Interpolation<object>[]
) => RuleSet<object>;

export interface breakpointValues {
  mobileXS: number;
  mobileS: number;
  mobileM: number;
  mobileL: number;
  mobileXL: number;
  tabletXS: number;
  tabletS: number;
  tabletM: number;
  tabletL: number;
  tabletXL: number;
  laptopXS: number;
  laptopS: number;
  laptopM: number;
  laptopL: number;
  laptopXL: number;
  desktopXS: number;
  desktopS: number;
  desktopM: number;
  desktopL: number;
  desktopXL: number;
}

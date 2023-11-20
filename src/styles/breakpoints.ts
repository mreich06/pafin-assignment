import { css, CSSObject } from "styled-components";

// Media query breakpoints
const breakpoints = {
  web: "768px",
  mobile: "392px",
};

type MediaFunction = (
  template: TemplateStringsArray,
  ...args: CSSObject[]
) => ReturnType<typeof css>;

// Media query templates
export const media = {
  isWeb: (...args: Parameters<MediaFunction>) => css`
    @media (min-width: ${breakpoints.web}) {
      ${css(...args)};
    }
  `,
  isTablet: (...args: Parameters<MediaFunction>) => css`
    @media (max-width: ${breakpoints.web}) and (min-width: ${breakpoints.mobile}) {
      ${css(...args)};
    }
  `,
  isMobile: (...args: Parameters<MediaFunction>) => css`
    @media (max-width: ${breakpoints.mobile}) {
      ${css(...args)};
    }
  `,
};

import styled from "styled-components";
import text from "../text/index.json";
import { theme } from "../styles/theme";
import { media } from "../styles/breakpoints";

const StyledPageTitle = styled.span`
  ${theme.text.pageHeader};
  ${media.isWeb`
    font-size: 32px; 
  `}

  ${media.isTablet`
    font-size: 26px;
  `}

  ${media.isMobile`
    font-size: 18px; 
  `}
`;

/**
 * Header
 *
 * Description: title of entire page
 */
const PageTitle = (): JSX.Element => {
  return <StyledPageTitle>{text.pageTitle}</StyledPageTitle>;
};

export default PageTitle;

import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

const StyledPageContainer = styled.div`
  display: inline-flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 32px;
  background: ${theme.colors.gridBg};
  margin: 0 auto;
  align-items: center;
`;

interface PageContainerProps {
  children: React.ReactNode;
}

/**
 * PageContainer
 *
 * Description: Container for entire page
 */
const PageContainer = ({ children }: PageContainerProps): JSX.Element => {
  return (
    <StyledPageContainer>
      {children}
    </StyledPageContainer>
  );
};

export default PageContainer;

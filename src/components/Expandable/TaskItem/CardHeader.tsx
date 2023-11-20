import styled from "styled-components";
import ProgressIndicator from "./ProgressIndicator";
import { Icon } from ".";
import { getIconComponent } from "../../../utils";
import { theme } from "../../../styles/theme";
import { media } from "../../../styles/breakpoints";

const StyledHeaderDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

const StyledHeader = styled.span`
  flex: 1 0 0;
  ${theme.text.taskItemHeader};
  ${media.isWeb`
    font-size: 20px; 
    line-height: 24px;
`}
  ${media.isTablet`
    font-size: 16px;
    line-height: 20px;
`}
  ${media.isMobile`
    font-size: 12px; 
    line-height: 16px;
  `}
`;

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const StyledDescriptionContainer = styled.div`
  display: flex;
  padding: 16px 8px 0px 0px;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const StyledDescription = styled.span`
  flex: 1 0 0;
  ${theme.text.taskItemDescription};
  ${media.isWeb`
  font-size: 16px; 
  line-height: 24px;
`}
  ${media.isTablet`
  font-size: 13px;
  line-height: 15px;
`}
${media.isMobile`
  font-size: 10px; 
  line-height: 12px;
`}
`;
const StyledIconTextContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
`;

interface CardHeaderProps {
  icon: Icon;
  title: string;

  description: string;
  numStepsCompleted: number;
  totalSteps: number;
  toggleExpand: () => void;
  isExpanded: boolean;
}

/**
 * CardHeader
 *
 * Description: This component creates the header of the expandable card
 *
 */
const CardHeader = ({
  icon,
  title,
  description,
  numStepsCompleted,
  totalSteps,
  toggleExpand,
  isExpanded,
}: CardHeaderProps): JSX.Element => {
  const { name } = icon;

  return (
    <StyledHeaderDescriptionContainer>
      <StyledHeaderContainer>
        <StyledIconTextContainer>
          {getIconComponent(name)}
          <StyledHeader>{title}</StyledHeader>
        </StyledIconTextContainer>
        <ProgressIndicator
          {...{ numStepsCompleted, totalSteps }}
          toggleExpand={toggleExpand}
          isExpanded={isExpanded}
        />
      </StyledHeaderContainer>
      <StyledDescriptionContainer>
        <StyledDescription>{description}</StyledDescription>
      </StyledDescriptionContainer>
    </StyledHeaderDescriptionContainer>
  );
};

export default CardHeader;

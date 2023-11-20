import styled, { useTheme } from "styled-components";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import text from "../../../text/index.json";
import { theme } from "../../../styles/theme";
import { media } from "../../../styles/breakpoints";

interface ProgressBarProps {
  numStepsCompleted: number;
  totalSteps: number;
}

const StyledProgressIndicator = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;

const ProgressBarContainer = styled.div`
  ${media.isWeb`
    width: 60px; 
  `}
  ${media.isTablet`
    width: 40px;
  `}

  ${media.isMobile`
    width: 15px; 
  `}
  height: 6px;
  background-color: #dee1e3;
  border-radius: 3px;
  overflow: hidden;
`;

// Progress bar fills up with green corresponding to the percentage of steps completed
const ProgressBarFill = styled.div<ProgressBarProps>`
  height: 100%;
  width: ${(props) => (props.numStepsCompleted / props.totalSteps) * 100}%;
  background-color: #38c97c;
  border-radius: inherit;
`;

const StyledProgressTextContainer = styled.div`
  height: 16px;
`;

const StyledFrame = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const StyledProgressText = styled.span`
  ${theme.text.progressIndicator};
  leading-trim: both;
  text-edge: cap;
  line-height: 21px;
  letter-spacing: -0.14px;
  ${media.isWeb`
    font-size: 14px; `}

  ${media.isTablet`
    font-size: 12px ;
  `}

  ${media.isMobile`
    font-size: 10px 
  `}
`;

const StyledCaretUp = styled(CaretUp)`
  stroke-width: 20;
`;

interface ProgressIndicatorProps {
  numStepsCompleted: number;
  totalSteps: number;
  toggleExpand: () => void;
  isExpanded: boolean;
}

/**
 * ProgressIndicator
 *
 * Description: Component that consists of progress bar, text detailing the number of steps completed and
 * caret icons that expand and close the card.
 */
const ProgressIndicator = ({
  numStepsCompleted,
  totalSteps,
  toggleExpand,
  isExpanded,
}: ProgressIndicatorProps): JSX.Element => {
  const theme = useTheme();
  const {
    colors: { grey400 },
  } = theme;

  return (
    <StyledProgressIndicator>
      <ProgressBarContainer>
        <ProgressBarFill {...{ numStepsCompleted, totalSteps }} />
      </ProgressBarContainer>
      <StyledProgressTextContainer>
        <StyledFrame>
          <StyledProgressText>
            {`${numStepsCompleted}/${totalSteps} ${text.accordionOne.loadingBar}`}
          </StyledProgressText>
          <div onClick={toggleExpand}>
            {isExpanded ? (
              <StyledCaretUp weight={"bold"} color={grey400} size={16} />
            ) : (
              <CaretDown weight={"bold"} color={grey400} size={16} />
            )}
          </div>
        </StyledFrame>
      </StyledProgressTextContainer>
    </StyledProgressIndicator>
  );
};

export default ProgressIndicator;

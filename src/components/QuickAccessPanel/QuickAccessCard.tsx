import styled from "styled-components";
import { theme } from "../../styles/theme";

const StyledQuickServiceCard = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.primary100};
  background: ${theme.colors.white50};
`;

const StyledContents = styled.div`
  align-self: stretch;
`;

const StyledFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledTitle = styled.span`
  ${theme.text.quickAccessCardTitle}
  font-feature-settings: 'liga' off;
`;

const StyledDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledDescription = styled.span`
  ${theme.text.quickAccessCardDescription}
`;

interface QuickServiceProps {
  title: string;
  description: string;
}

/**
 * QuickAccessCard
 *
 * Description: Individual card that appears inside quick service panel
 *  Props:
 * - title: title of the card
 * - description: description of the card
 */
const QuickAccessCard = ({
  title,
  description,
}: QuickServiceProps): JSX.Element => {
  return (
    <StyledQuickServiceCard>
      <StyledContents>
        <StyledFrame>
          <StyledTitleContainer>
            <StyledTitle>{title}</StyledTitle>
          </StyledTitleContainer>
          <StyledDescriptionContainer>
            <StyledDescription>{description}</StyledDescription>
          </StyledDescriptionContainer>
        </StyledFrame>
      </StyledContents>
    </StyledQuickServiceCard>
  );
};

export default QuickAccessCard;

import styled from "styled-components";
import QuickAccessCard from "./QuickAccessCard";
import { Card } from "../../utils";
import { theme } from "../../styles/theme";

const StyledContainer = styled.div`
  @media (min-width: 769px) {
    width: 189px;
  }
  align-self: stretch;
`;

const StyledQuickAccess = styled.div`
  display: flex;
  @media (min-width: 769px) {
    flex-direction: column;
    width: 189px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }

  padding-bottom: 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const RowWrapper = styled.div`
  display: flex;
  gap: 16px;
  @media (min-width: 769px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const StyledTitle = styled.div`
  display: flex;
  width: 157px;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 768px) {
    margin-top: 25px;
  }
`;

const StyledTitleText = styled.span`
  ${theme.text.quickAccessPanelTitle};
  font-feature-settings: "liga" off;
  text-transform: uppercase;
`;

interface QuickServiceProps {
  title: string;
  cards: Card[];
}

/**
 * QuickServicePanel
 *
 * Description: Side panel (for web view) or bottom panel (for tablet and mobile) containing quick access cards
 *  Props:
 * - title: title of the panel
 * - cards: Array of cards inside the panel
 */
const QuickServicePanel = ({
  title,
  cards,
}: QuickServiceProps): JSX.Element => {
  return (
    <StyledContainer>
      <StyledQuickAccess>
        <StyledMenu>
          <StyledTitle>
            <StyledTitleText>{title}</StyledTitleText>
          </StyledTitle>
          <RowWrapper>
            {cards.map((card) => (
              <QuickAccessCard
                title={card.title}
                description={card.description}
              />
            ))}
          </RowWrapper>
        </StyledMenu>
      </StyledQuickAccess>
    </StyledContainer>
  );
};

export default QuickServicePanel;

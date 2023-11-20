import PageContainer from "./../../components/PageContainer";
import StyledPageTitle from "../../components/PageTitle";
import TaskItem from "../../components/Expandable/TaskItem";
import text from "../../text/index.json";
import styled from "styled-components";
import QuickAccessPanel from "../../components/QuickAccessPanel";
import { TaskItemType, Cards, TaskItems } from "../../utils";
import { media } from "../../styles/breakpoints";

const StyledCalculation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const StyledPageContents = styled.div`
  display: flex;
  margin-top: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
  gap: 16px;
`;

const StyledCardsWrapper = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  max-width: 100%;
  flex-direction: column;
  gap: 16px;
`;
const StyledResponsiveMargin = styled.div`
  max-width: 1500px;
  ${media.isWeb`
  margin: 60px `}

  ${media.isTablet`
  margin: 40px;
  `}

  ${media.isMobile`
  margin: 20px;
  `}
`;

/**
 * Calculation
 *
 * Description: The Calculation page containing of of the task items and quick access panel
 * Maps through task item data to create TaskItem components, keeping code modular and DRY
 */
const Calculation = (): JSX.Element => {
  return (
    <StyledCalculation>
      <PageContainer>
        <StyledResponsiveMargin>
          <StyledPageTitle />
          <StyledPageContents>
            <StyledCardsWrapper>
              {TaskItems.map((taskItem: TaskItemType, index) => (
                <TaskItem
                  key={index}
                  icon={taskItem.icon}
                  title={taskItem.title}
                  description={taskItem.description}
                  steps={taskItem.steps}
                />
              ))}
            </StyledCardsWrapper>
            <QuickAccessPanel
              title={text.sidepanel.title}
              cards={Cards}
              
            />
          </StyledPageContents>
        </StyledResponsiveMargin>
      </PageContainer>
    </StyledCalculation>
  );
};

export default Calculation;

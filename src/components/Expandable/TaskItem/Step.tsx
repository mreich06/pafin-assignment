import React from "react";
import styled, { useTheme } from "styled-components";
import { CheckCircle, CircleDashed, Info } from "@phosphor-icons/react";
import Button from "../../Button";
import { theme } from "../../../styles/theme";
import { media } from "../../../styles/breakpoints";

interface StyledContainerProps {
  isActive: boolean;
  disabled: boolean;
}

// reduce spacing between text and button and move button below as screen size decreases
const StyledContainer = styled.div<StyledContainerProps>`
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  display: flex;
  padding: 16px;
  ${media.isWeb`
  gap: 77px; 
  align-items: center;

`}

  ${media.isTablet`
  gap:30px;
  flex-direction: column;
`}

${media.isMobile`
  gap: 20px; 
  flex-direction: column;
`}
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid
    ${(props) =>
      props.isActive ? theme.colors.primary500 : theme.colors.neutral500};
  box-shadow: ${(props) =>
    props.isActive ? "0px 4px 4px 0px rgba(66, 153, 225, 0.2)" : "none"};
`;

const StyledStep = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
  align-self: stretch;
`;

const StyledContents = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
  align-self: stretch;
`;

const StyledColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
`;

const StyledNameContainer = styled.div`
  display: flex;
  padding-bottom: 0px;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const StyledName = styled.span<{ disabled: boolean }>`
  ${theme.text.stepHeader};
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
`;

const StyledBadgeContainer = styled.div`
  display: flex;
  padding-bottom: 0px;
  flex-direction: column;
  align-items: flex-start;
  margin: 8px 0px 8px 0px;
`;

const StyledBadge = styled.div`
  display: flex;
  height: 20px;
  padding: 0px 8px;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: ${theme.colors.info50};
`;

const StyledBadgeText = styled.span<{ disabled: boolean }>`
  ${theme.text.badge};
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  leading-trim: both;
  text-edge: cap;
`;

const StyledDescriptionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const StyledDescription = styled.span<{ disabled: boolean }>`
  ${theme.text.stepDescription};
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const StyledInfoText = styled.span`
  ${theme.text.info};
  leading-trim: both;
  text-edge: cap;
`;

interface StepProps {
  name: string;
  description: string;
  badgeText?: string;
  infoText?: string;
  hasCompleted: boolean;
  isActive: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  disabled: boolean;
}

/**
 * Step
 *
 * Description: The individual step inside each TaskItem. Contains CheckCircle icon for completed steps or
 * CheckDashed icon for incomplete steps. Can be disabled if previous task items have not been completed
 * 
 * Props:
 * @param name: name of step
 * @param description: description of step, underneath name
 * @param badgeText: badge that appears if step has been completed
 * @param infoText: informational text appearing with an info icon
 * @param hasCompleted: boolean that determines completed/incomplete icon
 * @param isActive: boolean used to highlight step if clicked
 * @param onClick: handles onClick functionality
 * @param disabled: disables step- grays out content and cannot be clicked
 */
const Step = ({
  name,
  description,
  badgeText,
  infoText,
  hasCompleted,
  isActive,
  onClick,
  disabled,
}: StepProps): JSX.Element => {
  const theme = useTheme();
  const {
    colors: { grey200, green500, info500 },
  } = theme;

  return (
    <StyledContainer isActive={isActive} onClick={onClick} disabled={disabled}>
      <StyledStep>
        <StyledContents>
          {hasCompleted ? (
            <CheckCircle size={24} color={green500} weight="fill" />
          ) : (
            <CircleDashed
              size={24}
              color={grey200}
              opacity={disabled ? 0.4 : 1}
            />
          )}
          <StyledColumnDiv>
            <StyledNameContainer>
              <StyledName disabled={disabled}>{name}</StyledName>
            </StyledNameContainer>
            {badgeText && (
              <StyledBadgeContainer>
                <StyledBadge>
                  <StyledBadgeText disabled={disabled}>
                    {badgeText}
                  </StyledBadgeText>
                </StyledBadge>
              </StyledBadgeContainer>
            )}
            <StyledDescriptionContainer>
              <StyledDescription disabled={disabled}>
                {description}
              </StyledDescription>
            </StyledDescriptionContainer>
            {infoText && (
              <StyledInfoContainer>
                <StyledInfo>
                  <Info size={16} color={info500} />
                  <StyledInfoText>{infoText}</StyledInfoText>
                </StyledInfo>
              </StyledInfoContainer>
            )}
          </StyledColumnDiv>
        </StyledContents>
      </StyledStep>
      <Button disabled={disabled} />
    </StyledContainer>
  );
};

export default Step;

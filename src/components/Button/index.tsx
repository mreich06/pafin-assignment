import styled, { useTheme } from "styled-components";
import { ArrowRight } from "@phosphor-icons/react";
import text from "./../../text/index.json";
import { theme } from "../../styles/theme";
import { media } from "../../styles/breakpoints";

const StyledButton = styled.div<{ disabled: boolean }>`
  display: flex;
  padding: 8px 12px 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: ${theme.colors.primary500};
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  ${media.isTablet`
    margin: 0px 60px 0px 60px;
  `}

  ${media.isMobile`
    margin: 0px 40px 0px 40px;
  `}
`;

const StyledButtonText = styled.span`
  ${theme.text.button};
  text-align: center;
  ${media.isWeb`
    font-size: 14px; 
    line-height: 18px;
  `}
  ${media.isTablet`
    font-size: 12px;
    line-height: 14px;
  `}
  ${media.isMobile`
    font-size: 10px;
    line-height: 12px; 
  `}
`;

interface ButtonProps {
  disabled: boolean;
}

/**
 * Button
 *
 * Description: Button component with text and right arrow. Can be disabled, changing its opacity and preventing
 * onClick functionality
 *  Props:
 * - disabled: Boolean that is true if no steps in the task have been completed, false if at least one step completed
 */

const Button = ({ disabled }: ButtonProps) => {
  const theme = useTheme();

  const handleClick = () => {
    // Redirect user to a screen to complete step

    if (disabled) return; // disable button functionality if disabled === true
  };

  return (
    <StyledButton disabled={disabled} onClick={handleClick}>
      <StyledButtonText>{text.button.title}</StyledButtonText>
      <ArrowRight color={theme.colors.white100} size={16} weight={"bold"} />
    </StyledButton>
  );
};

export default Button;

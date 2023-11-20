import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CardHeader from "./CardHeader";
import { PhosphorIconName, StepType } from "../../../utils";
import Step from "./Step";
import { useSpring, animated, config } from "react-spring";
import { theme } from "../../../styles/theme";

const StyledTaskItem = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  border-radius: 8px;
  background: ${theme.colors.white100};
  box-shadow:
    0px 1px 2px 0px rgba(0, 0, 0, 0.1),
    0px 1px 2px 0px rgba(0, 0, 0, 0.06);
  overflow: hidden; /* Ensure hidden overflow */
`;

const StyledStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

export type Icon = {
  name: PhosphorIconName;
};

interface TaskItemProps {
  icon: Icon;
  title: string;
  description: string;
  steps: StepType[];
}

/**
 * TaskItem
 *
 * Description: This component creates the content inside each expandable card. It makes use of the React Spring
 * library to handle the animation of expanding and closing the card
 */
const TaskItem = ({
  title,
  icon,
  description,
  steps,
}: TaskItemProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const numStepsCompleted = steps.filter(
    (step) => step.hasCompleted === true,
  ).length;

  // expand/close card if caret icon is clicked
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const { maxHeight } = useSpring({
    opacity: isExpanded ? 1 : 0,
    maxHeight: isExpanded ? ref?.current?.clientHeight : 0,
    config: config.default,
  });

  useEffect(() => {
    if (ref?.current) {
      const contentHeight = ref?.current?.clientHeight;
      setMaxHeight(contentHeight);
    }
  }, [isExpanded]);

  // Function that sets the max height for the animation
  const setMaxHeight = (height: number) => {
    set({
      maxHeight: isExpanded ? height : 0,
      opacity: isExpanded ? 1 : 0,
    });
  };

  // Spring animation hook for height and opacity
  const [props, set] = useSpring(() => ({
    maxHeight: 0,
    opacity: 0,
  }));

  // calculates the percentage collapsed
  let percentageCollapsed = 1;
  if (!isExpanded && props.maxHeight) {
    const maxHeightDefined = (maxHeight as unknown as number) ?? 1;
    const numericMaxHeight = props.maxHeight as unknown as number;
    percentageCollapsed = 1 - numericMaxHeight / maxHeightDefined;
  }

  return (
    <StyledTaskItem>
      <CardHeader
        {...{
          title,
          icon,
          description,
          numStepsCompleted,
          totalSteps: steps.length,
          toggleExpand,
          isExpanded,
        }}
      />
      <animated.div
        style={{
          maxHeight: props.maxHeight,
          width: "100%",
          opacity: props.opacity.interpolate((o) => {
            // Expand- reveals from top to bottom
            if (isExpanded) return o;

            // Collapse- reveals from bottom to top
            return 1 - percentageCollapsed;
          }),
          overflow: "hidden",
          transition: "max-height 0.3s ease, opacity 0.3s ease",
          margin: isExpanded ? "0px" : "0px 0px -30px 0px",
        }}
      >
        <StyledStepContainer ref={ref}>
          {steps.map((step, index) => (
            <Step
              key={index}
              name={step.name}
              description={step.description}
              badgeText={step?.badgeText}
              infoText={step?.infoText}
              hasCompleted={step.hasCompleted}
              isActive={index === activeIndex}
              onClick={() => handleClick(index)}
              disabled={numStepsCompleted === 0}
            />
          ))}
        </StyledStepContainer>
      </animated.div>
    </StyledTaskItem>
  );
};

export default TaskItem;

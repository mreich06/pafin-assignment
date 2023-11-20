import * as PhosphorIcons from "@phosphor-icons/react";
import { Icon } from "../components/Expandable/TaskItem";
import text from "../text/index.json";
export type PhosphorIconName = keyof typeof PhosphorIcons;

export type Card = {
  title: string;
  description: string;
};
export type StepType = {
  name: string;
  description: string;
  badgeText?: string;
  infoText?: string;
  hasCompleted: boolean;
};
export type TaskItemType = {
  icon: Icon;
  title: string;
  description: string;
  steps: StepType[];
};

/**
 * getIconComponent
 *
 * Description: Generates a Phosphor component based on given name
 *
 * @param {PhosphorIconName} iconName - Name of Phosphor Icon
 * @returns {IconComponent} - The resulting Phosphor Icon
 */
export const getIconComponent = (
  iconName: PhosphorIconName,
): JSX.Element | null => {
  const IconComponent = PhosphorIcons[iconName] as React.ElementType;
  if (IconComponent) {
    return <IconComponent size={26} color={"#4299e1"} weight="duotone" />;
  }
  return null;
};

// Text for Quick Access Cards
export const Cards: Card[] = [
  {
    title: text.sidepanel.panelOne.title,
    description: text.sidepanel.panelOne.summary,
  },
  {
    title: text.sidepanel.panelTwo.title,
    description: text.sidepanel.panelTwo.summary,
  },
];

// Icons and text inside the expandable tasks
// In a complete application, we might see the text being fetched from a
// server depending on whether the text for each user differs
// I organized the text in a JSON file to allow for modular components and so it could
// be easily switched out if the text is fed from a separate part of the application
export const TaskItems: TaskItemType[] = [
  {
    icon: {
      name: "UserCircleGear",
    },
    title: text.accordionOne.title,
    description: text.accordionOne.description,
    steps: [
      {
        name: text.accordionOne.stepOne,
        description: text.accordionOne.stepOneDescription,
        badgeText: text.accordionOne.stepOneBadge,
        hasCompleted: true,
      },
      {
        name: text.accordionOne.stepTwo,
        description: text.accordionOne.stepTwoDescription,
        hasCompleted: false,
      },
    ],
  },

  {
    icon: { name: "Gear" },
    title: text.accordionTwo.title,
    description: text.accordionTwo.description,
    steps: [
      {
        name: text.accordionTwo.stepThree,
        description: text.accordionTwo.stepThreeDescription,
        infoText: text.accordionTwo.stepThreeInfo,
        hasCompleted: false,
      },
      {
        name: text.accordionTwo.stepFour,
        description: text.accordionTwo.stepFourDescription,
        hasCompleted: false,
      },
    ],
  },
  {
    icon: { name: "ListChecks" },
    title: text.accordionThree.title,
    description: text.accordionThree.description,
    steps: [
      {
        name: text.accordionThree.title,
        description: text.accordionThree.description,
        hasCompleted: false,
      },
      {
        name: text.accordionThree.title,
        description: text.accordionThree.description,
        hasCompleted: false,
      },
    ],
  },
];

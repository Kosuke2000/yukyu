import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { mockOgpData, mockOgpData2 } from "@/mocks/LinkCard";

import { LinkCardView } from "./View";

export default {
  title: "Model/LinkCard/NoteStyle",
  component: LinkCardView,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LinkCardView>;

const Template: ComponentStory<typeof LinkCardView> = (args) => (
  <LinkCardView {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ogp: mockOgpData,
};

export const LongDescription = Template.bind({});
LongDescription.args = {
  ogp: mockOgpData2,
};
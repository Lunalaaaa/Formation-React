/* eslint-disable */
import * as UI from "@/components";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  component: UI.Button,
  title: 'UI/Button',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    level: {control: 'select', options: ['primary', 'optional', 'critical']},
    size: {control: 'select', options: ['small', 'medium', 'large']}, 
    disabled: {control: 'boolean'},
  },
  tags: ['autodocs'],
  args: {
    action: fn(),
  }
} satisfies Meta<typeof UI.Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    disabled: false,
    level: "primary",
    size: 'medium',
    children: 'Bouton primaire'
  },
};

export const Optional: Story = {
  args: {
    disabled: false,
    level: 'optional',
    size: 'medium',
    children: 'Bouton optionnal'
  },
};

export const Critical: Story = {
  args: {
    disabled: false,
    level: 'critical',
    size: 'medium',
    children: 'Bouton critical'
  },
};
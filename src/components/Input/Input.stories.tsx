/* eslint-disable */
import * as UI from "@/components";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  component: UI.Input,
  title: 'UI/Input',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    type: {control: 'select', options: ['number', 'date', 'text', 'password', 'email']},
    disabled: {control: 'boolean'},
    required: {control: 'boolean'},
  },
  tags: ['autodocs'],
  args: {
    onChange: fn()
  }
} satisfies Meta<typeof UI.Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
  args: {
    type: 'text',
    placeholder: 'Un input texte',
    required: false,
    value: ''
  },
};

export const InputInvalid: Story = {
  args: {
    type: 'text',
    required: true,
    placeholder: 'Un input texte',
    value: '',
  },
};

export const InputValid: Story = {
  args: {
    type: 'password',
    required: true,
    placeholder: 'Un input texte',
    value: 'pikachu',
  },
};
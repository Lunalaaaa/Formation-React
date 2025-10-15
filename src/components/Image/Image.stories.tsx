/* eslint-disable */
import * as UI from "@/components";
import { Meta, StoryObj } from "@storybook/react";
import pikaUpsideDown from '@/assets/pika_upside_down.png';
import discord from '@/assets/icones/discord.png';
import facebook from '@/assets/icones/facebook.png';
import instagram from '@/assets/icones/instagram.png';

const meta = {
  component: UI.Image,
  title: 'UI/Image',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    imageSrc: {control: 'select', options: [pikaUpsideDown, discord, facebook, instagram]},
    alt: {control: "text"},
    overlay: {control: 'number'}
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UI.Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Image: Story = {
  args: {
    imageSrc: pikaUpsideDown,
    alt: '',
  },
};

export const NotFound: Story = {
  args: {
    imageSrc: "",
    alt: 'Pas d\'image mais une description :p',
  },
};

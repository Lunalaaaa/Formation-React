/* eslint-disable */
import * as UI from "@/components";
import Card from './Card';
import { Meta, StoryObj } from "@storybook/react";
import pikaUpsideDown from '@/assets/pika_upside_down.png';
import discord from '@/assets/icones/discord.png';
import facebook from '@/assets/icones/facebook.png';
import instagram from '@/assets/icones/instagram.png';

const meta = {
  component: UI.Card,
  title: 'UI/Card',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    imageSrc: { control: 'select', options: ['', pikaUpsideDown, discord, facebook, instagram] },
    alt: { control: "text" },
    overlay: { control: 'number' }

  },
  tags: ['autodocs'],
} satisfies Meta<typeof UI.Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicCard: Story = {
  args: {
    imageSrc: '',
    titre: 'Super card',
    buttons: [],
    children: 'Un contenu de fou malade'
  },
};

export const CardWithImage: Story = {
  args: {
    imageSrc: "/src/assets/pika_upside_down.png",
    titre: 'Super card avec une image',
    buttons: []
  },
};

export const CardWithImageAndButtons: Story = {
  args: {
    imageSrc: pikaUpsideDown,
    titre: 'Super card avec une image et des boutons de fou malade',
    buttons: [
      {
        disabled: false,
        level: 'primary',
        size: 'medium',
        children: 'Primary',
        action: () => console.log('Bouton d\'action enclenché')
      },
      {
        disabled: false,
        level: 'optional',
        size: 'small',
        children: 'Optional',
        action: () => console.log('Bouton d\'action enclenché')
      },
      {
        disabled: true,
        level: 'critical',
        size: 'large',
        children: 'Critique',
        action: () => console.log('Bouton d\'action enclenché')
      }
    ]
  },
};

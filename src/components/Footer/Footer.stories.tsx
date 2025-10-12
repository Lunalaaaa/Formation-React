/* eslint-disable */
import * as UI from "@/components";
import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from "react-router";

const meta = {
  component: UI.Footer,
  title: 'UI/Footer',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    informationsLegales: {control: 'object'},
    liensReseauxSociaux: {control: 'object'}
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UI.Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    adresse: "Une adresse" ,
    informationsLegales: [
      {
        lien: "/",
        nomLien: "Un lien" 
      }
    ],
    liensReseauxSociaux:[
      {
        icone: "discord",
        lien: "https://discord.gg",
        nomLien: "Lien vers un discord"
      }
    ],
    mail: "test@mail.com",
    tel: "0123456789",
  },
  decorators: [
  (Story) => (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      padding: '20px',
      boxSizing: 'border-box',
    }}>
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    </div>
  ),
  ],
};
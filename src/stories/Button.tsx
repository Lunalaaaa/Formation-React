import React from 'react';

import './button.css';

import { ButtonProps } from '@/components/Button/index';
import * as UI from "@/components";

/** Primary UI component for user interaction */
export const Button = ({
  disabled = false,
  level = 'primary',
  size = 'medium',
  action = () => {},
  children = 'Bouton de fou',
}: ButtonProps) => {
  return (
    <UI.Button
      disabled={disabled}
      action={action}
      level={level}
      size={size}
    >
      {children}
    </UI.Button>
  );
};

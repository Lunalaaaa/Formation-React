/* Global Imports */
import React, { FC } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';

/* Local Imports */
import { ButtonWrapper } from './Button.styled';
import { ButtonProps } from './Button.type';


const Button: FC<ButtonProps> = ({ children, action, disabled, level, size }) => {

   // Hooks.useGloblaEvent('click',()=> console.log('click event'));

   return(
      <ButtonWrapper data-testid="Button" onClick={action} disabled={disabled} className={level + ' ' + size}>
         {children}
      </ButtonWrapper>
   );

}

/**
 * USAGE: Button description to complete.
 * @example
 * <Button /> 
 */
const ButtonMemo = React.memo(Button, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return false;
});
ButtonMemo.displayName = 'Button Memoized';

export default ButtonMemo;

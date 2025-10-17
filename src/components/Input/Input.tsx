/* Global Imports */
import React, { FC } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';

/* Local Imports */
import { InputWrapper } from './Input.styled';


interface InputProps {
   type: 'number' | 'date' | 'text' | 'password' | 'email',
   value: string | number,
   disabled?: boolean,
   required?: boolean,
   placeholder?: string,
   onChange?: () => void,
   pattern?: string
}


const Input: FC<InputProps> = ({disabled, type, required, placeholder, value, onChange, pattern}) => {

   return(
      <InputWrapper>
         <input 
            type={type} 
            disabled={disabled ?? false} 
            required={required ?? false} 
            placeholder={placeholder} 
            value={value ?? ""} 
            onChange={onChange ?? (() => {})}
            pattern={pattern} 
         />
      </InputWrapper>
   );

}

/**
 * USAGE: Input description to complete.
 * @example
 * <Input /> 
 */
const InputMemo = React.memo(Input, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return false;
});
InputMemo.displayName = 'Input Memoized';

export default InputMemo;

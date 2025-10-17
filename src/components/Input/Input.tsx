/* Global Imports */
import React, { FC, useEffect } from 'react';

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
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
   pattern?: string
}

// TODO: Tester
const handleSubmit = (handler: (e: SubmitEvent) => void) => {
   useEffect(() => {
      window.addEventListener('submit', handler);
      return () => {
            window.removeEventListener('submit', handler);
      }
   })
}

const Input: FC<InputProps> = ({disabled, type, required, placeholder, value, onChange, pattern}) => {
   handleSubmit(() => {
      if(value == "" && required){
         alert("La valeur ne peut être nulle")
      }
   });

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
            onSubmit={() => handleSubmit}
         />
         { required && !value ? 
            <svg className='alertIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill='red'>
               <path d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 384C302.3 384 288 398.3 288 416C288 433.7 302.3 448 320 448C337.7 448 352 433.7 352 416C352 398.3 337.7 384 320 384zM320 192C301.8 192 287.3 207.5 288.6 225.7L296 329.7C296.9 342.3 307.4 352 319.9 352C332.5 352 342.9 342.3 343.8 329.7L351.2 225.7C352.5 207.5 338.1 192 319.8 192z"/>
            </svg> : 
            (required && value ?
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill='green'>
                  <path d="M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM438 209.7C427.3 201.9 412.3 204.3 404.5 215L285.1 379.2L233 327.1C223.6 317.7 208.4 317.7 199.1 327.1C189.8 336.5 189.7 351.7 199.1 361L271.1 433C276.1 438 282.9 440.5 289.9 440C296.9 439.5 303.3 435.9 307.4 430.2L443.3 243.2C451.1 232.5 448.7 217.5 438 209.7z"/>
                  </svg>: 
               <></>
            )
         }
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

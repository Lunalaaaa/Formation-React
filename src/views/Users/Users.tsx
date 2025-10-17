/* Global Imports */
import  { FC } from 'react';

/* Application Level Imports */
import * as UI from '@/components';
import * as Features from '@/containers';
import * as Hooks from '@/hooks';

/* Local Imports */
import './Users.style.css';


interface UsersProps {}

const Users: FC<UsersProps> = () => {

   Hooks.useDocumentTitle('Users View');

   return (
   <div className="Users" data-testid="Users">
      <UI.Main>
         <UI.Input 
            placeholder="Email"
            onChange={() => console.log('input changé')}
            type='email'
            required={true}
            value=""
            pattern="^[^@]+@[^@]+\.[^@]+$"
         />
         <UI.Input 
            placeholder="Password"
            onChange={() => {}}
            type='password'
            required={true}
            value="blbl"

         />
         <UI.Input 
            placeholder="Date"
            onChange={() => console.log('input changé')}
            type='date'
            required={false}
            value=""
            pattern="^[^@]+@[^@]+\.[^@]+$"
         />

         Users Content
      </UI.Main>
   </div>
   )
};

export default Users;

/* Global Imports */
import React, { FC } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';

/* Local Imports */
import { HeaderWrapper } from './Header.styled';
import { NavLink } from 'react-router';

interface NavItemProps {
   to: `/${'' | 'home' | 'products' | 'flights' | 'users'}`,
   label: Capitalize<string>,
   css: 'pikachu'
}

interface HeaderProps { }

const NavItem:FC<NavItemProps> = ({to, label, css}) => (
   <li>
      <NavLink to={to} className={({ isActive }) => isActive ? css : ""} aria-description={label}>{label}</NavLink>
   </li>
);



const Header: FC<HeaderProps> = () => {

   // Hooks.useGloblaEvent('click',()=> console.log('click event'));

   return(
   <HeaderWrapper data-testid="Header">
      Header Component
      <nav>
         <ul>
            <NavItem to='/' label='Home' css='pikachu' />
            <NavItem to='/products' label='Products' css='pikachu' />
            <NavItem to='/flights' label='Flights' css='pikachu' />
            <NavItem to='/users' label='User' css='pikachu' />
            {/* <li>
               <NavLink className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "pikachu" : ""
               } to="/" aria-description='Home'>Home</NavLink>
            </li>
            <li>
               <NavLink className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "pikachu" : ""
               }  to="/products" aria-description="Products">Products</NavLink>
            </li>
            <li>
               <NavLink className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "pikachu" : ""
               }  to="/flights" aria-description="Flights">Flights</NavLink>
            </li>
            <li>
               <NavLink className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "pikachu" : ""
               } to="/users" aria-description="Users">Users</NavLink>
            </li> */}
         </ul>
      </nav>
   </HeaderWrapper>
   );

}

/**
 * USAGE: Header description to complete.
 * @example
 * <Header /> 
 */
const HeaderMemo = React.memo(Header, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return true;
});
HeaderMemo.displayName = 'Header Memoized';

export default HeaderMemo;

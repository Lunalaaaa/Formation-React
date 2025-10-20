/* Global Imports */
import React, { FC, PropsWithChildren, useRef } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';

/* Local Imports */
import { CardWrapper } from './Card.styled';
import ImageProps from '@/components/Image/Image.type';
import ButtonProps from '@/components/Button/Button.type';
import * as UI from '@/components';
import pikaUpsideDown from '@/assets/pika_upside_down.png';
import { current } from '@reduxjs/toolkit';

interface CardProps extends ImageProps, PropsWithChildren {
   titre: string,
   buttons: Array<ButtonProps>
}


const Card: FC<CardProps> = ({ titre, buttons, children, imageSrc, alt, overlay }) => {

   // Hooks.useGloblaEvent('click',()=> console.log('click event'));

   // const animationCard = () => {
   //    const card = document.getElementById("card");
   //    if (card?.classList.contains('deplier')) {
   //       card.classList.remove('deplier');
   //       card.classList.add('plier');
   //    }
   //    else {
   //       card?.classList.remove('plier');
   //       card?.classList.add('deplier');
   //    }
   // };

   const cardRef = useRef<HTMLDivElement | null>(null);
   const animationCard = () => {
      if (cardRef.current?.classList.contains('deplier')) {
         cardRef.current.classList.remove('deplier');
         cardRef.current.classList.add('plier');
      }
      else {
         cardRef.current?.classList.remove('plier');
         cardRef.current?.classList.add('deplier');
      }
   };

   return (
      <CardWrapper data-testid="Card">
         <div style={{ zIndex: 5 }}>
            <div className="footer-image" onClick={animationCard}>
               <img src={pikaUpsideDown} style={{ transform: 'rotate(180deg)', display: 'block', margin: '0 auto' }} width={200} height={100} alt="Pikachu à l’envers" />
            </div>
            <div className='card deplier' ref={cardRef}>
               <div className='card-header'>
                  {titre}
               </div>
               <hr />
               <div className='card-content'>
                  {
                     imageSrc !== '' ?
                        <UI.Image imageSrc={imageSrc} alt={alt} overlay={overlay} /> : ''
                  }
                  {children}
               </div>
               {buttons.length !== 0 ?
                  <>
                     <hr />
                     <div className='card-actions'>
                        {
                           buttons.map((button: ButtonProps) =>
                              <div style={{ 'marginRight': '5px', 'display': 'inline' }}>
                                 <UI.Button
                                    children={button.children}
                                    level={button.level}
                                    action={button.action}
                                    disabled={button.disabled}
                                    size={button.size}
                                 />
                                 {/* <span style={{'gap': 2}}></span> */}
                              </div>
                           )
                        }
                     </div>
                  </> : <></>
               }
            </div>
         </div>
      </CardWrapper>
   );

}

/**
 * USAGE: Card description to complete.
 * @example
 * <Card /> 
 */
const CardMemo = React.memo(Card, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return true;
});
CardMemo.displayName = 'Card Memoized';

export default CardMemo;

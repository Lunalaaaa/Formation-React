/* Global Imports */
import  { FC } from 'react';

/* Application Level Imports */
import * as UI from '@/components';
import * as Features from '@/containers';
import * as Hooks from '@/hooks';

/* Local Imports */
import './Flights.style.css';
import pikaUpsideDown from '@/assets/pika_upside_down.png';


interface FlightsProps {}

const Flights: FC<FlightsProps> = () => {

   Hooks.useDocumentTitle('Flights View');

   return (
   <div className="Flights" data-testid="Flights">
      <UI.Main>
         Flights Content
         <UI.Card
            imageSrc={pikaUpsideDown}
            titre='Super card avec une image'
            buttons={[
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
            ]}
         >
            Contenu de la card
         </UI.Card>
      </UI.Main>
   </div>
   )
};

export default Flights;

/* Global Imports */
import  { FC } from 'react';

/* Application Level Imports */
import * as UI from '@/components';
import * as Features from '@/containers';
import * as Hooks from '@/hooks';

/* Local Imports */
import './Home.style.css';

interface HomeProps {}

const Home: FC<HomeProps> = () => {

   Hooks.useDocumentTitle('Home View');

   return (
      <div className="Home" data-testid="Home">
         <UI.Main>Home Content (avec pleins de boutons)
         <UI.Button action={() => console.log('coucou')} disabled={false} level='primary' size='small'>
            Bouton primaire (petit)
         </UI.Button>
         <UI.Button action={() => console.log('coucou')} disabled={false} level='primary' size='medium'>
            Bouton primaire
         </UI.Button>
         <UI.Button action={() => console.log('coucou')} disabled={false} level='primary' size='large'>
            Bouton primaire Grand
         </UI.Button>
         <UI.Button action={() => console.log('coucou')} disabled={true} level='primary' size='medium'>
            Bouton primaire (disabled)
         </UI.Button>
         <br />
         <UI.Button action={() => console.log('coucou')} disabled={false} level='optional' size='small'>
            Bouton secondaire (petit)
         </UI.Button>
         <UI.Button action={() => console.log('coucou')} disabled={false} level='optional' size='medium'>
            Bouton secondaire
         </UI.Button>
         <UI.Button action={() => console.log('coucou')} disabled={false} level='optional' size='large'>
            Bouton secondaire (grand)
         </UI.Button>
         <UI.Button action={() => console.log('coucou')} disabled={true} level='optional' size='medium'>
            Bouton secondaire (disabled)
         </UI.Button>
         <br />
         <UI.Button action={() => console.log('coucou')} disabled={false} level='critical' size='small'>
            Bouton critical (petit)
         </UI.Button>
         <UI.Button action={() => console.log('coucou')} disabled={false} level='critical' size='medium'>
            Bouton critical
         </UI.Button>
         <UI.Button action={() => console.log('coucou')} disabled={false} level='critical' size='large'>
            Bouton critical (grand)
         </UI.Button>
         <UI.Button action={() => console.log('coucou')} disabled={true} level='critical' size='medium'>
            Bouton critical (disabled)
         </UI.Button>
         </UI.Main>
      </div>
   )
};

export default Home;

/* Global Imports */
import React, { FC, PropsWithChildren } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';

/* Local Imports */
import { FooterWrapper } from './Footer.styled';
import pikaUpsideDown from '@/assets/pika_upside_down.png';
import { Link } from 'react-router';

interface ReseauSocial {
   icone: 'instagram' | 'discord' | 'facebook' | 'twitter',
   lien: `${'https://' | 'http://'}${string}/${string}.${string}`
   nomLien: Capitalize<string>
}

interface InformationLegale {
   lien: `/${'' | 'users'}`
   nomLien: Capitalize<string>
}

interface InfoContact {
   tel: number,
   mail: string,
   adresse: string
}

interface FooterProps extends PropsWithChildren, InfoContact {
   liensReseauxSociaux: Array<ReseauSocial>
   informationsLegales: Array<InformationLegale>
}

const LegalComponent:FC<InformationLegale> = ({lien, nomLien}) => (
   <li>
      📖
      <Link to={lien}>
         {nomLien}
      </Link>
   </li>
)

const ReseauSocialComponent:FC<ReseauSocial> = ({lien, nomLien, icone}) => (
   <li>
      {icone}
      <Link to={lien} >
         {nomLien}
      </Link>
   </li>
)

const Footer: FC<FooterProps> = ({children, liensReseauxSociaux, informationsLegales, tel, mail, adresse}) => {

   // Hooks.useGloblaEvent('click',()=> console.log('click event'));

   return(
      <>
         <div style={{position: 'fixed', bottom: '60px', textAlign: 'center', width: '100%', rotate: '180deg'}}>
            <img src={pikaUpsideDown} width={200} height={100} />
         </div>
         <FooterWrapper data-testid="Footer">
            <div id='infosContact'>
               <h4>Informations de contact</h4>
               <ul>
                  <li>
                     📞 {tel}
                  </li>
                  <li>
                     📧 {mail}
                  </li>
                  <li>
                     📌 {adresse}
                  </li>
               </ul>
            </div>
            <div id='infosLegales'>
               <h4>Informations légales</h4>
               <ul>
                  { 
                     informationsLegales.map((legal) => <LegalComponent lien={legal.lien} nomLien={legal.nomLien} />)
                  }
               </ul>
            </div>
            <div id='infosReseauxSociaux'>
               <h4>Nos réseaux sociaux</h4>
               <ul>
                  { 
                     liensReseauxSociaux.map((reseau) => <ReseauSocialComponent lien={reseau.lien} nomLien={reseau.nomLien} icone={reseau.icone} />)
                  }
               </ul>
            </div>
            <div id='general'>
               {children}
            </div>
         </FooterWrapper>
      </>
   );

}

/**
 * USAGE: Footer description to complete.
 * @example
 * <Footer /> 
 */
const FooterMemo = React.memo(Footer, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return true;
});
FooterMemo.displayName = 'Footer Memoized';

export default FooterMemo;

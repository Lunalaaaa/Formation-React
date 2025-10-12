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
   lien: `${'https://' | 'http://'}${string}.${string}`
   nomLien: Capitalize<string>
}

interface InformationLegale {
   lien: `/${'' | 'users'}`
   nomLien: Capitalize<string>
}

interface InfoContact {
   tel: string,
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
      <img 
         src={`/src/assets/icones/${icone}.png`} 
         alt={icone} 
         width={30}
         height={30}
      />
      <Link to={lien} >
         {nomLien}
      </Link>
   </li>
)

const Footer: FC<FooterProps> = ({children, liensReseauxSociaux, informationsLegales, tel, mail, adresse}) => {

   // Hooks.useGloblaEvent('click',()=> console.log('click event'));

   return(
      <div style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 5 }}>         
         <div className="footer-image">
            <img src={pikaUpsideDown} style={{ transform: 'rotate(180deg)', display: 'block', margin: '0 auto' }} width={200} height={100} alt="Pikachu à l’envers" />
         </div>
         <FooterWrapper data-testid="Footer">
            <div id="footerContainer">
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
                        <Link to={"https://maps.app.goo.gl/43HVFBnYL1Ljgc3KA"} target='_blank'>
                           📌 {adresse}
                        </Link>
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
            </div>
            <div id='general'>
               {children}
            </div>
         </FooterWrapper>
      </div>
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
   return false;
});
FooterMemo.displayName = 'Footer Memoized';

export default FooterMemo;

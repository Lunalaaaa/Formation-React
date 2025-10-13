/* Global Imports */
import  { FC } from 'react';

/* Application Level Imports */
import * as UI from '@/components';
import * as Features from '@/containers';
import * as Hooks from '@/hooks';

import discord from '@/assets/icones/discord.png';
/* Local Imports */
import './Products.style.css';


interface ProductsProps {}

const Products: FC<ProductsProps> = () => {

   Hooks.useDocumentTitle('Products View');

   return (
   <div className="Products" data-testid="Products">
      <UI.Main>
         Products Content
         <UI.Image imageSrc={discord} alt='Logo discord' overlay={50} />
         <div style={{top: '400px', left: '200px', position: 'absolute'}}>
            <UI.Image imageSrc={discord} alt='Logo discord 2' overlay={100} />
         </div>
            <UI.Image imageSrc='notFound.png' />
      </UI.Main>
   </div>
   )
};

export default Products;

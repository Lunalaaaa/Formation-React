/* Global Imports */
import React, { FC, useState } from 'react';

/* Application Level Imports */
import * as Hooks from '@/hooks';
import pikaUpsideDown from '@/assets/pika_upside_down.png';

/* Local Imports */
import { ImageWrapper } from './Image.styled';
import ImageProps from '@/components/Image/Image.type';

const Image: FC<ImageProps> = ({imageSrc, alt, overlay}) => {

   const [defaultImage, setDefaultImage] = useState(imageSrc);

   return(
      <ImageWrapper>
         <img
            src={defaultImage}
            alt={alt ?? 'Pas de description'}
            className={overlay ? `overlayImage` : ''}
            style={{zIndex: overlay}}
            onError={() => {
               console.warn(`Image non trouvée : ${imageSrc}, affichage du fallback.`);
               setDefaultImage(pikaUpsideDown);
            }}
         />
      </ImageWrapper>
   );

}

/**
 * USAGE: Image description to complete.
 * @example
 * <Image /> 
 */
const ImageMemo = React.memo(Image, (prevProps, nextProps) => {
   /*
   Compare props to prevent unnecessary re-renders
   return true if props are equal
   return false if props are not equal
   */
   console.log(prevProps, nextProps)
   return true;
});
ImageMemo.displayName = 'Image Memoized';

export default ImageMemo;

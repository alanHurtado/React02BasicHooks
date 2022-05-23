import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { ConImg } from '../Components/interfaceGifGird';

export const useFetchGifs = (category: string) => {
    const [images, setImages] = useState<ConImg[]>([]);
    useEffect(() => {
        getGifs(category).then(setImages);
      }, [category]);

    return images
}
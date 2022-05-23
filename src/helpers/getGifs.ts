import { Datum } from '../Components/interfaceGifGird';
export const getGifs = async (category: string) => {
    try {
      const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=5&api_key=3lpCYAHLjolXQpjHP5rMv23hUOYemOaZ`;
      const resp = await fetch(url);
      const { data } = await resp.json();
      const gifs = data.map((img: Datum) => {
        return {
          id: img.id,
          title: img.title,
          url: img.images?.downsized_medium.url,
        };
      });
      return(gifs);
    } catch (e) {
      console.log(e);
    }
  };

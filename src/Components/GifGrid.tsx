import { GifGridItem } from "./GifGridItem";
import { ConImg } from "./interfaceGifGird";
import { useFetchGifs } from "../hooks/useFetchGifs";
interface Props {
  category: string;
}

export const GifGrid = ({ category }: Props) => {
  const images = useFetchGifs(category);

  return (
    <div>
      <h2>{category}</h2>
      <div className="columns">
        {images.map((image: ConImg) => (
          <GifGridItem key={image.id} {...image} />
        ))}
      </div>
    </div>
  );
};

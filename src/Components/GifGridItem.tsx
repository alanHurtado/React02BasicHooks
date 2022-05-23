import { ConImg } from "./interfaceGifGird";

export const GifGridItem = ({ title, url }: ConImg) => {
  return (
    <div className="column">
      <div className="card">
        <div className="card-image">
          <figure className="i3 by 2">
            <img src={url} alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

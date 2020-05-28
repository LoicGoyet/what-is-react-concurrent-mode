import React from "react";

import "./style.scss";
import BigThunderMountainThumbnail from "../BigThunderMountainThumbnail";
import PhantomManorThumbnail from "../PhantomManorThumbnail";
import SpaceMountainThumbnail from "../SpaceMountainThumbnail";

const Carousel = () => {
  const [index, setIndex] = React.useState(0);

  const handleNextClick = (e) => {
    e.preventDefault();
    if (index === 2) return setIndex(0);
    return setIndex(index + 1);
  };

  return (
    <div className="carousel">
      {index === 0 && <BigThunderMountainThumbnail />}
      {index === 1 && <PhantomManorThumbnail />}
      {index === 2 && <SpaceMountainThumbnail />}

      <button className="carousel__btn" onClick={handleNextClick}>
        &#x27E9;
      </button>
    </div>
  );
};

export default Carousel;

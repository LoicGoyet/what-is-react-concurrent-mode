import React from "react";

import "./style.scss";
const BigThunderMountainThumbnail = React.lazy(() =>
  import("../BigThunderMountainThumbnail")
);
const PhantomManorThumbnail = React.lazy(() =>
  import("../PhantomManorThumbnail")
);
const SpaceMountainThumbnail = React.lazy(() =>
  import("../SpaceMountainThumbnail")
);

const Carousel = () => {
  const [index, setIndex] = React.useState(0);

  const [startTransition, isPending] = React.unstable_useTransition({
    timeoutMs: 500,
  });

  const handleNextClick = (e) => {
    e.preventDefault();
    startTransition(() => {
      if (index === 2) return setIndex(0);
      return setIndex(index + 1);
    });
  };

  return (
    <div className="carousel">
      <React.Suspense
        fallback={<div className="carousel__loading">loading</div>}
      >
        {index === 0 && <BigThunderMountainThumbnail />}
        {index === 1 && <PhantomManorThumbnail />}
        {index === 2 && <SpaceMountainThumbnail />}

        <button
          className="carousel__btn"
          onClick={handleNextClick}
          disabled={isPending}
        >
          &#x27E9;
        </button>
      </React.Suspense>
    </div>
  );
};

export default Carousel;

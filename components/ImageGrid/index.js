import React from "react";

import "./style.scss";
import Image from "../Image";
import getImageResource from "../../utils/getImageResource";

const images = [
  {
    id: "moutains",
    resource: getImageResource(
      "https://images.unsplash.com/photo-1590670908865-c3330d76a188?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=210&q=80"
    ),
  },
  {
    id: "city",
    resource: getImageResource(
      "https://images.unsplash.com/photo-1590677481249-19b1afb5af8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=230&q=80"
    ),
  },
  {
    id: "space",
    resource: getImageResource(
      "https://images.unsplash.com/photo-1590673051864-3520f4c145bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=220&q=80"
    ),
  },
  {
    id: "cascade",
    resource: getImageResource(
      "https://images.unsplash.com/photo-1590664114966-20cd1ce7e09d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
    ),
  },
  {
    id: "liquid",
    resource: getImageResource(
      "https://images.unsplash.com/photo-1590635355104-9c583abd5d82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=210&q=80"
    ),
  },
  {
    id: "nurse",
    resource: getImageResource(
      "https://images.unsplash.com/photo-1590611936760-eeb9bc598548?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=210&q=80"
    ),
  },
];

const ImageGrid = () => {
  return (
    <div className="image-grid">
      <React.unstable_SuspenseList revealOrder="forwards">
        {images.map((image) => (
          <div key={image.id} className="image-grid__item">
            <React.Suspense
              fallback={<div className="image-grid__loading-item">loading</div>}
            >
              <Image resource={image.resource} />
            </React.Suspense>
          </div>
        ))}
      </React.unstable_SuspenseList>
    </div>
  );
};

export default ImageGrid;

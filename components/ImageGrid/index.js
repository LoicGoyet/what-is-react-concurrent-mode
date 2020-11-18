import React from "react";

import "./style.scss";
import Image from "../Image";

const images = [
  {
    id: "moutains",
    src:
      "https://images.unsplash.com/photo-1590670908865-c3330d76a188?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=210&q=80",
  },
  {
    id: "city",
    src:
      "https://images.unsplash.com/photo-1590677481249-19b1afb5af8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=230&q=80",
  },
  {
    id: "space",
    src:
      "https://images.unsplash.com/photo-1590673051864-3520f4c145bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=220&q=80",
  },
  {
    id: "cascade",
    src:
      "https://images.unsplash.com/photo-1590664114966-20cd1ce7e09d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "liquid",
    src:
      "https://images.unsplash.com/photo-1590635355104-9c583abd5d82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=210&q=80",
  },
  {
    id: "nurse",
    src:
      "https://images.unsplash.com/photo-1590611936760-eeb9bc598548?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=210&q=80",
  },
];

const ImageGrid = () => {
  return (
    <div className="image-grid">
      {images.map((image) => (
        <div key={image.id} className="image-grid__item">
          <Image src={image.src} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;

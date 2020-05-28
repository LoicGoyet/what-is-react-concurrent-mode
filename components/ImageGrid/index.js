import React from "react";

import "./style.scss";
import Image from "../Image";

const images = [
  {
    id: "liquid",
    src:
      "https://images.unsplash.com/photo-1590635355104-9c583abd5d82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80",
  },
  {
    id: "moutains",
    src:
      "https://images.unsplash.com/photo-1590670908865-c3330d76a188?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1273&q=80",
  },
  {
    id: "space",
    src:
      "https://images.unsplash.com/photo-1590673051864-3520f4c145bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1298&q=80",
  },
  {
    id: "cascade",
    src:
      "https://images.unsplash.com/photo-1590664114966-20cd1ce7e09d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
  },
  {
    id: "city",
    src:
      "https://images.unsplash.com/photo-1590677481249-19b1afb5af8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80",
  },
  {
    id: "nurse",
    src:
      "https://images.unsplash.com/photo-1590611936760-eeb9bc598548?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
  },
];

const ImageGrid = () => {
  return (
    <div className="image-grid">
      {images.map((image) => (
        <Image key={image.id} src={image.src} />
      ))}
    </div>
  );
};

export default ImageGrid;

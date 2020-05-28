import React from "react";

import getImageRessource from "../../utils/getImageRessource";

import "./style.scss";

const imageRessource = getImageRessource(
  "https://media.disneylandparis.com/d4th/fr-fr/images/n018015_2050jan01_space-mountain_16-9_tcm808-159759.jpg?w=448"
);

const SpaceMountainThumbnail = () => {
  const image = imageRessource.read();

  return (
    <div className="sm-thumbnail" style={{ backgroundImage: `url(${image})` }}>
      <div className="sm-thumbnail__label">Space Mountain</div>
    </div>
  );
};

export default SpaceMountainThumbnail;

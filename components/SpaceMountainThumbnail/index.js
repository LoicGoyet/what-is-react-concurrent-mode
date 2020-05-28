import React from "react";

import getImageResource from "../../utils/getImageResource";

import "./style.scss";

const imageResource = getImageResource(
  "https://media.disneylandparis.com/d4th/fr-fr/images/n018015_2050jan01_space-mountain_16-9_tcm808-159759.jpg?w=448"
);

const SpaceMountainThumbnail = () => {
  const image = imageResource.read();

  return (
    <div className="sm-thumbnail" style={{ backgroundImage: `url(${image})` }}>
      <div className="sm-thumbnail__label">Space Mountain</div>
    </div>
  );
};

export default SpaceMountainThumbnail;

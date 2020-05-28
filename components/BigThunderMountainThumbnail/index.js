import React from "react";

import getImageResource from "../../utils/getImageResource";

import "./style.scss";

const imageResource = getImageResource(
  "https://media.disneylandparis.com/d4th/fr-fr/images/n017798_2050jan01_big-thunder-mountain_16-9_tcm808-159546.jpg?w=448"
);

const BigThunderMountainThumbnail = () => {
  const image = imageResource.read();

  return (
    <div className="btm-thumbnail" style={{ backgroundImage: `url(${image})` }}>
      <div className="btm-thumbnail__label">Big Thunder Moutain</div>
    </div>
  );
};

export default BigThunderMountainThumbnail;

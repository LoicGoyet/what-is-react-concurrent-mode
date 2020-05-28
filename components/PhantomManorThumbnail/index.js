import React from "react";

import getImageRessource from "../../utils/getImageRessource";

import "./style.scss";

const imageRessource = getImageRessource(
  "https://media.disneylandparis.com/d4th/fr-fr/images/n014938_2020jun11_phantom-manor_16-9_tcm808-157081.jpg?w=448"
);

const PhantomManorThumbnail = () => {
  const image = imageRessource.read();

  return (
    <div className="pm-thumbnail" style={{ backgroundImage: `url(${image})` }}>
      <div className="pm-thumbnail__label">Phantom{"\n"}Manor</div>
    </div>
  );
};

export default PhantomManorThumbnail;

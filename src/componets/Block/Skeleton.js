import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
  className="pizza-block"
    speed={2}
    width={280}
    height={445}
    viewBox="0 0 280 445"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="141" cy="117" r="117" />
    <rect x="0" y="252" rx="10" ry="10" width="280" height="23" />
    <rect x="0" y="292" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="401" rx="10" ry="10" width="95" height="30" />
    <rect x="134" y="392" rx="25" ry="25" width="145" height="50" />
  </ContentLoader>
);

export default Skeleton;

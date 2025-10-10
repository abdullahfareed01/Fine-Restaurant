import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import { awards } from "../../constants/data";
import "./laurels.css";

const AwardCard = ({ award }) => {
  if (!award || typeof award !== "object") return null;
  const { imgUrl, title, subtitle } = award;

  return (
    <div className="app__laurels_awards-card">
      {imgUrl && <img src={imgUrl} alt={title || "award"} />}
      <div className="app__laurels_awards-card_content">
        <p className="p__cormorant" style={{ color: "#dcca87" }}>
          {title || "Untitled Award"}
        </p>
        <p className="p__cormorant">{subtitle || ""}</p>
      </div>
    </div>
  );
};

function Laurels() {
  const awardsArray = Array.isArray(awards) ? awards : []; 

  return (
    <div className="app__bg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>

        <div className="app__laurels_awards">
          {awardsArray.length > 0 ? (
            awardsArray.map((award, i) => (
              <AwardCard award={award} key={award?.title ?? `award-${i}`} />
            ))
          ) : (
            <p className="p__cormorant" style={{ color: "#aaa" }}>
              No awards data available
            </p>
          )}
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurels" />
      </div>
    </div>
  );
}

export default Laurels;

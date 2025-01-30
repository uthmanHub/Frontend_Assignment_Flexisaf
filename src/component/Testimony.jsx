import React from "react";
import testimonies from "../assets/Review";

const Testimony = () => {
  return (
    <div className="anim">
        <div>
      {testimonies.map(({username, profileImage, rating, comment, timestamp}, index) => {
        return (
          <div key={index} className="w-full p-5 ch">
            <img src={profileImage} alt='' />
            <h3>{username}</h3>
            <p>{comment}</p>
            <p>{timestamp}</p>
            <p>{rating}</p>

          </div>
        );
    })}
    </div>
    </div>
  );
};

export default Testimony;

import React from "react";
import eth1 from "../assets/eth1.png";
import eth2 from "../assets/eth2.png";
import "./Like.css";

export const Like = () => {
  return (
    <div className="like-main" >
      <div className="like">
        <div className="like-container">
          <div className="like-content">
            <div className="like-img">
              <img src={eth1} alt="eth1"></img>
            </div>
            <h2 className="like-title">An NFT like no other</h2>
            <p className="description">
              Don't miss out on the release of our new NFT. Sign up below to
              recieve updates when we go live on 11/22.
            </p>
            <p className="like-desc">
              Don't miss out on the release of our new NFT. Sign up below to
              recieve updates when we go live on 11/22. Don't miss out on the
              release of our new NFT.
            </p>
          </div>
          <div className="like-content">
            <div className="like-img">
              <img src={eth2} alt="eth2"></img>
            </div>
            <h2 className="like-title">An NFT like no other</h2>
            <p className="description">
              Don't miss out on the release of our new NFT. Sign up below to
              recieve updates when we go live on 11/22.
            </p>
            <p className="like-desc">
              Don't miss out on the release of our new NFT. Sign up below to
              recieve updates when we go live on 11/22. Don't miss out on the
              release of our new NFT.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

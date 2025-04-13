import React, { useRef } from "react";
import { Card } from "./Card";

import wellness from "../assets/wellness.jpg";
import creative from "../assets/creative.jpg";
import a from "../assets/1.jpg";
import b from "../assets/2.jpg";
import c from "../assets/3.jpg";
import d from "../assets/4.jpg";
import e from "../assets/5.jpg";
import "./Fav.css";

export const Free = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const cardWidth = scrollRef.current.children[0].offsetWidth + 24; // card width + gap
    scrollRef.current.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="favorites-wrapper">
      <div className="favorites-header">
        <h2 className="favorites-title">Team Favorites</h2>
        <p className="favorites-desc">
          Experiences teams love most — energizing, engaging, and impactful.
        </p>
      </div>

      <div className="favorites-carousel-container">
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          &#8249;
        </button>

        <div className="favorites-carousel" ref={scrollRef}>
          <Card
            image={wellness}
            title="Wellness Wednesdays"
            series="Experience"
            price="Included"
            tag="#WELL-001"
            time="60 min"
          />
          <Card
            image={creative}
            title="Creative Jam"
            series="Experience"
            price="Included"
            tag="#CREATE-002"
            time="90 min"
          />
          <Card
            image={a}
            title="Fun Activities"
            series="Experience"
            price="Included"
            tag="#FUN-003"
            time="45 min"
          />
          <Card
            image={b}
            title="Team Challenge"
            series="Experience"
            price="Included"
            tag="#TRIVIA-004"
            time="60 min"
          />
          <Card
            image={c}
            title="Guided Yoga"
            series="Experience"
            price="Included"
            tag="#MIND-005"
            time="30 min"
          />
          <Card
            image={d}
            title="Remote Escape Room"
            series="Experience"
            price="Included"
            tag="#ESCAPE-006"
            time="90 min"
          />
          <Card
            image={e}
            title="Coffee & Connect"
            series="Experience"
            price="Included"
            tag="#CONNECT-007"
            time="45 min"
          />
        </div>

        <button className="scroll-btn right" onClick={() => scroll("right")}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

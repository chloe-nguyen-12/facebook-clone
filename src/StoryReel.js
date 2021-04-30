import React from "react";
import Story from "./Story";
import "./StoryReel.css";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://loremflickr.com/320/240?random=1"
        profileSrc="https://loremflickr.com/g/320/240/paris,girl/all"
        title="Sonny Sangha"
      />
      <Story
        image="https://loremflickr.com/320/240?random=3"
        profileSrc="https://www.stevensegallery.com/200/300"
        title="Rafeh Quazi"
      />
      <Story
        image="https://loremflickr.com/320/240?lock=212"
        profileSrc="https://www.placecage.com/g/200/300"
        title="Frankie"
      />
      <Story
        image="https://loremflickr.com/320/240?random=2"
        profileSrc="https://www.placecage.com/200/300"
        title="David"
      />
      <Story
        image="https://loremflickr.com/320/240?lock=30976"
        profileSrc="https://loremflickr.com/cache/resized/65535_48208398322_e03a99300c_320_240_g.jpg"
        title="Laura"
      />
    </div>
  );
};

export default StoryReel;

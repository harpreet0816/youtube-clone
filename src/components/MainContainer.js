import React from "react";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";

const MainContainer = () => {
  return (
    <div className="flex-1 p-4 w-fill-available">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;

import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    const videos = json?.items;
    console.log(videos)
    setVideos(videos);
  };
  useEffect(() => {
    getVideos();
  }, []);
  return <div className="flex flex-wrap">
  {videos && videos.map(video=> (
    <VideoCard key={video.id} info={video} />
  ))}
  </div>;
};

export default VideoContainer;

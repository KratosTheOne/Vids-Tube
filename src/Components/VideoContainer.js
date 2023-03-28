import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_LIST } from '../Utils/Configs';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {

    const data = await fetch(YOUTUBE_VIDEO_LIST);

    const json = await data.json();

    //console.log(json.items);

    setVideos(json.items);
  }

  useEffect(() => {
    getVideos();
  },[]);
  
  return (
    <div className="flex flex-wrap justify-evenly">
      {videos.map(video => {
        return ( 
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        )
      })}
    </div>
  );
};

export default VideoContainer;
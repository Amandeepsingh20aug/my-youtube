import React from "react";

const VideoCard = ({ videoData }) => {
  const { snippet, statistics } = videoData;
  const { channelTitle, thumbnails, title } = snippet;


  return <div className="p-2 m-2 w-72 shadow-lg">
    <img src={thumbnails.medium.url} alt={title} className="rounded-lg"/>
    <ul>
       <li className="font-bold py-2">{title}</li>
       <li className="text-black">{channelTitle}</li>
       <li>{statistics.viewCount} views</li>
    </ul>
  </div>;
};

//Higher Order Component Example

export const RedBorderVideoCard = ({videoData}) =>{
  return <div className="p-1 m-1 border border-red-700">
  <VideoCard videoData={videoData}/>  
  </div>
    
}

export default VideoCard;

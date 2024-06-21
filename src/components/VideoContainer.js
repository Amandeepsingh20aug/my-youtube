import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constant'
import VideoCard from './VideoCard';
import { RedBorderVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const[videos,setVideos] = useState([]);

  const getVideos = async () =>{
    try {
      const data = await fetch(YOUTUBE_VIDEO_API);
    
      const response = await data.json();
  
      setVideos(response.items)
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    getVideos()
  },[])

  return (
    <div className='flex flex-wrap gap-6'>
    {videos[0] && <RedBorderVideoCard videoData = {videos[0]}/>}
    {videos.map((items)=>{
      return (
      <Link to={"/watch?v=" + items.id} key={items.id}><VideoCard key={items.id} videoData = {items}/></Link>
      )
    })}
    </div>
  )
}

export default VideoContainer
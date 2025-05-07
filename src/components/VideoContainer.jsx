import React from 'react'
import { useEffect } from 'react'
import { YOUTUBE_VIDEO_API } from './utils/constants';
import VideoCards from "./VideoCards";
import { Link } from 'react-router';


const videoContainer = () => {
  
  const [videos,setVideos]=React.useState([]);

  useEffect(()=>{
    getVideos();
  },[]);

  const getVideos=async ()=>{
    const data=await fetch( YOUTUBE_VIDEO_API);
    const json=await data.json();
    console.log(json);
    setVideos(json.items);
    
  
  
  }
  console.log(videos)
  return (
    <div className='flex flex-wrap'>{videos.map((x)=>{
      return(
      <Link key={x.id} to={"/watch?v="+x.id}><VideoCards  data={x} /></Link>)
    })}
      
      
    </div>
  )
}

export default videoContainer
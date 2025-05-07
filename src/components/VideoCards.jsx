import React from 'react'

const VideoCards = (props) => {

 
  if( !props.data ) return null;
  const {snippet,statistics}=props.data;
  const {channelTitle,title,thumbnails}=snippet;
 
 

  return (
    <div className='shadow m-2 p-2 w-80 rounded-lg'>
      <img alt="thumbnail" src={thumbnails.medium.url}></img>
      <ul>
       
        <li className='font-bold'>{title}</li>
         <li>{channelTitle}</li>
        <li>{statistics.viewCount+" "}views</li>
      </ul>
    </div>
  )
}

export default VideoCards
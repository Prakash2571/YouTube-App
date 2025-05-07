import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const bar=useSelector(store => store.AppSlice.BarOpen)
  return bar ? (
    <div className='m-2 p-2 shadow'>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>TouTube Music</li>
      </ul>
      <h1 className='font-bold'>You</h1>
      <ul>
        <li>History</li>
        <li>PlayList</li>
        <li>YourVideos</li>
        <li>YTourCourse</li>
        <li>WatchLater</li>
        <li>LikedVideos</li>
        <li>Downloads</li>
      </ul>
    </div> 
  ) :null;
}

export default Sidebar;
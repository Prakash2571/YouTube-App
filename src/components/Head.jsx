import React from 'react';
import { useDispatch } from 'react-redux';
import { toggle } from './utils/AppSlice';

const Head = () => {

  const dispatch=useDispatch();
  const Start =()=>{
    dispatch(toggle());
  }

  return (
    <div className='grid grid-flow-col p-2 m-2 shadow'>
      <div className='flex col-span-1'>
      <img onClick={Start} className='h-12 cursor-pointer mx-4' alt="3 line" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAMFBMVEX///8AAADl5eX09PTV1dUICAiurq5TU1Orq6tJSUnc3Nzt7e1ERET6+vpRUVG9vb0gCS9GAAAA8ElEQVR4nO3dOQ4CQRAEQZblPv//W2yUFsLoNSKekGb1SLPbAQAAAAAAAAAAAADfbodh9+kC9ViGXaYL1Hm6yWm6QGlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJnWdbrLBjXqd9pwuAAAAAMCvzstx1Ba3x9f09rjBJjbq0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClvQet9mnW5TRcAAAAAgP/d98PW6QJljy27fWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJuWPs3LLAAAAAAAAAAAAAGAbPhzZL1DD5UvKAAAAAElFTkSuQmCC" ></img>
     
      <img className='h-12' alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"></img>
        </div>
        <div className='col-span-10'>
      <input className='w-1/2 px-4 border border-gray-400 p-2 rounded-l-full' type="text "></input>   
      <button className='border border-gray-400 p-2 rounded-r-full '>Search</button>
        </div >
        <div className='col-span-1'> 
      <img className='h-12' alt="profile" src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"></img>
        </div>
    </div>
  );
};

export default Head;
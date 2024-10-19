import React from 'react'

const VideoCard = ({info}) => {
    // console.log("sdfsdf",info.id);
    
    const {snippet,statistics,id} = info;
    const {channelTitle,thumbnails,title} = snippet;
  return (
    <div className='p-2 m-2 shadow-lg w-60' key={id}>
        
        <img className='rounded-lg' alt='video' src={thumbnails.medium.url} />
        <ul>
            <li className='font-bold'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount}</li>
        </ul>
    </div>
  )
}

export const AddvideoCard = ({info})=>{
    return(
        <div className='p-1 m-1 border border-red-700' key={info.id}>
            <VideoCard info={info}  />
        </div>
    )
}

export default VideoCard
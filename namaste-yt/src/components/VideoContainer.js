import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { YOUTUBE_VIDEO_API } from '../utills/constant';
import VideoCard, { AddvideoCard } from './VideoCard';

const VideoContainer = () => {
    const [videos,setVideos] = useState([]);
    useEffect(()=>{
        getVideosList();
    },[])

    const getVideosList = async()=>{
        const res = await fetch(YOUTUBE_VIDEO_API);
        const json = await res.json();
        // console.log(json);
        setVideos(json.items);
    }
  return (
    <div className='flex flex-wrap'>
        {videos[0] && <AddvideoCard info={videos[0]} key={videos[0].id}/>}
        {videos?.map((video)=> (
            <Link to={"watch?v="+video.id} key={video.id}>
                <VideoCard info={video} />
            </Link>
        ))}
    </div>
    
    // <p>dfgdfg</p>
  )
}

export default VideoContainer
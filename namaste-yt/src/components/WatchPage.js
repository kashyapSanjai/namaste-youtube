import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utills/appSlice';

const WatchPage = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    // console.log(searchParams.get("v"));

    useEffect(()=>{
        dispatch(closeMenu());
    },[])
    

  return (
    <div className='p-2 m-2'>
        <iframe 
            width="1100" 
            height="600" 
            src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
            title="YouTube video player" 
            // frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            // referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
        </iframe>
    </div>
  )
}

export default WatchPage
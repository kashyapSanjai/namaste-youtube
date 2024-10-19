import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utills/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SUGGESTION_API } from "../utills/constant";
import { cacheSuggetions } from "../utills/searchSlice";

const Head = ()=>{
    const dispatch = useDispatch();
    const cacheSuggestions = useSelector((store)=>store.search);
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestionList, setSuggestionList] = useState([]);
    const [showSuggetions, setShowSuggestions] = useState(false);

    useEffect(()=>{

        const timer = setTimeout(()=>{
            if(cacheSuggestions[searchQuery]){
                setSuggestionList(cacheSuggestions[searchQuery])
            }else{
                searchQuery && fetchSearchSuggestions();
            }
        },200)

        return()=>{
            clearTimeout(timer);
        }
    },[searchQuery])

    const fetchSearchSuggestions = async ()=>{
        console.log("API Call",searchQuery);
        const data = await fetch(YOUTUBE_SUGGESTION_API+searchQuery);
        const json = await data.json();
        setSuggestionList(json[1]);
        dispatch(
            cacheSuggetions({
                [searchQuery]:json[1]
            })
        );
    }


    const toggleMenuHandler=()=>{
        dispatch(toggleMenu());
    }
    return (
       <div className="grid grid-flow-col shadow-lg p-2 m-2 ">
            <div className="flex col-span-1 cursor-pointer">
                <img alt="menu" className="h-10" onClick={()=>toggleMenuHandler()} src="https://www.svgrepo.com/show/313139/hamburger-menu.svg"/>
                <Link to={"/"}><img alt="logo" className="h-10 mx-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTujKKJbtutRYOxrQQcXg1h5zkBt7K0k2D4Ww&s"/></Link>
            </div>
            <div className="col-span-10   ">
                <div>
                    <input className="w-1/2 px-5  p-2 border border-gray-400 rounded-l-full" 
                    type="text" 
                    onChange={(e)=>setSearchQuery(e.target.value)}
                    onFocus={()=>setShowSuggestions(true)}
                    onBlur={()=>setShowSuggestions(false)}

                    />
                    <button className="p-2 my-2 border border-gray-400  rounded-r-full bg-gray-200">🔍</button>
                </div>
                {showSuggetions && suggestionList?.length>0 && <div className="py-2 px-2 m-1  absolute bg-white w-[43rem] shadow-lg rounded-lg  ">
                    <ul>
                        {suggestionList?.map((suggestItem,i)=><li className="py-2 px-3 shadow-sm hover:bg-gray-100" key={i}>🔍 {suggestItem}</li>)}
                    </ul>
                </div>}
            </div>
            <div className="col-span-1">
                <img alt="" className="h-14" src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" />
            </div>
       </div>
    )
}

export default Head;
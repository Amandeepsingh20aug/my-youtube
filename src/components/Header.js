import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const[suggestions,setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const searchCache = useSelector((store)=>store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery])
      } else {
        getsearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  useEffect(() => {
    if (inputRef.current && dropdownRef.current) {
      dropdownRef.current.style.width = `${inputRef.current.offsetWidth}px`;
      dropdownRef.current.style.left = `${inputRef.current.offsetLeft}px`;
    }
  }, [suggestions]);


  const getsearchSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSuggestions(json[1]);
      dispatch(cacheResults({[searchQuery] : json[1] }));
    } catch (error) {}
  };

  const handlesidebar = () => {
    dispatch(toogleMenu());
  };

  const handleBlur = () =>{
    setSuggestions([]);
  }

  return (
    <div className="grid grid-flow-col p-5 shadow-lg items-center">
      <div className="flex col-span-1">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="icon"
          className="cursor-pointer h-11"
          onClick={handlesidebar}
        />
        <img
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          alt="youtube"
          className="h-11 mx-2"
        />
      </div>
      <div className="col-span-10 flex justify-center items-center flex-col">
        <div className="w-full justify-center flex relative">
          <input
            type="text"
            className="w-1/2 border border-gray-400 py-2 px-5 rounded-l-full outline-none"
            placeholder="Search"
            value={searchQuery}
            ref={inputRef}
            onBlur={handleBlur}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100">
            <FontAwesomeIcon icon={faMagnifyingGlass} beat />
          </button>
          {suggestions.length > 0 && <div  className="absolute top-full bg-white border border-gray-200 rounded-md shadow-lg z-10"
             ref={dropdownRef}>
            <ul className="list-none py-2 px-2 cursor-pointer">
            {suggestions.map((item)=>(
              <li className="py-2 px-2 shadow-sm hover:bg-gray-100" key={item}>{item}</li>
            ))}
            </ul>
          </div>}
        </div>
      </div>
      <div className="col-span-1">
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
          className="h-11"
        />
      </div>
    </div>
  );
};

export default Header;

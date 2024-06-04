import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { toogleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handlesidebar = () => {
    dispatch(toogleMenu());
  };

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
      <div className="col-span-10 flex justify-center items-center ">
        <input
          type="text"
          className="w-1/2 border border-gray-400 py-2 px-5 rounded-l-full outline-none"
          placeholder="Search"
        />
        <button className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100">
          <FontAwesomeIcon icon={faMagnifyingGlass} beat />
        </button>
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

import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { useSelector } from "react-redux";
import { list } from "../utils/constant";


const ButtonList = () => {
  const showSideBar = useSelector((store)=>store.app.isMenuOpen)
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [selectButton,setSelectButton] = useState(0)
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  const updateScrollButtons = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(Math.ceil(scrollLeft) < scrollWidth - clientWidth);
  };

  const handleClick = (index)=>{
    setSelectButton(index)
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      updateScrollButtons();
      scrollContainer.addEventListener("scroll", updateScrollButtons);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", updateScrollButtons);
      }
    };
  }, [showSideBar]);

  return (
    <div className="flex w-full overflow-x-auto scrollbar-hide scroll-smooth relative">
      {canScrollLeft && (
        <button
          className="bg-black text-white border-none p-2 cursor-pointer absolute left-0 top-1/2 transform -translate-y-1/2"
          onClick={scrollLeft}
        >
          {"<"}
        </button>
      )}
      <div
        className="flex w-full overflow-x-auto scrollbar-hide scroll-smooth whitespace-nowrap"
        ref={scrollContainerRef}
      >
        {list.map((name,index) => (
          <Button text={name} key={name} onClick={()=>handleClick(index)} select={index === selectButton }/>
        ))}
      </div>
      {canScrollRight && (
        <button
          className="bg-black text-white border-none p-2 cursor-pointer ml-2 absolute right-0 top-1/2 transform -translate-y-1/2"
          onClick={scrollRight}
        >
          {">"}
        </button>
      )}
    </div>
  );
};

export default ButtonList;

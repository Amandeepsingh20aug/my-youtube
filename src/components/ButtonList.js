import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { useSelector } from "react-redux";
import { list } from "../utils/constant";


const ButtonList = () => {
  const showSideBar = useSelector((store)=>store.app.isMenuOpen)
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
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
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(Math.round(scrollLeft) < scrollWidth - clientWidth);
  };

  useEffect(() => {
    updateScrollButtons();
    scrollContainerRef.current.addEventListener("scroll", updateScrollButtons);
    return () => {
      scrollContainerRef.current.removeEventListener(
        "scroll",
        updateScrollButtons
      );
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
        {list.map((name) => (
          <Button text={name} key={name} />
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

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId =searchParams.get("v");
  useEffect(() => {
    dispatch(closeMenu(false));
  }, []);
  return (
    <div className="flex flex-col">
    <div className="px-5 py-3">
      <iframe
        width="1200"
        height="600"
        src={`https://www.youtube.com/embed/${videoId}?si=WKM-K9EZoMTmB7Iv`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
    <CommentsContainer/>
    </div>
  );
};

export default WatchPage;

import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //API polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + " 🚀",
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div>
        <div className="ml-2 p-2  border border-black w-max-full h-[600px] bg-slate-100 rounded-lg overflow-y-scroll flex-col-reverse flex overflow-x-hidden">
          {chatMessages.map((message, index) => (
            <ChatMessage
              key={index}
              name={message.name}
              message={message.message}
            />
          ))}
        </div>
      </div>
      
      <form className="w-full p-2 ml-2 flex mx-2" onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
          name : "Amandeep",
          message : liveMessage
        }))
        setLiveMessage("")
      }}>
        <input
          className="border border-black w-full px-2 py-1"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="mx-2 px-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;

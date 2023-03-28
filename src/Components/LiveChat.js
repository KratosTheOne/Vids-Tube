import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../Utils/chatSlice';
import { generateRandomNames, generateRandomString } from '../Utils/helper';
import ChatMessages from './ChatMessages'

const LiveChat = () => {

  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {

    const interval = setInterval(() => {

      dispatch(addMessage({
        name: generateRandomNames(),
        message: generateRandomString(25),
      }));
    }, 800);

    return () => clearInterval(interval);

  }, [dispatch])

  return (
    <>
      <div className="mt-5 ml-2 p-2 border border-black w-full h-[540px] bg-slate-100 rounded-xl overflow-y-scroll flex flex-col-reverse">
        <div>
          {
            chatMessages.map((c, i) => (
              <ChatMessages 
                key={i}
                name={c.name}
                message={c.message}
              />
            ))
          }
        </div>
      </div>
      <form 
        className="w-full border border-black p-2 ml-2 rounded-xl" 
        onSubmit={(e) => {
          
          e.preventDefault();
          
          dispatch(addMessage({
            name: "Kaustubh",
            message: liveMessage,
          }));

          setLiveMessage("");
        }}
      >
        <input 
          className="w-80 border pl-2 border-gray-500 rounded-lg" 
          type="text" 
          placeholder="Type something"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 ml-6 bg-green-500 rounded-xl font">Send</button>
      </form>
    </>
  )
}

export default LiveChat;
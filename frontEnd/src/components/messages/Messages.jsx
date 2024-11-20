import { useEffect, useRef } from "react";
import useGetMessage from "../../hooks/useGetMessage"
import Message from "./Message"
import useListenMessage from "../../hooks/useListenMessage";

const Messages = () => {
  const{messages} = useGetMessage();
  useListenMessage()
  const lastMessageRef = useRef();

  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior:"smooth"});
    },100);
  },[messages]);

    return (
    <div className="scroll-container px-4 flex-1 overflow-auto">
      {messages.length > 0 && messages.map((message)=>(
        <div key={message._id} ref={lastMessageRef} >
          <Message message={message} />
        </div>
      ))}
      {messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
}

export default Messages
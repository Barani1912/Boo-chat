import useConversation from "../../zustand/useConversation";
import {useAuthContext} from "../../context/AuthContext"
import { extractTime } from "../../utils/extractTime";

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation}= useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const formattedTime = extractTime(message.createdAt)
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  
  const bubbleBgColor = fromMe ? "bg-blue-500" : "" ;



  return (

    // should be changed dynamic....
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src={profilePic} alt="user-avatar" />
            </div>
        </div>

        <div className={`chat-bubble text-white ${bubbleBgColor}`}>{message.message}</div>
        <div className="chat-footer opacity-80 text-slate-400 text-xs flex gap-1 items-center">{formattedTime}</div>
    </div>
  )
}

export default Message
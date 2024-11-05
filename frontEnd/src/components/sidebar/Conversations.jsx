import useGetConversation from "../../hooks/useGetConversation";
import Conversation from "./Conversation"


const Conversations = () => {
  const {loading,conversation} = useGetConversation();
  // console.log("Conversations:",conversation)

  return (
    <div className="py-2 flex flex-col overflow-auto">

      {conversation.map((conversation,idx) =>(
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx ={idx === conversation.length-1}/>
      ))}
      

      {loading ? <span className="loading loading-spinner mx-auto"></span> : null}
    </div>
  )
}

export default Conversations





// STARTER CODE
// import Conversation from "./Conversation"


// const Conversations = () => {
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//     </div>
//   )
// }

// export default Conversations
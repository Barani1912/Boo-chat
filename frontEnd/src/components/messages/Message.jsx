

const Message = () => {
  return (

    // should be changed dynamic....
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src="" alt="" />
            </div>
        </div>

        <div className={`chat-bubble text-white bg-sky-500`} >Hello everyone...</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">19:12</div>
    </div>
  )
}

export default Message
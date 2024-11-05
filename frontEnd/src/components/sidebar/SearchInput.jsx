
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useGetConversation from "../../hooks/useGetConversation";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";

const SearchInput = () => {

  const [search,setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversation} = useGetConversation();
  console.log("Conversations:",conversation)

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!search) return;
    if(search.length < 3){
      return toast.error("Search item must be at least 3 characters long")
    }

    const searchConversation = conversation.find((c) => c.fullName?.toLowerCase().includes(search.toLowerCase()));


    if(searchConversation){
      setSelectedConversation(searchConversation);
      setSearch('');
    }else toast.error("No user found")
  }
  return (
   <form onSubmit={handleSubmit} className='flex items-center gap-2'>
    <input type='text' placeholder='Search' className='input input-bordered rounded-full' value={search} onChange={(e)=> setSearch(e.target.value)}  />
    <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <FaSearch />
    </button>
   </form>
  )
}

export default SearchInput






// STARTER CODE

// import { FaSearch } from "react-icons/fa";

// const SearchInput = () => {
//   return (
//    <form className='flex items-center gap-2'>
//     <input type='text' placeholder='Search' className='input input-bordered rounded-full'  />
//     <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
//         <FaSearch />
//     </button>
//    </form>
//   )
// }

// export default SearchInput



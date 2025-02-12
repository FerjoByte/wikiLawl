import React from "react";
import PostCard from "./PostCard";

const PostContainer = () => {

 
    
    return(
        <div className="bg-[#EFDFC3] mx-4 my-4 pt-2 lg:mx-0 lg:p-0 lg:rounded lg:my-2 lg:bg-transparent">
            <div className="flex items-center bg-[#116011] h-10 mb-4 lg:hidden">
                <h2 className="text-white p-2">News Post</h2>
            </div>
            <div className="bg-[#D29E3F] lg:bg-[#EFDFC3] lg:border border-[#E81414] lg:rounded lg:mb-4">
            <PostCard />
            </div>
            <div className="bg-[#E3BB73] lg:bg-[#EFDFC3] lg:border border-[#E81414] lg:rounded lg:mb-4">
            <PostCard />
            </div>
            <div className="bg-[#D29E3F] lg:bg-[#EFDFC3] lg:border border-[#E81414] lg:rounded lg:mb-4">
            <PostCard />
            </div>
            <div className="bg-[#E3BB73] lg:bg-[#EFDFC3] lg:border border-[#E81414] lg:rounded lg:mb-4">
            <PostCard />
            </div>
            <div className="bg-[#D29E3F] lg:bg-[#EFDFC3] lg:border border-[#E81414] lg:rounded lg:mb-4">
            <PostCard />
            </div>
        
        </div>
    )
}
export default PostContainer
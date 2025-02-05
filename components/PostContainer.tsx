import React from "react";
import PostCard from "./PostCard";

const PostContainer = () => {

    const posts = [
        { id: 1, title: "Titulo firts post", icon1: "/icon-post-sword.png", icon2: "/icon-plus.png" },
        { id: 2, title: "Titulo second post", icon1: "/icon-post-sword.png", icon2: "/icon-plus.png" },
        { id: 3, title: "Title  third post", icon1: "/icon-post-sword.png", icon2: "/icon-plus.png" },
        { id: 4, title: "Title forty post", icon1: "/icon-post-sword.png", icon2: "/icon-plus.png" },
        { id: 5, title: "Title fifty post", icon1: "/icon-post-sword.png", icon2: "/icon-plus.png" },
    ];
    
    return(
        <div className="bg-[#EFDFC3] mx-2 my-4 pt-2 lg:mx-0 lg:mt-1">
            <div className="flex items-center bg-[#116011] h-10 mb-4">
                <h2 className="text-white p-2">News Post</h2>
            </div>
            {posts.map((post, index) => {
                const backgroundColor = index % 2 ===0 ? "#D29E3F" : "#E3BB73"
                
                return(<PostCard
                key={post.id}
                title={post.title}
                icon1={post.icon1}
                icon2={post.icon2}
                backgroundColor={backgroundColor}
                />
                )
            }

            )
                
            }
        </div>
    )
}
export default PostContainer
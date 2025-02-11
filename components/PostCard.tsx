import React from "react";


const PostCard = () => {

    return(
    
        <div className="flex items-center lg:block"
         >
            <div className="flex items-center lg:bg-[#116011] lg:text-white lg:m-2">
            <span className="ml-2 lg:hidden ">
                <img src="/icon-post-sword.png" alt="icon post"/>
            </span>
            <span className="ml-2 hidden lg:block">
                <img src="/icon-sword-desktop.png" alt="icon post"/>
            </span>
            <h3 className="ml-2 p-2">Post title</h3>
            </div>
            <p className="hidden lg:block lg:p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula...
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula...
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula...
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula...  
            </p>
            <span className="ml-auto mr-2 lg:hidden">
                <img src="/icon-plus.png" alt="icon plus" />
            </span>
            <span className="flex justify-end px-2 text-[#93281A]">
            <a href="#" className="hidden lg:block lg:p-2">Read more ...</a>
            </span>
        </div>
    

    )
}

export default PostCard
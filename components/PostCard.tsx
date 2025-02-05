import React from "react";

interface PostCardProps {
    title: string;
    icon1: string;
    icon2: string;
    backgroundColor: string;
}

const PostCard: React.FC<PostCardProps> = ({title, icon1, icon2, backgroundColor}) => {

    return(
    
        <div className="flex items-center" style={{ backgroundColor}}>
            <span className="ml-2">
                <img src={icon1} alt="icon post" />
            </span>
            <h3 className="ml-2 p-2">{title}</h3>
            <span className="ml-auto mr-2">
                <img src={icon2} alt="icon plus" />
            </span>
        </div>
    

    )
}

export default PostCard
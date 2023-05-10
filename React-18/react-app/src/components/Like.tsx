import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
const Like = () => {
    const [liked, setLiked] = useState(false);
    const handleClick = () => {
        liked ? setLiked(false) : setLiked(true);
        liked ? console.log("unliked") : console.log("liked");
    };
    return (
        <div>
            {!liked && <AiOutlineHeart onClick={handleClick} />}
            {liked && <AiFillHeart onClick={handleClick} />}
        </div>
    );
};

export default Like;

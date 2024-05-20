import { useState } from "react";
import appwriteService from "../appwrite/services/configuration";

function useLikedVerify({ userId, color, post }) {
    const [heart, setHeart] = useState("white");

    // Call hooks unconditionally at the top level
    const handleLikeToggle = () => {
        if (color === "red") {
            let likedData = JSON.parse(post.likes);
            likedData = likedData.filter((a) => a !== userId);
            const data = JSON.stringify(likedData);
            setHeart("white");
            appwriteService.updatesaved(post.$id, data).catch((error) => console.log(error));
        } else {
            let likedData = JSON.parse(post.likes);
            likedData.push(userId);
            const data = JSON.stringify(likedData);
            setHeart("red");
            appwriteService.updatesaved(post.$id, data).catch((error) => console.log(error));
        }
    };

    // Call the handleLikeToggle function
    handleLikeToggle();

    // Return the heart state
    return heart;
}

export default useLikedVerify;

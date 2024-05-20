import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import appwriteService from "../appwrite/services/configuration";
import NoItems from "../components/alternatecomponets/notfound";
import Postcard from "../components/postcard";

function Likepage() {
    const profiledata = useSelector((state) => state.data.profiledata);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchLikedPosts = async () => {
            if (profiledata && profiledata.liked) {
                const likedPosts = JSON.parse(profiledata.liked);
                try {
                    const fetchedPosts = await Promise.all(
                        likedPosts.map(async (postId) => {
                            if (postId) {
                                try {
                                    const post = await appwriteService.getpost(postId);
                                    return post;
                                } catch (error) {
                                    console.error(`Failed to fetch post with ID ${postId}`, error);
                                    return null;
                                }
                            }
                            return null;
                        })
                    );
                    setPosts(fetchedPosts.filter(post => post !== null));
                } catch (error) {
                    console.error("Failed to fetch liked posts", error);
                }
            }
        };
        fetchLikedPosts();
    }, [profiledata]);
    console.log(posts)
    if (posts.length > 0) {
        return (
            <div className='w-full py-8'>
                <p className="text-center text-slate-700 text-3xl">Liked Posts</p>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4 max-[600px]:w-11/12'>
                            <Postcard {...post} />
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        return <NoItems />;
    }
}

export default Likepage;

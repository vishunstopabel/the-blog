import { useSelector } from "react-redux";
import appwriteService from "../appwrite/services/configuration";
import { useState, useEffect } from "react";
import Noiteams from "../components/alternatecomponets/notfound";
import Postcard from "../components/postcard";

function Savedpage() {
    const savedPosts = useSelector((state) => JSON.parse(state.data.profiledata.saved));
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (savedPosts) {
            const fetchSavedPosts = async () => {
                try {
                    const fetchedPosts = await Promise.all(savedPosts.map(postId => appwriteService.getpost(postId)));

                    const filteredPosts = fetchedPosts.filter(post => post);
                    setPosts(filteredPosts);
                } catch (error) {
                    console.log(error);
                }
            };
            fetchSavedPosts();
        }
    }, []);

    console.log(posts);

    return (
        <div className="w-full py-8">
            <p className="text-center text-slate-700 text-3xl">Saved Posts</p>
            <div className="flex flex-wrap">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post.$id} className="p-2 w-1/4 max-[600px]:w-11/12">
                            <Postcard {...post} />
                        </div>
                    ))
                ) : (
                    <Noiteams />
                )}
            </div>
        </div>
    );
}

export default Savedpage;

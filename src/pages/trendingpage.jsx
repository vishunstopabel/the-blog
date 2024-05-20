import Noiteams from "../components/alternatecomponets/notfound";
import Postcard from "../components/postcard";
import { useEffect, useState } from "react";
import appwriteService from "../appwrite/services/configuration";
import { Query } from "appwrite";

function Trendingpage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = [Query.equal("status", "active")];
        const response = await appwriteService.getPosts(query);
        
        if (response) {
          const filteredPosts = response.documents.filter(post => {
          if(JSON.parse(post.likes).length > 3) {
            return post
          }
          
          });

          setPosts(filteredPosts);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  console.log(posts);

  if (posts.length !== 0) {
    return (
      <div className='w-full py-8'>
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
    return <Noiteams />;
  }
}

export default Trendingpage;

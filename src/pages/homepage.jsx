import Noiteams from "../components/alternatecomponets/notfound";
import Postcard from "../components/postcard";
import { useEffect, useState } from "react";
import appwriteService from "../appwrite/services/configuration";
import { Query } from "appwrite";
import Mainloader from "../components/mainloder"
function Homepage() {
  const [posts, setPosts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const limit = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      if (loading || !hasMore) return;

      setLoading(true);
      const queries = [Query.equal("status", "active"), Query.limit(limit), Query.offset(offset),Query.orderDesc(
       "$createdAt" 
        ) ];
      try {
        const post = await appwriteService.getPosts(queries);
        if (post) {
          setPosts((prevPosts) => [...prevPosts, ...post.documents]);
          setHasMore(post.documents.length === limit); 
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [offset]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) return;
      setOffset((prevOffset) => prevOffset + limit);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  if (posts.length === 0 && !loading) {
    return <Noiteams />;
  }

  return (
    
    <div className='w-full py-8'>
      <div className='flex flex-wrap'>
        {posts.map((post) => (
          <div key={post.$id} className='p-2 w-1/4 max-[600px]:w-11/12'>
            <Postcard {...post} />
          </div>
        ))}
      </div>
      {loading && <Mainloader/>}
    </div>
  );
}

export default Homepage;

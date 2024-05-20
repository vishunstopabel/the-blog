import { useParams } from "react-router-dom";
import Userprofile from "../components/userprofile";
import appwriteService from "../appwrite/services/configuration";
import { useState, useEffect } from "react";

function Followerpage() {
    const [user, setUser] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        
        appwriteService.getuser(slug)
            .then((userData) => {
                setUser(userData);
            })
            .catch((error) => {
                console.error("Error fetching user:", error);
            });
    }, [slug]);

    if (!user) {
        return <div>Loading...</div>; 
    }

    const  follower = JSON.parse(user.follower );

    return (
        <>
        <div className="w-full text-center text-3xl text-slate-800">
            Followers
        </div>
            {
                follower.length > 0 ? (
                    follower.map((name, index) => (
                        <div key={index}>
                            <Userprofile name={name} />
                        </div>
                    ))
                ) : (
                    "Zero Follower"
                )
            }
        </>
    );
}

export default Followerpage;
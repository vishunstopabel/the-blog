import { useParams } from "react-router-dom";
import Userprofile from "../components/userprofile";
import appwriteService from "../appwrite/services/configuration";
import { useState, useEffect } from "react";

function Followingpage() {
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

    const following = JSON.parse(user.following );

    return (
        <>
         <div className="w-full text-center text-3xl text-slate-800">
            Following
        </div>
            {
                following.length > 0 ? (
                    following.map((name, index) => (
                        <div key={index}>
                            <Userprofile name={name} />
                        </div>
                    ))
                ) : (
                    <div className="w-full text-center mt-20 text-2xl">
                            Zero following
                    </div>
                )
            }
        </>
    );
}

export default Followingpage;

import { useParams } from "react-router-dom";
import Userprofile from "../components/userprofile";
import appwriteService from "../appwrite/services/configuration";
import { useState, useEffect } from "react";
import { Query } from "appwrite";

function Singlepage() {
    const [user, setUser] = useState(null);
    const { slug } = useParams();
    
    useEffect(() => {
        const queries = [Query.equal("status", "single")];
        
        appwriteService.getallusers(queries)
            .then((userData) => {
                setUser(userData.documents);
            })
            .catch((error) => {
                console.error("Error fetching user:", error);
            });
    }, [slug]); 

    if (!user) {
        return <div>Loading...</div>; 
    }

    console.log(user);

    return (
        <>
            <div className="w-full text-center text-3xl text-slate-800">
                Single Accounts
            </div>
            {user.length > 0 ? (
                user.map((user, index) => (
                    <div key={index}>
                        <Userprofile name={user.$id} />
                    </div>
                ))
            ) : (
                <div className="w-full text-center mt-20 text-2xl">
                    No Single Accounts
                </div>
            )}
        </>
    );
}

export default Singlepage;
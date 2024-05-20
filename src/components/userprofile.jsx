import { useState, useEffect } from "react";
import appwriteService from "../appwrite/services/configuration";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function Userprofile({ name,flag=true}) {
    const [userData, setUserData] = useState(null);
    const[profile,setprofile]=useState([])
    const navigate = useNavigate();
    const dispatch=useDispatch()
    const[following,setfollowing]=useState(false)
    const profiledata=useSelector((state)=>{
        return state.data.profiledata
    })

    useEffect(() => {
        let follower=""
        const fetchData = async () => {
            try {
                const data = await appwriteService.getuser(name);
                const profiledata1=await appwriteService.getuser(profiledata.$id)
                setUserData(data);
                setprofile(profiledata1)
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData();
          follower=JSON.parse(profile.following?profile.following:"[]")
    
          if(follower){
              console.log(follower)
              follower.map((a)=>{
                      if(a==name){
                        setfollowing(true)
                      }
                      
              })

          }
        return () => {
            
        };
    }, [name,navigate,profile]);
    let author =false
    function handelfollow () {
        if (following) {
            let newFollowing = JSON.parse(profile.following || '[]'); 
            newFollowing=newFollowing.filter((a)=>(a!=name)
    
            )
            appwriteService.updatefolloing(profile.$id, JSON.stringify(newFollowing))
       
            let follower=JSON.parse(userData.follower);
            
            follower.filter((a)=>(a!=profile.$id)
    
        )
            appwriteService.updatefollowers(name, JSON.stringify(follower)).then(()=>{
                setfollowing(false);
                updateprofile()
            });
        } else {
            let newFollowing = JSON.parse(profile.following || '[]'); 
            newFollowing.push(name); 
            appwriteService.updatefolloing(profile.$id, JSON.stringify(newFollowing))
             
    
                let newUser  = JSON.parse(userData.follower);
          
            newUser.push(profile.$id); 
            appwriteService.updatefollowers(name, JSON.stringify(newUser)).then(()=>{
                    setfollowing(true);
                    updateprofile()
            });
        }
    }
    function updateprofile(){
        appwriteService.getuser(profile.$id).then((profiledata)=>{
            dispatch(data({profiledata}))
        })
    
    }
    author=name==profile.$id?true:false
    return (
        <>
       {
        flag?(
            <div className="w-full flex justify-between"> 
            <div className="flex mb-4 gap-3" onClick={() => {
                navigate(`/profile/${userData?.$id}`);
            }}>
                {userData?.imageId ? (
                    <img src={appwriteService.previewfile(userData.imageId)} alt={name} className="rounded-full w-7 h-7 mt-2" />
                ) : null}
                <div>
                    <p className="text-2xl text-gray-700">{userData?.name || "user1223"}</p>
                  
                </div>
            </div>
                {
                    author? (null):(  <div className={`font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ${following?"text-slate-800 hover:bg-slate-500 bg-slate-400":"text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 "}`} onClick={handelfollow}>
                        {
                            following? "following":"follow"
                        }
                           </div>)
                }
          
          
            </div>
        ):(
            
                author? (null):(  <div className={`font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ${following?"text-slate-800 hover:bg-slate-500 bg-slate-400":"text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 "}`} onClick={handelfollow}>
                    {
                        following? "following":"follow"
                    }
                       </div>)
            
        )
       } 
        </>
    );
}

export default Userprofile;

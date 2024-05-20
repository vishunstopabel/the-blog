import { useNavigate, useParams } from "react-router-dom"
import appwriteService from "../appwrite/services/configuration"
import { useEffect, useState } from "react"
import { Query } from "appwrite"
import { useSelector } from "react-redux"
import Postcard from "../components/postcard"
import Userprofile from "../components/userprofile"

function Profilepage(){
    let image=""
    const id= useSelector((state)=>{
            return state.auth.userdata.$id
    }) 
    const[user,setuser]=useState([])
    const[posts,setPosts]=useState([])
    const {slug}=useParams()
    const author =user.userId===id
    console.log(user.userId)
    const navigate=useNavigate()
    useEffect(()=>{
         appwriteService.getuser(slug)
            .then((data)=>{
                    if(data) {
                        setuser(data)
                            image=user.imageId
                        console.log(image)
                        const  query = [Query.equal("userId",`${data.userId}`)]
                        appwriteService.getPosts(query).then((posts)=>{
                            if(posts){
                                setPosts(posts.documents)
                                console.log(posts.documents)
                            }
                                
                        })
                    }
         
         
            
          
             })

    },[])
  
    if (user){return <>
            <div className="flex flex-wrap flex-col">
                <div className="flex justify-center gap-32 max-[600px]:gap-6">
                <div>
                    {
                        user.imageId?<img src={appwriteService.previewfile(user.imageId)} alt={"fsa"}
                        className='rounded-full w-48 h-48 max-[600px]:w-20max-[600px]:h-20' />:(null)
                    }
                </div>
                <div>
                    <div className="flex ">
                    <div className="text-gray-900 text-4xl center">{user.name}
                    <div className="flex gap-3">
                    <div  className="text-xl bg-gray-100 px-2" onClick={()=>{
                        navigate(`/profile/followers/${slug}`)
                    }}>
                         followers {JSON.parse(user.follower||"[]").length}      
                    </div>

                    <div  className="text-xl bg-gray-100 px-2" onClick={()=>{
                        navigate(`/profile/following/${slug}`)
                    }}>
                         following {JSON.parse(user.following||"[]").length}
                    </div>
                   
                    <div className="text-2xl text-zinc-800">posts {posts.length}</div>
                    </div>
                    {
                        author&&(
                            <button  className="bg-transparent hover:bg-blue-600 text-blue-600 font-semibold hover:text-white  border border-blue-500 hover:border-transparent roundedtext-xl py-0.5 px-1 text-xl" onClick={()=>{
                                navigate(`/editprofile/${user.$id}`)
                            }}>
                                Edit profile
                            </button>
                        )
                    }
                   
                    </div>
                    </div>
                    <div className="text-gray-800 text-xl">{user.bio}</div>
                    <div>status:{user.status}</div>
                    <Userprofile name={user.$id} flag={false}/>
                </div>

                </div>
                <div className=" flex flex-wrap ">
                <div className="w-full bg-slate-900 h-0.5"></div>
                    <div className=" flex justify-center items-center w-full pb-2"> 
                    <div className="text-center text-6xl text-gray-800">Posts {posts.length}</div>
                    </div>
                {
                    posts&&(
                        posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4 max-[600px]:w-11/12'>
                                <Postcard {...post} />
                            </div>
                        ))
                    )
                }
                 </div>
            </div>
    </>}
    else{

    }
}
export default Profilepage
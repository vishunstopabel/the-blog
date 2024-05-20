import appwriteService from '../appwrite/services/configuration'
import {Link ,useNavigate} from 'react-router-dom'

import Profilepage from '../pages/profilepage'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Userprofile from './userprofile'
function Postcard({featuredimage,title,$id,name,likes}){
    const [color,setcolor] =useState("white")

    const[likelength,setlikelength]=useState(0)
    const userId=useSelector((state)=>{
        return state.auth.userdata.$id
    })   
    const profiledata=useSelector((state)=>{
        return state.data.profiledata
    })
     const navigate=useNavigate()
        useEffect(()=>{
            let like=JSON.parse(likes)
            setlikelength(like.length);
            if(like){
                like.map((a)=>{
                    if(a==userId){
                     setcolor("red")
                    }
             })
            }
        
         
        },[])
 function  handellike(){
    if (color === "red") {
        let likedData = JSON.parse(likes);
        likedData = likedData.filter((a) => a !== userId);
        const data = JSON.stringify(likedData);
        setcolor("white");
        appwriteService.updatelike($id, data).catch((error) => console.log(error));
        let profilelike=JSON.parse(profiledata.liked)
        profilelike=profilelike.filter((a) => a !== $id);
        appwriteService.updateliked(profiledata.$id,JSON.stringify(profilelike))
    } else {
        let likedData = JSON.parse(likes);
        likedData.push(userId);
        const data = JSON.stringify(likedData);
        setcolor("red");
        appwriteService.updatelike($id, data).catch((error) => console.log(error));
        let profilelike=JSON.parse(profiledata.liked)
        profilelike.push($id)
        appwriteService.updateliked(profiledata.$id,JSON.stringify(profilelike))
    }
 }

    return<>

        <div className='w-full bg-gray-100 rounded-xl p-4 sm:w-auto '    >
          
       <Userprofile name={name}/>
   
            
            <div >

         
            <div className='w-full justify-center mb-4' onClick={()=>{
                navigate(`/post/${$id}`)
            }}>
                <img src={appwriteService.previewfile(featuredimage)} alt={title}
                className='rounded-xl  w-full h-56 sm:' />

            </div>
            <div>
           
            <div className='flex w-full justify-between'>
          <div onClick={()=>{
            navigate(`/post/${$id}`)
          }}> <h2  className='text-xl font-bold'>{title}</h2></div> 
           <div className='flex gap-2'> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill={color} version="1.1" id="Capa_1" width="35px" height="35px" viewBox="0 0 475.528 475.528" xml:space="preserve" stroke="black" strokeWidth="2px" onClick={handellike}>
                <g>
                 <g>
                <path d="M237.376,436.245l0.774,0.976c210.94-85.154,292.221-282.553,199.331-367.706    c-92.899-85.154-199.331,30.953-199.331,30.953h-0.774c0,0-106.44-116.107-199.331-30.953    C-54.844,154.658,26.437,351.092,237.376,436.245z"/>
                </g>
                </g>
            </svg>
            <p>{likelength}</p>
            </div>
            </div>
            </div>
            </div>
        </div>
       
    </>
}
export default Postcard
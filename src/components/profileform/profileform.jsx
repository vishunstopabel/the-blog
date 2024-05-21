import appwriteService from "../../appwrite/services/configuration"
import authService from "../../appwrite/services/auth"
import {useForm} from "react-hook-form"
import {Input} from "../index"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Select from "../select"
import { useDispatch } from "react-redux"
import { removeloader, setloader } from "../../store/loaderdata"
function Profileform({userdata}){
    const navigate=useNavigate()
    const userId=useSelector((state)=>{
        return state.auth.userdata.$id
    })
    const dispatch=useDispatch()
    console.log(userId)
    const {register,handleSubmit}=useForm({
        // defaultValues:{
        //     name:userdata.name? userdata.name:"",
        //     bio:userdata.bio?bio:"",
        //     occupation:userdata?userdata.occupation:""
        // }
    })
    async function handleprofile(data){
        dispatch(setloader())
        if(userdata){
            
            const delectfile= await appwriteService.delectfile(userdata.imageId)
           if (delectfile){
                const newfile=await appwriteService.uploadfile(data.image[0])
                if(newfile){
                    await appwriteService.updateprofile(userdata.$id,{
                        ...data,imageId:newfile.$id
                    }).then((data)=>{
                        dispatch(removeloader())
                        navigate(`/profile/${data.$id}`)
                    })
                }
            }
            
            
            
        }
        else{
            console.log(data)
            
            const slug=data.name.replace(" ","-")
            
            console.log(slug)
          await  authService.updateName(slug)

            const file= await appwriteService.uploadfile(data.image[0])
            if(file){
                const image=file.$id
                data.imageId=image

                data.slug=slug
                data.userId=userId
               await appwriteService.addprofile({...data} )
               .then((data)=>{
                console.log(data.$id)
                dispatch(removeloader())
                navigate(`/profile/${data.$id}`)
               })
            }
        }
    }
   



    return<>
<div className="w-full ">
            <div className="text-4xl text-gray-700 text-center ">
                    {
                        userdata?" update":"upload"
                    }
                    profile
            </div>
    <form onSubmit={handleSubmit(handleprofile)} className=" flex flex-wrap-reverse">
        <div className="w-2/3 mt-5">
    <Input
          label="User Name :"
          placeholder="user name"
          className="mb-4"
         {...register("name", { required: true })}
       />
       <Input
       label="Bio:"
       placeholder="add your bio"
       className="md-4"
       {...register("bio",{required:false})}
        />
       <Select
          options={["single", "commited","maried"]}
         label="Status"
          className="mb-4"
      {...register("status", { required: true })}
                />
    </div>
    <div className="w-1/3">
         <Input
             label="profile Image"
                type="file"
              className="mb-4"
                 accept="image/png, image/jpg, image/jpeg, image/gif"
             {...register("image", { required:true })}
         />
         {userdata&&(
            
            userdata.imageId? <img src={appwriteService.previewfile(userdata.imageId)} alt={userdata.name}
            className='rounded :' />:(null)
         )
             }
    </div>
    <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded "> {userdata ? "Update" : "Submit"} </button>
    </form>

</div>


    </>
}
export default Profileform
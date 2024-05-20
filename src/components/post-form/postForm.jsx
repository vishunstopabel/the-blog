import React from "react";
import { useForm } from "react-hook-form"
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import appwriteService from "../../appwrite/services/configuration"
import RTE from "../rte";
import {Input} from "../index"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from "../select"
import { removeloader, setloader } from "../../store/loaderdata";

function Postform({post}){
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const userdata= useSelector(((state)=>{
        return (state.auth.userdata) 
        }))
    console.log(userdata)
    const{register,handleSubmit,setValue,watch,getValues,control}=useForm(
        {
            defaultValues:{
                title: post?post.title: "",
                slug: post?post.$id : "",
                content: post?post.content : "",
               
            },
        }
    )
    async function Submit(data){
        dispatch(setloader())
            if(post){
                console.log(post.featuredimage)
                const file=data.image[0]? await appwriteService.uploadfile(data.image[0]):null
                if(file){
                appwriteService.delectfile(post.featuredimage)
                }
                const mypost=appwriteService.updatepost(post.$id,{
                    ...data,featuredimage:file?file.$id:"notfound"
                })
                if(mypost){
                    toast.success("post updated", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                       
                        });
                        dispatch(removeloader())
                    navigate(`/post/${post.$id}`)
                }
            }else{
                const name=userdata.name
                const file=data.image[0]?await appwriteService.uploadfile(data.image[0]):null
                if(file){
                    const fileId = file.$id;
                    data.featuredimage = fileId;
                    const mynewpost=await appwriteService.creatpost({...data,userId:userdata.$id,name},
                    )
                    if(mynewpost){
                        toast.success("post created successfully", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                         
                            });
                            dispatch(removeloader())
                        navigate(`/post/${mynewpost.$id}`)
                    }
                }
            }
    }
    
    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);
    return<>


<form onSubmit={handleSubmit(Submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {/* {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.previewfile(featuredimage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                */}
                   <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ">
                    {post ? "Update" : "Submit"}
                </button>
            </div>
        </form>
    </>
}
export default Postform
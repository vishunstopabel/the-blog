import { useForm } from "react-hook-form"
import authservices from "../appwrite/services/auth"
import { useDispatch } from "react-redux"
import { login } from "../store/authslice"
import { Input,Logo } from "./index"
import { useState } from "react"
import { Link,useNavigate} from "react-router-dom"
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { removeloader, setloader } from "../store/loaderdata"
function Login(){
 
    const navigate=useNavigate()
    const dispathch=useDispatch()
    const{register,handleSubmit}=useForm()
   
  async  function userlogin(userdata){
    dispathch(setloader())
            try {
                const section=await authservices.login(userdata)
                if(section){
                    console.log(section)
                    const data=await authservices.getCurrentUser()
                    if(data){
                      window.location.reload()
                        console.log("current user",data)
                        dispathch(login({data}))
                        toast.success(`welcome ${data.name} `, {
                          position: "top-right",
                          autoClose: 3000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "colored",
                          
                          });
                        navigate("/")
                        dispathch(removeloader())
                    }
                }
            } catch (error) {
              toast.warn(error.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
          
                });
                dispathch(removeloader())
                
            }
            
    }
    return<>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex justify-center"><Logo/>  </div>     
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(userlogin)}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <Input
                  name="email"
                  type="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("email",
                {require:true})}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
           
              </div>
              <div className="mt-2">
                <Input
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("password",
                  {require:true})}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link to={"/sinup"} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
           
              sinup
            
            </Link>
          </p>
        </div>
      </div>


    </>
}
export default Login
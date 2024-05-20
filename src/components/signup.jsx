import { useForm } from "react-hook-form"
import authservices from "../appwrite/services/auth"
import { useDispatch } from "react-redux"
import { Input,Logo } from "./index"
import { Link,useNavigate} from "react-router-dom"
import { login } from "../store/authslice"
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { removeloader, setloader } from "../store/loaderdata"
function Signup(){
  
    const navigate=useNavigate()
   const dispatch=useDispatch()
    const{register,handleSubmit}=useForm()
      async  function usersingup(userdata){
        dispatch(setloader())
                  userdata.name=userdata.name.replace(" ","-")
            try {
                const section=await authservices.createAccount(userdata)
                if(section){
                    console.log(section)
                    const data=await authservices.getCurrentUser()
                    if(data){
                      dispatch(login(data));
                          navigate("/")
                          dispatch(removeloader())
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
                dispatch(removeloader())
            }
        console.log(userdata)
    }
    return<>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm" >
             <div className="flex justify-center"><Logo/>  </div>    
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        
           Creat your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(usersingup)}>
        
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <Input
                  name="email"
                  type="email"
                  placeholder="@gmail.com"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("email",
                {require:true})}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
           
              </div>
            <div>
              
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
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    User Name
              </label>
              <div className="mt-2">
                <Input
                  name="text"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("name",
                {require:true})}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
              login
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            all redey a member{' '}
            <Link to={"/login"} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Login
            </Link>
          </p>
        </div>
      </div>


    </>
}
export default Signup
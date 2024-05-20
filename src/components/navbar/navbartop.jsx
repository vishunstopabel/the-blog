
import {useSelector} from 'react-redux'
import{Logoutbutton,Logo} from "../index"
import { useNavigate } from 'react-router-dom'
import Three from './tree'
function Navbartop(){
    const navigate=useNavigate()
 const authenticated=  useSelector(((state)=>{
    console.log(state)
    return  state.auth.status
 
    }))
    return(<>
      
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between  items-center mx-auto max-w-screen-xl">
                 <div>
                    <Logo /> 
                 </div>
                  {
                    authenticated ? (<Three/>):
                    (
                        <div className='flex gap-6'>
                            <button onClick={()=>{
                                navigate("/singup")
                            }} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 
                             hover:border-transparent rounded-lg" >
                                   Signup
                             </button>
                            
                            <button onClick={()=>{
                                navigate("/login")
                            }} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg">
                                   Login 
                            </button>
                            
                        </div>
        
                    )
                  } 
                 </div>
             </nav>
         </header>
            
    </>)
}
export default Navbartop
import { useEffect, useState } from 'react'
import authservices from './appwrite/services/auth'
import{useDispatch ,useSelector} from "react-redux"
import { login, logout } from './store/authslice'
import { useNavigate ,useLocation} from 'react-router-dom'
import Layout from "./components/outlet"
import appwriteService from "./appwrite/services/configuration"
import { data } from './store/userdataslice'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Mainloader from './components/mainloder'
function App() {
  const location=useLocation()
  const authenticated=  useSelector(((state)=>{
    return (state.auth.status) 
    }))
    const [loader,setloader]=useState(false)
    const dispatch=useDispatch()
    
  const navigate=useNavigate()
  useEffect(()=>{
    authservices.getCurrentUser()
    .then((userdata)=>{
      if(userdata){
      dispatch(login({userdata}))
        appwriteService.getuser(userdata.name).then((profiledata)=>{
          if(profiledata===undefined){
            setloader(true)
            navigate("/addprofile")
          }
          else{
            dispatch(data({profiledata}))
            setTimeout(()=>{
              setloader(true)
              navigate(`${location.pathname}`)
            },2000)
          }
        }).catch((error)=>{
          console.log(error)
        })  
  }
      else{setloader(true)
        dispatch(logout()) 
        
      }
    })
    .finally(()=>{    
    })
  
  },[navigate,window.location.reload])
  useEffect(()=>{
    if(window.navigator.onLine!=true){
      toast.error("The divce is offline", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      
        });
    }
  })
   return(
    
<>
  {
    loader? (<Layout/>):(<div className='flex justify-center items-center'>
    <Mainloader/>
    </div>)
  }



</>
   )
}

export default App

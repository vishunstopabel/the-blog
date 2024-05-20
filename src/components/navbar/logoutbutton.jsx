import { logout } from "../../store/authslice"
import authservices from "../../appwrite/services/auth"
import {useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom"
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Logoutbutton(){
  const navigate=useNavigate()
    const dispathch=useDispatch()
 
  function handellogout(e){
      e.preventDefault()  
      
      authservices.logout().then(()=>{
        dispathch(logout())
        toast.success("Logout successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        
          });
        navigate("/login")
      })
      
    }

    return(<>
        <div >
        <div  onClick={handellogout} className=" flex " >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={"35px"} height={"35px"}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round"></path> <path d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" ></path> </g></svg>

        <p>Logout</p>


        </div>
        </div>
    </>)
}
export default Logoutbutton
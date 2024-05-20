import { useSelector } from "react-redux"
function Useraunthentication() {
    const userlogin = useSelector((state)=>{
        return state.auth.status
    })
    return  userlogin
}
export default Useraunthentication
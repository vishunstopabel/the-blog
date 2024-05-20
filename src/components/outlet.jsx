import { Outlet } from "react-router-dom";
import {Navbartop,Navbarbottom} from "./index"
import Footer from "./footer";
import Useraunthentication from "./aunthenticate";
import Viewpage from "../components/alternatecomponets/viewpage"
function Layout(){ 

    return(
        <>
        <Navbartop/>
        <Outlet/>
            {Useraunthentication()?<Navbarbottom/>:<Viewpage/>}
            <div className="pb-5"> </div>
        </>
    )
}
export default Layout
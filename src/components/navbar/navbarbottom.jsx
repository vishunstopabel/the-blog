import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

function Navbarbottom() {
    const navigate = useNavigate();
    const location = useLocation(); 
    const name = useSelector((state) => state.auth.userdata.name);
    const userdata = useSelector((state) => state.data.profiledata);

   
    const isActive = (path) => location.pathname === path;

    return (
        <div className="fixed z-50 bottom-0 w-full h-10 border bg-white border-gray-800 rounded-xl flex flex-row justify-center gap-40 max-[1006px]:gap-12 max-[600px]:gap-6">
            <div
                className={`flex flex-row px-2 rounded-2xl ${isActive("/home") ? "bg-gray-200" : "hover:bg-gray-200"}`}
                onClick={() => {
                    navigate("/home");
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <p className="text-gray-900 text-xl max-[600px]:hidden">Home</p>
            </div>
            <div
                className={`flex flex-row px-2 rounded-2xl ${isActive("/trendingpage") ? "bg-gray-200" : "hover:bg-gray-200"}`}
                onClick={() => {
                    navigate("/trendingpage");
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                </svg>
                <p className="text-gray-900 text-2xl max-[600px]:hidden">trending posts</p>
            </div>
            <div
                className={`flex flex-row px-2 rounded-2xl ${isActive("/searchpage") ? "bg-gray-200" : "hover:bg-gray-200"}`}
                onClick={() => {
                    navigate("/searchpage");
                }}
            >
                <svg fill="#000000" height="28px" width="28px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 488.4 488.4" xml:space="preserve" className="m-1">
                    <g id="SVGRepo_bgCarrier" stroke-width="2"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g>
                            <g>
                                <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path>
                            </g>
                        </g>
                    </g>
                </svg>
                <p className="text-gray-900 text-2xl max-[600px]:hidden"> Search</p>
            </div>
            <div
                className={`flex flex-row px-2 rounded-2xl ${isActive("/addpost") ? "bg-gray-200" : "hover:bg-gray-200"}`}
                onClick={() => {
                    navigate("/addpost");
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                </svg>
                <p className="text-gray-900 text-2xl max-[600px]:hidden">Add post</p>
            </div>
            {userdata == null ? (
                <div
                    className={`flex flex-row px-2 rounded-2xl ${isActive("/addprofile") ? "bg-gray-200" : "hover:bg-gray-200"}`}
                    onClick={() => {
                        navigate(`/addprofile`);
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <p className="text-gray-900 text-2xl max-[600px]:hidden">add profile</p>
                </div>
            ) : (
                <div
                    className={`flex flex-row px-2 rounded-2xl ${isActive(`/profile/${name}`) ? "bg-gray-200" : "hover:bg-gray-200"}`}
                    onClick={() => {
                        navigate(`/profile/${name}`);
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <p className="text-gray-900 text-2xl max-[600px]:hidden">profile</p>
                </div>
            )}
        </div>
    );
}

export default Navbarbottom;

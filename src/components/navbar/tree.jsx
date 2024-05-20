import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Logoutbutton from "./logoutbutton";
import appwriteService from "../../appwrite/services/configuration";
import Share from "../sharecomponet";

function Three() {
    const [componet, setcomponet] = useState(false);
    const navigate = useNavigate();
    const userdata = useSelector((state) => state.data.profiledata);
    const isActive = (path) => location.pathname === path;
    return (
        <>
            <div className="hover:bg-slate-100 rounded-3xl focus:bg-slate-100 ">
                <svg
                    width="40px"
                    height="40px"
                    viewBox="-4.16 -4.16 24.32 24.32"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    className="bi bi-three-dots-vertical "
                    stroke="#000000"
                    strokeWidth="0.8480000000000001"
                    onClick={() => setcomponet((prev) => !prev)}
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                    </g>
                </svg>
            </div>
            {componet && (
                <div className="flex  flex-col w-30 h-50    bg-white transition-[opacity,margin] duration-100 hs-dropdown-open:opacity-100 min-w-6  shadow-md rounded-lg p-2 mt-2  absolute top-2/3 right-0 z-10">
                    <div onClick={() => navigate(`profile/${userdata.$id}`)} className={`flex ${isActive(`profile/${userdata.$id}`) ? "bg-gray-200" : "hover:bg-gray-200"}`}>
                        
                        {userdata ? (
                            <img src={appwriteService.previewfile(userdata.imageId)} alt=""  className="rounded-full w-8 h-8" />
                        ) : null}
                       
                        <p>Profile</p>
                    </div>
                    <div onClick={() => navigate("/saved")} className={`flex ${isActive("/saved") ? "bg-gray-200" : "hover:bg-gray-200"}`}>
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            height={"35px"}
                            width={"35px"}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M19 19.2674V7.84496C19 5.64147 17.4253 3.74489 15.2391 3.31522C13.1006 2.89493 10.8994 2.89493 8.76089 3.31522C6.57467 3.74489 5 5.64147 5 7.84496V19.2674C5 20.6038 6.46752 21.4355 7.63416 20.7604L10.8211 18.9159C11.5492 18.4945 12.4508 18.4945 13.1789 18.9159L16.3658 20.7604C17.5325 21.4355 19 20.6038 19 19.2674Z"
                                    stroke="#363853"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </g>
                        </svg>
                        <p>Saved</p>
                    </div>
                    <div onClick={() => navigate("/liked")} className={`flex ${isActive("/liked") ? "bg-gray-200" : "hover:bg-gray-200"}`}>
                        <svg
                            viewBox="0 0 24 24"
                            fill="red"
                            height={"35px"}
                            width={"35px"}
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                                    stroke="#000000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </g>
                        </svg>
                        <p>Liked</p>
                    </div>
                 
                    <div className="flex">
                        <Share/>
                        <p>Share</p>
                    </div>
                    <div onClick={() => navigate("/developercontact")} className={`flex ${isActive("/developercontact") ? "bg-gray-200" : "hover:bg-gray-200"}`}>
                    <svg height="32px" width="32px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <g>
                <path style={{fill: "#2E36D2"}} d="M38.788,170.667h23.273h23.273c12.853,0,23.273-10.42,23.273-23.273c0-12.853-10.42-23.273-23.273-23.273H62.061H38.788c-12.853,0-23.273,10.42-23.273,23.273C15.515,160.247,25.935,170.667,38.788,170.667z"></path>
                <path style={{fill: "#2E36D2"}} d="M85.333,232.727H62.061H38.788c-12.853,0-23.273,10.42-23.273,23.273c0,12.853,10.42,23.273,23.273,23.273h23.273h23.273c12.853,0,23.273-10.42,23.273-23.273C108.606,243.147,98.186,232.727,85.333,232.727z"></path>
                <path style={{fill: "#2E36D2"}} d="M85.333,341.333H62.061H38.788c-12.853,0-23.273,10.42-23.273,23.273s10.42,23.273,23.273,23.273h23.273h23.273c12.853,0,23.273-10.42,23.273-23.273S98.186,341.333,85.333,341.333z"></path>
            </g>
            <g>
                <circle style={{fill: "#C9DDF4"}} cx="279.273" cy="201.697" r="69.818"></circle>
                <path style={{fill: "#C9DDF4"}} d="M279.273,271.514c-59.982,0-108.606,48.621-108.606,108.606h217.212C387.879,320.135,339.254,271.514,279.273,271.514z"></path>
            </g>
            <path style={{fill: "#5286FA"}} d="M473.212,0H279.273H162.909C107.301,0,62.061,45.241,62.061,100.848v23.273h23.273c12.853,0,23.273,10.42,23.273,23.273c0,12.853-10.42,23.273-23.273,23.273H62.061v62.061h23.273c12.853,0,23.273,10.42,23.273,23.273c0,12.853-10.42,23.273-23.273,23.273H62.061v62.061h23.273c12.853,0,23.273,10.42,23.273,23.273s-10.42,23.273-23.273,23.273H62.061v23.273C62.061,466.759,107.301,512,162.909,512h116.364h193.939c12.853,0,23.273-10.42,23.273-23.273V23.273C496.485,10.42,486.065,0,473.212,0z M279.273,380.121H170.667c0-59.985,48.624-108.606,108.606-108.606c-38.558,0-69.818-31.26-69.818-69.818c0-38.561,31.26-69.818,69.818-69.818c38.558,0,69.818,31.257,69.818,69.818c0,38.558-31.26,69.818-69.818,69.818c59.982,0,108.606,48.621,108.606,108.606H279.273z"></path>
            <path style={{fill: "#3D6DEB"}} d="M170.667,380.12c0-59.985,48.624-108.606,108.606-108.606c-38.558,0-69.818-31.26-69.818-69.818c0-38.56,31.26-69.818,69.818-69.818V0H162.909C107.301,0,62.061,45.241,62.061,100.848v23.273h23.273c12.853,0,23.273,10.42,23.273,23.273c0,12.853-10.42,23.273-23.273,23.273H62.061v62.061h23.273c12.853,0,23.273,10.42,23.273,23.273c0,12.853-10.42,23.273-23.273,23.273H62.061v62.061h23.273c12.853,0,23.273,10.42,23.273,23.273s-10.42,23.273-23.273,23.273H62.061v23.273C62.061,466.759,107.301,512,162.909,512h116.364V380.12H170.667z"></path>
        </g>
    </svg>
                        <p>contact</p>
                    </div>
                    <div onClick={() => navigate("/singlepage")} className={`flex ${isActive("/singlepage") ? "bg-gray-200" : "hover:bg-gray-200"}`}>
                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>user-single</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="30" height="30" fill="none"></rect> </g> <g id="icons_Q2" data-name="icons Q2"> <path d="M24,3A11,11,0,1,0,35,14,11,11,0,0,0,24,3Zm0,18a7,7,0,1,1,7-7A7,7,0,0,1,24,21ZM41.1,34A31.3,31.3,0,0,0,24,29,32.1,32.1,0,0,0,6.9,33.9l-.9.6V43a2,2,0,0,0,2,2H40a2,2,0,0,0,2-2V34.5ZM38,41H10V36.7A28.4,28.4,0,0,1,24,33a27.5,27.5,0,0,1,14,3.8Z"></path> </g> </g> </g></svg>
                        <p>Single page</p>
                    </div>
                    <div>
                        <Logoutbutton />
                    </div>
                    <div className="flex">
                        <Share/>
                        <p>Share</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Three;

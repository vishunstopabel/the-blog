import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutButton from "./logoutbutton";
import appwriteService from "../../appwrite/services/configuration";
import Share from "../sharecomponet";

function Three() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const userData = useSelector((state) => state.data.profiledata);
    const isActive = (path) => location.pathname === path;

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

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
                    onClick={toggleDropdown}
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                    </g>
                </svg>
            </div>
            {isOpen && (
                <div className="absolute top-16 right-0 bg-white rounded-lg shadow-md p-2 mt-2">
                    <div
                        onClick={() => navigate(`profile/${userData.$id}`)}
                        className={`flex items-center ${isActive(`profile/${userData.$id}`) ? "bg-gray-200" : "hover:bg-gray-200"} p-2 rounded-lg cursor-pointer`}
                    >
                        {userData ? (
                            <img src={appwriteService.previewfile(userData.imageId)} alt="" className="rounded-full w-8 h-8 mr-2" />
                        ) : null}
                        <p>Profile</p>
                    </div>
                    <div
                        onClick={() => navigate("/saved")}
                        className={`flex items-center ${isActive("/saved") ? "bg-gray-200" : "hover:bg-gray-200"} p-2 rounded-lg cursor-pointer`}
                    >
                        <svg viewBox="0 0 24 24" fill="none" height={"35px"} width={"35px"} xmlns="http://www.w3.org/2000/svg">
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
                    <div
                        onClick={() => navigate("/liked")}
                        className={`flex items-center ${isActive("/liked") ? "bg-gray-200" : "hover:bg-gray-200"} p-2 rounded-lg cursor-pointer`}
                    >
                        <svg viewBox="0 0 24 24" fill="red" height={"35px"} width={"35px"} xmlns="http://www.w3.org/2000/svg">
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
                    <div
                        onClick={() => navigate("/developercontact")}
                        className={`flex items-center ${isActive("/developercontact") ? "bg-gray-200" : "hover:bg-gray-200"} p-2 rounded-lg cursor-pointer`}
                    >
                        <svg height="32px" width="32px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g>
                                    <path
                                        style={{ fill: "#2E36D2" }}
                                        d="M38.788,170.667h23.273h23.273c12.853,0,23.273-10.42,23.273-23.273c0-12.853-10.42-23.273-23.273-23.273H62.061H38.788c-12.853,0-23.273,10.42-23.273,23.273C15.515,160.247,25.935,170.667,38.788,170.667z"
                                    ></path>
                                    <path
                                        style={{ fill: "#2E36D2" }}
                                        d="M85.333,232.727H62.061H38.788c-12.853,0-23.273,10.42-23.273,23.273c0,12.853,10.42,23.273,23.273,23.273h23.273h23.273c12.853,0,23.273-10.42,23.273-23.273C108.606,243.147,98.186,232.727,85.333,232.727z"
                                    ></path>
                                    <path
                                        style={{ fill: "#2E36D2" }}
                                        d="M85.333,341.333H62.061H38.788c-12.853,0-23.273,10.42-23.273,23.273s10.42,23.273,23.273,23.273h23.273h23.273c12.853,0,23.273-10.42,23.273-23.273S98.186,341.333,85.333,341.333z"
                                    ></path>
                                    <path
                                        style={{ fill: "#2E36D2" }}
                                        d="M497.049,134.246c-10.17-12.202-28.195-16.866-44.017-10.961l-72.756,25.557c-5.183-3.443-12.02-4.615-18.429-2.435c-9.326,3.288-15.939,12.358-16.465,22.384c-0.532,10.253,5.459,19.496,14.676,23.343l-52.627,60.582c-5.037-0.366-10.139,1.158-14.267,4.675c-9.252,7.677-10.631,21.527-3.194,31.136c5.758,7.518,14.753,10.276,23.018,8.082l-24.691,45.703c-3.161,5.855-2.592,12.85,1.467,18.172c4.059,5.322,10.956,7.896,17.556,6.42c3.467-0.771,6.563-2.714,8.94-5.509c-1.472,2.979-2.42,6.208-2.675,9.627c-0.745,10.051,5.232,19.37,14.435,23.371c9.204,4.001,20.067,0.681,26.053-7.977l83.63-116.886C511.606,183.336,507.219,152.953,497.049,134.246z"
                                    ></path>
                                    <path
                                        style={{ fill: "#556080" }}
                                        d="M123.636,124.121h232.727c12.853,0,23.273-10.42,23.273-23.273S369.216,77.576,356.364,77.576H123.636c-12.853,0-23.273,10.42-23.273,23.273S110.783,124.121,123.636,124.121z"
                                    ></path>
                                    <path
                                        style={{ fill: "#556080" }}
                                        d="M356.364,232.727H123.636c-12.853,0-23.273,10.42-23.273,23.273s10.42,23.273,23.273,23.273h232.727c12.853,0,23.273-10.42,23.273-23.273S369.216,232.727,356.364,232.727z"
                                    ></path>
                                    <path
                                        style={{ fill: "#556080" }}
                                        d="M356.364,341.333H123.636c-12.853,0-23.273,10.42-23.273,23.273s10.42,23.273,23.273,23.273h232.727c12.853,0,23.273-10.42,23.273-23.273S369.216,341.333,356.364,341.333z"
                                    ></path>
                                </g>
                            </g>
                        </svg>
                        <p>Contact</p>
                    </div>
                    <div
                        onClick={() => navigate("/singlepage")}
                        className={`flex items-center ${isActive("/singlepage") ? "bg-gray-200" : "hover:bg-gray-200"} p-2 rounded-lg cursor-pointer`}
                    >
                        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" height={"35px"} width={"35px"}>
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M36 6L12 6C9.79086 6 8 7.79086 8 10V38C8 40.2091 9.79086 42 12 42H36C38.2091 42 40 40.2091 40 38V10C40 7.79086 38.2091 6 36 6ZM12 4C8.68629 4 6 6.68629 6 10V38C6 41.3137 8.68629 44 12 44H36C39.3137 44 42 41.3137 42 38V10C42 6.68629 39.3137 4 36 4H12ZM14 11C13.4477 11 13 11.4477 13 12C13 12.5523 13.4477 13 14 13H34C34.5523 13 35 12.5523 35 12C35 11.4477 34.5523 11 34 11H14ZM13 20C13 19.4477 13.4477 19 14 19H34C34.5523 19 35 19.4477 35 20C35 20.5523 34.5523 21 34 21H14C13.4477 21 13 20.5523 13 20ZM14 27C13.4477 27 13 27.4477 13 28C13 28.5523 13.4477 29 14 29H25C25.5523 29 26 28.5523 26 28C26 27.4477 25.5523 27 25 27H14Z"
                                    fill="#000000"
                                ></path>
                            </g>
                        </svg>
                        <p>Single page</p>
                    </div>
                    <div className="flex items-center p-2 rounded-lg cursor-pointer">
                        <Share url={window.location.href}/>
                        <p>Share</p>
                    </div>
                    <div className="flex items-center p-2 rounded-lg cursor-pointer">
                        <LogoutButton />
                    </div>
                </div>
            )}
        </>
    );
}

export default Three;


import appwriteService from "../appwrite/services/configuration";
import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Noiteams from "../components/alternatecomponets/notfound";
import { Link } from "react-router-dom";
import Share from "../components/sharecomponet";
import { Input } from "../components";
import { useForm } from "react-hook-form";
import Userprofile from "../components/userprofile";
import { ID } from "appwrite";

function Postspage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [heartColor, setHeartColor] = useState("white");
    const [saveColor, setSaveColor] = useState("white");
    const [likeLength, setLikeLength] = useState(0);
    const [rotate, setRotate] = useState("0");
    const [showComment, setShowComment] = useState(false);
    const { register, handleSubmit } = useForm();
    const userdata = useSelector((state) => state.auth.userdata);
    const profile = useSelector((state) => state.data.profiledata);
    const isAuthor = post ? post.userId === userdata.$id : false;
    const url = window.location.href;
    const userId = userdata.$id;

    let comments = [];
    if (post) {
        comments = JSON.parse(post.comment);
    }

    useEffect(() => {
        if (slug) {
            appwriteService.getpost(slug).then((postData) => {
                if (postData) {
                    setPost(postData);
                    let data = JSON.parse(postData.likes);
                    setLikeLength(data.length);
                    if (data.includes(userId)) {
                        setHeartColor("red");
                    }
                    if (profile) {
                        let savedData = JSON.parse(profile.saved);
                        if (savedData.includes(slug)) {
                            setSaveColor("black");
                        }
                    }
                } else {
                    navigate("/");
                }
            });
        } else {
            navigate("/");
        }
    }, [slug, navigate, post, userId, profile]);

    function handleLike() {
        let likedData = JSON.parse(post.likes);
        if (heartColor === "red") {
            likedData = likedData.filter((id) => id !== userId);
            setHeartColor("white");
            let profilelike=JSON.parse(profile.liked)
            profilelike=profilelike.filter((a) => a !== post.$id);
            appwriteService.updateliked(profile.$id,JSON.stringify(profilelike))
        } else {
            likedData.push(userId);
            setHeartColor("red");
            let profilelike=JSON.parse(profile.liked)
            profilelike.push(post.$id)
            appwriteService.updateliked(profile.$id,JSON.stringify(profilelike))
        }
        const data = JSON.stringify(likedData);
        appwriteService.updatelike(post.$id, data).catch((error) => console.log(error));
    }

    function handleComment(data) {
        let commentData = JSON.parse(post.comment);
        commentData.push({ $id: profile.$id, comment: data.comment, userId: userdata.$id, commentId: ID.unique() });
        appwriteService.updatecomment(post.$id, JSON.stringify(commentData)).catch((error) => console.log(error));
    }

    function handleSave() {
        let savedData = JSON.parse(profile.saved);
        if (saveColor === "black") {
            savedData = savedData.filter((id) => id !== post.$id);
            setSaveColor("white");
        } else {
            savedData.push(post.$id);
            setSaveColor("black");
        }
        const data = JSON.stringify(savedData);
        appwriteService.updatesaved(profile.$id, data).catch((error) => console.log(error));
    }

    function deletePost() {
        appwriteService.delectpost(post.$id).then((status) => {
            if (status) {
                appwriteService.delectfile(post.featuredimage);
                navigate("/home");
            }
        });
        
    }
    function handledelectcomment(commentId) {
        let commentData = JSON.parse(post.comment);
        commentData = commentData.filter((comment) => comment.commentId !== commentId);
        
        appwriteService.updatecomment(post.$id, JSON.stringify(commentData))
            .catch((error) => console.log(error));
    }
    
    return post ? (
        <div className="py-8">
            <div className="w-full">
                <Userprofile name={post.name} />
            </div>
            <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                <img
                    src={appwriteService.previewfile(post.featuredimage)}
                    alt={post.title}
                    className="rounded-xl w-4/5"
                />
                {isAuthor && (
                    <div className="absolute right-6 top-6">
                        <Link to={`/edit-post/${post.$id}`}>
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded mr-3">
                                Edit
                            </button>
                        </Link>
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
                            onClick={deletePost}
                        >
                            Delete
                        </button>
                    </div>
                )}
            </div>
            <div className="relative flex justify-end gap-4">
                <svg
                    xmlSpace="preserve"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill={heartColor}
                    width="35px"
                    height="35px"
                    viewBox="0 0 475.528 475.528"
                    stroke="black"
                    strokeWidth="4px"
                    onClick={handleLike}
                >
                    <g>
                        <path d="M237.376,436.245l0.774,0.976c210.94-85.154,292.221-282.553,199.331-367.706c-92.899-85.154-199.331,30.953-199.331,30.953h-0.774c0,0-106.44-116.107-199.331-30.953C-54.844,154.658,26.437,351.092,237.376,436.245z"/>
                    </g>
                </svg>
                {likeLength}
                <Share url={url} />
                <svg
                    viewBox="0 0 24 24"
                    fill="black"
                    width="35px"
                    height="35px"
                    onClick={handleSave}
                >
                    <path d="M15 20V15H9V20M18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H14.1716C14.702 4 15.2107 4.21071 15.5858 4.58579L19.4142 8.41421C19.7893 8.78929 20 9.29799 20 9.82843V18C20 19.1046 19.1046 20 18 20Z" fill={saveColor} stroke="#000000" strokeWidth="1.944" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="w-full mb-6">
                <h1 className="text-2xl font-bold">{post.title}</h1>
            </div>
            <div className="w-full h-full">
                {parse(post.content)}
            </div>
            <div className="bg-slate-50 py-8 border-slate-500 border-2 rounded-2xl">
                <form className="flex" onSubmit={handleSubmit(handleComment)}>
                    <Input placeholder="Write your comment" className="w-3/4" {...register("comment", { required: true })} />
                    <button className="relative block w-auto px-3 py-2 overflow-hidden text-base font-semibold text-center text-white-800 rounded-lg bg-blue-600 hover:text-black hover:bg-blue-300">
                        Comment
                    </button>
                </form>
            </div>
            <div className="text-center">
                <button
                    className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-800 shadow-lg shadow-blue-400/50 dark:shadow-lg dark:shadow-blue-700/80 font-medium rounded-lg text-sm px-3 py-2 text-center mt-3"
                    onClick={() => setShowComment((prev) => !prev)}
                >
                    Show Comments
                </button>
            </div>
            {showComment && (
                <div className="bg-slate-50 rounded-2xl">
                    <div className="text-center text-5xl text-zinc-800">Comment Section</div>
                    <div className="flex flex-col gap-5">
                        {comments.map((comment, index) => (
                            <div key={index} className="flex flex-col w-full bg-white rounded-3xl">
                                <div className="flex gap-4">
                                    <Userprofile name={comment.$id} />
                                    {comment.$id === profile.$id && (
                                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl border border-red-700 px-3" onClick={() => handledelectcomment(comment.commentId)}>Delete</button>
                                    )}
                                </div>
                                <div>
                                    <p className="text-gray-800 text-xl">{comment.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    ) : (
        <Noiteams />
    );
}

export default Postspage;

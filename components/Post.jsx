'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import usersData from "../app/data/users.json";
import commentsData from "../app/data/comments.json";
import moment from "moment";

function PostData({props}) {
    const router = useRouter();
    const [user, setUser] = useState({});
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState(props.reactions);
    const [liked, setLiked] = useState(false);
    const [animationPing, setAnimationPing] = useState(false);
    const date = moment(props.date, "MM-DD-YYYY").startOf("hour").fromNow();

    useEffect(() => {
        const findUserById = () => {
            const key = Object.keys(usersData.users).find(user => usersData.users[user].id === props.userId)
            setUser(usersData.users[key]);
        }   

        getComments();
        findUserById();
    }, [])

    
    const getComments = () => {
        const data = commentsData.comments.filter(x => x.postId == props.id);

        setComments(data);
    }


    const isVocal = (char) => {
        const vocals = ['a', 'e', 'i', 'o', 'u'];

        if(char) {
            if(vocals.some((vocal) => char.toLowerCase().startsWith(vocal))){
                return true;
              } else {
                return false;
              }
        }
        return false;
    }

    
    const likePost = () => { 
        setAnimationPing(true);
        setTimeout(() => {
            setAnimationPing(false);
        }, 1000)

        setLikes(props.reactions + 1);
        setLiked(true);

        if(liked) {
            setLikes(likes - 1);
            setLiked(false);
        }
    }

    return (
        <div className="bg-gradient-to-t from-gray-900 to-gray-800 rounded-md px-4 py-4 mb-2">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                            <div>
                                {
                                    user && user.image 
                                    ? <Image alt="" src={user.image} width={45} height={45} className="bg-gray-800 rounded-full" />
                                    : <div className="bg-gray-800 rounded-full w-12 h-12"></div>
                                }
                            </div>
                            <div>
                                <button onClick={() => {router.push("/friends/" + user.id)}}>
                                    <h2 className="hover:underline text-gray-200 text-sm font-semibold">{user?.firstName}{user?.lastName ? " " + user.lastName : ""}</h2>
                                </button>
                                <p className="text-gray-400 text-xs mt-0">
                                    {date}
                                </p>
                            </div>
                        </div>
                        {
                            isVocal(user?.lastName)
                            ? <div className="flex items-center">
                                <i className="fa-solid fa-user-group text-xs text-gray-400"></i>
                                <p className="text-gray-400 text-xs ml-1">Amigos</p>
                            </div>
                            : <div className="flex items-center">
                                <i className="fa-solid fa-earth-americas text-xs text-gray-400"></i>
                                <p className="text-gray-400 text-xs ml-1">Público</p>
                            </div>
                        }
                
                    </div>
                    <div className="mt-2 text-gray-200 text-sm">{props.body}</div>
                    <div className="mt-5 flex">
                        <button onClick={likePost} className="relative flex items-center rounded-md hover:bg-gray-700 px-3 py-2">
                            <i className={liked && animationPing ? "absolute fa-solid fa-heart text-red-500" : liked ? "absolute fa-solid fa-heart text-red-500" : "absolute fa-regular fa-heart text-red-500"}></i> 
                            <i className={liked && animationPing ? "animate-ping fa-solid fa-heart text-red-500" : liked ? "fa-solid fa-heart text-red-500" : "fa-regular fa-heart text-red-500"}></i> 
                            <p className="text-xs font-bold ml-1 text-gray-200">{likes}</p>
                        </button>
                        <button onClick={() => {router.push("/post/" + props.id)}} className="flex items-center rounded-md hover:bg-gray-700 px-3 py-2">
                            <i className="fa-solid fa-comment text-blue-500"></i>
                            <p className="text-xs font-bold ml-1 text-gray-200">{comments.length}</p>
                        </button>  
                        <button className="flex items-center rounded-md hover:bg-gray-700 px-3 py-2">
                            <i className="fa-solid fa-share text-gray-100"></i>
                            <p className="text-xs font-bold ml-1 text-gray-200">0</p>
                        </button>  
                    </div>
        
                </div>
    )
}

function Post({props}) {
    return (
        <PostData props={props} />
    )
}

export default Post;
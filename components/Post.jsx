'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import usersData from "../app/data/users.json";

function PostData({props}) {
    const fecha = new Date();
    const router = useRouter();
    const [user, setUser] = useState({});

    useEffect(() => {
        console.log(props)
        const findUserById = () => {
            const key = Object.keys(usersData.users).find(user => usersData.users[user].id === props.userId)
            setUser(usersData.users[key]);
        }   

        findUserById();
    }, [props.id])

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

    function randomNumber(number) {
        return Math.floor(Math.random() * number) + 1;
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
                                    <h2 className="text-gray-200 text-sm font-semibold">{user?.firstName}{user?.lastName ? " " + user.lastName : ""}</h2>
                                </button>
                                <p className="text-gray-400 text-xs mt-0">
                                    {("0" + fecha.getDate()).slice(-2)}-{("0" + (fecha.getMonth() + 1)).slice(-2)}-{fecha.getFullYear()}
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
                        <button className="flex items-center rounded-md hover:bg-gray-700 px-3 py-2">
                            <i className="fa-solid fa-heart text-red-500"></i> 
                            <p className="text-xs font-bold ml-1 text-gray-200">{props.reactions}</p>
                        </button>
                        <button onClick={() => {router.push("/post/" + props.id)}} className="flex items-center rounded-md hover:bg-gray-700 px-3 py-2">
                            <i className="fa-solid fa-comment text-blue-500"></i>
                            <p className="text-xs font-bold ml-1 text-gray-200">{randomNumber(10)}</p>
                        </button>  
                        <button className="flex items-center rounded-md hover:bg-gray-700 px-3 py-2">
                            <i className="fa-solid fa-share text-gray-100"></i>
                            <p className="text-xs font-bold ml-1 text-gray-200">{randomNumber(5)}</p>
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
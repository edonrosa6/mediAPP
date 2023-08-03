"use client"

import { useEffect, useState } from "react";

import usersData from "../../data/users.json";

import ProfilePicture from "@/components/ProfilePicture";

function ProfileDetails({params}) {
    const [friend, setFriend] = useState({});

    const findUserById = () => {
        const key = Object.keys(usersData.users).find(user => usersData.users[user].id === parseInt(params.id))
        setFriend(usersData.users[key]);
    }

    useEffect(() => {
        findUserById();
    }, [])

    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
            <div className="col-span-2 border border-gray-800 mt-6 pb-12 rounded-[1.6rem] shadow-2xl bg-gray-800">
                <div>
                    <div className="bg-gray-700 h-[12rem] w-full rounded-t-3xl border border-gray-700"></div>

                    <div className="px-10 -mt-20">
                        <div className="mb-3 flex items-start justify-start">
                            <div className="rounded-full border-[0.3rem] border-gray-800">
                                <ProfilePicture width={140} height={140} urlImage={friend.image} backgroundColor="blue" />
                            </div>
                        </div>
                        <div className="font-semibold text-white text-2xl text-base">{friend?.firstName} {friend?.lastName}</div>
                        <div className="-mt-1">{friend?.company?.department}</div>
                        <div className="mt-1 text-gray-500 text-sm">{friend?.address?.city}{friend?.address?.state ? ", " : ""}{friend?.address?.state}</div>

                        <div className="flex gap-2">
                            <button className="transition duration-300 ease-in-out bg-blue-600 hover:bg-blue-500 px-4 text-gray-100 py-2 rounded-full text-sm mt-3 font-semibold">
                                <i className="fa-solid fa-user-plus mr-2"></i>
                                Añadir a mis amigos
                            </button>
                            <button className="transition duration-300 ease-in-out bg-gray-600 hover:bg-gray-500 px-4 py-2 text-gray-100 rounded-full text-sm mt-3 font-semibold">
                                <i className="fa-solid fa-paper-plane mr-2"></i>
                                Enviar mensaje
                            </button>
                            <button className="transition duration-300 ease-in-out bg-gray-600 hover:bg-gray-500 px-4 py-2 text-gray-100 rounded-full text-sm mt-3 font-semibold">
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                            </button>
                        </div>
                    </div>
                </div>  
            </div>

                         
            {/* <div className="flex mt-4 gap-2">
                            <div className="border px-3 py-2 border border-gray-700 rounded-full text-sm text-gray-400">Fútbol</div>
                            <div className="border px-3 py-2 border border-gray-700 rounded-full text-sm text-gray-400">Escuchar música</div>
                            <div className="border px-3 py-2 border border-gray-700 rounded-full text-sm text-gray-400">Estudiar programación</div>
                        </div> */}
           <div className="col-span-1 border border-gray-800 px-12 py-12 mt-6 rounded-3xl bg-gray-800 shadow-2xl">
                <div>
                    <h2 className="text-white font-semibold text-xl mb-3">Información</h2>
                    <div className="flex items-center">
                    <div className="w-6 h-5">

                        <i className="fa-solid fa-cake-candles text-xl text-white"></i>
                        </div>
                        <p className="text-gray-300 my-2 ml-2">Nació en <span>{friend?.birthDate}</span></p>
                    </div>
                    <div className="flex items-center">
                    <div className="w-6 h-5">

                        <i className="fa-solid fa-graduation-cap text-white text-xl"></i>                        
                        </div>
                        <p className="text-gray-300 my-2 ml-2">Estudió en <span>{friend?.university}</span></p>
                    </div>
                    <div className="flex items-center">
                    <div className="w-6 h-5">
                        <i className="fa-solid fa-briefcase text-xl text-white"></i>

                        </div>
                        <p className="text-gray-300 my-2 ml-2">Trabaja en {friend?.company?.name}</p>
                    </div>
                    <div className="flex items-center">
                    <div className="w-6 h-5">
                        <i className="fa-solid fa-phone text-white text-xl"></i>
                        </div>
                        <p className="text-gray-300 my-2 ml-2">{friend?.phone}</p>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default ProfileDetails;
"use client"

import { useEffect, useState } from "react";

import usersData from "../../data/users.json";

import ProfilePicture from "@/components/ProfilePicture";

import moment from "moment";
import "moment/locale/es";

function ProfileDetails({params}) {
    const [friend, setFriend] = useState({});
    const [birthDate, setBirthDate] = useState(null);
    const [loading, setLoading] = useState(true);

    const findUserById = () => {
        const key = Object.keys(usersData.users).find(user => usersData.users[user].id === parseInt(params.id))
        setFriend(usersData.users[key]);
    }

    useEffect(() => {
        findUserById();
        setBirthDate(moment(friend.birthDate, "YYYY-MM-DD").format("LL"));
        setLoading(false);
    }, [])

    return (

        <>
            {
                !loading ?
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="col-span-3 border border-gray-700 mt-6 pb-12 rounded-xl shadow-2xl bg-gray-800">
                        <div>
                            <div className="bg-gray-700 h-[12rem] w-full rounded-t-xl border border-gray-700"></div>
        
                            <div className="px-10 -mt-20">
                                <div className="mb-3 flex items-start justify-start">
                                    <div className="rounded-full border-[0.3rem] border-gray-800">
                                        <ProfilePicture width={140} height={140} urlImage={friend.image} backgroundColor="blue" />
                                    </div>
                                </div>
                                <div className="font-semibold text-white text-[1.3rem] text-base">{friend?.firstName} {friend?.lastName}</div>
                                <div className="-mt-1">{friend?.company?.department}</div>
                                <div className="mt-1 text-gray-500 text-sm">{friend?.address?.city}{friend?.address?.state ? ", " : ""}{friend?.address?.state}</div>
        
                                <div className="flex flex-col md:flex-row gap-2">
                                    <button className="transition duration-300 ease-in-out bg-blue-600 hover:bg-blue-500 px-4 text-gray-100 py-2 rounded-full text-sm mt-3 font-semibold">
                                        <i className="fa-solid fa-user-plus mr-2"></i>
                                        Añadir a mis amigos
                                    </button>
        
                                    <div className="flex gap-1 items-center justify-between">
                                        <button className="w-full transition duration-300 ease-in-out bg-gray-600 hover:bg-gray-500 px-4 py-2 text-gray-100 rounded-full text-sm mt-3 font-semibold">
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
                    </div>
        
                    <div className="md:col-span-1 col-span-3 border border-gray-700 px-12 py-6 rounded-xl bg-gray-800 shadow-2xl">
                        <div className="font-semibold text-lg">Más Información</div>
        
                        <div className="flex flex-col gap-1 mt-3">
                            <div className="text-sm flex items-center gap-2 text-gray-400">
                                <div>
                                    <i className="fa-solid fa-graduation-cap w-4 h-2"></i>
                                </div>
                                <div>
                                    Estudió en {friend?.university}
                                </div>
                            </div>
        
                            <div className="text-sm flex items-center gap-2 text-gray-400">
                                <div>     
                                    <i className="fa-solid fa-briefcase w-4 h-2"></i>
                                </div>
                                <div>
                                    Trabaja en {friend?.company?.name}
                                </div>
                            </div>
        
                            <div className="text-sm flex items-center gap-2 text-gray-400">
                                <div>
                                    <i className="fa-solid fa-cake-candles w-4 h-2"></i>
                                </div>
                                <div>
                                    Nació en: {birthDate}
                                </div>
                            </div>
                        </div>
        
                    </div>
        
                    <div className="md:col-span-2 col-span-3 border border-gray-700 px-12 py-6 rounded-xl bg-gray-800 shadow-2xl">
                        <div className="text-lg font-semibold">Publicaciones</div>
                    </div>
                </div>
                : <div className="text-gray-400 mx-auto mt-6 animate-pulse">Cargando...</div>
            }
        </>
       
    )
}

export default ProfileDetails;
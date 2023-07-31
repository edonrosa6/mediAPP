"use client"
import Image from "next/image";
import usersData from "../../data/users.json";
import { useEffect, useState } from "react";



function Friend({params}) {
    const [friend, setFriend] = useState({});

    const findUserById = () => {
        const key = Object.keys(usersData.users).find(user => usersData.users[user].id === params.id)
        setFriend(usersData.users[key]);
    }

    useEffect(() => {
        findUserById();
    }, [])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
           <div className="bg-gradient-to-t from-gray-900 to-gray-800 px-12 py-12 mt-6 rounded-3xl">
                <div className="mb-3">
                    <Image className="rounded-full bg-yellow-300" src={friend.image} alt={friend.firstName} height={100} width={100}  />
                </div>
                <div className="font-semibold text-white text-base">{friend.firstName} {friend.lastName}</div>
                <div className="text-gray-500 text-sm">{friend.email}</div>
                <div className="text-gray-200 mt-3 text-sm"><i className="fa-solid fa-location-dot mr-2"></i>{friend.address.address}</div>
           </div>
           <div className="col-span-2 bg-gradient-to-t from-gray-900 to-gray-800 px-12 py-12 mt-6 rounded-3xl">
                <div>
                    <h2 className="text-white font-semibold text-xl mb-3">Información</h2>
                    <div className="flex items-center">
                    <div className="w-6 h-5">

                        <i className="fa-solid fa-cake-candles text-xl text-white"></i>
                        </div>
                        <p className="text-gray-300 my-2 ml-2">Nació en <span>{friend.birthDate}</span></p>
                    </div>
                    <div className="flex items-center">
                    <div className="w-6 h-5">

                        <i className="fa-solid fa-graduation-cap text-white text-xl"></i>                        
                        </div>
                        <p className="text-gray-300 my-2 ml-2">Estudió en <span>{friend.university}</span></p>
                    </div>
                    <div className="flex items-center">
                    <div className="w-6 h-5">
                        <i className="fa-solid fa-briefcase text-xl text-white"></i>

                        </div>
                        <p className="text-gray-300 my-2 ml-2">Trabaja en {friend.company.name}</p>
                    </div>
                    <div className="flex items-center">
                    <div className="w-6 h-5">
                        <i className="fa-solid fa-phone text-white text-xl"></i>
                        </div>
                        <p className="text-gray-300 my-2 ml-2">{friend.phone}</p>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Friend;
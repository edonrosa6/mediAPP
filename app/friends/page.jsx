"use client"
import Card from "@/components/Card";
import usersData from "../data/users.json";
import { useState } from "react";

function Friends() {
    const [friends, setFriends] = useState(usersData.users);

    const sendData = (friend) => {
        setFriends(friends.filter(item => item.id !== friend.id))
    }

    return (
        <div className="w-full flex items-center justify-center">
            {
                friends.length > 0 ?
                <div>
                    <div className="text-gray-200 font-semibold text-xl my-4">Amigos que quizá conozcas</div>

                    <div className="grid mb-5 grid-cols-2 max-w-3xl md:grid-cols-4 lg:grid-cols-5 gap-1">
                        {
                            friends.map((friend) => (
                                <div className="hover:shadow-2xl" key={friend.id}>            
                                    <Card sendData={sendData} props={friend} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                : <div className="text-gray-400 mt-5">No se encontraron amigos disponibles.</div>
            }
           
        </div>
    )
}

export default Friends;
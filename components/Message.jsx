import { useEffect, useState } from "react";
import ProfilePicture from "./ProfilePicture";

import userData from "../app/data/users.json";

function Message({message}) {
    const [user, setUser] = useState({});

    useEffect(() => {
        const getUsersByMessage = () => {
            const key = Object.keys(userData.users).find(user => userData.users[user].id === message.userId)
            setUser(userData.users[key]);
        }

        getUsersByMessage();
    }, [])

    return (
        <div className="hover:bg-gray-700 rounded-md hover:text-gray-200 text-gray-400 cursor-pointer">
            <div className="flex items-center gap-3 py-2">
                <ProfilePicture urlImage={user.image} />
                <div className="text-xs">{message.title}</div>
                <div className="bg-blue-500 rounded-full w-2 h-2"></div>
            </div>
            <hr className="border-gray-800"></hr>
        </div>


    )
}

export default Message;
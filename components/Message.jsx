import { useEffect, useState } from "react";
import ProfilePicture from "./ProfilePicture";

import userData from "../app/data/users.json";
import moment from "moment";

function Message({message}) {
    const [user, setUser] = useState({});
    const date = moment(message.date, "MM-DD-YYYY").startOf("hour").fromNow();

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
                <div>
                    <div className="flex items-center">
                        <div className="text-xs text-gray-200 font-semibold">{user.fisrtName}{user.lastName ? " " + user.lastName : ""}</div>
                        <div className="h-[3px] w-[3px] bg-gray-400 rounded-full mx-1"></div>
                        <div className="text-[0.6rem]">{date}</div>
                    </div>
                    <div className="text-xs text-gray-200 text-left">{message.title}</div>
                </div>
            </div>
        </div>


    )
}

export default Message;
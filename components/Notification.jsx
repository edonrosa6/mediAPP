import { useEffect, useState } from "react";
import moment from "moment";
import 'moment/locale/es';

import usersData from "./../app/data/users.json";
import ProfilePicture from "./ProfilePicture";

function Notification({notification}) {
    const [user, setUser] = useState(null);
    const date = moment(notification.date, "MM-DD-YYYY").startOf('hour').fromNow();
    
    useEffect(() => {
        const findUserById = () => {
            const key = Object.keys(usersData.users).find(user => usersData.users[user].id === notification.user.id)
            setUser(usersData.users[key]);
        }

        findUserById();
    }, [])

    const getIconColor = (iconName) => {
        const color = iconName === "comment" ? "blue" : iconName === "heart" ? "red" : "gray";
        return color;
    }

    return (
        <div>
            <div className="flex justify-between">
                <div className="flex items-center">
                    <div>
                        {
                            user && user.image ? <ProfilePicture width={45} height={45} urlImage={user?.image} /> : <div className="w-12 h-12 bg-gray-800 rounded-full"></div>
                        }
                    </div>
                    <div>
                        <h3 className="text-xs ml-3 text-gray-200 font-semibold">
                            {user?.firstName}{user?.lastName ? + " " + user?.lastName : ""} <span className="text-xs text-gray-400 mt-1 lowercase">{notification.title}</span>
                        </h3>
                        <div className="ml-3 font-normal text-[0.7rem] text-gray-400">{date}</div>
                    </div>
                </div>
               
                <div className="flex justify-center items-center">
                    <i className={`fa-solid fa-${notification.iconName} text-center bg-${getIconColor(notification.iconName)}-500 text-sm px-1 py-1 w-6 h-6 rounded-full`}></i>
                </div>
            </div>
            <hr className="border-gray-800 my-3"></hr>
        </div>
        
    )
}

export default Notification;
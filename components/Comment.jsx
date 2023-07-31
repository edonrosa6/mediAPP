import ProfilePicture from "./ProfilePicture";
import usersData from "../app/data/users.json";
import { useEffect, useState } from "react";

function Comment({comment}) {
    const [user, setUser] = useState(null);
    const fecha = new Date();

    useEffect(() => {
        const findUserById = () => {
            const key = Object.keys(usersData.users).find(user => usersData.users[user].id === comment.user.id);
            if(!key) return;
            setUser(usersData.users[key]);
        }   

        findUserById();    
    }, [])

    return (
        <div className="w-full">
            <div>
                {
                    user && user.image ?
                        <div>
                            <div className="flex items-start gap-3 py-2">
                                <ProfilePicture urlImage={user.image} />
                                <div>
                                    <div className="text-sm text-gray-200 font-semibold">{user.firstName}{user.lastName ? " " + user.lastName : ""}</div>
                                    <div className="text-xs text-gray-400">{fecha.getDate()}-{("0" + (fecha.getMonth() + 1)).slice(-2)}-{fecha.getFullYear()}</div>
                                </div>
                            </div>
                            <div>{comment.body}</div>
                            <hr className="border-gray-800 my-3"></hr>
                        </div>

                    : <div></div>
                }
                         

            </div>
        </div>
    )
}

export default Comment;
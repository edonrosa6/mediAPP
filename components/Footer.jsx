"use client"
import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import ProfilePicture from "./ProfilePicture";

import usersData from "../app/data/users.json";

export default function Footer() {
    const [user, setUser] = useState({});
    const pathname = usePathname();

    useEffect(() => {
        const key = Object.keys(usersData.users).find(user => usersData.users[user].id === 1)
        setUser(usersData.users[key]);
    }, [])

    return (
        <footer class="border border-gray-800 backdrop-blur-md mt-3 md:hidden block absolute bottom-0 sticky w-full h-16  bg-gradient-to-t from-gray-900
            fixed left-0 bottom-0 rounded-full bottom-3
            flex justify-center items-center
            text-gray-200 text-2xl"
        >
            <div className="flex items-center w-full px-6 justify-between gap-4">
                <div>
                    <Link className={pathname === "/" ? "text-blue-500" : "text-gray-200"} href="/">
                    <i className="fa-solid fa-home"></i>
                    </Link>
                </div>
                <div>
                <Link className={pathname === "/profile" ? "text-blue-500" : "text-gray-200"} href="/profile">
                    <i className="fa-solid fa-user"></i>
                    </Link>
                </div>
                <div>
                <Link className={pathname === "/friends" ? "text-blue-500" : "text-gray-200"} href="/friends">
                    <i className="fa-solid fa-users"></i>
                    </Link>
                </div>
                <div>
                    <Link className={pathname === "/notifications" ? "text-blue-500" : "text-gray-200"} href="/notifications">
                        <div className="flex items-start">
                            <div>
                                <i className="fa-solid fa-bell"></i>
                            </div>
                            <div className="font-semibold rounded-full text-white">
                                <div className="font-semibold bg-red-500 w-2 h-2 text-[0.6rem] rounded-full text-white"></div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div>
                <Link className={pathname === "/friends/1" ? "text-blue-500" : "text-gray-200"} href="/friends/1">
                    <ProfilePicture urlImage={user.image} backgroundColor={pathname === "/friends/1" ? "blue" : ""} />
                </Link>
                </div>
            </div>
          
        </footer>
    )
}
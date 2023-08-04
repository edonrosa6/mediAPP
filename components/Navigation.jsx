'use client'

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import usersData from "./../app/data/users.json";
import Logo from "../public/mediAPP-logo.png";
import notificationsData from "./../app/data/notifications.json";
import DropdownMenuProfile from './DropdownMenuProfile';

function Navigation() {
    const pathname = usePathname();
    const [navbar, setNavbar] = React.useState(false);
    const [user, setUser] = React.useState(null);

    useEffect(() => {
        const findUserById = () => {
            const key = Object.keys(usersData.users).find(user => usersData.users[user].id === 1)
            setUser(usersData.users[key]);
        }
      
        findUserById();
  }, [])
  

    return (
        <header className="sticky top-0 backdrop-blur-sm z-50">
            <nav className="border-b border-b-gray-900 bg-gradient-to-b from-gray-900">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-3 md:block">
                            <Link href="/">
                                <Image alt="" height={"auto"} width={120} src={Logo} />
                            </Link>
                         
                            {/* <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            viewBox="0 0 20 20"
                                            fill="#fff"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="#fff"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div> */}
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                                navbar ? "block" : "hidden"
                            }`}
                        >                        

                            <ul className="items-center justify-center space-y-8 gap-2 md:flex md:space-x-6 md:space-y-0">
                                <li className={pathname == "/" ? "text-blue-500" : "text-gray-600 hover:text-blue-500"}>
                                    <Link href="/" className="block mr-auto text-center ml-auto"><i className="fa-solid fa-home fa-xl"></i></Link>
                                </li>
                                <li className={pathname == "/profile" ? "text-blue-500" : "text-gray-600 hover:text-blue-500"}>
                                    <Link href="/profile" className="block mr-auto text-center ml-auto"><i className="fa-solid fa-user fa-xl"></i></Link>
                                </li>
                                <li className={pathname == "/friends" ? "text-blue-500" : "text-gray-600 hover:text-blue-500"}>
                                    <Link href="/friends" className="block mr-auto text-center ml-auto"><i className="fa-solid fa-users fa-xl"></i></Link>
                                </li>     
                                <li className={pathname == "/notifications" ? "text-blue-500" : "text-gray-600 hover:text-blue-500"}>
                                    <Link href="/notifications" className="block mr-auto text-center ml-auto">
                                        <div className="flex items-start">
                                            <div>
                                                <i className="fa-solid fa-bell fa-xl"></i>
                                            </div>
                                            <div className="w-4 h-4 font-semibold text-[10px] bg-red-500 rounded-full text-white">
                                                {notificationsData.notifications.length}
                                            </div>
                                        </div>
                                    </Link>
                                </li>   
                                <li>
                                    {
                                        user ?
                                            <DropdownMenuProfile user={user} />
                                        :   <div className="w-12 h-12 bg-gray-800 rounded-full"></div>
                                    }
                                </li>   
                            </ul>
                        </div>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Navigation;
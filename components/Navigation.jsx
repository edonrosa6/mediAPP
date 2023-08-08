'use client'

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import Image from 'next/image';

import usersData from "./../app/data/users.json";
import notificationsData from "./../app/data/notifications.json";
import Logo from "../public/mediAPP-logo.png";
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
  
    const search = () => {
        console.log("buscando...");
    }

    return (
        <header className="sticky top-0 backdrop-blur-sm z-50">
            <nav className="border-b border-b-gray-800 bg-gradient-to-b from-gray-900">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl sm:items-center sm:flex sm:px-8">
                    <div className='w-full'>
                        <div className='sm:grid lg:grid-cols-4 flex sm:grid-cols-2 sm:gap-1 lg:gap-4'>
                            <div className='sm:col-span-1'>
                                <div className="flex items-center justify-between py-3 sm:py-1 sm:block">
                                    <Link href="/">
                                        <Image className="sm:block hidden" alt="" height={"auto"} width={120} src={Logo} />
                                        <Image className="block sm:hidden" alt="" height={"auto"} width={90} src={Logo} />
                                    </Link>
                                </div>
                            </div>
                        
                            <div className='sm:col-span-1 lg:col-span-2 col-span-1 flex w-full ml-2 sm:ml-0'> 
                                <form 
                                    onSubmit={(e) => { 
                                        e.preventDefault(); 
                                        search() 
                                    }} 
                                    className='flex w-full items-center'
                                >
                                    <div className='relative'>
                                        <span className='inset-x-4 px-4 inset-y-0 left-0 absolute flex items-center text-gray-400'>
                                            <i className='fa-solid fa-search sm:text-base text-xs'></i>
                                        </span>
                                    </div>
                                    <div className='w-full'>
                                        <input type='text' placeholder='Buscar...' className='focus:border-gray-500 text-xs sm:text-base focus:text-gray-200 focus:outline-none w-full py-1.5 sm:py-2 pl-10 pr-4 bg-gray-700 rounded-full'></input>
                                    </div>
                                </form>
                            </div>

                            <div className='sm:col-span-2 lg:col-span-1 justify-end flex items-center'>
                                <div
                                    className={`flex justify-self-center pb-3 mt-8 sm:block sm:pb-0 sm:mt-0 ${
                                        navbar ? "block" : "hidden"
                                    }`}
                                >                        

                                    <ul className="mb-3 lg:mb-0 flex items-center lg:justify-between sm:justify-start space-y-8 gap-1 sm:flex lg:space-x-0 sm:space-y-0">
                                        <li className={pathname == "/" ? "text-blue-500 bg-gray-600 w-10 h-10 flex items-center rounded-full" : "bg-gray-600 rounded-full flex items-center h-10 w-10 text-gray-300 hover:text-blue-500"}>
                                            <Link href="/" className="block mr-auto justify-center items-center flex w-10 h-10 text-center ml-auto"><i className="fa-solid fa-home xl:text-lg lg:text-sm"></i></Link>
                                        </li>
                                        <li className={pathname == "/messages" ? "text-blue-500 bg-gray-600 w-10 h-10 flex items-center rounded-full" : "bg-gray-600 rounded-full flex items-center h-10 w-10 text-gray-300 hover:text-blue-500"}>
                                            <Link href="/messages" className="block mr-auto justify-center items-center flex w-10 h-10 text-center ml-auto"><i className="fa-solid fa-comment-dots xl:text-lg lg:text-sm"></i></Link>
                                        </li>
                                        <li className={pathname == "/friends" ? "text-blue-500 bg-gray-600 w-10 h-10 flex items-center rounded-full" : "bg-gray-600 rounded-full flex items-center h-10 w-10 text-gray-300 hover:text-blue-500"}>
                                            <Link href="/friends" className="block mr-auto justify-center items-center flex w-10 h-10 text-center ml-auto"><i className="fa-solid fa-users xl:text-lg lg:text-sm"></i></Link>
                                        </li>     
                                        <li className={pathname == "/notifications" ? "text-blue-500 bg-gray-600 w-10 h-10 flex items-center rounded-full" : "bg-gray-600 rounded-full flex items-center h-10 w-10 text-gray-300 hover:text-blue-500"}>
                                            <Link href="/notifications" className="block mr-auto justify-center items-center flex w-10 h-10 text-center ml-auto">
                                                <div className="relative flex items-start justify-center">
                                                    <div>
                                                        <i className="fa-solid fa-bell xl:text-lg lg:text-sm"></i>
                                                    </div>
                                                    <div className="absolute left-5 w-2 h-2 font-semibold text-[0.4rem] bg-red-500 rounded-full text-white">
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
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navigation;
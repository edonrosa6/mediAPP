'use client'
import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import ProfilePicture from './ProfilePicture';

function Navigation({props}) {
    const pathname = usePathname();
    const [navbar, setNavbar] = React.useState(false);
    const [user, setUser] = React.useState(null);

    useEffect(() => {
      async function getUser() {
          const url = 'https://dummyjson.com/users/1';
          const res = await fetch(url);
          const data = await res.json();
          setUser(data);
          console.log(data);
      }
      
      getUser();
  }, [])
  

    return (
        <header className="sticky top-0 backdrop-blur-sm">
            <nav className="border-b border-b-gray-900 bg-gradient-to-b from-gray-900">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link href="/">
                                <h2 className=" text-white text-2xl font-bold">mediAPP</h2>
                            </Link>
                         
                            <div className="md:hidden">
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
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                                navbar ? "block" : "hidden"
                            }`}
                        >                        

                            <ul className="items-center justify-center space-y-8 gap-2 md:flex md:space-x-6 md:space-y-0">
                                <li className={pathname == "/" ? "h-9 w-12 items-center border-b-2 border-b-indigo-500 block py-2 pl-3 pr-4 text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" : "text-gray-600 hover:text-blue-600"}>
                                    <Link href="/" className="block mr-auto text-center ml-auto"><i className="fa-solid fa-home fa-xl"></i></Link>
                                </li>
                                <li className={pathname == "/profile" ? "h-9 w-12 items-center border-b-2 border-b-indigo-500 block py-2 pl-3 pr-4 text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" : "text-gray-600 hover:text-blue-600"}>
                                    <Link href="/profile" className="block mr-auto text-center ml-auto"><i className="fa-solid fa-user fa-xl"></i></Link>
                                </li>
                                <li className={pathname == "/friends" ? "h-9 w-12 items-center border-b-2 border-b-indigo-500 block py-2 pl-3 pr-4 text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" : "text-gray-600 hover:text-blue-600"}>
                                    <Link href="/friends" className="block mr-auto text-center ml-auto"><i className="fa-solid fa-users fa-xl"></i></Link>
                                </li>     
                                <li className={pathname == "/tools" ? "h-9 w-12 items-center border-b-2 border-b-indigo-500 block py-2 pl-3 pr-4 text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" : "text-gray-600 hover:text-blue-600"}>
                                    <Link href="/notifications" className="block mr-auto text-center ml-auto"><i className="fa-solid fa-bell fa-xl"></i></Link>
                                </li>   
                                <li>
                                    <Link href="/friends/1" className="block mr-auto text-center ml-auto">
                                        {
                                            user ?
                                                <ProfilePicture hover={true} width={45} height={45} urlImage={user.image} />
                                            :   <div className="w-12 h-12 bg-gray-800 rounded-full"></div>
                                        }
                                    </Link>
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
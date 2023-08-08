"use client"
import { useEffect, useState } from "react";
import "moment/locale/es";
import Message from "@/components/Message";
import messagesData from "../data/messages.json";
import usersData from "../data/users.json";
import MessageTop from "@/components/MessageTop";
import MessageContent from "@/components/MessageContent";

function Messages() {
    const [messages, setMessages] = useState([]);
    const [messagesUser, setMessagesUser] = useState([]);
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState("");

    useEffect(() => { 
        const unique = messagesData.messages.filter((obj, index) => {            
            return index === messagesData.messages.findIndex(o => obj.userId === o.userId);
        });

        setMessages(unique);
    }, []);


    const getDataMessage = (message) => {
        const key = Object.keys(usersData.users).find(user => usersData.users[user].id === message.userId)
        setUser(usersData.users[key]);
        setMessagesUser(messagesData.messages.filter(x => x.userId === usersData.users[key].id));
    }

    const generateId = () => {
        return Math.floor(Math.random() * 100 + 1)
    }

    const sendMessage = () => {
        const req = {
            id: generateId(),
            userId: 1,
            date: new Date(),
            title: message
        }
        setMessagesUser((prev) => [...messagesUser, req]);
        setMessage("");
    }

    return (
        <div className="w-full max-w-7xl grid md:grid-cols-3 h-[89vh] gap-6 my-4">
            <aside className="hidden md:block border rounded-md px-6 py-3 border-gray-800">
                <div className="font-semibold my-3">Mensajes</div>
                {
                    messages.map((message) => (
                        <div key={message.id}>
                            <button className="w-full" onClick={() => {getDataMessage(message)}}>
                                <Message message={message} />
                            </button>
                        </div>
                    ))
                }
              
            </aside>
            <div className="flex flex-col justify-between border rounded-md px-6 py-3 border-gray-800">

                {
                    user ?

                    <>
                      <div>
                    {
                        user 
                        ? <MessageTop user={user} />
                        : null
                    }

                    <hr className="border-gray-800 my-4"></hr>

                    {
                        messagesUser.map((message) => (
                            <div key={message.id}>
                                <MessageContent message={message} />
                            </div>
                        ))
                    }
                    
                </div>

                <div className="flex items-center">
                    <div className="w-full">
                        <form className="bg-gray-700 flex items-center rounded-md w-full" 
                            onSubmit={(e) => {
                                e.preventDefault();
                                sendMessage();
                            }}>
                            <input value={message} onChange={(e) => setMessage(e.target.value)} className="py-3 px-4 focus:border-gray-500 mx-1 my-1 focus:text-gray-200 focus:outline-none bg-gray-800 border border-gray-700 text-sm rounded-lg block w-full" placeholder="Escribir mensaje..." required></input>
                            <button className="hover:bg-blue-400 mr-1 mt-1 mb-1 py-3 px-4 bg-blue-500 rounded-lg">
                                <i className="fa-solid fa-paper-plane"></i>
                            </button>
                        </form>
                        
                    </div>
                </div>
                    </>

                : <div className="text-center text-sm text-gray-400">Selecciona un mensaje primero.</div>

                }

              
            </div>
            <aside className="hidden md:block px-6 py-3">

            </aside>
        </div>
    )
}

export default Messages;
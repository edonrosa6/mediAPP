"use client"
import { useState } from "react";
import "moment/locale/es";
import Message from "@/components/Message";
import messagesData from "../data/messages.json";

function Messages() {
    const [messages] = useState(messagesData.messages);


    return (
        <div className="w-full max-w-7xl grid grid-cols-3 h-[89vh] gap-6 my-4">
            <aside className="border rounded-md px-6 py-3 border-gray-800">
                <div className="font-semibold my-3">Mensajes</div>
                {
                    messages.map((message) => (
                        <div key={message.id}>
                            <Message message={message} />
                        </div>
                    ))
                }
              
            </aside>
            <div className="bg-gray-800">

            </div>
            <aside className="bg-gray-800">

            </aside>
        </div>
    )
}

export default Messages;
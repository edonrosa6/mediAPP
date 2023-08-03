'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { successfullMessage } from "./Popup";
import { useState } from "react";


function Card({props, sendData}) {
    const [addedFriend, setAddedFriend] = useState(false);

    const router = useRouter();

    const addFriend = () => {
        successfullMessage("Se ha agregado a tus amigos");
        setAddedFriend(true);
    }

    const discard = () => {
        setAddedFriend(false);
    }

    const deleteFriend = () => {
        sendData(props);
    }

    return (
        <div className="relative w-full hover:shadow-xl bg-gradient-to-t from-gray-900 to-gray-800 px-2 py-3 mt-1 rounded-xl">
            <li className="list-none cursor-pointer" onClick={() => {
                router.push("/friends/" + props.id)
            }}>
                <div className="flex items-center mb-3 justify-center">
                    <Image className="bg-gray-700 rounded-full" src={props.image} alt={props.firstName} height={85} width={85}  />
                </div>
                <h5 className="hover:underline font-semibold tracking-tight truncate text-gray-200 text-sm">{props.firstName}{props.lastName ? " " + props.lastName : ""}</h5>
            </li>
            <p className="mb-3 font-normal text-gray-500 text-[0.8rem] truncate">{props.email}</p>
            <button onClick={!addedFriend ? addFriend : discard} className={addedFriend ? "hover:bg-gray-500 text-gray-200 text-xs py-1 px-2 rounded bg-gray-700 w-full flex items-center justify-center" : "hover:bg-blue-700 text-gray-200 text-xs py-1 px-2 rounded bg-blue-500 w-full flex items-center justify-center"}>
                { 
                    !addedFriend ? 
                    <>
                        <div>
                            <i className="fa-solid fa-add text-gray-200 mr-2"></i> 
                        </div>
                        <div>
                            Agregar
                        </div>
                    </>

                    : <div>
                        Descartar
                    </div>

                }
                
            </button>
                
            <button onClick={deleteFriend} className="absolute top-0 text-gray-500 hover:text-gray-300 right-0 mr-2">
                <i className="fa fa-solid fa-xmark"></i>
            </button>
        </div>  
    )
}
export default Card;
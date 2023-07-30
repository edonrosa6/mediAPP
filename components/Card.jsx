'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const showAlert = () => {
    Swal.fire({
        icon: 'success',
        title: 'Se ha agregado a tus amigos',
        showConfirmButton: false,
        toast: true,
        position: 'bottom-left',
        customClass: {
            title: 'text-gray-900',
        },
        timerProgressBar: true,
        timer: 2000,
    })
}

function Card({props}) {
    const router = useRouter();

    return (
        <div className="bg-gradient-to-t from-gray-900 to-gray-800 px-6 py-6 mt-1 rounded-xl">
            <li className="list-none cursor-pointer" onClick={() => {
                router.push("/friends/" + props.id)
            }}>
                <div className="mb-3">
                    <Image className="rounded-full bg-yellow-300" src={props.image} alt={props.firstName} height={100} width={100}  />
                </div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.firstName}</h5>
            </li>
            <p className="mb-3 font-normal text-gray-400 text-xs">{props.email}</p>
            <button onClick={showAlert}  className="text-gray-200 text-sm py-1 px-2 rounded bg-blue-500 w-full flex items-center justify-center">
                <div>
                    <i className="fa-solid fa-add text-gray-200 mr-2"></i> 
                </div>
                <div>
                    Agregar
                </div>
            </button>
            <button className="mt-2 text-gray-200 text-sm py-1 px-2 rounded bg-red-500 w-full flex items-center justify-center">
                <div>
                    <i className="fa-solid fa-trash text-gray-200 mr-2"></i> 
                </div>
                <div>
                    Eliminar
                </div>
            </button>
        </div>  
    )
}
export default Card;
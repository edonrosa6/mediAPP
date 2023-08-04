import Image from "next/image";

export default function Modal({user, showModalImage}) {
    const showModal = (value) => {
        showModalImage(value);
    }

    return (
        <div
            className="justify-center items-center bg-opacity-50 bg-gray-950 flex flex-col overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
            <div>
                <div className="text-right">
                    <button onClick={() => showModal(false)}>
                        <i className="fa-solid fa-xmark text-gray-400 hover:text-gray-200 text-lg"></i>
                    </button>
                </div>
                
                <div className="bg-blue-500">
    
                    <Image src={user.image} height={350} width={350} alt=""/>
                </div>
            </div>
            
        </div>
    )
}
import { useState } from "react";
import ProfilePicture from "./ProfilePicture";
import { usePathname, useRouter } from "next/navigation";

function DropdownMenuProfile({user}) {
    const router = useRouter();
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);
    const listMenu = [
        {
            id: 1,
            menuItem: "Perfil",
            iconName: "fa-user",
            url: "/friends/1"
        },
        {
            id: 2,
            menuItem: "Configuración",
            iconName: "fa-gear",
            url: "/settings"
        }
    ]

    const navigateTo = (url) => {
        router.push(url);
        setIsOpen((prev) => !prev);
    }

    return (
        <div className="relative flex flex-col items-center bg-gray-800 rounded-md">
            <button onClick={() => setIsOpen((prev) => !prev)} className="hover:bg-gray-700 py-2 px-3 flex items-center justify-between tracking-wider rounded-lg">
                <div className="mr-3 text-sm font-bold">
                    {user.firstName}
                </div>
                <ProfilePicture backgroundColor="blue" urlImage={user.image} />
            </button>

            {isOpen && <div className="bg-gray-800 shadow-2xl absolute top-20 right-0 flex flex-col items-start rounded-lg px-2 py-1 w-44">
                {listMenu.map((item) => (
                    <button onClick={() => navigateTo(item.url)} key={item.id} className={`${pathname === item.url ? "bg-gray-600" : ""} my-1 hover:bg-gray-700 text-left flex items-center gap-3 rounded-md py-2 px-4 w-full`}>
                        <i className={"fa-solid " + item.iconName}></i>
                        <h3 className="text-sm tect-gray-300">{item.menuItem}</h3>
                    </button>
                ))}
            </div>}
        </div>
    );
}

export default DropdownMenuProfile;
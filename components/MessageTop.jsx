import ProfilePicture from "./ProfilePicture";

export default function MessageTop({user}) {
    return (
        <div className="w-full mt-3">
            <div className="flex items-center justify-between">
                <div>
                    <ProfilePicture urlImage={user.image} />
                </div>
                <div className="text-sm font-semibold ml-3">{user.firstName} {user.lastName}</div>
                <button className="hover:bg-gray-800 w-7 h-7 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </button>
            </div>
        </div>
    )
}
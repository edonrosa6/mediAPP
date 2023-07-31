import Image from "next/image";

function ProfilePicture({urlImage, width, height, hover}) {
    return (
        <div>
            {
                urlImage ?
                    <Image alt="" src={urlImage} width={width ? width : 40} height={height ? height : 40} className={hover ? "hover:bg-blue-500 rounded-full bg-gray-800" : "rounded-full bg-gray-800"} />
                    : <div className="rounded-full bg-gray-800"></div>
            }
        </div>
    )
}

export default ProfilePicture;
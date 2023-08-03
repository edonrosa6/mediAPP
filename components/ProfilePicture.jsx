import Image from "next/image";

function ProfilePicture({urlImage, width, height, hover, backgroundColor}) {

    const bgColor = () => {
        console.log(backgroundColor)
        return backgroundColor ? backgroundColor + "-500" : "gray-800";
    }

    return (
        <>
            {
                urlImage ?
                    <Image alt="" src={urlImage} width={width ? width : 40} height={height ? height : 40} className={hover ? `hover:bg-blue-500 rounded-full bg-${bgColor()}` : `bg-${bgColor()} rounded-full`} />
                    : <div className={`rounded-full bg-${bgColor()} w-[40px] h-[40px]`}></div>
            }
        </>
    )
}

export default ProfilePicture;
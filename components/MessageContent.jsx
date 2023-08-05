import moment from "moment"

export default function MessageContent({message}) {
    const date = moment(message.date, "MM-DD-YYYY hh:mm:ss").format("LLL");

    return (
        <div>
            {
                message.userId === 1 
                ?  <div className="mt-3 ml-auto bg-blue-700 rounded-lg px-3 py-2 w-fit">
                        <p>{message.title}</p>
                        <p className="text-[0.6rem] text-gray-400">{date}</p>
                    </div>

                :  <div className="mt-3 bg-gray-700 rounded-lg px-3 py-2 w-fit">
                        <p>{message.title}</p>
                        <p className="text-[0.6rem] text-gray-400">{date}</p>
                    </div>
            }
           
        </div>
    )
}
import NoData from "./NoData";
import PostNoData from "./PostNoData";

export default function SkeletonHome() {
    return (
        <div className="grid w-full grid-cols lg:grid-cols-4 flex gap-4">
            <aside className="hidden sticky top-[5rem] lg:block px-6 rounded-md mt-2 mb-2 h-screen py-5 bg-gray-900">
                <button>
                <div className="animate-pulse bg-gray-800 rounded-full w-12 h-12"></div>
                <div className="ml-3 font-semibold w-full"></div>
                </button>

                <hr className="my-3 border-gray-800"></hr>
                <NoData />
                <NoData />
                <NoData />
            </aside>
            <div className="lg:col-span-2 w-full">
                <div className="w-full mt-[1.5rem]">
                    <PostNoData />
                    <PostNoData />
                    <PostNoData />
                    <PostNoData />
                    <PostNoData />
                </div>
            </div>
            <div className="hidden sticky top-[5rem] h-screen lg:block bg-gray-900 rounded-lg mt-2 py-5 px-4">
                <NoData />
                <NoData />
                <NoData />
            </div>
        </div>  
    )
}
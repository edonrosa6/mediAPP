'use client'

function PostNoData() {

    return (
        <div className="bg-gradient-to-t from-gray-900 to-gray-800 rounded-md px-4 py-4 mb-2 h-48">
            <div className="flex justify-between items-start animate-pulse">
                <div className="flex items-center gap-3">
                    <div>
                        <div className="bg-gray-800 rounded-full w-12 h-12"></div>
                    </div>
                    <div>
                        <button>
                            <h2 className="text-gray-200 text-sm font-semibold"></h2>
                        </button>
                        <p className="text-gray-400 text-xs mt-0">
                           
                        </p>
                    </div>
                </div>
            
                <div className="bg-gray-800 w-12 rounded-md h-4">
                </div>

               
            </div>

            <div className="space-y-3 mt-6 animate-pulse">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-gray-800 rounded col-span-2"></div>
                        <div className="h-2 bg-gray-800 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-gray-800 rounded"></div>
                </div>
            <div className="mt-2 text-gray-200 text-sm"></div>
            <div className="mt-5 flex"></div>
  
        </div>
    )
}

export default PostNoData;
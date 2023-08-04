"use client"
import { useEffect, useState } from "react";

function Comments({commentId}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function getCommentsByPost() {
            const url = "https://dummyjson.com/posts/" + commentId + "/comments";
            const res = await fetch(url);
            const data = await res.json();
            setComments(data.comments);
        }

        getCommentsByPost();
    }, [])

    return (
        <div className="grid mt-5 mb-5 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1">
            
        </div>
    )
}

export default Comments;
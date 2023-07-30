import Card from "@/components/Card";

async function fetchCommentsByPost() {
    const url = "https://dummyjson.com/posts/comments";
    const res = await fetch(url);
    const data = await res.json();
    return data.users;
}

async function Comments() {
    const comments = await fetchCommentsByPost();

    return (
        <div className="grid mt-5 mb-5 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1">
            
        </div>
    )
}

export default Comments;
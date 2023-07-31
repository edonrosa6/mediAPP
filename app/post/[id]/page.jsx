"use client"
import Button from "@/components/Button";
import Comment from "@/components/Comment";
import Image from "next/image";
import usersData from "../../data/users.json";
import postsData from "../../data/posts.json";
import dataComments from "../../data/comments.json";
import { useEffect, useState } from "react";



function DetailsPost({params}) { 
    const fecha = new Date();
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [user, setUser] = useState({});
    const [post, setPost] = useState({});
    console.log(params)

    useEffect(() => {
        const getCommentsByPost = () => {
            const data = dataComments.comments.filter(e => e.postId === parseInt(params.id));
            setComments(data);
        }

        const getPostById = () => {
            const key = Object.keys(postsData.posts).find(x => postsData.posts[x].id === parseInt(params.id))
            setPost(postsData.posts[key]);
        }
        
        const findUserById = () => {
            console.log(params)
            const key = Object.keys(usersData.users).find(user => usersData.users[user].id === parseInt(post.userId))
            setUser(usersData.users[key]);
        }

        getPostById();
        getCommentsByPost();
        findUserById();
    }, []);

    const showAllComments = () => {
        console.log("data...")
    }
    
    return (
        <div className="max-w-3xl items-center mx-auto mt-3">
            <div className="border border-gray-800 rounded-md px-4 py-4 mb-2 col-span-2">
                <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                        <div>
                            {
                                user.image
                                ? <Image alt="" src={user.image} width={45} height={45} className="bg-gray-800 rounded-full" />
                                : <div className="bg-gray-800 rounded-full w-12 h-12"></div>
                            }
                        </div>
                        <div>
                            <h2 className="text-gray-200 text-sm font-semibold">{user.firstName}{user.lastName ? " " + user.lastName : ""}</h2>
                            <p className="text-gray-400 text-xs mt-0">
                                {("0" + fecha.getDate()).slice(-2)}-{("0" + (fecha.getMonth() + 1)).slice(-2)}-{fecha.getFullYear()}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-2 text-gray-200 text-sm">{post.body}</div>
                <div className="mt-5 flex">
                    <button className="flex items-center rounded-md hover:bg-gray-700 px-3 py-2">
                        <i className="fa-solid fa-heart text-red-500"></i> 
                        <p className="text-xs font-bold ml-1 text-gray-200">{post.reactions}</p>
                    </button>
                </div>
            </div>

            <div>
                <textarea value={comment} onChange={(e) => setComment(e)} rows="5" className="focus:border-gray-500 focus:text-gray-200 focus:outline-none block p-2.5 w-full text-sm text-gray-500 bg-gray-800 rounded-lg border border-gray-600" placeholder="Comenta algo..."></textarea>
                <div>
                    <Button title="Comentar" iconName="fa-comment" />
                </div>
            </div>


            <div className="py-2">
                {
                    comments.map((comment) => (
                        <div key={comment.id}>
                            <Comment comment={comment} />
                        </div>
                    ))
                }
            </div>
            <button onClick={showAllComments}>Más comentarios</button>
        </div>
    )

}

export default DetailsPost;
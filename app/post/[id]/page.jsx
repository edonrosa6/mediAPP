"use client"
import {Button} from "@mui/material";
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
    const [filterComments, setFilterComments] = useState([]);
    const [user, setUser] = useState(null);
    const [post, setPost] = useState(null);
    const [showMoreComments, setShowMoreComments] = useState(true);
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    const [animationPing, setAnimationPing] = useState(false);
    const [disabledButton, setDisabledButton] = useState(true);

    useEffect(() => {
        getPostById();
        getCommentsByPost();
    }, []);

    const findUserById = (userId) => {
        const key = Object.keys(usersData.users).find(user => usersData.users[user].id === userId)
        setUser(usersData.users[key]);
    }

    const getPostById = () => {
        const key = Object.keys(postsData.posts).find(x => postsData.posts[x].id === parseInt(params.id))
        setPost(postsData.posts[key]);
        setLikes(postsData.posts[key].reactions);
        findUserById(postsData.posts[key].userId);
    }

    const getCommentsByPost = () => {
        const data = dataComments.comments.filter(e => e.postId === parseInt(params.id));
        setComments(data);
        setFilterComments(data);
    }

    const showAllComments = () => {
        setComments(filterComments);
        setShowMoreComments(false);
    }

    function randomNumber(number) {
        return Math.floor(Math.random() * number) + 1;
    }

    const sendComment = () => {
        const number = randomNumber(100000);

        const req = {
            id: number,
            body: comment,
            postId: parseInt(params.id),
            user: {
                id: 1,
                username: "edonrosa"
            }
        }

        setTimeout(() => {
            const tmp = comments;
            tmp.unshift(req);
            setFilterComments([...tmp]);
            setComment("");
            setDisabledButton(true);
        }, 250);
    }

    const likePost = () => { 
        setAnimationPing(true);
        setTimeout(() => {
            setAnimationPing(false);
        }, 1000)

        setLikes(post.reactions + 1);
        setLiked(true);

        if(liked) {
            setLikes(likes - 1);
            setLiked(false);
        }
    }

    const changeComment = (value) => {
        setComment(value);

        if(!value || value.trim().length === 0) {
            setDisabledButton(true);
            return;
        }

        setDisabledButton(false);
    }
    
    return (
        <div className="max-w-3xl w-full items-center mx-auto mt-3">
            <div className="border border-gray-800 rounded-md px-4 py-4 mb-2 col-span-2">
                <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                        <div>
                            {
                                user && user.image
                                ? <Image alt="" src={user.image} width={45} height={45} className="bg-gray-800 rounded-full" />
                                : <div className="bg-gray-800 rounded-full w-12 h-12"></div>
                            }
                        </div>
                        <div>
                            <h2 className="text-gray-200 text-sm font-semibold">{user?.firstName}{user?.lastName ? " " + user?.lastName : ""}</h2>
                            <p className="text-gray-400 text-xs mt-0">
                                {("0" + fecha.getDate()).slice(-2)}-{("0" + (fecha.getMonth() + 1)).slice(-2)}-{fecha.getFullYear()}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-2 text-gray-200 text-sm">{post?.body}</div>
                <div className="mt-5 flex">
                    <button onClick={likePost} className="flex items-center rounded-md hover:bg-gray-700 px-3 py-2">
                        <i className={liked && animationPing ? "absolute fa-solid fa-heart text-red-500" : liked ? "absolute fa-solid fa-heart text-red-500" : "absolute fa-regular fa-heart text-red-500"}></i> 
                        <i className={liked && animationPing ? "animate-ping fa-solid fa-heart text-red-500" : liked ? "fa-solid fa-heart text-red-500" : "fa-regular fa-heart text-red-500"}></i> 
                        <p className="text-xs font-bold ml-1 text-gray-200">{likes}</p>
                    </button>
                    <div className="flex items-center rounded-md px-3 py-2">
                        <i className="fa-regular fa-comment text-gray-500"></i>
                        <p className="text-xs font-bold ml-1 text-gray-200">{filterComments.length}</p>
                    </div>  
                    <button className="flex items-center rounded-md hover:bg-gray-700 px-3 py-2">
                        <i className="fa-solid fa-share text-gray-100"></i>
                        <p className="text-xs font-bold ml-1 text-gray-200">0</p>
                    </button>  
                </div>
            </div>

            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    sendComment();
                }}>
                    <textarea required value={comment} onChange={(e) => changeComment(e.target.value)} rows="5" className="focus:border-gray-500 focus:text-gray-200 focus:outline-none block p-2.5 w-full text-sm text-gray-500 bg-gray-800 rounded-lg border border-gray-600" placeholder="Comenta algo..."></textarea>
                    <div className="text-right mt-3">
                        <Button 
                            type="submit"
                            disabled={disabledButton}
                            variant="contained"
                            endIcon={<i className="fa-comment fa-solid"></i>}
                        >
                            Comentar
                        </Button>
                    </div>
                </form>
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

            {
                showMoreComments && filterComments.length > 4
                    ? <button className="mb-6 py-2 px-2 bg-gray-800 w-full rounded-md hover:bg-gray-700 font-semibold" onClick={showAllComments}>Más comentarios</button> 
                    : <div></div>
            }
        </div>
    )

}

export default DetailsPost;
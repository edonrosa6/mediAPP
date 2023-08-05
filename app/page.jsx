'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Post from "@/components/Post";
import Button from "@/components/Button";
import ProfilePicture from "@/components/ProfilePicture";
import Notification from "@/components/Notification";
import Message from "@/components/Message";
import SkeletonHome from "@/components/SkeletonHome";

import { successfullMessage } from "@/components/Popup";

import postData from "./data/posts.json";
import userData from "./data/users.json";
import notificationsData from "./data/notifications.json";
import messagesData from "./data/messages.json";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState(postData.posts.slice(0, 10));
  const [user, setUser] = useState({});
  const [titlePost, setTitlePost] = useState("");
  const router = useRouter();
  const [loadingPost, setLoadingPost] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const messages = messagesData.messages;

  const findUserById = () => {
    const key = Object.keys(userData.users).find(user => userData.users[user].id === 1)
    setUser(userData.users[key]);
  }

  useEffect(() => {
    setNotifications(notificationsData.notifications.slice(0, 4));
    findUserById();
    setLoading(false);
  }, [])

  function uuidv4() {
    return Math.floor(Math.random() * 10000 + 1);
  }

  const submitPost = () => {
    setLoadingPost(true);

    const req = {
      id: uuidv4(),
      title: titlePost,
      body: titlePost,
      userId: 1,
      tags: [
          "history",
          "american",
          "crime"
      ],
      reactions: 0,
      date: new Date()
    }

    setTimeout(() => {
      setLoadingPost(false);
      const tmp = posts;
      tmp.unshift(req);
      setPosts([...tmp]);
      setTitlePost("");

      successfullMessage("Se ha creado la publicación.");
    }, 1000);

  }

  return (
    <div className="w-full">
    {
      !loading ?
        <div className="grid w-full grid-cols lg:grid-cols-4 flex gap-4">
          <aside className="hidden sticky top-20 lg:block px-6 rounded-md mt-2 mb-2 h-[90vh] py-5 bg-gray-900">
            <button onClick={() => router.push('/friends/1')} className="flex items-center hover:bg-gray-700 w-full rounded-md px-3 py-2">
              <ProfilePicture urlImage={user.image} />
              <div className="ml-3 font-semibold">
                {user.firstName}{user.lastName ? " " + user.lastName : ""}
              </div>
            </button>

            <hr className="my-3 border-gray-800"></hr>

            <button className="my-3 hover:bg-gray-700 py-3 px-3 rounded-md w-full">
              <div className="flex items-center">
                <div>
                  <i className="fa-solid fa-newspaper text-gray-200 fa-xl"></i>
                </div>
                <div className="font-semibold ml-3 text-gray-200">Noticias</div>
              </div>
            </button>
          </aside>

          <div className="lg:col-span-2">
            <div className="px-4 py-4 bg-gradient-to-t from-gray-900 to-gray-800 mt-3 rounded-md">
              <div className="w-full">
                <div className="mb-3">Publica algo</div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    submitPost();
                  }}>
                  <textarea required value={titlePost} onChange={(e) => setTitlePost(e.target.value)} rows="5" className="focus:border-gray-500 focus:text-gray-200 focus:outline-none block p-2.5 w-full text-sm text-gray-500 bg-gray-800 rounded-lg border border-gray-600" placeholder="Escribe lo que piensas..."></textarea>
                  <div>
                    <Button title="Publicar" />
                  </div>
                </form>
              </div>
            </div>
            {
              loadingPost ?
                <div className="w-full h-12 rounded-md mt-2">
                  <div className="flex items-center h-full justify-center">
                    <div className="bg-gray-300 w-2 h-2 rounded-full animate-bounce"></div>
                    <div className="bg-gray-300 w-2 h-2 rounded-full animate-bounce-slow ml-2"></div>
                    <div className="bg-gray-300 w-2 h-2 rounded-full animate-bounce-fast ml-2"></div>
                  </div>
                </div>
              : <div></div>
            }
            
            <div className="w-full mt-2">
              {
                posts.map((post) => (
                  <div key={post.id}>
                    <Post props={post} />
                  </div>
                ))
              }
            </div>
          </div>

          <aside className="z-0 overflow-auto hidden lg:block sticky h-[90vh] bg-gray-900 mt-2 py-5 px-5 top-20 rounded-lg ">
            <div className="font-semibold flex items-center mb-4">
              Notificaciones nuevas
              <span className="w-2 h-2 rounded-full bg-red-500 ml-2"></span>
            </div>
                
            {
              notifications.map((notification) => (
                <div key={notification.id}>
                  <Notification notification={notification} user={user} />
                </div>
              ))
            }
              
            {
              notifications.length > 3 
                ? <button onClick={() => router.push("/notifications")} className="bg-gray-800 rounded-md px-2 py-2 text-sm w-full hover:bg-gray-700 text-center font-semibold">Ver todas</button>
                : null
            }

            <div className="my-5 font-semibold flex items-center mb-4">
              Mensajes nuevos
            </div>

            {
              messages.map((message) => (
                <div key={message.id}>
                  <Message message={message} />
                </div>
              ))
            }
          </aside>
        </div>  
      : <SkeletonHome />
      }
    </div>
  );
}

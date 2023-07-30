'use client'
import Post from "@/components/Post";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PostNoData from "@/components/PostNoData";
import NoData from "@/components/NoData";
import ProfilePicture from "@/components/ProfilePicture";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const router = useRouter();

  useEffect(() => {
    async function getPosts() {
      const url = 'https://dummyjson.com/posts?limit=10';
      const res = await fetch(url);
      const data = await res.json();
      setPosts(data.posts);
      setLoading(false);
    }

    async function getUser() {
      const url = 'https://dummyjson.com/users/1';
      const res = await fetch(url);
      const data = await res.json();
      setUser(data);
      setLoading(false);
    }

    getPosts();
    getUser();
  }, [])

  return (
    <>
    {
      !loading ?
        <div className="grid w-full grid-cols lg:grid-cols-4 flex gap-4">
          <aside className="hidden sticky top-20 lg:block px-6 rounded-md mt-2 mb-2 h-screen py-5 bg-gray-900">
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
          <div className="hidden sticky top-20 h-screen lg:block bg-gray-900 rounded-lg mt-2 py-5 px-5">
            <div className="font-semibold flex items-center mb-4">Notificaciones nuevas <div className="w-2 h-2 rounded-full bg-red-500 ml-2"></div></div>
           
            <div className="flex items-start">
              <ProfilePicture urlImage={user.image} />
              <div>
                <h3 className="text-sm ml-3 text-gray-200">Nombre</h3>
                <p className="text-xs ml-3 text-gray-400 mt-2">Te ha dado like en tu foto de perfil</p>
              </div>
            </div>
            <hr className="border-gray-800 my-3"></hr>

            <div className="flex items-start">
              <ProfilePicture urlImage={user.image} />
              <div>
                <h3 className="text-sm ml-3 text-gray-200">Titulo de ejemplo</h3>
                <p className="text-xs ml-3 text-gray-400 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptates?</p>
              </div>
            </div>
            <hr className="border-gray-800 my-3"></hr>

            <div className="flex items-start">
              <ProfilePicture urlImage={user.image} />
              <div>
                <h3 className="text-sm ml-3 text-gray-200">Titulo de ejemplo</h3>
                <p className="text-xs ml-3 text-gray-400 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptates?</p>
              </div>
            </div>

          </div>
        </div>  
      : 
        <div className="grid w-full grid-cols lg:grid-cols-4 flex gap-4">
          <aside className="hidden sticky top-20 lg:block px-6 rounded-md mt-2 mb-2 h-screen py-5 bg-gray-900">
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
              <div className="w-full mt-2">
                <PostNoData />
                <PostNoData />
                <PostNoData />
                <PostNoData />
                <PostNoData />
              </div>
          </div>
          <div className="hidden sticky top-20 h-screen lg:block bg-gray-900 rounded-lg mt-2 py-5 px-4">
            <NoData />
            <NoData />
            <NoData />
          </div>
        </div>  
      }
    </>
  );
}

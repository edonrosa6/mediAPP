"use client"

import { useEffect, useState } from "react";

import Notification from "@/components/Notification";
import NoData from "@/components/NoData";

import notificationsData from "../data/notifications.json";
import usersData from "../data/users.json";

function Notifications() {
    const [notifications, setNotifications] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      setTimeout(() => {
        const findUserById = () => {
          const key = Object.keys(usersData.users).find(user => usersData.users[user].id === 1)
          setUser(usersData.users[key]);
        }

        findUserById();
        const datesSort = notificationsData.notifications.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        console.log(datesSort)
        setNotifications(datesSort);

        setLoading(false);
      }, 1000)
    }, [])

    return (
      <div className="my-4 h-[88vh] overflow-auto border border-gray-800 rounded-md bg-gray-900 py-4 px-5 max-w-2xl w-full block mx-auto">
        <div className="font-semibold flex items-center mb-4">
          Notificaciones nuevas
          <span className="w-2 h-2 rounded-full bg-red-500 ml-2"></span>
        </div>

        {
          !loading ?  
            notifications.map((notification) => (
              <div key={notification.id}>
                <Notification notification={notification} user={user} />
              </div>
            ))
          : <div>
            <NoData />
            <NoData />
            <NoData />
            <NoData />
            <NoData />
            <NoData />
            <NoData />
          </div>
        }
       
      </div>
    )
}

export default Notifications;
import Card from "@/components/Card";

async function fetchFriends() {
    const url = "https://dummyjson.com/users";
    const res = await fetch(url);
    const data = await res.json();
    return data.users;
}

async function Friends() {
    const friends = await fetchFriends();

    return (
        <div className="grid mt-5 mb-5 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1">
            {
                friends.map((friend) => (
                    <div key={friend.id}>            
                        <Card props={friend} />
                    </div>
                ))
            }
        </div>
    )
}

export default Friends;
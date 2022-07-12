import { useState } from "react";


const getRandomUser = length => Math.floor(Math.random() * length);

export default function useCurrentUser (allUsers) {
  const randomUsers = allUsers.filter(u => u.subscribed);
  const [currentUser, setCurrentUser] = useState(() => getRandomUser(randomUsers.length));
  return randomUsers[currentUser];
}
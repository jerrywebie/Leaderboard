import { useEffect, useState} from "react";
import useCurrentUser from "./useCurrentUser";

export default function useLeaderboard (allUsers) {

  let sortedUsersByRank = [];
  let isCurrentUserInTopUsers = false;
  const currentUser =  useCurrentUser(allUsers);
   
  allUsers.sort((a, b) => {
    if (b.bananas === a.bananas) return b.stars - a.stars;
      return b.bananas - a.bananas;
  });

  allUsers.slice([0], [10]).map((item, i) => {
    sortedUsersByRank.push(item);
  });

  for (let i = 0; i < sortedUsersByRank.length; i++) {
    const user = sortedUsersByRank[i];
    if (user.uid === currentUser.uid) {
      isCurrentUserInTopUsers = true;
      break;
    }
  }

  let sortedUsersWithCurrentUserInLast = [...sortedUsersByRank];
  sortedUsersWithCurrentUserInLast[9] = currentUser;
 
  
  return {
    topTenUsers : isCurrentUserInTopUsers ? sortedUsersByRank : sortedUsersWithCurrentUserInLast,
    currentUser : currentUser
  }
    
}
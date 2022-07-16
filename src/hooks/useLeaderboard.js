
import useCurrentUser from "./useCurrentUser";

export default function useLeaderboard (allUsers) {

  let sortedUsersByRank = [];
  let isCurrentUserInTopUsers = false;
  const currentUser =  useCurrentUser(allUsers); // inject useCurrentUser hook to get currentUserId
   
  //  sort most bananas user from list
  //   if bananas is equal , sort by stars in descending order
  allUsers.sort((a, b) => {
    if (b.bananas === a.bananas) return b.stars - a.stars;
      return b.bananas - a.bananas;
  });

  // get top ten most bananas users with rank
  allUsers.slice([0], [10]).map((item, i) => {
    const userWithRank = {...item, rank: i + 1};
    sortedUsersByRank.push(userWithRank);
  });

  // check if currentUserId is in top ten
  for (let i = 0; i < sortedUsersByRank.length; i++) {
    const user = sortedUsersByRank[i];
    if (user.uid === currentUser.uid) {
      isCurrentUserInTopUsers = true;
      break;
    }
  }
 
  let sortedUsersWithCurrentUserInLast = [...sortedUsersByRank];
  sortedUsersWithCurrentUserInLast[9] = {...currentUser, rank: 10};
  
  // return currentUser , 
  // return leaderboard list with  currentUser in the top ten list or currentUser at the last of top ten list
  return {
    topTenUsers : isCurrentUserInTopUsers ? sortedUsersByRank : sortedUsersWithCurrentUserInLast,
    currentUser : currentUser
  }
    
}
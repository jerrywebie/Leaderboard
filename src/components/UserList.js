// user list used by users screen and leaderboard screen
import React from 'react';
import {View, VirtualizedList} from 'react-native';

import UserCard from './UserCard';

const UserList = ({data, navigation, isLeaderboard, currentUser}) => {

  const getItemCount = (data) => data.length;

  const getItem = (data, index) => ({
    uid: data[index].uid,
    name: data[index].name,
    bananas: data[index].bananas,
    rank: data[index].rank ? data[index].rank : null,
    stars: data[index].stars,
    longestStreak: data[index].longestStreak,
    subscribed: data[index].subscribed,
    lastDayPlayed: data[index].lastDayPlayed,
  });

  const renderUser = ({item}) => {
   const goToUserDetails = (userId) => {
    navigation.navigate( 'User', {user : item, name: item.name ? item.name : 'Unknown User', isLeaderboard: isLeaderboard});
  }
   
    return (
      //List Item
      <UserCard 
        onPress={() => goToUserDetails(item?.uid)} 
        item={item} 
        isLeaderboard={isLeaderboard} 
        currentUser={currentUser} />
    );
  };

  return (
    <View style={{flex: 1, marginVertical: 6}}>
      <VirtualizedList
        data={data}
        initialNumToRender={10}
        renderItem={renderUser}
        keyExtractor={(item, index) => index.toString()}
        getItemCount={getItemCount}
        getItem={getItem}
        windowSize={5}
        maxToRenderPerBatch={5}
        updateCellsBatchingPeriod={30}  
      />
    </View>
  )
}

export default UserList;

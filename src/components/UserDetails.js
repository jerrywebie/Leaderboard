// user details component
import React from 'react';
import {
  ScrollView, Dimensions,
} from 'react-native';
import moment from "moment";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Details from './Details';

import Styles from '../utility/styles';

const windowHeight = Dimensions.get('window').height;

const UserDetails = ({ user, isLeaderboard}) => {
  return (
    <ScrollView 
      showsVerticalScrollIndicator={true}
      indicatorStyle={{backgroundColor: 'black', borderRadius: 3, width: 6}}
      contentContainerStyle={{justifyContent: 'center', alignItems: 'center',}}
      style={{
        marginTop: windowHeight/4,
        backgroundColor: "#fff",
        borderColor: Styles.colors.white,
      }}>
        <Details text="Full Name" value={user.name ? user.name : "-"} icon={null}/>
        {isLeaderboard && <Details text="Rank" value={user.rank} icon={null}/>}
        <Details text="Stars" value={user.stars} icon={null}/>
        <Details  text="Last Day Played"   value={moment(user.lastDayPlayed).format("D-MMMM-YYYY")} icon={null}/>
        <Details text="Longest Streak" value={user.longestStreak}  icon={null}/>
        <Details 
          text="Subscribed" 
          value={null} 
          icon={<MaterialCommunityIcons 
          name={user.subscribed ? 'thumb-up' : 'thumb-down'} 
          color={Styles.colors.emeraldGreen} 
          size={20} />}/>
      </ScrollView>
  );
}




export default UserDetails
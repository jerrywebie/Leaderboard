// splash component
import React, {useContext, useState} from 'react';
import { View, Text,
   StyleSheet,
  Dimensions } from 'react-native';

import UserContext from '../contexts/UserContext';
import useLeaderboard from '../hooks/useLeaderboard';
import UserList from '../components/UserList';

const windowHeight = Dimensions.get('window').height;


const Leaderboard = ({ navigation }) => {
  
  const {users} = useContext(UserContext);
  const leadingUsers = useLeaderboard(users);
  const [leaderboard, setLeaderboard] = useState(leadingUsers);
  
 
  return (
    <View style={styles.container}>
      <UserList 
        data={leaderboard?.topTenUsers} 
        navigation={navigation} 
        isLeaderboard={true} 
        currentUser={leaderboard?.currentUser}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

});


export default Leaderboard
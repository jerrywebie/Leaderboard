// splash component
import React, {useContext} from 'react';
import { View, StyleSheet } from 'react-native';

import UserContext from '../contexts/UserContext';
import UserList from '../components/UserList';
import Styles from '../utility/styles';

const Users = ({ navigation }) => {
  const {users} = useContext(UserContext);
 
  return (
    <View style={[styles.container, {backgroundColor: Styles.colors.white}]}>
      <UserList 
        data={users} 
        navigation={navigation} 
        isLeaderboard={false}
        currentUser={null}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default Users
// splash component
import React from 'react';
import { View, Text,
   StyleSheet,
} from 'react-native';



const UserList = () => {
 
  return (
    <View style={styles.container}>
      <Text>User list</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
 
});


export default UserList
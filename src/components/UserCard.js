// splash component
import React from 'react';
import { View, Text,
   StyleSheet,
} from 'react-native';



const UserCard = () => {
 
  return (
    <View style={styles.container}>
      <Text>User card</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
 
});


export default UserCard
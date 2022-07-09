// splash component
import React from 'react';
import { View, Text,
   StyleSheet,
} from 'react-native';



const UserDetails = ({ navigation }) => {
 
 
  return (
    <View style={styles.container}>
      <Text>User details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
 
});


export default UserDetails
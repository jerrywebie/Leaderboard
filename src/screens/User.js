// splash component
import React from 'react';
import { View, Text,
   StyleSheet,
  Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const User = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>User</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bannerImage : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  exploreButton: {
    marginTop: windowHeight - 200, // need to change device height 
    backgroundColor: "#FF2400",
    width: '80%',
    marginHorizontal: 20,
    borderRadius: 4,
  },
  buttonText: {
    color: '#f1f1f1',
    textAlign: 'center',
    lineHeight: 24,
    paddingVertical: 20,
    fontSize: 20,
    fontFamily: 'Raleway-Bold'
  }
});


export default User
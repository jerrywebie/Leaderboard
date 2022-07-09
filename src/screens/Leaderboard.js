// splash component
import React from 'react';
import { View, Text,
   StyleSheet,
  Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const Leaderboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Leaderboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

});


export default Leaderboard
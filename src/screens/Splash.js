// splash component
import React, { useEffect, useRef} from 'react';
import { View, Text, Pressable, 
   StyleSheet, StatusBar, 
  Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const Splash = ({ navigation }) => {

  const timerRef = useRef(0);

  React.useEffect(() => {
    if (timerRef.current < 25) {
      timerRef.current += 1;
      const timer = setTimeout(() =>  navigation.replace('Home'), 2500);

      return () => clearTimeout(timer);
    }
  }, []);
 
  return (
    <View style={styles.container}>
      <StatusBar hidden={true}/>
        <Text>Leaderboard</Text>
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
  splashText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
 
});


export default Splash
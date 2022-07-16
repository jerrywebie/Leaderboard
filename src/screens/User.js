// splash component
import React from 'react';
import { View,  StyleSheet } from 'react-native';

import bananaImage from '../assets/images/banana_004.png';
import AnimatableBananaCount from '../components/AnimatableBananaCount';
import UserDetails from '../components/UserDetails';

import Styles from '../utility/styles';

const User = ({ route }) => {
  const { user, isLeaderboard } = route.params;
  return (
    <View style={[styles.container, {backgroundColor: Styles.colors.emeraldGreen}]}>
      <AnimatableBananaCount imageSource={bananaImage} bananaCount={user.bananas} />
      <UserDetails user={user} isLeaderboard={isLeaderboard}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default User
import React from 'react';
import {StyleSheet, Text, Image, Dimensions} from 'react-native';
import * as Animatable from 'react-native-animatable';

import Styles from '../utility/styles';

const windowHeight = Dimensions.get('window').height;

const AnimatableBananaCount = ({ imageSource, bananaCount}) => {
  return (
    <Animatable.View  
      animation='pulse'
      iterationCount={8} 
      delay={100} style={styles.bananaContainer}>
    <Image source={imageSource} resizeMode="contain" style={styles.image} />
    <Text style={styles.text}>{bananaCount}</Text>
   </Animatable.View>
  )
}

const styles = StyleSheet.create({
  bananaContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    width: Styles.standard.baseTwenty * 10,
    height: Styles.standard.baseTwenty * 10,
    borderColor: Styles.colors.gold, 
    borderRadius: Styles.standard.baseTwenty * 6,
    backgroundColor: Styles.colors.white,
    borderWidth: 4,
    marginTop: windowHeight/12,
    position: 'relative'
  },
  image: {
    alignSelf: 'center',
    marginTop: 10,
    width: Styles.standard.baseTwenty * 4,
    height: Styles.standard.baseTwenty * 4,
    borderRadius: Styles.standard.baseTwenty * 3,
  },
  text: {
    position: 'absolute',
    left: 80,  
    bottom: 12,
    fontFamily: 'Poppins-Bold',
    opacity: 0.6
  }
});

export default AnimatableBananaCount;
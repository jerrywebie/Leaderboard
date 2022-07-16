import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import Styles from '../utility/styles';

const Details = ({ text, value = null, icon = null}) => {
  return (
    <View style={styles.detailContainer}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.value}>{value && value}</Text>
        {icon && 
        <View style={styles.iconContainer}>
          {icon}
        </View>}
      </View>
  )
}

const styles = StyleSheet.create({
  detailContainer: {
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    paddingHorizontal: Styles.standard.baseTwenty, 
    paddingVertical: Styles.standard.baseTwenty, 
    borderBottomWidth: 0.3, 
    borderBottomColor: Styles.colors.lightGray
  },
  text: {
    flex: 1, 
    color: Styles.colors.dark,
    fontFamily: 'Poppins-Bold',
    opacity: 0.6
  },
  value: {
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regular',
    opacity: 0.9
  },
  iconContainer: {
    width: Styles.standard.baseTwenty * 2, 
    height: Styles.standard.baseTen * 3, 
    backgroundColor: Styles.colors.light, 
    borderRadius: 4, 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center'
  }
});

export default Details;
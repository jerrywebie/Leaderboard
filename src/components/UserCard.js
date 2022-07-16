// user card used by user list component
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import bananaImage from '../assets/images/banana_003.png';
import Styles from '../utility/styles';

const windowWidth = Dimensions.get('window').width;

const UserCard = ({onPress, item, isLeaderboard, currentUser}) => {
    return (
      // Flat List Item
      <TouchableOpacity
        style={[styles.userContainer, 
          {
            width: windowWidth - 20, 
            marginHorizontal: Styles.standard.baseTen, 
            borderWidth: isLeaderboard && currentUser.uid === item.uid ? 2 : 0,
            borderColor : isLeaderboard && currentUser.uid === item.uid ? Styles.colors.mainGreen : Styles.colors.white 
          }]}
        onPress={onPress}
      >
          <View  style={styles.thumbnail}>
            <Text style={{color: Styles.colors.white}}>{isLeaderboard ? item.rank : item.name ? (item.name.charAt(0)).toUpperCase() : 'U'}</Text>
          </View>
          <View style={{flex: 1, marginLeft: 20}}>
            <Text style={styles.name}>{item.name ? item.name : "Unknown User"}</Text>
            <Text style={{fontFamily: 'Poppins-Regular', opacity: 0.8}}>
              {item.bananas} {' '}
              <Image source={bananaImage} style={{width: 16, height: 16}}/>
            </Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" color={Styles.colors.mainGreen} size={26} />
    </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
  userContainer: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: Styles.standard.baseTen, 
    paddingVertical: Styles.standard.baseTen,
		backgroundColor: Styles.colors.white,
		borderRadius: 4,
		marginHorizontal: 16,
    marginVertical: 6,
    elevation: 3,
  },
  thumbnail : {
    height: Styles.standard.baseTwenty * 2, 
    width :  Styles.standard.baseTwenty * 2, 
    borderRadius: 30, 
    backgroundColor: Styles.colors.mainGreen,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  name: {
    textTransform: 'capitalize', 
    color: Styles.colors.dark, 
    fontFamily: 'Poppins-Bold',
    opacity: 0.6
  }
});

export default UserCard;

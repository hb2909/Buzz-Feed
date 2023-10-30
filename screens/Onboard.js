import React, { useState, setState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Pressable,
  Modal,
  Animated,
  initialState
} from 'react-native';
//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Onboarding from 'react-native-onboarding-swiper';

const { width } = Dimensions.get('screen');

const Done = ({...props}) => (
  <TouchableOpacity
  {...props}
  >
  <Text style={{fontSize:16, marginHorizontal:20}}>Go to Home</Text>
  </TouchableOpacity>
)

const Dots = ({selected}) => {
  let backgroundColor;
  backgroundColor = selected ? 'black' : 'white'
  return (
  <View
  style={{
      width:24,
      height:6,
      marginHorizontal:3,
      backgroundColor
  }}
  />
  )
}

const Title = ({...props}) => (
  <Text style={{fontSize:16, marginHorizontal:20}}/>
)

const Onboard = ({ navigation }) => {
  
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
        <StatusBar
            translucent={false}
            backgroundColor='#FDE297'
            barStyle="dark-content"
        />

    <Onboarding
      onDone={() => navigation.navigate("Login")}
      onSkip={() => navigation.navigate("Login")}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      pages={[
      {
      backgroundColor: '#FDE297',
      image: <Image source={require('../assets/bee-100.png')} />,
      title: 'BUZZ-FEED',
      subtitle: 'Where all your fresh goods craving is fulfilled',
      },
      {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../assets/bee-100.png')} />,
          title: 'Explore',
          subtitle: 'Order your favorite farm goods online today!',
      },
      {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../assets/bee-100.png')} />,
          title: 'All Done!',
          subtitle: 'Create your account and explore BUZZ-FEED today!',
      },
      ]}
  />

        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    container: {
      paddingVertical: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      backgroundColor: '#FDE297',
      paddingBottom: 10,
    },
    profileImage: {
      height: 50,
      width: 50,
      borderRadius: 25,
    },
    searchInputContainer: {
      height: 50,
      backgroundColor: '#f6f6f6',
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      borderRadius: 10,
    },
    titles: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 20,
      paddingHorizontal: 30,
      color: '#000',
      fontSize: 20,
      fontWeight: 'bold',
    },
    titles2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 20,
      paddingHorizontal: 30,
      color: '#000',
      fontSize: 20,
      fontWeight: 'bold',
    },
    sortBtn: {
      backgroundColor: '#000',
      height: 50,
      width: 50,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
    },
    optionListContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
      paddingHorizontal: 10,
    },
    optionCard: {
      height: 210,
      width: width / 2 - 30,
      elevation: 10,
      backgroundColor: 'white',
      alignItems: 'center',
      borderRadius: 20,
      paddingTop: 10,
      paddingHorizontal: 10,
    },
    optionCardImage: {
      height: 140,
      borderRadius: 10,
      width: '100%',
    },
    categoryContainer: {
      marginTop: 20,
      marginHorizontal: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    categoryNameContainer: {
      marginTop: 10,
      marginLeft: 30,
      marginRight: 50,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    iconContainer: {
      height: 80,
      width: 80,
      backgroundColor: '#e1e8e9',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    card: {
      height: 200,
      backgroundColor: 'white',
      elevation: 10,
      width: width - 40,
      marginRight: 20,
      padding: 15,
      borderRadius: 20,
    },
    scard: {
      height: 180,
      backgroundColor: 'white',
      elevation: 5,
      width: width - 40,
      marginRight: 20,
      borderRadius: 20,
    },
    scardImage: {
      width: '100%',
      height: 130,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
    },
    cardImage: {
      width: '100%',
      height: 120,
      borderRadius: 15
    },
    modalBackGround: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      paddingHorizontal: 20,
      paddingVertical: 30,
      flexDirection: 'column',
      //justifyItems: 'center',
      //elevation: 20,
    },
    backgroundImage: {
      width: '100%',
      overflow: 'hidden',
      borderRadius: 15,
    },
    Btn: {
      backgroundColor: '#FDE297',
      height: 50,
      width: '100%',
      borderRadius: 10,
      paddingHorizontal: 20,
      marginVertical: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'flex-end',
    },
    bottom: {
      justifyContent: 'flex-end',
      //justifyContent: 'flex-end'
      //justifyContent: 'flex-end',
    }
  });
  

export default Onboard;
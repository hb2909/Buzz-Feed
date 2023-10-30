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
    Button,
    TouchableWithoutFeedback,
    Animated,
    Pressable,
    Switch,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { width } = Dimensions.get('screen');

const Signup = ({ navigation }) => {
  return (
     <SafeAreaView style={{ backgroundColor: '#F4DF92', flex: 1 }}>
          <StatusBar
              translucent={false}
              backgroundColor='#F4DF92'
              barStyle="dark-content"
          />
    <ScrollView>

    <View style={styles.container}>
          <View style={styles.titletext}>
          <Image source={require('../assets/bee-100.png')} />
          

          </View>
          <View style={styles.main}>
          <Text style={{fontWeight: 'bold', fontSize: 15}}>
          Ready to join the hive? bzzzz away!
        </Text>
        <Text style={styles.registertext}>Enter your email: </Text>
        <TextInput placeholder='test24@gmail.com...' style={styles.input} />
  
        <Text style={styles.registertext}>Enter your password: </Text>
        <TextInput placeholder='bzzzbzzzbzz' style={styles.input} secureTextEntry={true}/>
  
        <Text style={styles.registertext}>Enter your username: </Text>
        <TextInput placeholder='workerbee123' style={styles.input} />
  
        <Text style={styles.pressablecontainer}> Already a member of the hive?
  
              <Pressable
                onPress={() => navigation.navigate('Login')}>
  
                <Text style={styles.registerlinktext}>Login</Text>
              </Pressable>
  
        </Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttontext}>Sign up</Text>
        </Pressable>
        </View>
        
        </View>
            </ScrollView>
            </SafeAreaView>
    );
  }
 
  const styles = StyleSheet.create({
    top: {
      flex: 1,
      backgroundColor: "black",
    },
    container: {
      flex: 5,
      alignItems: "center", 
      backgroundColor: '#F4DF92',
      paddingVertical: 100,
      width: "100%",
      
    }, 
    input: {
      borderColor: "gray",
      width: "auto",
      borderWidth: 2,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "flex-start",
      padding: 6,
      backgroundColor: "#FEFFC6",
      fontStyle: "italic",
    },
  
    registertext: {
      marginHorizontal: 20,
      marginVertical: 10,
      marginLeft: -1,
      justifyContent: "center",
      alignItems: "flex-start",
      width: "auto",
    },
  
    mainView: {
      marginTop: -40,
      flex: 5,
      flexDirection: "column",
    },
  
    titletext: {
      marginTop: 20,
      paddingBottom: 50,
    },
    buttontext: {
      color: "white",
  
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
      marginTop: 5,
    },
  
    registerlinktext: {
      marginVertical: -3,
      color: "blue",
      
  
    },
  
    pressablecontainer: {
      alignItems: "center",
      justifyContent: "center",
  
      marginTop: 10,
      marginBottom: 10,
    },
  });


export default Signup;
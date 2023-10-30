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

const Login = ({ navigation }) => {
    return (
      <SafeAreaView style={{ backgroundColor: '#F4DF92', flex: 1 }}>
            <StatusBar
                translucent={false}
                backgroundColor='#F4DF92'
                barStyle="dark-content"
            />
      <ScrollView>
      <View style={style.container}>
          <View style={style.titletext}>
          <Image source={require('../assets/bee-100.png')} />
  

          </View>
          <View style={style.main}>
            <Text style={style.registertext}>Enter your email: </Text>
            <TextInput placeholder='test24@gmail.com...' style={style.input} />
  
            <Text style={style.registertext}>Enter your password: </Text>
            <TextInput
              placeholder='bzzzbzzzbzz'
              style={style.input}
              secureTextEntry={true}
            />
  
  
  
            <StatusBar style="auto" />
            <Text style={style.registertext}> Forgot password?
              <Pressable>
                <Text style={style.registerlinktext}> Reset here</Text>
              </Pressable>
  
            </Text>

            <TouchableOpacity onPress={() => {
                    navigation.navigate('Home')
                }}>

                        <View style={style.button}>
                            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
                                Buzz in!
                            </Text>
                        </View>
                </TouchableOpacity>
  
            <Text style={style.pressablecontainer}> Want to join the hive?
  
              <Pressable
                onPress={() => navigation.navigate('Signup')}>
  
                <Text style={style.registerlinktext}> Sign up here!</Text>
              </Pressable>
  
            </Text>
    
            </View>
            </View>
            </ScrollView>
            </SafeAreaView>
    );
  }
  
  
const style = StyleSheet.create({
    top: {
      flex: 1,
      backgroundColor: "black",
    },
    container: {
      flex: 5,
      alignItems: "center", 
      backgroundColor: '#F4DF92',
      paddingVertical:100,
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
      margin: 20,
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
      alignContent: "center",
      flex: 1,
      marginTop: 10,
      paddingTop: 10,
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
  

  

export default Login;
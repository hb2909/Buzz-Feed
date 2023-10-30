import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";

import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {Home} from './screens';
import {Profile} from './screens';
import {EditProfile} from './screens';
import {Onboard} from './screens';
import {Search} from './screens';
import {Topup} from './screens';
import {Ewallet} from './screens';
import {Login} from './screens';
import {Signup} from './screens';
import {VegeProductPage} from './screens';
import {VegeItemPage} from './screens';
import {FruitProductPage} from './screens';
import {FruitItemPage} from './screens';
import {DairyProductPage} from './screens';
import {DairyItemPage} from './screens';
import {MeatProductPage} from './screens';
import {MeatItemPage} from './screens';
import {CartPage} from './screens';
import {OrderPage} from './screens';
import {PaymentPage} from './screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Onboard" component={Onboard} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }}/>
        <Stack.Screen name="Search" component={Search} options={{ headerShown: false }}/>
        <Stack.Screen name="Topup" component={Topup} options={{ headerShown: false }}/>
        <Stack.Screen name="Ewallet" component={Ewallet} options={{ headerShown: false }}/>
        <Stack.Screen name="VegeProductPage" component={VegeProductPage} options={{ headerShown: false }}/>
        <Stack.Screen name="FruitProductPage" component={FruitProductPage} options={{ headerShown: false }}/>
        <Stack.Screen name="DairyProductPage" component={DairyProductPage} options={{ headerShown: false }}/>
        <Stack.Screen name="MeatProductPage" component={MeatProductPage} options={{ headerShown: false }}/>
        <Stack.Screen name="VegeItemPage" component={VegeItemPage} options={{ headerShown: false }}/>
        <Stack.Screen name="FruitItemPage" component={FruitItemPage} options={{ headerShown: false }}/>
        <Stack.Screen name="DairyItemPage" component={DairyItemPage} options={{ headerShown: false }}/>
        <Stack.Screen name="MeatItemPage" component={MeatItemPage} options={{ headerShown: false }}/>
        <Stack.Screen name="CartPage" component={CartPage} options={{ headerShown: false }}/>
        <Stack.Screen name="OrderPage" component={OrderPage} options={{ headerShown: false }}/>
        <Stack.Screen name="PaymentPage" component={PaymentPage} options={{ headerShown: false }}/>
    </Stack.Navigator>
  </NavigationContainer> );

};


export default App;
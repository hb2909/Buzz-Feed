import React, { Component } from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    ScrollView,
    Dimensions,
    Animated,
    Modal,
    TouchableOpacity,
    Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { Directions, FlatList } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

const Btn = ({ onPress, title }) => (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.counterDecrementStyle}
    >

        <Text style={styles.btnSymbol}>{title}</Text>
    </TouchableOpacity>
);


const { height } = Dimensions.get('screen');
const { width } = Dimensions.get('screen');


// const cartItem = (
//     {
//         id:'1',
//         goodsImage: require("../assets/carrot.png"),
//         title: "Carrot",
//         price: 0.19,
//         storeName: "Greenies Co.",
//     }
// );

const CartPage = ({ navigation }) => {
    

    const route = useRoute();
    const item = route.params?.Counter;
    const item2 = route.params?.GoodsImage;
    const item3 = route.params?.Title;
    const item4 = route.params?.Price;
    const item5 = route.params?.StoreName;
    
    let [total,setTotal] = useState(0);
    let [Counter, setCounter] = useState(item);
    const [GoodsImage, setGoodsImage] = useState(item2);
    const [Title, setTitle] = useState(item3);
    const [Price, setPrice] = useState(item4);
    const [StoreName, setStoreName] = useState(item5);
    
    const incrementValue = () => {
        const newValue = Counter += 1;
        setCounter(newValue);
        setTotal(newValue*Price);
    };

    const decrementValue = () => {
        const newValue = Counter;
        if (newValue==0) {
            Counter-=0;
        }else{
            Counter-=1;
        }
        setCounter(newValue);
        setTotal(newValue*Price);
    };
    
    return (
        <SafeAreaView>
            <StatusBar
                    translucent={false}
                    backgroundColor={'#F2F2F2'}
                    barStyle="dark-content"
            />

            <View>
                <View style={[styles.header]}>
                <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Home')
                            }}
                        >
                            <Icon name="arrow-back-ios" size={28}/>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Shopping Cart</Text>
                </View>

                <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }}
                    />

            <View style={{height:'80%'}}>
            
                <View style={[styles.container,styles.section]}>
                    <View style={{
                        justifyContent: 'center',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        
                        <View style={styles.sCard}>
                            <View style={{ paddingRight: 10 }}>
                                <Image source={GoodsImage} style={styles.prodImg} />
                            </View>
                            <View style={{ paddingLeft: 5, marginBottom: 25 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 17 }}>
                                    {Title}
                                </Text>
                                <Text style={{
                                    fontSize: 13,
                                    color: '#5C5C5C',
                                    textAlign: 'left',
                                }}>
                                    ${Price} /piece
                                </Text>
                                <Text style={{ fontSize: 13, color: '#A9A9A9' }}>
                                    {StoreName}
                                </Text>
                            </View>  
                            <View style={{
                                flex:1,
                                bottom:0,
                                right:0,
                                padding:10,
                                position:'absolute'
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-around'
                                }}>
                                    <Btn title='–' onPress={decrementValue} />
                                    <Text style={{ fontSize: 17, paddingHorizontal:20 }}>{Counter}</Text>
                                    <Btn title='+' onPress={incrementValue} />
                                </View>
                            </View>                               
                        </View>
                    </View>
                </View>

                <Text style={{ textAlign: 'center', marginBottom: 110, fontSize: 15, color: 'grey' }}>End of product list.</Text>
            
                <View style={[styles.bottomHeader]}>
                    <Text style={{
                        fontWeight:'600',
                        fontSize:17,
                        margin:20,
                        flex:1.5,
                        alignItems:'center',
                        justifyContent:'center',
                    }}>Items selected: ${[parseFloat(total.toFixed(2),total.toPrecision(3))]} </Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        disabled={Counter==0 ? true :false}
                        onPress={() => { navigation.navigate("OrderPage", {GoodsImage,Title,Price,StoreName,Counter,total}) }}
                        style={Counter==0 ? styles.invalidAppButtonContainer : styles.appButtonContainer}
                    >
                        <Text style={styles.appButtonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>

            </View>
        </SafeAreaView> 
    );
}


const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignContent: 'center',
        marginHorizontal: 20,
    },
    headerTitle: {
        fontWeight:'900',
        fontSize:20,
    },
    bottomHeader: {
        backgroundColor:'white',
        flexDirection:'row',
        position:'absolute',
        flex:0.1,
        left:0,
        right:0,
        bottom:20,
        height:115,
        paddingBottom:20,
        alignItems:'center',
    },
    section: {
        marginHorizontal:20,
        marginTop:10,
        marginBottom: 20,
    },
    appButtonContainer: {
        elevation: 1,
        backgroundColor:'#FDE297',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin:20,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    invalidAppButtonContainer: {
        elevation: 1,
        backgroundColor:'grey',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin:20,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    appButtonText: {
        fontSize: 18,
        color: "#000",
        fontWeight:'600',
        alignSelf: "center",
    },
    sCard: {
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        marginVertical: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        width: '100%',
    },
    prodImg: {
        width: 90,
        height: 90,
    },
    counterDecrementStyle: {
        borderRadius: 30,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    btnSymbol: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
    },
});


export default CartPage;

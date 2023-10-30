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
    StatusBar,
} from 'react-native';
import PromoCode from '../components/promoCode';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState, useEffect } from 'react';


const SubmitBtn = ({ onPress, title }) => (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={[styles.appButtonContainer,
            {
                alignSelf:'center',
                left:0,
                right:0,
                bottom:0,
            }]}
    >
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);


const OrderPage = ({ navigation }) => {
    const [promoCode, setPromoCode] = useState(null);
    const [validMessage, setValidMessage] = useState(null);
    const [invalidMessage, setinvalidMessage] = useState(null);
    

    const route = useRoute();
    const itemCounter = route.params?.Counter;
    const itemTotal = route.params?.total;
    const item1 = route.params?.GoodsImage;
    const item2 = route.params?.Title;
    const item3 = route.params?.Price;
    const item4 = route.params?.StoreName;
    
    let [total,setTotal] = useState(0);
    let [Counter, setCounter] = useState(itemCounter);
    const [GoodsImage, setGoodsImage] = useState(item1);
    const [Title, setTitle] = useState(item2);
    const [Price, setPrice] = useState(item3);
    const [StoreName, setStoreName] = useState(item4);

    const [deliveryFee,setDeliveryFee] = useState(4);
    
    const [itemAmount,setItemAmount] = useState(itemCounter);
    const [subTotal,setSubTotal] = useState(itemTotal);
    const [totalPay, setTotalPay] = useState(subTotal + deliveryFee);

    const handlePromoCode = () => {
        const found = PromoCode?.find(value => value.promo === promoCode)

        if (found !== undefined) {
            setValidMessage("Code redeemed! Shipping fee  -$1")
            setinvalidMessage(null)
            setDeliveryFee(3)
            setTotalPay(subTotal+deliveryFee)
        }else {
            setValidMessage(null)
            setinvalidMessage("Invalid promotion code!")
            setDeliveryFee(4)
            setTotalPay(subTotal+deliveryFee)
        }
    }
    
    return (
        <SafeAreaView>
            <StatusBar
                    translucent={false}
                    backgroundColor={'#F2F2F2'}
                    barStyle="dark-content"
                />

            <View style={[styles.header]}>
            <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('CartPage',{GoodsImage,Title,Price,StoreName,Counter,total})
                            }}
                        >
                            <Icon name="arrow-back-ios" size={28}/>
                        </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Your Orders</Text>
            </View>

            <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }}
                    />

            <View style={[styles.section]}>
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
                                {Price}
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
                                <Text style={{ fontSize: 15, paddingHorizontal:10 }}>Amount:</Text>
                                <Text style={{ fontSize: 17, paddingHorizontal:10 }}>{itemAmount}</Text> 
                            </View>
                        </View>                               
                    </View>
                </View>
                
            </View>         
                <View style={styles.formFieldWrapper}>
                    <Text style={[styles.labelText]}>Redeem Code</Text>
                    <View style={{flexDirection:'row'}}>
                        <TextInput
                            placeholder=''
                            style={[styles.formFieldText,{width:205,height:50}]}
                            onChangeText={setPromoCode}
                        />
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={handlePromoCode}
                            style={[styles.appButtonContainer, { width:150, marginHorizontal: 10, marginBottom: 50 }]}
                        >
                            <Text style={styles.appButtonText}>Redeem</Text>
                        </TouchableOpacity>
                    </View>
                    {invalidMessage ? <Text style={{paddingLeft:5, marginTop:-40, marginBottom:20, color: 'red', fontSize: 17 }}>{invalidMessage}</Text> : <Text style={{paddingLeft:5, marginTop:-40, marginBottom:20, color: 'green', fontSize: 17 }}>{validMessage}</Text>}
                </View>
                
                <View style={styles.orderDetails}>
                    <View >
                        <Text style={{ fontSize: 18, fontWeight: '500', flexWrap: 'wrap' }}>
                            Subtotal:
                        </Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{ fontSize: 17, fontWeight: '400', textAlign: 'center', flexWrap: 'wrap', paddingRight:5 }}>
                            $
                        </Text>
                        <Text style={{ fontSize: 17, fontWeight: '400', textAlign: 'center', flexWrap: 'wrap' }}>
                        {[parseFloat(subTotal.toFixed(2),subTotal.toPrecision(3))]}
                        </Text>
                    </View>
                </View> 
                <View style={styles.orderDetails}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: '500', flexWrap: 'wrap'}}>
                            Delivery Fee:
                        </Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{ fontSize: 17, fontWeight: '400', textAlign: 'center', flexWrap: 'wrap', paddingRight:5 }}>
                            $
                        </Text>
                        <Text style={{ fontSize: 17, fontWeight: '400', textAlign: 'center', flexWrap: 'wrap' }}>
                            {[parseFloat(deliveryFee.toFixed(2),deliveryFee.toPrecision(3))]}
                        </Text>
                    </View>
                </View> 
                <View style={[styles.orderDetails,{marginBottom:10}]}>
                    <View >
                        <Text style={{ fontSize: 18, fontWeight: '500', flexWrap: 'wrap' }}>
                            Total:
                        </Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{ fontSize: 17, fontWeight: '400', textAlign: 'center', flexWrap: 'wrap', paddingRight:5 }}>
                            $
                        </Text>
                        <Text style={{ fontSize: 17, fontWeight: '400', textAlign: 'center', flexWrap: 'wrap' }}>
                            {[parseFloat(totalPay.toFixed(2),totalPay.toPrecision(3))]}
                        </Text>
                    </View>
                </View>       
            </View>
            <SubmitBtn title="Proceed to Payment" onPress={() => { navigation.navigate("PaymentPage",{StoreName}) }} />
                      
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
        marginHorizontal:100
    },
    section: {
        marginHorizontal:20,
        marginVertical:10,
    },
    formFieldWrapper: {
        paddingHorizontal: 5,
    },
    formFieldText: {
        fontSize: 18,
        borderRadius: 15,
        borderWidth: 0.5,
        padding: 12,
        textAlignVertical: 'top',
        backgroundColor:'white'
    },
    labelText: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight:'500',
        paddingTop: 10,
    },
    orderDetails: {
        marginHorizontal: 10,
        paddingVertical: 7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    appButtonContainer: {
        elevation: 2,
        backgroundColor:'rgba(253,226,151,1)',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 350,
    },
    appButtonText: {
        fontSize: 17,
        color: "#000",
        fontWeight:'500',
        alignSelf: "center",
    },
    container: {
        marginTop: 5,
        marginBottom: 5,
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
});


export default OrderPage;

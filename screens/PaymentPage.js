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
    StatusBar
} from 'react-native';
import OrderDetails from '../components/orderDetails';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState, useEffect } from 'react';

const { width } = Dimensions.get('screen');

const ModalPoup = ({ visible, children }) => {
    const [showModal, setShowModal] = useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    useEffect(() => {
        toggleModal();
    }, [visible]);
    const toggleModal = () => {
        if (visible) {
            setShowModal(true);
            Animated.spring(scaleValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            setTimeout(() => setShowModal(false), 200);
            Animated.timing(
                scaleValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    };
    return (
        <Modal transparent visible={showModal}>
            <View style={styles.modalBackground}>
                <Animated.View style={[styles.modalContainer, { transform: [{ scale: scaleValue }] }]}>
                    {children}
                </Animated.View>
            </View>
        </Modal>
    );
};

const ApplePay = ({ onPress, title }) => (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.payChoice}
    >
        <Image source={require('../assets/applePay.png')} style={{ height: 60, width: 60, marginBottom: 5, marginTop: 5,alignSelf:'center' }} />
        <Text style={[styles.selectedPayChoice, { marginTop: 20, textAlign: 'center' }]}>{title}</Text>
    </TouchableOpacity>
);

const CreditCard = ({ onPress, title }) => (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.payChoice}
    >
        <Image source={require('../assets/creditcard.png')} style={{ height: 60, width: 60, marginBottom: 5, marginTop: 5,alignSelf:'center' }} />
        <Text style={[styles.selectedPayChoice, { marginTop: 20, textAlign: 'center' }]}>{title}</Text>
    </TouchableOpacity>
);

const SubmitBtn = ({ onPress, title }) => (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={[styles.appButtonContainer, { marginHorizontal: 10, marginBottom: 50, alignSelf:'center' }]}
    >
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);


const PaymentPage = ({ navigation }) => {
    
    const route = useRoute();

    const [visible, setVisible] = useState(false);
    const [visibleApplePay, setVisibleApplePay] = useState(false);
    const [visibleCreditCard, setVisibleCreditCard] = useState(false);
    const [visibleCreditCardDone, setVisibleCreditCardDone] = useState(false);
    const [invalidMessage, setinvalidMessage] = useState(null);

    const item = route.params?.StoreName;
    const [StoreName, setStoreName] = useState(item);

    const [CardNo,setCardNo] = useState(null);
    const [Name,setName] = useState(null);
    const [Exp,setExp] = useState(null);
    const [PIN,setPIN] = useState(null);
    
    const handleInput = () => {
        if ((CardNo !== null && CardNo !== '')
            || (Name !== null && Name !== '')
            || (Exp !== null && Exp !== '')
            || (PIN !== null && PIN !== '')) {
            setinvalidMessage(null)
            setVisibleCreditCardDone(true)
            setVisibleCreditCard(true)
        } else {
            setinvalidMessage("Please enter valid information!")   
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
                                navigation.navigate('OrderPage')
                            }}
                        >
                            <Icon name="arrow-back-ios" size={28}/>
                        </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Order Payment</Text>
            </View>

            <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }}
                    />

            {OrderDetails.map((item) => {
                return (
                    <View style={{marginTop:10}}>               
                    <View style={[styles.section]}>
                        <Text style={[styles.sectionTitle]}>Shop</Text>
                        <Text style={{ fontWeight: '300', fontSize: 17, paddingLeft: 5, paddingBottom:2, borderBottomColor:'black',borderBottomWidth:0.5 }}>
                            {StoreName}
                        </Text>
                    </View>

                    <View style={[styles.section]}>
                        <Text style={[styles.sectionTitle]}>Operating Hours</Text>
                        <Text style={{ fontWeight: '300', fontSize: 17 }}>
                            Daily from {item.openTime} to {item.closeTime}
                        </Text>
                    </View>

                    <View style={[styles.section]}>
                        <Text style={[styles.sectionTitle]}>Phone Number</Text>
                        <Text style={{ fontWeight: '300', fontSize: 17 }}>
                            {item.storePhoneNum}
                        </Text>
                    </View>
                </View>
            );
            })}

            <View>
                <View style={{
                    marginVertical: 10,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}>
                    <ModalPoup visible={visibleApplePay}>
                        <View style={styles.paymentHeader}>
                            <TouchableOpacity onPress={() => setVisibleApplePay(true)}>
                                <Icon name="arrow-back-ios" size={28} onPress={() => { navigation.navigate("Home"), setVisibleApplePay(false)}} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Checkout</Text>
                        </View>
                        <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }}
                    />
                        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', marginTop: -50 }}>
                            <Image
                                source={require('../assets/successLogo.png')}
                                style={{ height: 100, width: 100, }}
                            />
                            <Text style={{ marginVertical: 30, fontSize: 25, }}>
                                Payment successful!
                            </Text>
                        </View>
                        <SubmitBtn title="Done" onPress={() => { navigation.navigate("Home"), setVisibleApplePay(false), setVisibleCreditCard(false) }} />
                    </ModalPoup>
                    

                    <ModalPoup visible={visibleCreditCard}>
                    
                        <View style={[styles.card]}>
                            <View style={styles.paymentHeader}>
                            <TouchableOpacity onPress={() => setVisibleCreditCard(true)}>
                                <Icon name="arrow-back-ios" size={28} onPress={() => { setVisibleCreditCard(false), setVisibleApplePay(false)}} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Checkout</Text>
                        </View>
                        <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }}
                    />
                            <View 
                        style={styles.section}>

                            <View style={styles.formFieldWrapper}>
                                <Text style={styles.labelText}>Card Number</Text>
                                <TextInput
                                    placeholder='Card number'
                                    style={styles.formFieldText}
                                    maxLength={16}
                                    onChangeText={setCardNo}
                                />
                            </View>
                            <View style={styles.formFieldWrapper}>
                                <Text style={styles.labelText}>Name</Text>
                                <TextInput
                                    placeholder='Name'
                                    style={styles.formFieldText}
                                    maxLength={25}
                                    onChangeText={setName}
                                />
                            </View>
                            <View style={{ marginVertical:0,flexDirection: 'row', justifyContent:'center'}}>
                                <View style={[styles.formFieldWrapper, {width:'48%',marginLeft:-1}]}>
                                    <Text style={styles.labelText}>Expiry Date</Text>
                                    <TextInput
                                        placeholder='MM/YY'
                                        style={[styles.formFieldText]}
                                        maxLength={4}
                                        onChangeText={setExp}
                                    />
                                </View>
                                <View style={[styles.formFieldWrapper,{width:'48%', marginLeft:10}]}>
                                    <Text style={styles.labelText}>PIN</Text>
                                    <TextInput
                                        placeholder='PIN'
                                        style={styles.formFieldText}
                                        maxLength={3}
                                        onChangeText={setPIN}
                                    />
                                </View>
                            </View>
                            
                            </View>
                        </View>

                        <ModalPoup visible={visibleCreditCardDone}>
                            <View style={styles.paymentHeader}>
                                <TouchableOpacity onPress={() => setVisibleCreditCardDone(true)}>
                                    <Icon name="arrow-back-ios" size={28} onPress={() => { navigation.navigate("Home"), setVisibleCreditCardDone(false), setVisibleCreditCard(false) }} />
                                </TouchableOpacity><Text style={{ fontSize: 20, fontWeight: 'bold' }}>Checkout</Text>
                            </View>
                            <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }}
                    />
                         
                            <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', marginTop: -50 }}>
                                <Image
                                    source={require('../assets/successLogo.png')}
                                    style={{ height: 100, width: 100, }}
                                />
                                <Text style={{ marginVertical: 30, fontSize: 25, }}>
                                    Payment successful!
                                </Text>
                            </View>
                            <SubmitBtn title="Done" onPress={() => { navigation.navigate("Home"),setVisibleCreditCardDone(false), setVisibleCreditCard(false)}} />
                        </ModalPoup>
                        {invalidMessage ? <Text style={{paddingLeft:15, marginTop:-40, marginBottom:20, color: 'red', fontSize: 17 }}>{invalidMessage}</Text> : null}
                        <SubmitBtn title="Pay" onPress={handleInput}/>

                    
                    </ModalPoup>

                <View style={[styles.section]}>
                    <Text style={[styles.sectionTitle]}>Payment Method</Text>
                    <View style={{marginVertical:10, flexDirection:'row'}}>
                    <View style={{paddingRight:5}}>
                        <CreditCard title="Credit Card" onPress={()=>{ setVisibleCreditCard(true) }}/>
                    </View>
                    <View style={{paddingLeft:5}}>
                        <ApplePay title="Apple Pay" onPress={()=>{ setVisibleApplePay(true) }}/>
                    </View>                        
                    </View>
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
        marginHorizontal:115
    },
    paymentHeader:{
        paddingVertical: 20,
        flexDirection: 'row',
        alignContent: 'center',
        marginHorizontal: 20,
    },
    sectionTitle: {
        fontWeight:'900',
        fontSize:16,
        paddingVertical:10
    },
    section: {
        marginHorizontal:30,
        marginVertical:10,
    },
    payChoice: {
        width: '100%',
        elevation: 2,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical:30,
        paddingHorizontal:35,
        fontWeight:'900',
        fontSize:16
    },
    selectedPayChoice:{        
        fontWeight:'600',
        fontSize:17
    },
    modalBackground: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    appButtonContainer: {
        elevation: 2,
        backgroundColor:'rgba(253,226,151,1)',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: '85%'
    },
    appButtonText: {
        fontSize: 17,
        color: "#000",
        fontWeight:'500',
        alignSelf: "center",
    },
    formFieldWrapper: {
        paddingHorizontal: 5,
        paddingVertical:10
    },
    formFieldText: {
        fontSize: 18,
        borderRadius: 15,
        borderWidth: 1,
        padding: 12,
        textAlignVertical: 'top'
    },
    labelText: {
        fontSize: 18,
        marginBottom: 10,
        paddingLeft: 10,
        paddingTop: 20,
    },
    card:{
        backgroundColor:'white',
        marginBottom:50,
        borderTopLeftRadius:0,
        borderTopRightRadius:0,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        paddingBottom:100,
    },
});


export default PaymentPage;

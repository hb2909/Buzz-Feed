import React from 'react';
import { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Modal,
    StyleSheet,
    Image,
    StatusBar,
    ScrollView,
    Dimensions,
    Animated,
    TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import VegeProducts from '../components/vegeProducts';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('screen');

const AppButton = ({ onPress, title }) => (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.appButtonContainer}
    >
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);

const Btn = ({ onPress, title }) => (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.counterDecrementStyle}
    >

        <Text style={styles.btnSymbol}>{title}</Text>
    </TouchableOpacity>
);

const VegeItemPage = ({ navigation }) => {
    const route = useRoute();
    const item = route.params?.item;

    const [GoodsImage, setGoodsImage] = useState(item.goodsImage);
    const [Title, setTitle] = useState(item.title);
    const [Price, setPrice] = useState(item.price);
    const [StoreName, setStoreName] = useState(item.storeName);
    
    let [total,setTotal] = useState(0);
    let [Counter, setCounter] = useState(0);

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
    
    total = parseFloat(total.toFixed(2),total.toPrecision(3));
    

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            
            <StatusBar
                    translucent={false}
                    backgroundColor={'#F2F2F2'}
                    barStyle="dark-content"
                />

            <ScrollView showsVerticalScrollIndicator={false}>
                
                <View>
                <View style={[styles.header]}>
                <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('VegeProductPage')
                            }}
                        >
                            <Icon name="arrow-back-ios" size={28}/>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Buy Product</Text>
                </View>

                <View style={styles.detailsContainer}>
                    <Image source={GoodsImage} style={{ width: '100%', height: 350, marginTop: -80, marginBottom: 20 }} />
                    <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                        {Title}
                    </Text>
                    <Text style={{ fontSize: 17, marginTop: 5, marginBottom: 15, color: '#5C5C5C' }}>
                        $ {Price}
                    </Text>
                    <Text style={{ marginTop: 5, marginBottom: 15, color: '#5C5C5C', fontSize: 16, lineHeight: 20 }}>
                        {StoreName}
                    </Text>
                    <View style={{padding:10}}>
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

                <View style={{
                    flexDirection: 'row',
                    paddingHorizontal: 20,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                 
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        disabled={Counter==0 ? true :false}
                        onPress={() => navigation.navigate("CartPage",{GoodsImage,Title,Price,StoreName,Counter})}
                        style={Counter==0 ? styles.invalidAppButtonContainer : styles.appButtonContainer}
                    >
                        <Text style={styles.appButtonText}>Add to Cart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        disabled={Counter==0 ? true :false}
                        onPress={() => navigation.navigate("OrderPage",{GoodsImage,Title,Price,StoreName,Counter,total})}
                        style={Counter==0 ? styles.invalidAppButtonContainer : styles.appButtonContainer}
                    >
                        <Text style={styles.appButtonText}>Buy Now</Text>
                    </TouchableOpacity>
                    {/* <AppButton title="Add to Cart" onPress={() => navigation.navigate("CartPage",{GoodsImage,Title,Price,StoreName,Counter})} />
                    <AppButton title="Buy Now" onPress={() => navigation.navigate("OrderPage",{GoodsImage,Title,Price,StoreName,Counter})} /> */}
                </View>
            
                </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'flex-start',
        paddingTop: 20,
        paddingBottom:70,
        flexDirection: 'row',        
        alignContent: 'center',
        paddingHorizontal: 20,
    },
    detailsContainer: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 40
    },
    modalBackground: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        elevation: 20,
        margin: 0,
    },
    appButtonContainer: {
        height: 50,
        marginVertical: 20,
        justifyContent: 'center',
        backgroundColor: '#FDE297',
        borderRadius: 10,
        marginHorizontal:10,
        width:'45%'
    },
    invalidAppButtonContainer: {
        height: 50,
        marginVertical: 20,
        justifyContent: 'center',
        backgroundColor: 'grey',
        borderRadius: 10,
        marginHorizontal:10,
        width:'45%'
    },
    appButtonText: {
        fontSize: 19,
        color: "#000",
        fontWeight:'500',
        paddingHorizontal: 'auto',
        alignSelf: "center",
    },


    counterDecrementStyle: {
        borderRadius: 30,
        borderWidth:1,
        borderColor:'grey',
        width: '20%',
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

export default VegeItemPage;
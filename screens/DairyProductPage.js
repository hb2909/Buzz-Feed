import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    TextInput,
    Dimensions,
    StatusBar,
    TouchableOpacity,
    Pressable,
} from 'react-native';
import DairyProducts from '../components/dairyProducts';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('screen');
const numColumns = 2;

const DairyProductPage = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }} >
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
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Dairy Products</Text>
                </View>


            <ScrollView>
                <View style={styles.container}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                }}>
                <View style={styles.searchInputContainer}>
                    <Icon name="search" size={25} color='#A9A9A9' />
                    <TextInput placeholder="Search" />
                </View>
                </View>
                    {DairyProducts.map((item) => {
                        return (
                            <View style={{
                                justifyContent: 'center',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <Pressable style={styles.sCard} onPress={() => navigation.navigate("VegeItemPage", { item })}>
                                    <View style={{ paddingRight: 10 }}>
                                        <Image source={item.goodsImage} style={styles.prodImg} />
                                    </View>
                                    <View style={{ paddingLeft: 5, marginBottom: 25 }}>
                                        <Text numberOfLines={2} style={{ fontWeight: 'bold', fontSize: 17 }}>
                                            {item.title}
                                        </Text>
                                        <Text style={{ fontSize: 13, color: '#A9A9A9' }}>
                                            {item.price}
                                        </Text>
                                        <Text style={{
                                            fontSize: 13,
                                            color: '#5C5C5C',
                                            textAlign: 'left',
                                        }}>
                                            {item.storeName}
                                        </Text>
                                    </View>
                                </Pressable>
                            </View>
                        );
                    })}
                </View>
                
                <Text style={{ textAlign: 'center', marginBottom: 20, fontSize: 15, color: 'grey' }}>End of product list.</Text>
            </ScrollView>
            </View>
        </SafeAreaView >
    );
}


const styles = StyleSheet.create({
    header: {
        justifyContent: 'flex-start',
        paddingVertical: 20,
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    searchInputContainer: {
        height: 50,
        backgroundColor: '#f6f6f6',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom:15
    },
    container: {
        marginTop: 10,
        marginBottom: 40,
        marginHorizontal: 25,
    },
    sCard: {
        elevation: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        marginVertical: 10,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        width: '100%',
    },
    prodImg: {
        width: 100,
        height: 100,
    }
});


export default DairyProductPage;

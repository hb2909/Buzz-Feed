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
    initialState,
    Button
} from 'react-native';
import { Link, useLinkTo, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('screen');

const Profile = ({ navigation }) => {
    const [visible, setVisible] = React.useState(false);
    const [recentorderData, setrecentorderData] = useState(null);

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <StatusBar
                translucent={false}
                backgroundColor='#FDE297'
                barStyle="dark-content"
            />

            <View style={style.container}>
                <View style={style.header}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Home')
                        }}
                    >
                        <Icon name="arrow-back-ios" size={28} color={'#000'} />
                    </TouchableOpacity>

                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>User Profile</Text>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={style.container}>
                    <View style={style.profileInfo}>
                        <View>
                            < Image source={require('../assets/person.jpeg')}
                                style={style.profileImage}
                            />
                        </View>
                        <View style={style.profileName}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', paddingTop: 10, color: '#000' }}>User</Text>
                            <Text style={{ fontSize: 16, paddingTop: 5, color: '#000' }}>abc@gmail.com</Text>
                        </View>
                    </View>
                </View>

                <View style={{ paddingTop: 20, paddingHorizontal: 15 }} >

                    <Text style={{ fontSize: 16, paddingTop: 5, color: 'gray', paddingLeft: 20, paddingBottom: 10 }}>Account Details</Text>

                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }}
                    />

                    <View style={{ paddingTop: 20 }} >
                        <Pressable
                            onPress={() => { navigation.navigate('EditProfile'); }}
                        >
                            <View style={style.card}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}>
                                    <View
                                        style={{
                                            flex: 1,
                                            flexDirection: 'row'
                                        }}>
                                        <View style={style.iconContainer}>
                                            <Icon name="brush" size={25} color='#000' />
                                        </View>
                                        <Text style={{ paddingLeft: 20, fontSize: 19, alignSelf: 'center' }}>
                                            Edit Info
                                        </Text>
                                    </View>
                                </View>

                            </View>
                        </Pressable>
                    </View>

                    <View style={{ height: 20 }} />

                    <Text style={{ fontSize: 16, paddingTop: 5, color: 'gray', paddingLeft: 20, paddingBottom: 10 }}>Withdrawal Details</Text>

                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }}
                    />

                    <View style={{ paddingTop: 20 }} >
                        <Pressable
                            onPress={() => { navigation.navigate('Ewallet'); }}
                        >
                            <View style={style.card}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}>
                                    <View
                                        style={{
                                            flex: 1,
                                            flexDirection: 'row'
                                        }}>
                                        <View style={style.iconContainer}>
                                            <Icon name="credit-card" size={25} color='#000' />
                                        </View>
                                        <Text style={{ paddingLeft: 20, fontSize: 19, alignSelf: 'center' }}>
                                            Current Savings
                                        </Text>
                                    </View>
                                </View>

                            </View>
                        </Pressable>
                    </View>

                    <View style={{ height: 20 }} />

                    <View>
                        <Pressable
                            onPress={() => { navigation.navigate('Topup'); }}
                        >
                            <View style={style.card}>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}>
                                    <View
                                        style={{
                                            flex: 1,
                                            flexDirection: 'row'
                                        }}>
                                        <View style={style.iconContainer}>
                                            <Icon name="money" size={25} color='#000' />
                                        </View>
                                        <Text style={{ paddingLeft: 20, fontSize: 19, alignSelf: 'center' }}>
                                            Top Up
                                        </Text>
                                    </View>
                                </View>

                            </View>
                        </Pressable>
                    </View>

                    <View style={{ height: 20 }} />

                </View>

                <View style={{ paddingHorizontal: 30 }}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Login')
                    }}>

                        <View style={style.Btn}>
                            <Text style={{ color: '#000', fontSize: 15, fontWeight: 'bold' }}>
                                Log Out
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};


const style = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignContent: 'center',
        marginHorizontal: 20,
    },
    profileImage: {
        height: 120,
        width: 120,
        borderRadius: 60,
    },
    profileInfo: {
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: 20,
        paddingBottom: 40,
    },
    profileName: {
        alignItems: 'center',
    },
    card: {
        maxHeight: 100,
        borderRadius: 10,
        backgroundColor: 'white',
        marginVertical: 0,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        backgroundColor: '#FDE297'
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
    iconContainer: {
        height: 60,
        width: 60,
        backgroundColor: '#e1e8e9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        alignSelf: 'flex-start'
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
    container2: {
        flex: 1,
        height: '100%'
    },
});



export default Profile;
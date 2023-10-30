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
//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('screen');

const EditProfile = ({ navigation }) => {
    const [value, setValue] = React.useState(false);

    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <StatusBar
                translucent={false}
                backgroundColor='white'
                barStyle="dark-content"
            />

            <View>
                <View style={style.header}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Profile')
                        }}
                    >
                        <Icon name="arrow-back-ios" size={28} />
                    </TouchableOpacity>

                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Edit Profile</Text>
                </View>
            </View>

            
            <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }}
                    />

            <View style={style.profileInfo}>
                <View>
                    < Image source={require('../assets/person.jpeg')}
                        style={style.profileImage}
                    />
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={style.formFieldWrapper}>
                    <Text style={style.labelText}>Name</Text>
                    <TextInput
                        placeholder='Ally'
                        style={style.formFieldText}
                        editable={false}
                    />
                </View>

                <View style={style.formFieldWrapper}>
                    <Text style={style.labelText}>Email</Text>
                    <TextInput
                        placeholder='ally123@gmail.com'
                        style={style.formFieldText}
                        editable={false}
                    />
                </View>

                <View style={style.formFieldWrapper}>
                    <Text style={style.labelText}>Password</Text>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            placeholder='Password'
                            style={style.formFieldText1}
                            secureTextEntry={true}
                            editable={value}
                        />
                        <View style={style.icon}>
                            <TouchableOpacity
                                onPress={() => setValue(true)}
                            >
                                <View style={style.pBtn}>
                                    <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold', justifyContent: 'flex-end' }}>
                                        Edit
                                    </Text>
                                </View>
                                {/* <Icon name="edit" size={28} color='#000A66' /> */}
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

                <View style={style.formFieldWrapper}>
                    <Text style={style.labelText}>
                        Address
                    </Text>
                    <TextInput
                        style={style.formFieldText}
                        multiline
                        numberOfLines={3}
                        placeholder='No 3540, Jalan 18/46,
                        Taman Sri Serdang, 43300, Seri Kembangan, Selangor'
                    />
                </View>

                <View style={{ height: 30 }} />


                <TouchableOpacity onPress={() => {
                    navigation.navigate('Profile')
                }}>
                    <View style={style.formFieldWrapper}>

                        <View style={style.Btn}>
                            <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold' }}>
                                Save
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>



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
        paddingBottom: 10,
    },
    formFieldWrapper: {
        paddingHorizontal: 20,
    },
    formFieldText: {
        fontSize: 18,
        borderBottomWidth: 1,
        padding: 12,
        textAlignVertical: 'top',
        color: 'black'
    },
    formFieldText1: {
        fontSize: 18,
        borderBottomWidth: 1,
        padding: 12,
        textAlignVertical: 'top',
        color: 'black',
        justifyContent: 'flex-start',
        width: '70%',
    },
    icon: {
        paddingBottom: 0,
        justifyContent: 'flex-end',
        paddingLeft: 10
    },
    labelText: {
        fontSize: 15,
        paddingLeft: 10,
        paddingTop: 20,
        color: '#A9A9A9'
    },
    backgroundImage: {
        height: 100,
        width: '100%',
        //borderRadius: 10,
        overflow: 'hidden',
    },
    pBtn: {
        backgroundColor: '#FDE297',
        width: '60%',
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Btn: {
        backgroundColor: '#FDE297',
        width: '100%',
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 20,
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        //padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    stars: {
        display: 'flex',
        flexDirection: 'row',
    },
    starUnselected: {
        color: '#aaa',
    },
    starSelected: {
        color: '#ffb300',
    },
});

export default EditProfile;
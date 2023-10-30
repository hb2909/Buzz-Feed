import React, { useState } from 'react';
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
    Modal
} from 'react-native';
//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialIcons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';

const { width } = Dimensions.get('screen');


const paymentMethodsData = [
    {
        name: "MayBank",
        method: "Online Banking",
        entity: "MayBank",
    },
    {
        entity: "Hong Leong Bank",
        method: "Online Banking",
        name: "Hong Leong Bank",
    },
    {
        entity: "RHB Bank",
        method: "Online Banking",
        name: "RHB Bank",
    },
    {
        entity: "CIMB Bank",
        method: "Online Banking",
        name: "CIMB Bank",
    },
];


const ModalPopup = ({ visible, children }) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
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
            Animated.timing(scaleValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    };
    return (
        <Modal transparent visible={showModal}>
            <View style={style.modalBackGround}>
                <Animated.View
                    style={[style.modalContainer, { transform: [{ scale: scaleValue }] }]}>
                    {children}
                </Animated.View>
            </View>
        </Modal>
    );
};


const Topup = ({ navigation }) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [ChosenBank, setChosenBank] = useState(null);

    const [visible, setVisible] = React.useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[style.label, isFocus && { color: 'blue' }]}>
                    Dropdown label
                </Text>
            );
        }
        return null;
    };

    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <ScrollView>
                <StatusBar
                    translucent={false}
                    backgroundColor='#FDE297'
                    barStyle="dark-content"
                />

                <View>
                    <View style={style.header}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Profile')
                            }}
                        >
                            <Icon name="arrow-back-ios" size={28}/>
                        </TouchableOpacity>

                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Top Up</Text>
                    </View>
                </View>

                <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }}
                    />

                <View style={style.bCard}>
                    <View style={{
                        flexDirection: 'row',
                        paddingHorizontal: 10,
                        borderRadius: 15,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingVertical: 30,
                    }}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                paddingHorizontal: 10
                            }}>
                            <Text style={{ paddingLeft: 10, fontSize: 18, width: '60%', alignSelf: 'center' }}>
                                Account Balance
                            </Text>
                            <Text style={{ paddingLeft: 10, fontSize: 25, fontWeight: 'bold', width: '40%' }}>
                                RM 30.00
                            </Text>
                        </View>
                    </View>
                </View>

                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        marginHorizontal: 10
                    }}
                />

                <View style={style.formFieldWrapper}>
                    <Text style={style.labelText}>Name</Text>
                    <TextInput
                        placeholder='Ally'
                        style={style.formFieldText}
                        editable={false}
                    />
                </View>

                <View style={style.formFieldWrapper}>
                    {renderLabel()}
                    <Text style={style.labelText}>Select a Bank</Text>

                    <Dropdown
                        style={[style.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={style.placeholderStyle}
                        selectedTextStyle={style.selectedTextStyle}
                        data={paymentMethodsData}
                        value={value}
                        maxHeight={300}
                        labelField="name"
                        valueField="value"
                        placeholder={!isFocus ? 'Select item' : ChosenBank}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setChosenBank(item.name);
                            setIsFocus(false);
                        }}
                    />

                </View>

                <View>
                    <View style={style.formFieldWrapper}>
                        <Text style={style.labelText}>Account Number</Text>
                        <TextInput
                            placeholder='160**********699'
                            style={style.formFieldText}
                        />
                    </View>
                    
                    <View style={style.formFieldWrapper}>
                        <Text style={style.labelText}>Top up Amount</Text>
                        <TextInput
                            placeholder='RM'
                            style={style.formFieldText}
                        />
                    </View>
                </View>

                <View style={{ height: 40 }} />

                <ModalPopup visible={visible}>
                    <View style={{ alignItems: 'center' }}>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={require('../assets/success.png')}
                            style={{ height: 150, width: 150, marginVertical: 10 }}
                        />
                    </View>

                    <Text style={{ marginVertical: 30, fontSize: 20, textAlign: 'center' }}>
                        Top Up is successful!
                    </Text>

                    <View >
                        <TouchableOpacity onPress={() => {setVisible(false), navigation.navigate('Profile')}}>

                            <View style={style.closeBtn}>
                                <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}>Return to Profile</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </ModalPopup>


                <TouchableOpacity onPress={() => setVisible(true)}>
                    <View style={style.formFieldWrapper}>

                        <View style={style.Btn}>
                            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
                                Top Up
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
    formFieldWrapper: {
        paddingHorizontal: 20,
    },
    formFieldWrapper1: {
        paddingHorizontal: 5,
    },
    formFieldText: {
        fontSize: 18,
        borderRadius: 15,
        borderWidth: 1,
        padding: 12,
        textAlignVertical: 'center'
    },
    labelText: {
        fontSize: 18,
        marginBottom: 10,
        paddingLeft: 10,
        paddingTop: 20,
    },
    title: {
        fontSize: 25,
        marginBottom: 10,
        paddingTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        fontWeight: 'bold',
    },
    backgroundImage: {
        height: 100,
        width: '100%',
        //borderRadius: 10,
        overflow: 'hidden',
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
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingLeft: 10,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 15,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 18,
    },
    selectedTextStyle: {
        fontSize: 18,
    },
    closeBtn: {
        backgroundColor: '#FDE297',
        height: 50,
        width: '100%',
        borderRadius: 15,
        paddingHorizontal: 10,
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    modalBackGround: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 10,
        borderRadius: 20,
        elevation: 20,
    },
});

export default Topup;
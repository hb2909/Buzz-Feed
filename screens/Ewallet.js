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
} from 'react-native';
import { Link, useLinkTo, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import seller from '../components/seller';

const { width } = Dimensions.get('screen');

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
  

const Ewallet = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);
  const [recentorderData, setrecentorderData] = useState(null);

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
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

                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>E-Wallet Balance</Text>

                </View>
            </View>

            <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }}
                    />


            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={style.card}>
                    <View style={{
                        flexDirection: 'row',
                        paddingHorizontal: 10,
                        borderRadius: 15,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingVertical: 20,
                    }}>
                        <View
                            style={{
                                flex: 1,
                            }}>
                            <Text style={{ paddingLeft: 10, fontSize: 16, color: '#000' }}>
                                Current Savings
                            </Text>
                            <Text style={{ paddingLeft: 10, fontWeight: 'bold', fontSize: 25, color: '#000' }}>
                                RM 35.00
                            </Text>
                        </View>
                    </View>
                </View>


                <View>
                    <Text style={style.titles}>
                        Recent Purchases
                    </Text>
                </View>

            <View>

              <View>

                {seller.map((option, index) => (
                    <View index={index} key={index} style={style.bCard}>
                      <View style={{
                        flexDirection: 'row',
                        paddingHorizontal: 20,
                        borderRadius: 15,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: 10,
                      }}>
                        <View
                          style={{
                            flex: 1,
                          }}>
                          <Text style={{ paddingLeft: 10, fontWeight: 'bold', fontSize: 19 }}>
                            {option.name}
                          </Text>
                          <Text style={{ paddingLeft: 10, fontSize: 16, color: '#5C5C5C' }}>
                            {option.type}
                          </Text>
                        </View>
                      </View>

                    </View>

                ))}

              </View>
            </View>

                <View style={{ height: 30 }} />

                
            </ScrollView>
            <View style={style.bottom}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Topup')
                }}>
                    <View style={style.formFieldWrapper}>

                        <View style={style.Btn}>
                            <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold' }}>
                                Top Up Now
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
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
    container: {
        marginTop: 20,
        marginHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 30,
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },
    titles2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingHorizontal: 30,
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },
    title3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 30,
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },
    card: {
        minHeight: 70,
        borderRadius: 10,
        backgroundColor: '#FDE297',
        marginVertical: 20,
        marginHorizontal: 30,
        alignItems: 'center',
        elevation: 10,
    },
    bCard: {
        minHeight: 70,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginVertical: 5,
        marginHorizontal: 30,
        paddingHorizontal: 5,
        alignItems: 'center',
        elevation: 10,
    },
    formFieldWrapper: {
        paddingHorizontal: 30,
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
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 20,
    }
});


export default Ewallet;
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
  initialState
} from 'react-native';
//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
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


const Home = ({ navigation }) => {

  
  const ListOptions = ({ seller }) => {
    return (
      <View style={style.optionListContainer}>
        <View style={style.optionCard}>
          <Image source={seller.image} style={style.optionCardImage} />

          <Text style={{ marginTop: 10, fontSize: 15, fontWeight: 'bold' }}>{seller.name}</Text>
          <Text style={{ fontSize: 14 }}>{seller.type}</Text>

        </View>

      </View>
    );
  };


  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <StatusBar
                translucent={false}
                backgroundColor='#FDE297'
                barStyle="dark-content"
            />

      <View style={style.container}>
            <View style={style.header}>
              <View>
                <Text style={{ color: '#000', fontSize: 30, fontWeight: 'bold' }}>
                  BUZZ-FEED
                </Text>
              </View>

              <TouchableOpacity onPress={() => {
                          navigation.navigate('Profile')
                      }}>
                          <View style={style.formFieldWrapper}>

                              <View style={style.profileImage}>
                                < Image source={require('../assets/person.jpeg')}
                                  style={style.profileImage}
                                />
                              </View>
                          </View>
                      </TouchableOpacity>
            </View>
      </View>

      <ScrollView>
      <View style={style.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <View style={style.searchInputContainer}>
            <Icon name="search" size={25} color='#A9A9A9' />
            <TextInput placeholder="Search for something!" />
          </View>
        </View>

        {/*
      <View>
        <Text style={style.titles2}>
          Main Categories
        </Text>
      </View>
    */}

        <View style={style.categoryContainer}>
          <View style={style.iconContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('VegeProductPage')
              }}
            >
            <View style={{
                justifyContent: 'center',
              }}>
              <FontAwesome5 name="carrot" size={25} color='#000' marginHorizontal={25}/>
            </View>
            <View style={{
                alignContent: 'center',
                marginHorizontal: 3,
              }}>
                <Text>Vegetables</Text>
            </View>
            </TouchableOpacity>
          </View>

          <View style={style.iconContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('FruitProductPage')
              }}
            >
              <FontAwesome5 name="apple" size={25} color='#000' marginHorizontal={30}/>
              <View style={{
                alignContent: 'center',
                marginHorizontal: 20,
              }}>
                <Text>Fruits</Text>
            </View>
            </TouchableOpacity>
          </View>

          <View style={style.iconContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('DairyProductPage')
              }}
            >
              <FontAwesome5 name="cheese" size={25} color='#000' marginHorizontal={25}/>
              <View style={{
                alignContent: 'center',
                marginHorizontal: 20,
              }}>
                <Text>Dairy</Text>
            </View>
            </TouchableOpacity>
          </View>

          <View style={style.iconContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('MeatProductPage')
              }}
            >
              <FontAwesome5 name="drumstick-bite" size={25} color='#000' marginHorizontal={25}/>
              <View style={{
                alignContent: 'center',
                marginHorizontal: 20,
              }}>
                <Text>Meat</Text>
            </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

        <View>
          <Text style={style.titles}>
            Popular Goods
          </Text>
        </View>

        </ScrollView>

        <FlatList
          contentContainerStyle={{ paddingRight: 20, paddingBottom: 20 }}
          data={seller}
          renderItem={({ item }) => <ListOptions seller={item} />}
        />

    </SafeAreaView>
  );
};


const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  container: {
    backgroundColor: '#FDE297',
    paddingBottom: 10,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: '#f6f6f6',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  titles: {
    flexDirection: 'row',
    paddingTop: 30,
    paddingBottom: 50,
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
  sortBtn: {
    backgroundColor: '#000',
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  optionListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  optionCard: {
    height: 210,
    width: width - 30,
    elevation: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  optionCardImage: {
    height: 140,
    borderRadius: 10,
    width: '100%',
  },
  categoryContainer: {
    marginTop: 20,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryNameContainer: {
    marginTop: 10,
    marginLeft: 30,
    marginRight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    height: 80,
    width: 80,
    backgroundColor: '#fff',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  card: {
    height: 200,
    backgroundColor: 'white',
    elevation: 10,
    width: width - 40,
    marginRight: 20,
    padding: 15,
    borderRadius: 20,
  },
  scard: {
    height: 180,
    backgroundColor: 'white',
    elevation: 5,
    width: width - 40,
    marginRight: 20,
    borderRadius: 20,
  },
  scardImage: {
    width: '100%',
    height: 130,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 15
  },
  modalBackGround: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    flexDirection: 'column',
    //justifyItems: 'center',
    //elevation: 20,
  },
  backgroundImage: {
    width: '100%',
    overflow: 'hidden',
    borderRadius: 15,
  },
  Btn: {
    backgroundColor: '#000A66',
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
  bottom: {
    justifyContent: 'flex-end',
    //justifyContent: 'flex-end'
    //justifyContent: 'flex-end',
  }
});


export default Home;
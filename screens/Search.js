import React from 'react';
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
  iconName,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native';
//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
import seller from '../components/seller';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('screen');

const Search = ({ navigation }) => {

  const ServiceCard = ({ item }) => {
    return <View style={style.sCard}>
      <Image source={item.image} style={{ height: 100, width: 100 }} />
      <View
        style={{
          paddingVertical: 25,
          height: 150,
          marginLeft: 5,
          flex: 1,
        }}>
        <Text style={{ paddingLeft: 10, fontWeight: 'bold', fontSize: 16 }}>
          {item.name}
        </Text>
        <Text style={{ paddingLeft: 10, fontSize: 13, color: '#A9A9A9' }}>
          {item.type}
        </Text>
        <Text style={{ paddingLeft: 10, fontSize: 13, color: '#5C5C5C', marginTop: 5 }}>
          {item.desc}
        </Text>
      </View>
    </View>
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <View>
        <View style={style.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home')
            }}
          >
            <Icon name="arrow-back-ios" size={28} />
          </TouchableOpacity>

          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>List of Sellers</Text>

        </View>
      </View>

      
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <View style={style.searchInputContainer}>
          <Icon name="search" size={25} color='#A9A9A9' />
          <TextInput placeholder="Search for a service provider!" />
        </View>
        <View style={style.sortBtn}>
          <Icon name="tune" color='#000' size={25} />
        </View>
      </View>

      <View style={{ paddingHorizontal: 10, paddingVertical: 10, paddingBottom: 80, }}>
        {/* <Pressable
        onPress={() => {
          navigation.navigate('ProviderInfo')
        }}> */}
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
          data={seller}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('SellerInfo')}>
              <ServiceCard item={item} />
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        />
      </View>

      {/* </Pressable> */}
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
  searchInputContainer: {
    height: 50,
    backgroundColor: '#f6f6f6',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  sCard: {
    height: 120,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 0,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  container: {
    marginVertical: 10,
    marginLeft: 10,
    marginBottom: 0,
    flex: 1,
  },
});

export default Search;








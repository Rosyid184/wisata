//contoh navigasi
import React from 'react';
import { Text, View }from 'react-native';
import { TabNavigator } from 'react-navigation'; // 1.0.0-beta.22
// You can import from local files
import AssetExample from './components/AssetExample';
import Wisata from './components/Wisata';
// or any pure javascript modules available in npm


import "@expo/vector-icons"; // 6.2.2

const HomeScreen = () => (
  <View style={{ flex: 1, backgroundColor:'#0bd2d4',alignItems: 'center', justifyContent: 'center' }}>
     <Text style={{    fontSize: 20,}}>Selamat Datang Di Info Wisata Wonosobo</Text>
          <AssetExample />
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, backgroundColor:'#0bd2d4',alignItems: 'center', justifyContent: 'center' }}>
    <Wisata/>
  </View>
);
const AboutScreen = () => (
  <View style={{ flex: 1,  backgroundColor:'#0bd2d4',alignItems: 'center', justifyContent: 'center' }}>
      <Text>Aplikasi Informasi Wisata Wonosobo dibuat oleh :</Text>
      <Text>Nama / NIM : Nur Rosyid / 2015150014 </Text>
      <Text>Nama / NIM : Muhammad Armysyifa / 2015150023</Text>
      <Text>Nama / NIM : Andi Musin / 2015150039</Text>
        
  </View>
);

const RootTabs = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Wisata: {
    screen: ProfileScreen,
  },
    About: {
    screen: AboutScreen,
  },
});

export default RootTabs;
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

const DiengScreen = () => (
  <View style={{ flex: 1, backgroundColor:'#0bd2d4',alignItems: 'center', justifyContent: 'center' }}>
     <Text style={{    fontSize: 20,}}>Informasi Wisata Dieng (Telaga Menjer)</Text>
          <Dieng />
  </View>
);

const LubangsewuScreen = () => (
  <View style={{ flex: 1, backgroundColor:'#0bd2d4',alignItems: 'center', justifyContent: 'center' }}>
  <Text style={{    fontSize: 20,}}>Informasi Wisata Lubang Sewu</Text>
    <Lubangsewu/>
  </View>
);
const KaliangetScreen = () => (
  <View style={{ flex: 1,  backgroundColor:'#0bd2d4',alignItems: 'center', justifyContent: 'center' }}>
  <Text style={{    fontSize: 20,}}>Informasi Wisata Kalianget</Text>
      <Kalianget/>
  </View>
);

const RootTabs = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Dieng: {
    screen: DiengScreen,
  },
  Lubang Sewu: {
    screen: LubangsewuScreen,
  },
    Kalianget: {
    screen: KaliangetScreen,
  },
});

export default RootTabs;
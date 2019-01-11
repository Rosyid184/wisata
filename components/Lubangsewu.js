import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class AssetExample extends Component {
  render() {
    return (
        <View style={styles.container}>
        <Text style={styles.paragraph}>
        Wisata Lubang Sewu 
        </Text>
        <Text></Text>
        <Image style={styles.logo} source={require("../assets/tw.png")}/>
        <Text style={styles.paragraph}>
        <Text></Text>
        Tentang Lubang Sewu
        </Text>
        <Text></Text>
        <Text>
        Alamat  : Desa Erorejo, Kecamatan Wadaslintang, Kabupaten Wonosobo, Provinsi Jawa tengah
        </Text>
        <Text>
        Tarif Masuk : Rp. 10.000
        </Text>
        <Text>
        Fasilitas Lubang Sewu : 
        </Text>
        <Text></Text>
        <Text>
            -  Bebatuan Lubang Sewe
            -  Keindahan Waduk
            -  Bukit Hijau
            -  Pemandangan Matahari Tenggelam Diatas Waduk
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  logo: {
    backgroundColor: "#056ecf",
    height: 128,
    width: 128,
  }
});

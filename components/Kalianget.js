import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class AssetExample extends Component {
  render() {
    return (
        <View style={styles.container}>
        <Text style={styles.paragraph}>
        Wisata Kalianget
        </Text>
        <Text></Text>
        <Image style={styles.logo} source={require("../assets/tw.png")}/>
        <Text style={styles.paragraph}>
        <Text></Text>
        Tentang Kalianget
        </Text>
        <Text></Text>
        <Text>
        Alamat  : Jalan raya Wonosobo-Dieng, KM 03. Desa Kalianget, Kecamatan Wonosobo, Kabupaten Wonosobo, Provinsi Jawa tengah
        </Text>
        <Text>
        Tarif Masuk : Rp. 15.000
        </Text>
        <Text>
        Sekilas Kalianget : Kali adalah sungai kecil, anget adalah hangat. Itulah kenapa awal mula desa ini bernama kalianget karena di desa ini terdapat sumber mata air hangat yang selalu mengalir. 
        Kebanyakan orang desa kalianget dan sekitarnya untuk berendam sekaligus terapi badan. Air hangat alami itupun juga bisa dijadikan sebagai pengobatan penyakit seperti Panu Kadas Kurap Gatal-gatal karena alergi dan masih banyak yang lainya.
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

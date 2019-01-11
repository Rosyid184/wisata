import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class AssetExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
        Wisata Dieng
        </Text>
        <Text></Text>
        <Image style={styles.logo} source={require("../assets/tw.png")}/>
        <Text style={styles.paragraph}>
        <Text></Text>
        Tentang Telaga Warna
        </Text>
        <Text></Text>
        <Text>
        Alamat  : Desa Dieng, Kecamatan Kejajar, Kabupaten Wonosobo, Provinsi Jawa tengah
        </Text>
        <Text>
        Tarif Masuk : Rp. 15.000
        </Text>
        <Text>
        Sekilas Telaga Warna : Nama Telaga Warna sendiri diberikan karena keunikan fenomena alam yang terjadi di tempat ini, 
        yaitu warna air dari telaga tersebut yang sering berubah-ubah. Terkadang telaga ini berwarna hijau dan kuning atau berwarna warni seperti pelangi.
        Fenomena ini terjadi karena air telaga mengandung sulfur yang cukup tinggi, sehingga saat sinar Matahari mengenainya, maka warna air telaga tampak berwarna warni. 
        Telaga Warna berada di ketinggian 2000 meter di atas permukaan laut, dan dikelilingi oleh bukit-bukit tinggi yang menambah pesona keindahan alam sekitar telaga warna.
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

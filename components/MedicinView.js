import React,{Component} from 'react';
import {Text, View, ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import img from '/Users/Lasse/Desktop/sites/SoftwareOpgave/assets/panodil.jpg';
import img2 from '/Users/Lasse/Desktop/sites/SoftwareOpgave/assets/panodil-extra.jpg';
import img3 from '/Users/Lasse/Desktop/sites/SoftwareOpgave/assets/panodil-hot.jpg';
import img4 from '/Users/Lasse/Desktop/sites/SoftwareOpgave/assets/panodil-zapp.jpg';

export default class ScrollViewScreen extends Component{

  //View for den enklte medicin
  //Der bliver brugt flere forskellige Text styles
  render() {
    return(
      <View style={styles.container}>
        <ScrollView style={styles.StyledView}>
          <Text style={styles.header}> Panodil</Text>
          <Image style={styles.image} source={img} />
          <Text style={styles.header2}> Sådan Gør Du</Text>
          <Text> Maks 2 piller af gangen og maks 3 gange dagligt. Tages med vand</Text>
          <Text style={styles.header2}> Vær Obs På</Text>
          <Text>
            Må ikke tages ved intagelse af alkohol. Må ikkes tages under graviditet
          </Text>
        </ScrollView>
      </View>
    )
  }
}

const containerStyle = {
    flexDirection: 'column',
    margin: 10,
    alignItems: 'center',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:50
  },
  StyledView:{
    height:150,
  },
  image: {
    width: 200,
    height: 200,
    marginRight: 0,
  },
  header: {
    ...containerStyle,
    fontSize: 40,
    fontWeight: 'bold'
  },
  header2: {
    ...containerStyle,
    marginTop: 20,
    padding: 5,
    fontSize: 24,
    fontWeight: 'bold',
    borderWidth: 2
  },
});

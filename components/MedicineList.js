import React,{Component} from 'react';
import {Text, View, ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import img from '/Users/Lasse/Desktop/sites/softwareopgave/assets/panodil.jpg';
import img2 from '/Users/Lasse/Desktop/sites/softwareopgave/assets/panodil-extra.jpg';
import img3 from '/Users/Lasse/Desktop/sites/softwareopgave/assets/panodil-hot.jpg';
import img4 from '/Users/Lasse/Desktop/sites/softwareopgave/assets/panodil-zapp.jpg';

export default class ScrollViewScreen extends Component{

  handleClick = () => {
    this.props.navigation.navigate('MedicinView')
  }

  render() {
    return(
      <View style={styles.container}>
        <ScrollView style={styles.StyledView}>
          <TouchableOpacity style={styles.container1} onPress={this.handleClick}>
            <Image style={styles.image} source={img} />
            <Text style={styles.header}> Panodil</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.container1} onPress={this.handleClick}>
            <Image style={styles.image} source={img2} />
            <Text style={styles.header}> Panodil Extra</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container1} onPress={this.handleClick}>
            <Image style={styles.image} source={img3} />
            <Text style={styles.header}> Panodil Hot</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container1} onPress={this.handleClick}>
            <Image style={styles.image} source={img4} />
            <Text style={styles.header}> Panodil Zapp</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
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
    marginRight: 10,
  },
  container1: {
    flexDirection: 'column',
    margin: 10,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
  },
});

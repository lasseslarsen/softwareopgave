import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Button,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';



export default class App extends React.Component {
  cameraRef = React.createRef();

  state = {
    hasCameraPermission: null,
  };

  componentDidMount() {
    this.updateCameraPermission();
  }

  updateCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  //Knappen der skal bruges til at scanne medicinen
  //I denne kode sender den brugeren videre til MedicinView
  handleScanMedicin = async () => {
    if (!this.cameraRef.current) {
      return;
    }
    this.props.navigation.navigate('MedicinView')
    const result = await this.cameraRef.current.takePictureAsync();
    console.log({ result });
  };

  //Tjekker om der er givet adgang til kameraet
  renderCameraView() {
    const { hasCameraPermission, type } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    }
    if (hasCameraPermission === false) {
      return (
        <View>
          <Text>No access to camera.</Text>
        </View>
      );
    }
    return (
      <View>
        <Camera
          style={styles.cameraView}
          type={Camera.Constants.Type.back}
          ref={this.cameraRef}>

        </Camera>
        <Button type ="outline" title="Scan Medicin" onPress={this.handleScanMedicin} />
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.cameraContainer}>{this.renderCameraView()}</View>
      </SafeAreaView>
    );
  }

}


const containerStyle = {
  padding: 2,
  borderRadius: 1,
  margin: 2,
  borderWidth: 1
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },

  cameraContainer: {
    // Her pakkes fælles style ud
    ...containerStyle,
    backgroundColor: '#ffffff',

  },
  cameraView: {
    marginTop: 2,
    width: '100%',
    height: '80%'
  },
});

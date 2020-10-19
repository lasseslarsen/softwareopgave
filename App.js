
import React from 'react';
import { StyleSheet} from 'react-native';
import CameraView from "./components/CameraView";
import MedicineList from "./components/MedicineList";
import MedicinView from "./components/MedicinView";
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


/*Her har vi stack navigationen*/
const stackNavigator = createStackNavigator({
    /*Fra venstre er det side navnet og screen er vores View / component*/
    MedicineList: { screen: MedicineList },
    MedicinView:{screen: MedicinView}
  },
  {
    /*Hvilket View skal starte*/
    initialRouteName:'MedicineList',
    navigationOptions:{
      title:'Medicin liste'
    }
  }
);

// Denne TabNavigator holder styr på det yderste niveau af navigation i appen.
const TabNavigator = createBottomTabNavigator(
  {
    /*Tilføj routes*/
    CameraView: {
      screen: CameraView,
      navigationOptions: {
        tabBarLabel:"Scan Medicin",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-camera" size={24} color={tintColor} />
        )
      },
    },

    navigator: {
      /*HVilket view skal loades*/
      screen: stackNavigator,
      /*Instillinger til navigation*/
      navigationOptions: {
        /*Navn*/
        tabBarLabel:"Medicin list",
        /*Ikon*/
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="pill" size={24} color="black" />
        )
      },
    }
  },
  /*Generelle label indstillinger*/
  {
    tabBarOptions: {
      showIcon:true,
      labelStyle: {
        fontSize: 15,
      },
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
      size:40
    }
  }
)





export default createAppContainer(TabNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
    marginTop:40,
  },
  tabIcon: {
    width: 32,
    height: 32,
  },
});

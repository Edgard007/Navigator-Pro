/*
  Inspiration: https://www.youtube.com/channel/UCTcH04SRuyedaSuuQVeAcdg
  Project created by:
  -- Francisco Edgardo Hernández Palacios
  linkedIn: https://www.linkedin.com/in/francisco-edgardo-hern%C3%A1ndez-palacios/
*/

import * as React from 'react';
import { Dimensions, StatusBar } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
  RestaurantsScreen,
  AutomotiveScreen,
  FunScreen,
  FitnessScreen,
  EducationScreen,
  ProductsScreen,
  ContactScreen,
} from './Screens';
import CustomDrawer from './CustomDrawer';

const { width } = Dimensions.get('screen');
const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Drawer.Navigator
        initialRouteName={'Restaurants'}
        drawerStyle={{
          backgroundColor: 'transparent',
          width: 0,
        }}
        overlayColor='transparent'
        drawerType='permanent'
        drawerContent={(props) => {
          return (
            <CustomDrawer
              navigation={props.navigation}
              routes={props.state.routeNames}
              selectedRoute={props.state.routeNames[props.state.index]}
            />
          );
        }}
      >
        <Drawer.Screen name='Restaurants' component={RestaurantsScreen} />
        <Drawer.Screen name='Automotive' component={AutomotiveScreen} />
        <Drawer.Screen name='Fun' component={FunScreen} />
        <Drawer.Screen name='Fitness' component={FitnessScreen} />
        <Drawer.Screen name='Education' component={EducationScreen} />
        <Drawer.Screen name='Products' component={ProductsScreen} />
        <Drawer.Screen name='Contact' component={ContactScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

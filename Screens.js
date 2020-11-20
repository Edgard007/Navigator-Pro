/*
  Inspiration: https://www.youtube.com/channel/UCTcH04SRuyedaSuuQVeAcdg
  Project created by:
  -- Francisco Edgardo Hernández Palacios
  linkedIn: https://www.linkedin.com/in/francisco-edgardo-hern%C3%A1ndez-palacios/
*/

import * as React from 'react';
import { SafeAreaView, Text, Image, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { colors } from './utils';

//Icons
import restaurants from './assets/Icons/restaurants.png';
import automotive from './assets/Icons/automotive.png';
import fun from './assets/Icons/fun.png';
import fitness from './assets/Icons/fitness.png';
import education from './assets/Icons/education.png';
import products from './assets/Icons/products.png';
import contact from './assets/Icons/contact.png';
import splash from './assets/Icons/splash.gif';

const styles = StyleSheet.create({
  img: {
    width:"20%", 
    height:"20%"
  },
  tema: {
    fontSize: 30
  },
  description: {
    fontSize: 15, 
    textAlign: 'justify',
    margin: 25
  },
  antDesign: { 
    position: 'absolute', 
    top: 20, 
    right: 0, 
    padding: 20 
  }
});

const Screen = ({ label, backgroundColor, navigation, image, description }) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <OpenDrawerButton navigation={navigation} />
      <Image
        style={styles.img}
        source={image}
        resizeMode="contain"
      />
      <Text style={styles.tema}>{label}</Text>
      <Text style={styles.description}>{description}</Text>
    </SafeAreaView>
  );
};

const OpenDrawerButton = ({ navigation }) => (
  <AntDesign
    hitSlop={{ left: 10, right: 10, top: 10, bottom: 10 }}
    onPress={() => navigation.openDrawer()}
    name='menufold'
    size={32}
    color='#222'
    style={styles.antDesign}
  />
);

export function RestaurantsScreen({ navigation }) {
  const descrition = 'Here you add a beautiful description of your product or service that you want to present.';
  return (
    <Screen
      backgroundColor={colors[0]}
      label={'Restaurant'}
      image={restaurants}
      navigation={navigation}
      description={descrition}
    />
  );
}
export function AutomotiveScreen({ navigation }) {
  const descrition = 'Here you add a beautiful description of your product or service that you want to present.';
  return (
    <Screen
      backgroundColor={colors[1]}
      label={'Automotive'}
      image={automotive}
      navigation={navigation}
      description={descrition}
    />
  );
}
export function FunScreen({ navigation }) {
  const descrition = 'Here you add a beautiful description of your product or service that you want to present.';
  return (
    <Screen
      backgroundColor={colors[2]}
      label={'Fun'}
      image={fun}
      navigation={navigation}
      description={descrition}
    />
  );
}
export function FitnessScreen({ navigation }) {
  const descrition = 'Here you add a beautiful description of your product or service that you want to present.';
  return (
    <Screen
      backgroundColor={colors[3]}
      label={'Fitness'}
      image={fitness}
      navigation={navigation}
      description={descrition}
    />
  );
}
export function EducationScreen({ navigation }) {
  const descrition = 'Here you add a beautiful description of your product or service that you want to present.';
  return (
    <Screen
      backgroundColor={colors[4]}
      label={'Education'}
      image={education}
      navigation={navigation}
      description={descrition}
    />
  );
}
export function ProductsScreen({ navigation }) {
  const descrition = 'Here you add a beautiful description of your product or service that you want to present.';
  return (
    <Screen
      backgroundColor={colors[5]}
      label={'Products'}
      image={products}
      navigation={navigation}
      description={descrition}
    />
  );
}
export function ContactScreen({ navigation }) {
  const descrition = 'Francisco Edgardo Hernández Palacios 💻';
  return (
    <Screen
      backgroundColor={colors[6]}
      label={'Programmer'}
      image={contact}
      navigation={navigation}
      description={descrition}
    />
  );
}

import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';


const ItemCard = () => {
   
  return (
    <View style={[styles.container]}>
      <View style={styles.card}>
        <Image source={require('../../../assets/images/helecho.png')} style={styles.image} />
        <Text style={styles.text}>HELECHO</Text>
      </View>
    </View>
  );
};

export default ItemCard;


import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';


const ItemDetail = ({ plantImage, descriptionText }) => {
   
  return (
    <View style={[styles.container]}>
      <View style={[styles.halfContainerUp]}>
        <Image source={require('../../../assets/images/helecho.png')} style={styles.image} />
      </View>
      <View style={[styles.halfContainerDown]}>
        <Text style={styles.text}>{descriptionText}</Text>
      </View>
    </View>
  );
};

export default ItemDetail;


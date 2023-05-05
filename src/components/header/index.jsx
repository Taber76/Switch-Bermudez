import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';

const Header = ({ onBackPress, title }) => {


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress}>
        <Image source={require('../../../assets/images/backArrow.png')} style={styles.backImage} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <Image source={require('../../../assets/images/cart.png')} style={styles.cartImage} />
    </View>
  );
};

export default Header;


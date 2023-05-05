import { View, TouchableOpacity, Image } from 'react-native';

import { ItemCard } from '../../components';
import { styles } from './styles';


const Home = ({ onPlantDetail }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPlantDetail}>
        <ItemCard />
      </TouchableOpacity>
    </View>
  );
};

export default Home;

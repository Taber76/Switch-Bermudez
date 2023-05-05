import { useFonts } from 'expo-font';
import { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { Header } from './components';
import { theme } from './constants';
import { Detail, Home } from './screens/index';
import { styles } from './styles';

export default function App() {

  const [item, setItem] = useState('PLANTAS');
  const [loaded] = useFonts({
    'Rubik-Black': require('../assets/fonts/Rubik-Black.ttf'),
    'Rubik-Bold': require('../assets/fonts/Rubik-Bold.ttf'),
    'Rubik-Medium': require('../assets/fonts/Rubik-Medium.ttf'),
    'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
  });

  const descriptionText = 'Los helechos se pueden encontrar en todo el mundo y generalmente viven en lugares sombreados que proporcionan suficiente humedad, como bosques, campos, pantanos y áreas cerca de arroyos1. Los helechos son plantas verdes sin flores con hojas divididas que tienden a crecer en áreas húmedas y sombreadas'
  const plantImage = '../../../assets/images/helecho.png'


  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  
  const onPlantDetail = () => {
    setItem('HELECHOS');
  };

  const onBackPress = () => {
    setItem('PLANTAS');
  }

  const Content = () => {
    if (item === 'PLANTAS' ) {
      return <Home onPlantDetail={onPlantDetail} />
    } else {
      return <Detail descriptionText={descriptionText} plantImage={plantImage} />
    }
  }
  
  return (
    <View style={styles.container}>
      <Header onBackPress={onBackPress} title={item} />
      <Content />
    </View>
  );
}

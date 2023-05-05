import { View } from 'react-native';

import { styles } from './styles';
import { ItemDetail } from '../../components';

const Detail = ({ descriptionText, plantImage }) => {

  return (
    <View style={styles.container}>
      <ItemDetail plantImage={plantImage} descriptionText={descriptionText} />
    </View>
  );
};

export default Detail;

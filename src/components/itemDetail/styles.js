import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    height: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  halfContainerUp: {
    flex: 1,
    backgroundColor: theme.colors.white,
    height: '60%',
     alignItems: 'flex-end',
    zIndex: 1,
  },
  image: {
    position: 'absolute',
    width: '150%',
    height: '150%',
    top: '-20%',
    right: '-25%',
    zIndex: 1,
  },  
  halfContainerDown: {
    zIndex: -1,
    backgroundColor: theme.colors.white,
    margin: 20,
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    backgroundColor: theme.colors.cyan,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    textAlign: 'right',
    fontFamily: 'Rubik-Bold',
    fontSize: 15,
    color: theme.colors.white,
  }

});

import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    flexDirection: 'row',
    height: 80,
    backgroundColor: theme.colors.primary,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: '70%',
    fontSize: 30,
    color: theme.colors.textPrimary,
    fontFamily: 'Rubik-Bold',
  },
  backImage: {
    marginRight: 20,
    width: 20,
    height: 20,
    tintColor: theme.colors.textPrimary,
  },
  cartImage: {
    width: 32,
    height: 26,
    tintColor: theme.colors.textPrimary,
  }
});

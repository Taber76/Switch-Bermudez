import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    marginTop: 200,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 },
 card: {
  justifyContent: 'space-between',
  marginTop: 200,
  width: '60%',
  height: 450,
  borderColor: theme.colors.primary,
  borderWidth: 1,
  borderRadius: 10,
 },
  image: {
    width: '100%',
    height: '85%',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },  
  text: {
    width: '100%',
    height: 50,
    backgroundColor: theme.colors.cyan,
    marginBottom: 0,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    textAlign: 'center',
    fontFamily: 'Rubik-Bold',
    fontSize: 15,
    color: theme.colors.white,
  }

});

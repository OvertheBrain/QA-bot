import {StyleSheet} from 'react-native';

export const themeColor = '#3358dc';

export const styles = StyleSheet.create({
  startContainer: {
    backgroundColor: themeColor,
    justifyContent: 'flex-end',
    height: '100%',
    paddingBottom: 50,
  },
  view: {
    flex: 1,
  },
  button: {
    height: 50,
    borderRadius: 40,
    backgroundColor: '#fff',
  },
  button1: {
    height: 50,
    borderRadius: 40,
    backgroundColor: themeColor,
  },
  buttonContainer: {
    marginHorizontal: 100,
    marginVertical: 10,
  },
  buttonTitle: {
    fontSize: 24,
    color: themeColor,
  },
  buttonTitle1: {
    fontSize: 24,
    color: 'white',
  },
  header: {},
});

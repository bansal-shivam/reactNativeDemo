import {StyleSheet} from 'react-native';
export const CustomStyles = StyleSheet.create({
  textInputBox: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: 'red',
    elevation: 5,
    margin: 10,
    backgroundColor: 'white',
  },
  partition1: {
    height: '50%',
    flexDirection: 'column',
    backgroundColor: '#f0f2f5',
    paddingTop: 10,
  },
  partition2: {
    height: '50%',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRed: {
    alignItems: 'center',
    color: '#000000',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    paddingLeft: 10,
    letterSpacing: 0.25,
    color: 'black',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  itemStyle: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

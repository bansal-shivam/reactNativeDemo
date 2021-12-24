import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
// import {styles} from '../styles/styles';

export default function ReviewDetails({navigation}) {
  const pressHandler = () => {
    // navigation.goBack();
  };
  // console.log(navigation.getParam('title'));
  return (
    <View>
      <Text>"hii"</Text>
      <Button title="Go Back to home screen" onPress={pressHandler} />
    </View>
  );
}

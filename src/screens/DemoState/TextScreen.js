import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {CustomStyles} from '../styles/CustomStyles';

const TextScreen = () => {
  const [name, setName] = useState('');
  return (
    <View>
      <TextInput
        style={CustomStyles.itemStyle}
        autoCapitalize="sentences"
        autoCorrect={false}
        onChangeText={newValue => setName(newValue)}
      />
      <Text>Name is {name}</Text>
      {name.length < 4 ? <Text>Must be 4 chars</Text> : null}
    </View>
  );
};
export default TextScreen;

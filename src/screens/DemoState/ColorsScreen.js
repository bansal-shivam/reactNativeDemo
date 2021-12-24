import React, {useState} from 'react';
import {View, Text, Button, FlatList} from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  console.log(colors.length);
  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />

      <FlatList
        data={colors}
        keyExtractor={item => item}
        renderItem={({item, index}) => {
          console.log(index);
          return (
            <View
              style={{height: 100, width: 100, backgroundColor: randomRgb()}}
            />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};
export default ColorScreen;

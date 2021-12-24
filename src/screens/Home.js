import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {keyExtractor} from 'react-native/Libraries/Lists/VirtualizeUtils';
import {CustomStyles} from './styles/CustomStyles';

export default function Home({navigation}) {
  const [reviews, setReviews] = useState([
    {
      title: 'Section 5 - Building Reusable Components',
      key: 1,
    },
    {
      title: 'Section 6 - State Management',
      key: 2,
    },
    {
      title: 'Section 6 - Generate Random Color',
      key: 3,
    },
    {
      title: 'Section 6 - Square Screen',
      key: 4,
    },
    {
      title:
        'Section 6 - Dynamically updating text view from text inside TextInput',
      key: 5,
    },
  ]);
  const pressHandler = () => {
    navigation.navigate('ReviewDetails');
    // navigation.push('ReviewDetails');
  };
  return (
    <View>
      <FlatList
        data={reviews}
        keyExtractor={item => item.key}
        renderItem={({item}) => {
          switch (item.key) {
            case 1:
              {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ImageScreen')}>
                    <Text style={CustomStyles.itemStyle}>{item.title}</Text>
                  </TouchableOpacity>
                );
              }
              break;
            case 2:
              {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('CounterScreen')}>
                    <Text style={CustomStyles.itemStyle}>{item.title}</Text>
                  </TouchableOpacity>
                );
              }
              break;
            case 3:
              {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ColorScreen')}>
                    <Text style={CustomStyles.itemStyle}>{item.title}</Text>
                  </TouchableOpacity>
                );
              }
              break;
            case 4: {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('SquareScreen')}>
                  <Text style={CustomStyles.itemStyle}>{item.title}</Text>
                </TouchableOpacity>
              );
            }
            case 5:
              {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('TextScreen')}>
                    <Text style={CustomStyles.itemStyle}>{item.title}</Text>
                  </TouchableOpacity>
                );
              }
              break;
          }
          return (
            <TouchableOpacity onPress={() => console.log('Pressed')}>
              <Text style={CustomStyles.itemStyle}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

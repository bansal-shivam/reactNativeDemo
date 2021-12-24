import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
  const friends = [
    {name: 'Friend1', age: '10'},
    {name: 'Friend2'},
    {name: 'Friend3'},
    {name: 'Friend4'},
    {name: 'Friend5'},
    {name: 'Friend6'},
    {name: 'Friend7'},
    {name: 'Friend8'},
    {name: 'Friend9'},
  ];
  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({item}) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    marginHorizontal: 50,
    backgroundColor: 'red',
  },
});
export default ListScreen;

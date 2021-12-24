import {tSExportAssignment} from '@babel/types';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  View,
  Text,
} from 'react-native';
// import styles from '../styles/styles';

const AssignmentOneTwo = () => {
  const [firstName, setFirstName] = useState('First Name');
  const [lastName, setLastName] = useState('Last Name');
  const [fullName, setFullName] = useState('');
  const onSubmitBtnClick = () => {
    setFullName('Welcome: ' + firstName + ' ' + lastName);
    isTextInputEditable = false;
    setSubmitBtnDisabled = true;
  };
  const onClearBtnClick = () => {
    setFirstName('');
    setLastName('');
    setFullName('');
    isTextInputEditable = true;
    setSubmitBtnDisabled = false;
  };
  return (
    <View>
      <View style={styles.partition1}>
        <TextInput
          style={styles.textInputBox}
          keyboardType="name-phone-pad"
          numberOfLines={1}
          placeholder="First Name"
          onChangeText={setFirstName}
          value={firstName}
          editable={isTextInputEditable}
        />
        <TextInput
          style={styles.textInputBox}
          keyboardType="name-phone-pad"
          numberOfLines={1}
          placeholder="Last Name"
          onChangeText={setLastName}
          value={lastName}
          editable={isTextInputEditable}
        />
        <View style={styles.button}>
          <Button
            title="Submit"
            onPress={onSubmitBtnClick}
            disabled={setSubmitBtnDisabled}
          />
        </View>
      </View>
      <View style={styles.partition2}>
        <Text style={styles.text}>{fullName}</Text>
        <View style={styles.buttonRed}>
          <Button title="Click Me" color="#fc0000" onPress={onClearBtnClick} />
        </View>
      </View>
    </View>
  );
};
var setSubmitBtnDisabled = false;
var isTextInputEditable = true;

const styles = StyleSheet.create({
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
    paddingTop: 10,
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
});

export default AssignmentOneTwo;

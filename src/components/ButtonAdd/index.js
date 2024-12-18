import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const button = ({title}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1C374C',
    height: 50,
    borderRadius: 25,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
});

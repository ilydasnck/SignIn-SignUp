import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const index = ({text, title}) => {
  return (
    <View style={styles.box}>
      <View>
        <Text style={styles.text}>
          {text} <Text style={styles.title}>{title}</Text>
        </Text>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  text: {
    color: 'grey',
    fontSize: 18,
  },
  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

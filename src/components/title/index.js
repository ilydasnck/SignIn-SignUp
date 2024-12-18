import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Title = ({title, description}) => {
  return (
    <View
      style={{
        alignItems: 'flex-start',
        width: 250,
      }}>
      <View>
        <Text style={styles.login}>{title}</Text>
      </View>
      <View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  login: {
    fontSize: 40,
    fontWeight: '500',
    color: '#233440',
  },
  description: {
    fontSize: 20,
    fontWeight: '500',
    color: '#233440',
  },
});

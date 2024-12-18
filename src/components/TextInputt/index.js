import {
  Image,
  StyleSheet,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icons from '../../assets/icons';

const textInput = ({leftIcon, rightIcon, placeholder}) => {
  const [hide, setHide] = useState(true);
  return (
    <View style={styles.box}>
      <View style={styles.row}>
        <View>
          <Image source={leftIcon} style={styles.icons} />
        </View>

        <TextInput
          secureTextEntry={hide}
          placeholder={placeholder}
          style={styles.input}
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            setHide(!hide);
          }}>
          <Image
            source={hide ? rightIcon : Icons.onHide}
            style={styles.icons}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default textInput;

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#F6F5FA',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginTop: 25,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    flex: 1,
  },
  icons: {
    width: 20,
    height: 20,
    tintColor: '#7E8182',
    margin: 10,
  },
});

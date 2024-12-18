import {StyleSheet, Switch, Text, View} from 'react-native';
import React, {useState} from 'react';

const reminder = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.box}>
      <View>
        <Text>Reminder me nextime</Text>
      </View>
      <View>
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
      </View>
    </View>
  );
};

export default reminder;

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: 15,
  },
});

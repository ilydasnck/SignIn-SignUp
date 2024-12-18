import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Images from '../../assets/images';
import Icons from '../../assets/icons';
import Title from '../../components/title';
import TextInputt from '../../components/TextInputt';
import Reminder from '../../components/Reminder';
import ButtonAdd from '../../components/ButtonAdd';
import AccountText from '../../components/AccountText';

const register = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Image source={Images.register} />
      </View>
      <View>
        <Title title="Register" description="Please register to login." />
        <TextInputt leftIcon={Icons.profile} placeholder="Username" />
        <TextInputt leftIcon={Icons.phone} placeholder="Mobie Number" />
        <TextInputt
          leftIcon={Icons.lock}
          placeholder=".........."
          rightIcon={Icons.hide}
        />
        <Reminder />
        <ButtonAdd title="Sign Up" />
        <AccountText text="Already have account?" title="Sign In" />
      </View>
    </SafeAreaView>
  );
};

export default register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: 'white',
    marginTop: 25,
  },
});

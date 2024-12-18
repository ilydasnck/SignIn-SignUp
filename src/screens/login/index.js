import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Images from '../../assets/images';
import Icons from '../../assets/icons';
import Title from '../../components/title';
import TextInputt from '../../components/TextInputt';
import Reminder from '../../components/Reminder';
import ButtonAdd from '../../components/ButtonAdd';
import AccountText from '../../components/AccountText';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={Images.login} />
      </View>
      <Title title="Login" description="Please Sign in continue." />
      <TextInputt placeholder="Username" leftIcon={Icons.profile} />
      <TextInputt
        placeholder="..........."
        leftIcon={Icons.lock}
        rightIcon={Icons.hide}
        secure={true}
      />
      <Reminder />
      <ButtonAdd title="Sign In" />
      <AccountText text="Dont have account?" title="Sign Up" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: 'white',
    marginTop: 25,
  },
});

export default Login;

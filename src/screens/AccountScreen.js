import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {

  const { signout } = useContext(AuthForm);
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <View>
        <Text style={{ fontSize: 48 }}>AccountScreen</Text>
        <Spacer>
          <Button title="Sign Out" onPress={() => { signout }} />
        </Spacer>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({});

export default AccountScreen;
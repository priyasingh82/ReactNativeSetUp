import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.screenContainer}>
    
      <Pressable
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonTextStyle}>Go To Login Screen</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
 
  buttonStyle: {
    height: 54,
    width: '40%',
    marginTop: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2EE59D',
   
  },
 
});

export default SignUpScreen;
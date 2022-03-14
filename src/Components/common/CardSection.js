import React from 'react';
import {View,Text} from 'react-native';
import styles from '../../../Stylesheet.css';

const CardSection = (props) => {
    return(
  <View style={styles.containerStyle}>
      {props.children}
  </View>
    )
}

export default CardSection;
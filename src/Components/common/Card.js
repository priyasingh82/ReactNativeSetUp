import React from 'react';
import {Text,View} from 'react-native';
import styles from '../../../Stylesheet.css';


const Card = (props) => {
 return (
     <View style= {styles.cardStyle}>
      {props.children}
     </View>
 )
};



export default Card;
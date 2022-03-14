import React from 'react';
import {TouchableOpacity,Text,View} from 'react-native';
import styles from '../../../Stylesheet.css';

const Button = ({onPress,children}) => {
    return(
        <TouchableOpacity 
        onPress={onPress}
        style={styles.buttonStyle}>
            <Text style={styles.textStyle1}>{children}</Text>
        </TouchableOpacity>
    )
}
export default Button;
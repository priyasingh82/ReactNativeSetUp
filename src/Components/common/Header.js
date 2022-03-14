import React from 'react';
import {Text,View} from 'react-native';
import styles from '../../../Stylesheet.css';

const Header = (props) => {
    console.log(props.headerText);
    return (
        <View style={styles.viewStyle}> 
        <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    );
};


export default Header;
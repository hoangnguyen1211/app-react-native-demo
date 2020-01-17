import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default ButtonForm = (props) => {
    const { style, title, onPress, backgroundColor } = props;
    return (
        <TouchableOpacity 
            onPress={() => onPress()}
        >
            <Text style={[ 
                styles.container, 
                { backgroundColor : backgroundColor ? backgroundColor : '#f4791f' },
                style 
            ]}>
                { title ? title : props.children }
            </Text>
        </TouchableOpacity>
       
    )
}

const styles = StyleSheet.create({
    container: {
        fontSize: 15,
        padding: 10,
        borderRadius: 5,
        textAlign: "center",
        color: "white",
        fontWeight: 'bold',
        borderColor: '#f4791f',
        borderWidth: 1,
    }
});

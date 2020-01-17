import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default TextForm = (props) => {
    const { placeholder, onChangeText, password, style } = props;

    onChangeTextHandler = (text) => {
        onChangeText(text);
    }

    return (
        <TextInput 
            style={[ styles.input, style ]} 
            placeholder={ placeholder }
            placeholderTextColor="#808080"
            onChangeText={onChangeText}
            secureTextEntry={ password ? true : false }
        />
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 15,
        padding: 10,
        borderColor: '#dadada',
        borderWidth: 1,
        backgroundColor: '#f2f2f2',
        marginBottom: 20
    }
});

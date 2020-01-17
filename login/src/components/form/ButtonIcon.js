import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

export default ButtonIcon = (props) => {
    const { 
        titleStyle, conatainerStyle, title, onPress, backgroundColor,
        iconColor, iconName, iconSize, iconType
     } = props;
    return (
        <TouchableOpacity
            onPress={() => onPress()}
        >
            <View
                style={[
                    styles.container,
                    { backgroundColor: backgroundColor ? backgroundColor : '#f4791f' },
                    conatainerStyle
                ]}
            >
                <Icon
                    name={ iconName ? iconName : 'ios-american-football' }
                    type={ iconType ? iconType : 'ionicon' }
                    color={ iconColor ? iconColor : 'white' }
                    size={ iconSize ? iconSize : '12' }
                />

                <Text style={[
                    styles.title,
                    titleStyle
                ]}>
                    {title ? title : props.children}
                </Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#f4791f',
        borderWidth: 1
    },
    title: {
        textAlign: "center",
        color: "white",
        fontWeight: 'bold',
        fontSize: 15,
        padding: 10
    }
});
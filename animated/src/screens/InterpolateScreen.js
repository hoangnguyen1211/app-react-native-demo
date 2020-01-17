import React, { Component } from 'react';
import { View, Text, Animated, StyleSheet, TouchableOpacity, Dimensions, Easing } from 'react-native';

const screenWidth = Dimensions.get('window').width;
export default class InterpolateScreen extends Component {

    state = {
        fontSize: new Animated.Value(20),
        backgroundColor: new Animated.Value(0)
    }

    onPress = () => {
        Animated.timing(this.state.fontSize, {
            toValue:  40,
            duration:  1000,
            easing: Easing.linear
        }).start();

        Animated.timing(this.state.backgroundColor, {
            toValue:  40,
            duration:  1000,
            easing: Easing.linear
        }).start();
    }

    render() {
        const bgColor = this.state.backgroundColor.interpolate({
            inputRange: [0, 20, 40],
            outputRange: ['white','red', 'blue']
        })
        return (
            <Animated.View style={{backgroundColor: bgColor}}>
                <Animated.Text style={{ fontSize: this.state.fontSize}}>CYBERSOFT</Animated.Text>  
                <TouchableOpacity onPress={this.onPress}>
                    <Text style={styles.button}>Click me</Text>
                </TouchableOpacity>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        backgroundColor: 'green',
        color: 'white',
        width: screenWidth * 0.8,
        marginTop: 20
    }
})

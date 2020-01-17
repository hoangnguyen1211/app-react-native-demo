import React, { Component } from 'react';
import { View, Text, Animated, StyleSheet, TouchableOpacity, Dimensions, Easing } from 'react-native';

const screenWidth = Dimensions.get('window').width;
export default class AnimatedValueXY extends Component {

    state = {
        textAnimated: new Animated.ValueXY({ x: 0, y: 0 })
    }

    onPress = () => {
        Animated.timing(this.state.textAnimated, {
            toValue: { x: 200, y: -200 },
            duration: 2000,
            easing: Easing.bounce
        }).start();
    }

    render() {
        return (
            <View>
                <Animated.Text style={[ 
                    styles.text,
                    this.state.textAnimated.getLayout()
                ]}>
                    CYBERSOFT
                </Animated.Text>
                <TouchableOpacity onPress={this.onPress}>
                    <Text style={styles.button}>Click me</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: '600'
    },
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

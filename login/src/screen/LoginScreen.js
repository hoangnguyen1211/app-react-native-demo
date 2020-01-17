import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { InputForm, TextForm, ButtonForm, ButtonIcon } from '../components/form';

const { width: screenWidth } = Dimensions.get('window');
export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.logoWrapper}>
                    <Image
                        source={{ uri: "https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png" }}
                        style={styles.logo}
                        resizeMode='contain'
                    />
                </View>

                <View style={styles.wrapper}>
                    <InputForm
                        placeholder="Email"
                    />

                    <InputForm
                        placeholder="Password"
                    />

                    <ButtonForm
                        title="Login"
                    />

                    <TextForm style={styles.text}>Forgot password?</TextForm>
                    <TextForm style={styles.text}>Don't have an account?</TextForm>

                    <ButtonIcon 
                        title="facebook"
                    />

                    <ButtonIcon 
                        title="google"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapper: {
        padding: 20,
        width: screenWidth
    },
    logoWrapper: {
        width: screenWidth,
        height: screenWidth / 2,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    logo: {
        width: screenWidth / 2,
        height: screenWidth / 2,
    },
    text: {
        marginVertical: 15,
        textAlign: 'center'
    }
})

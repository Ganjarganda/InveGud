import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image, TouchableWithoutFeedback,
    StatusBar, TouchableOpacity, KeyboardAvoidingView,
    TextInput, SafeAreaView, Keyboard
} from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" />
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View style={styles.logoContainer}>
                            <View style={styles.logoContainer}>
                                <Image style={styles.logo} source={require('../assets/images/InveGud_Logo.png')}></Image>
                                <Text style={styles.title}>Inventori Gudang</Text>
                            </View>
                            <View style={styles.infoContainer}>
                                <TextInput style={styles.input} placeholder="Username/Email" placeholderTextColor="rgba(255, 255, 255, 0.8)" keyboardType="email-address"
                                    returnKeyType="next" autoCorrect={false} />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(32, 53, 70)',
        flexDirection: 'column'
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    logo: {
        width: 128,
        height: 135
    },
    title: {
        color: '#f7c744',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.9
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 20,
        backgroundColor: 'red'
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingHorizontal: 10,
        color: 'rgba(255, 255, 255, 0.8)'
    }
})
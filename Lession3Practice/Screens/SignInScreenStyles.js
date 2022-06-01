import { StyleSheet } from "react-native";

const SignInScreenStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white'
    },
    backButton: {
        position: 'absolute',
        width: 20,
        height: 20,
        left: 20,
        top: 20
    },
    title: {
        position: 'absolute',
        width: 83,
        height: 36,
        left: 30,
        top: 227,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 36,
        textAlign: 'center',
        color: '#000000',
    },
    title02: {
        position: 'absolute',
        width: 93,
        height: 36,
        left: 30,
        top: 202,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 36,
        color: '#000000'
    },
    title03: {
        position: 'absolute',
        width: 109,
        height: 16,
        left: 275,
        top: 548,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16,
        textAlign: 'center',
        letterSpacing: -0.3,
        color: '#34495E'
    },
    linkForgotPassword: {
        position: 'absolute',
        width: 109,
        height: 16,
        left: 275,
        top: 510,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16,
        textAlign: 'center',
        letterSpacing: -0.3,
        color: '#34495E'
    }
})
export default SignInScreenStyles
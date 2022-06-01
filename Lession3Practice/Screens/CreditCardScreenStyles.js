import { StyleSheet } from "react-native";

const CreditCardScreenStyles = StyleSheet.create({
    headerContent: {
        position: 'absolute',
        width: '70%',
        height: 27,
        left: 167,
        top: 15,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 27,
        letterSpacing: -0.3,
        color: '#000000',
    },
    headerContainer: {
        position: 'relative'
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    logoContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: '17%',
        position: 'relative',
    },
    content01: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 27,
        letterSpacing: -0.3,
        color: '#FFFFFF',
        position: 'absolute',
        top: '5%',
        left: '15%'
    },
    content02: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 10,
        lineHeight: 12,
        letterSpacing: -0.3,
        color: '#FFFFFF',
        position: 'absolute',
        top: '60%',
        left: '15%'
    },
    content03: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 18,
        letterSpacing: -0.3,
        color: '#FFFFFF',
        position: 'absolute',
        top: '65%',
        left: '15%'
    },
    content04: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: -0.3,
        color: '#FFFFFF',
        position: 'absolute',
        top: '75%',
        left: '15%'
    },
    content05: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 10,
        lineHeight: 12,
        letterSpacing: -0.3,
        color: '#FFFFFF',
        position: 'absolute',
        top: '10%',
        right: '15%'
    },
    logo01: {
        width: 354,
        height: 196,
    },
    logo02: {
        width: 40,
        height: 23.67,
        position: 'absolute',
        top: '72%',
        right: '15%'
    },
    detailContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingLeft: '8%',
        paddingRight: '8%',
        marginTop: '7%'
    },
    detailContent01: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: -0.3,
        color: 'rgba(0, 0, 0, 0.5)',
    },
    detailContent02: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: -0.3,
        color: '#000000',
    }
})
export default CreditCardScreenStyles;
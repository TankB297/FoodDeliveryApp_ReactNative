import { StyleSheet } from "react-native";

const PaypalScreenStyles = StyleSheet.create({
    headerContent: {
        position: 'absolute',
        width: '70%',
        height: 27,
        left: 180,
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
    orderButton01: {
        width: 354,
        height: 50,
        backgroundColor: '#D35400',
        borderRadius: 30,
        justifyContent: 'center',
        marginTop: '115%',
        marginLeft: '7%'
    },
    orderButton02: {
        width: 354,
        height: 50,
        backgroundColor: '#ECF0F1',
        borderRadius: 30,
        justifyContent: 'center',
        marginTop: '5%',
        marginLeft: '7%'
    },
    orderButtonContent01: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 27,
        textAlign: 'center',
        letterSpacing: -0.3,
        color: '#FFFFFF',
    },
    orderButtonContent02: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 27,
        textAlign: 'center',
        letterSpacing: -0.3,
        color: '#000000',
    }
})
export default PaypalScreenStyles
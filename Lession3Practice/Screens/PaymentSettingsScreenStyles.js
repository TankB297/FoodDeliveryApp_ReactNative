import { StyleSheet } from "react-native";

const PaymentSettingsScreenStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
    },
    headerContent: {
        position: 'absolute',
        width: '70%',
        height: 27,
        left: 142,
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
    paymentItemContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '7%',
        paddingRight: '7%',
        marginTop: '17%',
    },
    itemContainer01: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemContainer02: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 20,
        height: 20
    },
    logoContainer: {
        width: 30,
        height: 30,
        backgroundColor: '#ECF0F1',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content01: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: -0.3,
        color: '#34495E',
        marginLeft: '10%'
    },
    content02: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: -0.3,
        color: '#000000',
        marginRight: '5%'
    },
    logo02: {
        width: 24,
        height: 24
    },
    paymentItemContainer02: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '7%',
        paddingRight: '7%',
        marginTop: '4%'
    },
    logo03: {
        width: 20,
        height: 20
    },
    paymentItemContainer03: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '7.8%',
        paddingRight: '9%',
        marginTop: '17%'
    }
})
export default PaymentSettingsScreenStyles
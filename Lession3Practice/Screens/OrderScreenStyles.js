import { StyleSheet } from "react-native";

const OrderScreenStyles = StyleSheet.create({
    itemContainer: {
        marginTop: '15%'
    },
    orderScreenContainer: {
        backgroundColor: 'white',
        height: '100%'
    },
    headerContent: {
        position: 'absolute',
        width: 112,
        height: 27,
        left: 162,
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
    orderButton: {
        width: 354,
        height: 50,
        backgroundColor: '#D35400',
        borderRadius: 30,
        justifyContent: 'center',
        marginTop: '65%',
        marginLeft: '7%'
    },
    orderButtonContent: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 27,
        textAlign: 'center',
        letterSpacing: -0.3,
        color: '#FFFFFF',
    }
})
export default OrderScreenStyles
import { StyleSheet } from "react-native";

const MyVoucherScreenStyles = StyleSheet.create({
    headerContent: {
        position: 'absolute',
        width: '70%',
        height: 27,
        left: 160,
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
    itemContainer: {
        width: '100%',
        flexDirection: 'row',
        paddingLeft: '7%',
        paddingRight: '7%',
        marginTop: '17%',
    },
    itemContainer02: {
        width: '100%',
        flexDirection: 'row',
        paddingLeft: '7%',
        paddingRight: '7%',
        marginTop: '4%',
    },
    mainLogoContainer: {
        width: 80,
        height: 80, 
        backgroundColor: '#ECF0F1',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentContainer: {
        height: 80,
        marginLeft: '7%',
        justifyContent: 'space-between',
        width: '63%',
    },
    title: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: -0.3,
        color: '#34495E',
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timeContent: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 14,
        letterSpacing: -0.3,
        color: '#34495E',
        marginLeft: '3%'
    },
    timeIcon: {
        width: 15,
        height: 15
    },
    timeContent02: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: -0.3,
        color: '#E74C3C',
    },
    checkContainer: {
        height: 80,
        justifyContent: 'center'
    },
    checkLogoContainer: {
        width: 30,
        height: 30,
        backgroundColor: '#D35400',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkLogoContainer02: {
        backgroundColor: '#ECF0F1',
        width: 30,
        height: 30,
        borderRadius: 50,
        alignItems: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkLogo: {
        width: 20,
        height: 20
    },
    orderButton: {
        width: 354,
        height: 50,
        backgroundColor: '#D35400',
        borderRadius: 30,
        justifyContent: 'center',
        marginTop: '70%',
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
export default MyVoucherScreenStyles
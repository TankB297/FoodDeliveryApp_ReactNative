import { StyleSheet } from "react-native";

const AddNewPaymentMethodStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    headerContent: {
        position: 'absolute',
        width: '70%',
        height: 27,
        left: 172,
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
        position: 'relative',
    },
    dropdown: {
        marginLeft: '5%',
        marginTop: '32%',
        width: '90%'
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
    orderButton01: {
        width: 354,
        height: 50,
        backgroundColor: '#D35400',
        borderRadius: 30,
        justifyContent: 'center',
        marginTop: '2.5%',
        marginLeft: '7%'
    },
    orderButton02: {
        width: 354,
        height: 50,
        backgroundColor: '#D35400',
        borderRadius: 30,
        justifyContent: 'center',
        marginTop: '125%',
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
    bankNameDropdown: {
        width: '60%',
        marginLeft: '20%',
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
        marginTop: '5%'
    },
    detailContent02: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: -0.3,
        color: '#000000',
    },
    datePicker: {
        width: '100%',
        paddingLeft: 5,
        height: 45,
        alignContent: 'center',
        justifyContent: 'center'
    },
    input: {
        textAlign: 'right'
    }
})
export default AddNewPaymentMethodStyles
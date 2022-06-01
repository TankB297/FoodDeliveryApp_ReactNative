import { StyleSheet } from "react-native";

const ChooseCountryScreenStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        position: 'relative',
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
    avatarContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: '15%',
    },
    avatar: {
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        marginBottom: '10%'
    },
    contentContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingLeft: '10%',
        marginTop: '3%',
        justifyContent: 'space-between',
    },
    content01: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: -0.3,
        color: 'rgba(0, 0, 0, 0.5)',
    },
    content02: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: -0.3,
        color: '#000000',
        marginLeft: '5%'
    },
    subContainer01: {
        width: '30%'
    },
    subContainer02: {
        width: '70%'
    },
    orderButton: {
        width: 354,
        height: 50,
        backgroundColor: '#D35400',
        borderRadius: 30,
        justifyContent: 'center',
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
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        bottom: 27
    },
    dropDownMenu: {
        width: '90%'
    },
    datePicker: {
        width: '90%',
        paddingLeft: 5,
        height: 45,
        alignContent: 'center',
        justifyContent: 'center'
    }
})
export default ChooseCountryScreenStyles
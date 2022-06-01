import { StyleSheet } from "react-native";

const ChangePassScreenStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
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
    inputPassword: {
        width: 354,
        height: 50,
        backgroundColor: '#ECF0F1',
        borderRadius: 30,
        paddingLeft: 30,
        marginBottom:'5%'
    },
    inputContainer: {
        marginTop: '20%',
        marginLeft: '7%'
    },
    inputLabel: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16,
        letterSpacing: -0.3,
        color: '#34495E',
        marginBottom: '5%'
    },
})
export default ChangePassScreenStyles
import { StyleSheet } from "react-native";

const MyProfileScreenStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    avatarContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: '7%',
        marginBottom: '10%'
    },
    avatar: {
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        marginBottom: '5%'
    },
    avatarName: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 27,
        textAlign: 'center',
        letterSpacing: -0.3,
        color: '#000000',
        marginBottom: '2%'
    },
    avatarBio: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16,
        textAlign: 'center',
        letterSpacing: -0.3,
        color: '#000000',
    },
    profileContentContainter: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '7%',
        paddingRight: '7%',
        marginBottom: '5%'
    },
    profileContent: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: -0.3,
        color: '#000000',
    },
    profileButton: {
        width: 354,
        height: 50,
        backgroundColor: '#ECF0F1',
        borderRadius: 30,
        justifyContent: 'center',
        marginTop: '10.5%',
        marginLeft: '7%'
    },
    profileButtonContent: {
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
export default MyProfileScreenStyles
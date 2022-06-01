import { StyleSheet } from "react-native";

const SingleFoodNearMeStyles = StyleSheet.create({
    foodNearMeContainer: {
        flexDirection: 'row',
        width: '100%',
        marginLeft: '10%',
        marginTop: '5%'
    },
    foodNearMeImageContainer: {
        width: '30%'
    },
    foodNearMeImage: {
        width: 130,
        height: 130,
        borderRadius: 20
    },
    foodNearMeContentContainer: {
        width: '60%',
        marginLeft: '10%'
    },
    foodNearMeTitle: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: -0.3,
        color: '#000000',
    },
    foodNearMeLocationTimeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '5%'
    },
    foodNearMeLocation: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 14,
        letterSpacing: -0.3,
        color: '#34495E',
        marginLeft: '5%'
    },
    foodNearMeTime: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 14,
        letterSpacing: -0.3,
        color: '#34495E',
        marginLeft: '5%'
    },
    foodNearMeRateContainer: {
        width: '20%',
        flexDirection: 'row',
        marginTop: '5%',
        justifyContent: 'space-between'
    }
})
export default SingleFoodNearMeStyles
import { StyleSheet } from "react-native";

const SingleFoodDetailStyles = StyleSheet.create({
    foodDetailContainer: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'white',
        marginTop: '2%'
    },
    foodDetailImageContainer: {
        width: '30%'
    },
    foodDetailImage: {
        width: 90,
        height: 90,             
        borderRadius: 20,
        marginTop: 4,
        marginLeft: 7
    },
    foodDetailContentContainer01: {
        marginLeft: '5%',
        width: '70%',
        justifyContent: 'space-between'
    },
    foodDetailContentContainer02: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 18
    },
    foodDetailContentContainer03: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    foodDetailContentContainer04: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    foodDetailTitle: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: -0.3,
        color: '#000000',
    },
    foodDetailContent: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 14,
        letterSpacing: -0.3,
        color: '#34495E',
    },
    foodDetailPrice: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: -0.3,
        color: '#2ECC71',
    },
    foodDetailLike: {
        backgroundColor: '#D35400',
        borderRadius: 20
    },
    foodDetailDislike: {
        marginRight: 17,
    },
    foodDetailLike01: {
        marginRight: 6,
    }
})
export default SingleFoodDetailStyles
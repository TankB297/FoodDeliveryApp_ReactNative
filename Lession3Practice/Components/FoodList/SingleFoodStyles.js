import { StyleSheet } from "react-native";

const SingleFoodStyles = StyleSheet.create({
    foodContainer01: {
        backgroundColor: 'rgba(52, 152, 219, 0.3)',
        width: 130,
        height: 130,
        borderRadius: 20,
        position: 'relative',
        margin: 10
    },
    foodContainer02: {
        backgroundColor: 'rgba(155, 89, 182, 0.3)',
        width: 130,
        height: 130,
        borderRadius: 20,
        position: 'relative',
        margin: 10
    },
    foodName: {
        position: 'absolute',
        width: 55,
        height: 21,
        left: 20,
        top: 10,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: -0.3,
        color: 'white',
    },
})
export default SingleFoodStyles
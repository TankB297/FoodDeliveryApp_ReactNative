import { StyleSheet } from "react-native";

const FooterStyles = StyleSheet.create({
    borderFooter: {
        position: 'absolute',
        width: 278,
        height: 0,
        left: 0,
        top: 653,
        borderWidth: 1, 
        borderColor: 'rgba(52, 73, 94, 0.3)',
    },
    textFooter: {
        position: 'absolute',
        width: 94,
        height: 16,
        left: 290,
        top: 645,

        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16,
        textAlign: 'right',
        letterSpacing: -0.3,
        color: '#34495E',
    },
    imgFooter: {
        position: 'absolute',
        width: 222,
        height: 100,
        left: -75,
        top: 673,
    },
    fbImg: {
        position: 'absolute',
        width: 40,
        height: 40,
        left: 284,
        top: 681,
    },
    ggImg: {
        position: 'absolute',
        width: 40,
        height: 40,
        left: 344,
        top: 681,
    }
})
export default FooterStyles
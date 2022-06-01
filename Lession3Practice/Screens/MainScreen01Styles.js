import { StyleSheet } from "react-native";

const MainScreen01Styles = StyleSheet.create({
    searchIcon: {
        width: 22,
        height: 22,
        left: 20,
        top: 15,
    },
    searchContainer: {
        position: 'relative',
        width: '80%',
        height: 50,
        backgroundColor: '#ECF0F1',
        borderRadius: 30,
        flexDirection: 'row',
        marginLeft: '10%',
        marginTop: '7%',
    },
    locationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '48%',
        marginLeft: '12%',
        marginTop: '2%',
        alignItems: 'center'
    },
    locationIcon: {
        // width: 10,
        // height: 10
    },
    locationContent: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 14,
        letterSpacing: -0.3,
        color: '#000000',
    },
    mainContainer: {
        backgroundColor: 'white'
    },
    foodTypeListContainer: {
        marginLeft: '10%',
        marginTop: '5%'
    },
    foodListContainer: {
        flexWrap: 'wrap',
        marginLeft: '8%',
        marginTop: '2%'
    },
    foodMenuContainer: {
        flexDirection: 'row',
        marginLeft: '11%',
        alignItems: 'center',
        width: '87%',
        justifyContent: 'space-between',
        marginTop: '5%'
    },
    foodMenuTitle01: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 27,
        letterSpacing: -0.3,
        color: '#000000',
    },
    foodMenuTitle02: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 14,
        letterSpacing: -0.3,
        color: '#000000',
    }
})
export default MainScreen01Styles
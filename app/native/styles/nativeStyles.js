import {StyleSheet} from "react-native";

export const FormStyles = StyleSheet.create({
    mainDiv: {
        flexGrow: 1,
        justifyContent: 'center'
    },
    inputGroup:{
        marginTop:0,
        marginBottom:10
    },
    title: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        lineHeight: '1.4rem',
        color:'#9a9a9a',
        fontFamily: 'Lato, Helvetica, sans-serif'
    },
    input:{
        fontSize:16,
        color:'#828181',
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'#CDCDCD',
        padding:'0.2rem'
    },
    rowRapper: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection:'row'
    },
    filterOption:{
        margin:5,
        borderStyle:'solid',
        borderRadius:5,
        paddingLeft:'0.2rem',
        paddingRight:'0.2rem',
        borderWidth:1,
        borderColor:'#CDCDCD',
        backgroundColor:'#d3d3d3',
        cursor:'pointer'
    },

    highlightedOption:{
        margin:5,
        borderStyle:'solid',
        borderRadius:5,
        paddingLeft:'0.2rem',
        paddingRight:'0.2rem',
        borderWidth:1,
        borderColor:'#CDCDCD',
        backgroundColor:'#00bcd4',
        cursor:'pointer'
    }

});
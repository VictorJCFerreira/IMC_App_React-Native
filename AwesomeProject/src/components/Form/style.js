import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    formContext:{
        width:"100%",
        height:"100%",
        alignItems:"center",
        bottom:0,
        backgroundColor:"#ffffff",
        marginTop:30,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    form:{
        width:"100%",
        height:"auto",
        marginTop:30,
        padding: 10,

    },
    formLabel:{
        color:"Black",
        fontSize:20,
        paddingLeft:20,
    },
    imput:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10,
    },
    buttonCalculator:{
        borderRadius:50, 
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#F00043",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        marginTop:30,
    },
    textButtonCalculator:{
        fontSize:18,
        color:"white",
    }
})

export default styles;
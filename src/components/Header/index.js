import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Ionicons} from '@expo/vector-icons';


export default function Header(){
    return(
        
        <View style={styles.header}>
            <Text style ={styles.text}> MobileTech </Text>
            <View style={styles.icons}>
                <Ionicons name="ios-search-outline" size={24} color="black" />
                <Ionicons name="cart-outline" size={24} color="black" />
                <View style={styles.menu}>
                    <View style={styles.row}></View>
                    <View style={styles.row}></View>
                    <View style={styles.row}></View>
                </View>
            </View>
        </View>
        

    );
}
const styles = StyleSheet.create({
    header:{
        backgroundColor:'white',
        marginTop:0,
        width:'100%',
        padding:15,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20,
        fontFamily: 'Samsung-Logo',

    },

    text:{
        color:'black',
        fontSize:20,
        fontWeight:'bold'
    },

    icons:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'105px',
        marginRight:5
    },

    menu:{
        marginTop:3,
    },

    row:{
        backgroundColor:'black',
        height:'3px',
        width:'20px',
        margin: 2,
        borderRadius:2,
    },

})
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { SimpleLineIcons} from '@expo/vector-icons';

export default function header(){
    return(
        <View style={styles.header}>
            <Text style ={styles.text}> LOGO </Text>
            <SimpleLineIcons name="menu" size={24} color="black" />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        marginTop: 0,
        width: '100vw',
        padding: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },

    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },

})
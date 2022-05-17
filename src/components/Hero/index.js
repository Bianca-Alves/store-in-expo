import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


export default function Header(){
    return(
        <View style={styles.container}>
            <View style={styles.vtexts}>
                <Text style={styles.title}>Samsung</Text>
                <Text style={styles.text}>Samsung</Text>
            </View>
            
            <Image style={styles.heroImg} resizeMode={'contain'} source={require('../../../assets/img/hero_img.jpg')}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      minWidth: '100%',
      height: '100vh',
      backgroundColor: '#f6f6f6',
      position: 'relative',
    },
    vtexts: {
        width: '100%',
        height: '60%',
        position: 'absolute',
        zIndex: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        top: '20%',
        width: '100%',
        fontSize: 40,
        fontWeight: 600,
        textAlign: 'center',  
    },
    text: {
        fontSize: 25,
        textAlign: 'right',
        width: '50%',
    },
    heroImg: {
        height: '100vh',
        maxHeight: '100vh',
    },
})
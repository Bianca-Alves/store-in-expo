import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Carousel from '../Carousel';

export default function ProductCard({imageW, imageH, time, colors, title, price, category, quantity, height, width, marginTop, buttons, navigation}) {

    return (
        <TouchableOpacity style={{
                minHeight: height,
                width: width,
                marginTop: marginTop,
                borderWidth: 1,
                textAlign: 'center',
                paddingTop: 20,
                paddingBottom: 30,
                borderColor: '#e5e5e5',
                borderRadius: 16,
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
            <View style={styles.carousel}>
                <Carousel buttons={buttons} imageW={imageW} imageH={imageH} time={time} data={colors} />
            </View>
            <Text style={styles.title} >{title}</Text>
            <Text style={styles.category}>{category}</Text>
            <Text style={styles.quantity}><b>Quantidade:</b> {quantity}</Text>
            <Text style={styles.price}>{price}</Text>
            <TouchableOpacity style={styles.buy} onPress={() => navigation.navigate('Descrição dos Produtos')}>
                <Text style={styles.buyText} >COMPRAR</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    carousel: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginBottom: 2,
        minWidth: '100%',
        
    },
    title: {
        fontSize: 24,
        fontWeight: 600,
        textAlign: 'center',
        maxWidth: '90%',
        fontFamily: 'Samsung-Sans',
    },
    category: {
        marginTop: 5,
        marginBottom: 5,
        fontSize: 15,
        fontWeight: 400,
        textAlign: 'left',
        fontFamily: 'Samsung-Sans',
    },
    quantity: {
        marginTop: 20,
        marginBottom: 8,
        fontSize: 12.3,
        fontWeight: 400,
        textAlign: 'left',
        fontFamily: 'Samsung-Sans'
    },
    price: {
        fontSize: 25,
        marginTop: 20,
        textAlign: 'center',
        fontFamily: 'Samsung-Sans-Bold',
    },
    buy: {
        
        textAlign: 'center',
        width: '50%',
        marginTop: 20,
        paddingTop: 5,
        paddingBottom: 9,
        backgroundColor: 'blue',
        borderRadius: 16,
    },
    buyText: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        paddingTop: 5,
        fontFamily: 'Samsung-Sans-Bold',
    },
})
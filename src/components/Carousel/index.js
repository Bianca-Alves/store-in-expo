import * as React from 'react';
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

export default function Carousel({imageW, imageH, time, data}) {
    const flatListRef = React.useRef(null);    
    const currentIndex = React.useRef(1);

    React.useEffect(() => {
        const timer = setInterval(() => {
            flatListRef.current.scrollToIndex({
                animated: true,
                index: currentIndex.current, 
            });
            console.log(currentIndex.current)
            
            currentIndex.current = currentIndex.current === data.length - 1
                ? 0
                : currentIndex.current + 1;
        }, time);
        return () => clearInterval(timer);
    }, [time]);
    
    return (
            <Animated.FlatList 
                ref={flatListRef}
                data={data} 
                getItemLayout={(_, index) => (
                    {length: imageW, offset: imageW * index, index}
                  )}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}

                style={{
                    maxWidth: imageW,
                    maxHeight: imageH,
                }} 

                keyExtractor={(_, index) => index.toString()}
                horizontal={true}
                progressViewOffset={1}
                
                onScrollToIndexFailed={() => {}}
                renderItem={({item, index: Findex}) => {
                    return (
                        <Image source={item} 
                            key={Findex.toString()}
                    
                            style={{
                                width: imageW,
                                height: imageH,
                                resizeMode: 'cover',
                            }} 
                        />
                    )
                }}
            />
    )
}
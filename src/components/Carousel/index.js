import * as React from 'react';
import { Image, Animated, TouchableOpacity, View, Text } from 'react-native';

export default function Carousel({imageW, imageH, time, data, buttons}) {
    const flatListRef = React.useRef(null);    
    const currentIndex = React.useRef(0);
    const setMoreIndex = (number) => {
        currentIndex.current = (currentIndex.current === data.length - 1) || (currentIndex.current + number > data.length - 1)
                ? 0
                : currentIndex.current + number;
    }

    const setLessIndex = (number) => {
        currentIndex.current = (currentIndex.current === 0) || (currentIndex.current - number < 0)
                ? data.length - 1
                : currentIndex.current - number;
    }

    const scrollToCurrentIndex = () => {
        flatListRef.current.scrollToIndex({
            animated: true,
            index: currentIndex.current, 
        });
    }
    const scrollAndSetMoreIndex = (number) => {
        scrollToCurrentIndex() 
        setMoreIndex(number)
    }

    const scrollAndSetLessIndex = (number) => {
        scrollToCurrentIndex() 
        setLessIndex(number)
    }

    React.useEffect(() => {
        if (time) {
            const timer = setInterval(() => {
                scrollAndSetMoreIndex(1)
            }, time);
            return () => clearInterval(timer);
        }
    }, [time]);

    const PredefinedList = () => {
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
                    minHeight: imageH,
                }}

                keyExtractor={(_, index) => index.toString()}
                horizontal={true}
                progressViewOffset={1}
                
                onScrollToIndexFailed={() => {}}
                renderItem={({item, index: Findex}) => {
                    return (
                        <Image source={item} 
                            key={Findex.toString()}
                            resizeMode={'contain'}
                            style={{
                                width: imageW,
                                height: imageH,
                            }} 
                        />
                    )
                }}
            />
        )
    }

    const Button = ({onpress, left, right, text, marginRight}) => {
        return (
            <TouchableOpacity style={{
                display: 'flex',
                flex: 1,
                right: right,
                left: left,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                position: 'absolute',
                top: (imageH * 0.30) - 25,
                width: imageW * 0.2,
                maxWidth: 25,
                maxHeight: 25,
                height: imageW * 0.206,
                borderRadius: 20,
                backgroundColor: '#2175BF',
                zIndex: 3,
            }}
            
            onPress={onpress}>
                
                <Text style={{
                    color: '#F1FFFF',
                    fontWeight: 900,
                    marginRight: marginRight,
                    marginBottom: 5,
                    textAlign: 'center',
                    fontSize: 20,
                    width: '100%',
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}> {text} </Text>
            </TouchableOpacity>
        )
    }

    if (buttons) {
        return (
            <View style={{
                position: 'relative',
                width: imageW + (imageW * 0.1),
                height: imageH,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '100vw',
            }}>
                <PredefinedList />
                <Button right='auto' left='0px' text='<' marginRight={2} onpress={() => {scrollAndSetLessIndex(1)}} />
                <Button left='auto' right='0px' text='>' marginRight={0} onpress={() => {scrollAndSetMoreIndex(1)}} />
                
            </View>
        )    
    }
    return (
        <View style={{
            position: 'relative',
            width: imageW,
            height: imageH,
        }}>
            <PredefinedList />
        </View>
    )
}
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Animated, Easing, ScrollView, Dimensions } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Card, Tab, Tabs } from 'native-base';
import Swiper from 'react-native-swiper';

const data = [1, 2, 3, 4];

const screenWidth = Dimensions.get('window').width;
export default class HomeScreen extends Component {

    // Props for ScrollView component
    static defaultProps = {
        // Arrange screens horizontally
        horizontal: true,
        // Scroll exactly to the next screen, instead of continous scrolling
        pagingEnabled: true,
        // Hide all scroll indicators
        showsHorizontalScrollIndicator: false,
        showsVerticalScrollIndicator: false,
        // Do not bounce when the end is reached
        bounces: false,
        // Do not scroll to top when the status bar is tapped
        scrollsToTop: false,
        // Remove offscreen child views
        removeClippedSubviews: true,
        // Do not adjust content behind nav-, tab- or toolbars automatically
        automaticallyAdjustContentInsets: false
    };

    state = {
        index: 0,
        bgAnimate: new Animated.Value(0),
        shoeAnimate: new Animated.Value(20)
    }

    onScrollBeginDrag = () => {
        this.setState({ 
            bgAnimate: new Animated.Value(0),
            shoeAnimate: new Animated.Value(20)
        });
    }

    onMomentumScrollBegin = () => {
        Animated.timing(this.state.shoeAnimate, {
            toValue: 0,
            duration: 1000,
            easing: Easing.linear
        }).start();

        Animated.spring(this.state.bgAnimate, {
            toValue: 15,
            velocity: 5,
            bounciness: 200
        }).start();
    }

    onMomentumScrollEnd = (event) => {
        const { index } = this.state;
        let diffOffset = event.nativeEvent.contentOffset.x - (index * screenWidth);
        let currentIndex = parseInt(index + Math.round(diffOffset / screenWidth), 10);
        this.setState({ 
            index: currentIndex
        });
    }

    render() {
        const { index, bgAnimate, shoeAnimate } = this.state;
        const spinBGAnimate = bgAnimate.interpolate({
            inputRange: [0, 5, 10, 15],
            outputRange: ['-30deg', '0deg', '30deg', '0deg' ]
        })
        return (
            <Container>
                <Header style={{ backgroundColor: 'white' }}>
                    <Left>
                        <Title>Discover</Title>
                    </Left>
                    <Right>
                        <Button transparent>
                            <Icon type="FontAwesome" style={{ fontSize: 20 }} name='search' />
                        </Button>
                        <Button transparent>
                            <Icon type="FontAwesome" style={{ fontSize: 20 }} name='bell' />
                        </Button>
                    </Right>
                </Header>
                <View style={{ flex: 1, paddingVertical: 15 }}>
                    <ScrollView
                        {...this.props}
                        onScrollBeginDrag={this.onScrollBeginDrag}
                        onMomentumScrollEnd={this.onMomentumScrollEnd}
                        onMomentumScrollBegin={this.onMomentumScrollBegin}
                        style={{ flex: 1, backgroundColor: '#ddd' }}
                    >
                        {
                            data.map((item, i) =>
                                <Animated.View 
                                    key={i}
                                    style={{ 
                                        width: screenWidth, 
                                        flex: 1, 
                                        justifyContent: 'center', 
                                        alignItems: 'center',
                                        transform: index !== i ? [
                                            { perspective: 850 },
                                            { rotateY: spinBGAnimate },
                                            { scaleY: 0.95 }
                                        ] : [ 
                                            { scaleY: 0.95 } 
                                        ]
                                    }}
                                >
                                    <View style={{
                                        flex: 1,
                                        width: '65%',
                                        paddingTop: 15,
                                        borderRadius: 10,
                                        backgroundColor: '#4285f4'
                                    }}>
                                        <View style={{ paddingHorizontal: 15 }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Text style={{ fontSize: 18, color: 'white' }}>NIKE</Text>
                                                <Icon type="FontAwesome" style={{ fontSize: 18, color: 'white' }} name='heart' />
                                            </View>
                                            <View style={{ flexDirection: 'column', alignItems: 'flex-start', marginTop: 10 }}>
                                                <Text style={{ fontSize: 24, marginBottom: 5, color: 'white' }}>EPIC-REACT</Text>
                                                <Text style={{ fontSize: 16, marginBottom: 10, color: 'white' }}>$130.00</Text>
                                            </View>
                                        </View>
                                        <View style={{ flex: 1, position: 'relative' }}>
                                            <Animated.Image
                                                style={{
                                                    height: 180, 
                                                    width: '100%',
                                                    position: 'absolute', 
                                                    top: -20,
                                                    right: -25,
                                                    // right: index !== i ? shoesAnimate : -25,
                                                    transform: index !== i ? [
                                                        { skewY: shoeAnimate + 'deg' }
                                                    ] : []
                                                }}
                                                source={{ uri: 'https://pngriver.com/wp-content/uploads/2018/04/Download-Nike-Shoes-Transparent-Background.png' }}
                                                resizeMode="cover"
                                            />
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 15 }}>
                                            <Icon type="Ionicons" style={{ fontSize: 30, color: 'white' }} name='ios-arrow-round-forward' />
                                        </View>
                                    </View>
                                </Animated.View>
                            )
                        }
                    </ScrollView>
                    <View style={{ flex: 1 }}>

                    </View>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1.5,
        paddingTop: 10
    },
    text: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold'
    }
})
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScrren from '../screens/HomeScrren';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/FontAwesome';

const TabNavigator = createBottomTabNavigator({
    Home: HomeScrren,
    Cart: CartScreen,
    Profile: ProfileScreen
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `home`;
                } else if (routeName === 'Profile') {
                    iconName = `user`;
                }
                else if (routeName === 'Cart') {
                    iconName = `shopping-cart`;
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    });

export default createAppContainer(TabNavigator);
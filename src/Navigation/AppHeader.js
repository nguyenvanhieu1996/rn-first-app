import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Overview from '../Screens/Overview';
import HeatMap from '../Screens/HeatMap';
import Countries from '../Screens/Countries';
import Reddit from '../Screens/Reddit';
import AppTabBottom from '../Components/BottomTabs/AppTabBottom';

const AppHeader = () => {
    const Tabs = createBottomTabNavigator();

    const [isTHemeLight, setIsTHemeLight] = useState(true)

    const onChangeTheme = () => {
        setIsTHemeLight(() => {
            return !isTHemeLight
        })
    }
    console.log('render app header');

    return (
        <>
            <NavigationContainer>
                <View style={[styles.header, isTHemeLight ? styles.headerLight : styles.headerDark]}>
                    <Text style={[isTHemeLight ? styles.titleLight : styles.titleDark]}>Header</Text>
                    <View style={styles.icon} >
                        <Ionicons
                            name="ios-sunny"
                            size={32}
                            color={isTHemeLight ? '#fff' : '#FFEB3B'}
                            onPress={onChangeTheme} />
                    </View>
                </View>
                <Tabs.Navigator
                    initialRouteName="Countries"
                    backBehavior="history"
                    tabBar={(props) => (<AppTabBottom {...props} />)}
                    lazy={true}
                    tabBarOptions={{
                        showIcon: true,
                        showLabel: true,
                        activeBackgroundColor: "#222B45",
                        activeTintColor: "#fff",
                    }}
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, size }) => {
                            return (
                                <Ionicons
                                    name="ios-sunny"
                                    size={32}
                                    color={isTHemeLight ? '#FFEB3B' : '#FFEB3B'}
                                    {...{ focused, size, route}}
                                />
                            )
                        },
                    })}
                >

                    <Tabs.Screen name="Overview" component={Overview} />
                    <Tabs.Screen name="Countries" component={Countries} />
                    <Tabs.Screen name="HeatMap" component={HeatMap} />
                    <Tabs.Screen name="Reddit" component={Reddit} />
                </Tabs.Navigator>


                {/* <View style={styles.container}>
                    <View style={styles.child} />
                </View> */}
            </NavigationContainer>
        </>
    );
}


const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    headerLight: {
        backgroundColor: 'skyblue',
    },

    headerDark: {
        backgroundColor: '#222B45',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40
    },

    titleLight: {
        color: '#fff',
        fontWeight: 'bold',
    },

    titleDark: {
        color: '#FFEB3B',
        fontWeight: 'bold',
    },


    icon: {
        position: 'absolute',
        top: '50%',
        right: 15,
        transform: [
            { translateY: '-50%' },
        ],

    },


    container: {
        backgroundColor: 'green',
        flex: 1,
    },
    child: {
        flex: 1,
        backgroundColor: 'blue',
        transform: [
            { perspective: 850 },
            { translateX: - Dimensions.get('window').width * 0.24 },
            { rotateY: '60deg' },

        ],
    }
});

export default AppHeader
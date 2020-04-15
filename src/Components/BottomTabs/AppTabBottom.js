import React, { useState, useMemo } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import ItemTabBottom from './item/ItemTabBottom';
import tabs from '../../Navigation/tabsConfig'

const AppTabBottom = (props) => {
    const { navigation, state } = props;

    const { routes, index: navigationIndex, key } = useMemo(() => {
        return props.state;
    }, [props]);

    console.log('render AppTabBottom')

    return (
        <>
            <View style={styles.container}>
                {
                    routes.map((route, index) => {
                        const configs = tabs[route.name];
                        return (
                            <ItemTabBottom
                                routes={routes}
                                route={route}
                                index={index}
                                key={index}
                                isFocused={state.index}
                                navigation={navigation}
                                {...configs}
                            />
                        )
                    })
                }
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'skyblue'
    },
});

export default AppTabBottom
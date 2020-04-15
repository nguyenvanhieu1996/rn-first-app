import React, { useMemo, memo, useState } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const styles = StyleSheet.create({

    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderRadius: 30,
    },

    contentContainerFocus: {
        backgroundColor: '#222B45'
    },
    iconContainer: {
        marginRight: 5,
    },
    labelContainer: {
        
    },
    label: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
});

const ItemTabBottom = (props) => {
    const {
        routes,
        route,
        index,
        selectedIndex,
        navigation,
        background,
        labelStyle,
        icon,
        isFocused
    } = props

    const onPressItem = () => {
        const { name, key } = routes[index];
        const event = navigation.emit({
            type: 'tabPress',
            target: key,
            canPreventDefault: true,
        });

        if (!event.defaultPrevented) {
            navigation.navigate(name)
        }

    }

    console.log('render item')
    const focused = isFocused === index
    return (
        <TouchableOpacity
            key={route.key}
            onPress={onPressItem}
        >
            <View style={[styles.contentContainer, focused ? styles.contentContainerFocus : '']}>
                <View style={styles.iconContainer}>
                    <Feather
                        name={icon.name}
                        size={24}
                        color={focused ? '#FFEB3B' : icon.color}
                    />
                </View>
                {
                    focused && (
                        <View>
                            <Text style={styles.label}>{route.name}</Text>
                        </View>
                    )
                }
            </View>
        </TouchableOpacity>
    )
}

export default memo(ItemTabBottom)
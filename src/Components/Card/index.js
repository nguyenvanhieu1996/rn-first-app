import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#e2d8d8",
        borderRadius: 6,
        borderTopWidth: 6,
        backgroundColor: "#fff",
    },


})

const Card = (props) => {
    const { colorBorderTop, marginBottom } = props
    
    const containerCard = [
        styles.container,
        {
            borderTopColor: colorBorderTop,
            marginBottom
        }
    ]

    return (
        <View style={containerCard}>
            {props.children}
            {/* <Text style={[styles.commonHeader, styles.titleHeader]}>Title</Text>
            <Text style={[styles.commonHeader, styles.text]}>Text</Text> */}
        </View>
    )
}

export default Card
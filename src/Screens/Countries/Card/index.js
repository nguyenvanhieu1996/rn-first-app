import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles'
import { globalStyles } from '../../../StylesGlobal'
const Card = ({ item, index, data }) => {
    // console.log('item', item)
    return (
        <View style={[
            styles.container,
            data.length - 1 !== index ? globalStyles.marginBottom15 : ''
        ]}>
            <View style={[styles.content, styles.paddingContentHeader]}>
                <View style={styles.row}>
                    <Image
                        style={styles.flag}
                        source={{ uri: item ?.countryInfo ?.flag}}
                        resizeMethod="resize"
                        resizeMode="contain"
                    />
                    <Text style={styles.country}>
                        {item ?.country}
                    </Text>
                </View>
                <View>
                    <Text
                        style={[styles.text, styles.recovered]}>
                        {`Recovered: ${item ?.recovered ?.toLocaleString()}`}
                    </Text>
                    <Text style={styles.text}>
                        {`Critical: ${item ?.critical ?.toLocaleString()}`}
                    </Text>
                </View>
            </View>
            <View style={[styles.content, styles.padding5]}>
                <View style={styles.row}>
                    <Ionicons
                        name="ios-people"
                        size={20} color="#9e9e9e"
                        style={styles.iconPeopleLeft}
                    />
                    <View>
                        <Text
                            style={[styles.text, styles.marginBottom3]}>
                            {`Total Cases: ${item ?.cases ?.toLocaleString()}`}
                        </Text>
                        <Text style={[styles.text, styles.marginBottom3]}>
                            {`${
                                item ?.active
                                    ? 'Active Cases: ' + item ?.active ?.toLocaleString()
                                        : ''
                          }`}
                        </Text>
                        <Text style={styles.newCase}>
                            {
                                item ?.todayCases
                                    ? `New Case: +${item ?.todayCases.toLocaleString()}`
                                    : ''
                            }
                        </Text>
                    </View>
                </View>
                <Ionicons
                    style={styles.iconWarning}
                    name="ios-warning"
                    size={20}
                    color="#f70959" />
            </View>
            <View style={[styles.content, styles.padding5]}>
                <View style={styles.row}>
                    <Ionicons
                        name="ios-people"
                        size={20} color="#9e9e9e"
                        style={styles.iconPeopleLeft}
                    />
                    <View>
                        <Text
                            style={[styles.text, styles.marginBottom3]}>
                            {`Total Deaths: ${item ?.deaths ?.toLocaleString()}`}
                        </Text>
                        <Text style={styles.newCase}>
                            {
                                item ?.todayDeaths
                                    ? `Today's Deaths: +${item ?.todayDeaths ?.toLocaleString()}`
                                    : ''
                        }
                        </Text>
                    </View>
                </View>
                <Ionicons
                    style={styles.iconWarning}
                    name="ios-warning"
                    size={20}
                    color="#f70959" />
            </View>
        </View>
    )
}

export default Card
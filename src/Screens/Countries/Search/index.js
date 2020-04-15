import React, { useState, Fragment, useEffect } from 'react';
import { View, Text, TextInput, Picker, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useSelector, useDispatch, batch } from 'react-redux';
import { globalStyles } from '../../../StylesGlobal'
import { styles } from './styles'
import {
    selectQueries,
    getCountries,
    getCountry
} from '../../../Store/covidSlice';
let count = 0
const dataSelect = [
    {
        title: 'Cases',
        filter: 'cases',
    },
    {
        title: 'Deaths',
        filter: 'deaths',
    },
    {
        title: 'New Cases',
        filter: 'todayCases',
    },
    {
        title: 'New Deaths',
        filter: 'todayDeaths',
    },
    {
        title: 'Active',
        filter: 'active',
    },
    {
        title: 'Recovered',
        filter: 'recovered',
    },
    {
        title: 'Critical',
        filter: 'critical',
    },
    {
        title: 'Cases Per One Million',
        filter: 'casesPerOneMillion',
    },
    {
        title: 'Deaths Per One Million',
        filter: 'deathsPerOneMillion',
    },
];

const Search = () => {
    const [value, setValue] = useState('');
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    const queries = useSelector(selectQueries);

    console.log('count', count++)

    const onChangeText = (query) => {
        // if(!query) return false
        console.log(query)
        setValue(query);
        setData(
            queries.filter((item) =>
                item.title.toLowerCase().includes(query.toLowerCase()),
            ),
        );
    }

    const onSelect = ({ title }) => {
        setValue(title);
        if (title === 'All') {
            batch(() => {
                dispatch(getCountry(null));
                dispatch(getCountries);
            });
        } else {
            dispatch(getCountry(title));
        }
        setData([])
    }

    return (
        <>
            <Text
                style={[styles.text, globalStyles.marginBottom15]}>
                Search by country
            </Text>
            <View style={styles.blockSearch}>
                <View style={styles.content}>
                    <TouchableWithoutFeedback onPress={() => onChangeText(value)}>
                        <TextInput
                            style={styles.input}
                            placeholder="Place your text"
                            value={value}
                            onChangeText={onChangeText}

                        />
                    </TouchableWithoutFeedback>

                    <Picker style={styles.picker}>
                        {
                            dataSelect.map((item) => {
                                return (
                                    <Picker.Item
                                        key={item.filter}
                                        label={item.title}
                                        value={item.filter}
                                    />
                                )
                            })
                        }
                    </Picker>
                </View>
                {
                    data.length !== 0 && (
                        <View style={styles.blockResultSearch}>
                            <TouchableWithoutFeedback onPress={() => setData([])}>
                                <ScrollView>
                                    {data.map((item, index) => {
                                        return (
                                            <View key={item.id} style={styles.rowRecord}>
                                                <TouchableOpacity onPress={() => onSelect(item)}>
                                                    <Text style={styles.title}>{item.title}</Text>
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    })}
                                </ScrollView>
                            </TouchableWithoutFeedback>
                        </View>
                    )
                }
            </View>
        </>
    )
}

export default Search
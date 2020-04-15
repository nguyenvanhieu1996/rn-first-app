import React, { useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, Dimensions, TextInput, Picker, FlatList, ScrollView, RefreshControl } from 'react-native';
import { useSelector, useDispatch, batch } from 'react-redux';

import { globalStyles } from '../../StylesGlobal'
import {
    getCountries,
    selectCountries,
    selectLoading,
    selectCountry,
    setCountry,
    getOverview,
} from '../../Store/covidSlice';
import Search from './Search';
import ListHeader from './ListHeader'
import Card from './Card';

export const styles = StyleSheet.create({
    flatList: {
        position: 'relative',
        zIndex: -1
    },
})

const Countries = () => {
    const dispatch = useDispatch();
    const countries = useSelector(selectCountries);
    const country = useSelector(selectCountry);
    const loading = useSelector(selectLoading('countries'));

    const fetchData = useCallback(() => {
        batch(() => {
            dispatch(getCountries);
            dispatch(setCountry(null));
        });
    }, [dispatch]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);


    return !loading && countries && (
        <ScrollView style={globalStyles.container}>
            <View>
                <ListHeader />
                <FlatList
                    style={styles.flatList}
                    data={country ? [country] : countries}
                    // getItemLayout={(data, index) => {
                    //     let offset = 0;
                    //     for (let i = 0; i < index; i++) {
                    //         console.log('run')
                    //         if (data[i].headerText) {
                    //             offset += 33;
                    //         } else {
                    //             offset += 80;
                    //         }
                    //     }
                    //     return { length: 0, offset, index }
                    // }
                    // }
                    // ListHeaderComponent={ListHeader}
                    refreshControl={
                        <RefreshControl refreshing={loading} onRefresh={fetchData} />
                    }
                    maxToRenderPerBatch={4}
                    updateCellsBatchingPeriod={50}
                    onEndReachedThreshold={5000}
                    initialNumToRender={5}
                    renderItem={({ item, index }) => (
                        <Card
                            item={item}
                            index={index}
                            data={country ? [country] : countries}
                        />
                    )}
                    keyExtractor={(item, index) => `${item ?.countryInfo._id}-${index}-countries`}
                />
            </View>
        </ScrollView>
    )
}

export default Countries
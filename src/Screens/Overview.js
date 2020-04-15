import React, { useCallback, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { addnote } from '../Store/Overview/actions'
import { getOverview, selectOverview, selectLoading } from '../Store/covidSlice';
import Card from '../Components/Card';
import { globalStyles } from '../StylesGlobal'

const styles = StyleSheet.create({
    text: {
        color: 'skyblue',
    },

    content: {
        flex: 1,
    },

    commonHeader: {
        color: '#000',
        padding: 10,
        fontWeight: 'bold',
    },

    titleHeader: {
        borderBottomColor: '#e2d8d8',
        borderBottomWidth: 1,
    },

    text: {
        color: '#000',
        padding: 10,
    },
})


const Overview = () => {

    const dispatch = useDispatch();
    const overview = useSelector(selectOverview);
    const loading = useSelector(selectLoading('overview'));

    const fetchData = useCallback(() => {
        dispatch(getOverview);
    }, [dispatch]);

    useEffect(() => {
        console.log('overview 1', overview)
        fetchData();
    }, []);

    useEffect(() => {
        console.log('overview', overview)
    }, [overview])

    console.log('render overview')

    return overview && (
        <ScrollView>
            <View style={globalStyles.container}>

                <View style={{ alignItems: 'center', marginBottom: 12 }}>
                    <Text category="h6">COVID-19 CORONAVIRUS OUTBREAK</Text>
                    <Text category="s1">{`Last update: ${new Date(
                        overview.updated,
                    ).toUTCString()}`}</Text>
                </View>

                <Card
                    colorBorderTop="#e2d8d8"
                    marginBottom={15}>
                    <Text style={[styles.commonHeader, styles.titleHeader]}>Total Confirmed</Text>
                    <Text style={[styles.commonHeader, styles.text]}>{overview.cases.toLocaleString()}</Text>
                </Card>
                <Card
                    colorBorderTop="#ff9903"
                    marginBottom={15}>
                    <Text style={[styles.commonHeader, styles.titleHeader]}>Active Cases</Text>
                    <Text style={[styles.commonHeader, styles.text]}>{overview.active.toLocaleString()}</Text>
                </Card>
                <Card
                    colorBorderTop="#0af012"
                    marginBottom={15}>
                    <Text style={[styles.commonHeader, styles.titleHeader]}>Total Recovered</Text>
                    <Text style={[styles.commonHeader, styles.text]}>{overview.recovered.toLocaleString()}</Text>
                </Card>
                <Card
                    colorBorderTop="#fd1212"
                    marginBottom={15}>
                    <Text style={[styles.commonHeader, styles.titleHeader]}>Total Deaths</Text>
                    <Text style={[styles.commonHeader, styles.text]}>{overview.deaths.toLocaleString()}</Text>
                </Card>
            </View>
        </ScrollView>
    )
}

export default Overview
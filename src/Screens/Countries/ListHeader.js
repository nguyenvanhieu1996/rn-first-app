import React from 'react';
import { View, StyleSheet } from 'react-native';
import Search from './Search';
import { globalStyles } from '../../StylesGlobal'
const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 14,
  },
});

const ListHeader = ({ }) => {
  return (
    <View style={globalStyles.marginBottom15}>
       <Search />
    </View>
  );
};

export { ListHeader, ListHeader as default };

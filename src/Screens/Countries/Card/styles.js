import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "#e2d8d8",
        borderRadius: 3,
        backgroundColor: "#fff",
    },

    content: {
        borderBottomWidth: 1,
        borderBottomColor: "#e2d8d8",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    paddingContentHeader: {
        padding: 10,
    },

    flag: {
        width: 32,
        height: 22,
        marginRight: 12,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '60%'
    },

    country: {
        fontWeight: 'bold',
        fontSize: 18,
    },

    marginBottom3: {
        marginBottom: 3,
    },

    text: {
        fontSize: 13,
        fontWeight: '500',
    },

    newCase: {
        fontSize: 10,
        color: '#f21707'
    },

    iconPeopleLeft: {
        marginRight: 12,
    },

    iconWarning: {
        marginRight: 20,
    },
    padding5: {
        padding: 5
    }
})


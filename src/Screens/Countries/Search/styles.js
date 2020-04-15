import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    input: {
        borderColor: '#e2d8d8',
        borderRadius: 6,
        borderWidth: 1,
        padding: 10,
        width: '100%',
        marginRight: 10,
    },

    picker: {
        borderRadius: 6,
        padding: 5,
    },

    content: {
        flexDirection: 'row'
    },
    text: {
        color: '#2dcce0'
    },

    title: {
        color: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 5,
    },

    blockSearch: {
        position: 'relative'
    },

    blockResultSearch: {
        position: 'absolute',
        top: 45,
        maxHeight: 300,
        width: '100%',
        overflow: 'hidden',
        borderColor: '#fff',
        borderWidth: 1,
        backgroundColor: '#222B45',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,

        elevation: 21,
    },

    rowRecord: {
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
    }
})


import { StyleSheet } from 'react-native'
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    cabecalho: {
        paddingTop: 50
    },

    aviso: {
        textAlign: "center"
    },

    message: {
        textAlign: "center",
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
    },
    headerCamera: {
        flex: 1,
        alignItems: "center",
        paddingTop: 40
    },

    footerCamera: {
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: "center",
    },

    headerSave: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 40,
        marginHorizontal: 20
    },
});
import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const cores = {
    primary: '#37474F',
    secondary: '#C51162',
    third: '#D9D9D9',
    black: '#000',
    white: '#FFF'
}

export const stylesglobal = StyleSheet.create({

    cabecalho:{
        alignSelf: "center"
    },

    textoTitulo: {
        color: cores.black,
        fontSize: 60,
        textAlign: 'center',
    },

    caixaDeTexto: {
        alignSelf: "center",
        width: 350,
        paddingTop: 90,
        paddingBottom: 30
    },

    titulo: {
        textAlign: "justify",
    },

    textoConteudo: {
        color: cores.black,
        fontSize: 22,
        fontFamily:'',
        textAlign: 'center',
    },

    caixaDeInformacao: {
        width: 250,
        backgroundColor: colors.secondary,
        borderRadius: 10,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 20
    },

    textoInformacao: {

    },

    caixaTextoInformacao: {
        paddingEnd: 10
    },

    doce: {
        height: 100,
        width: 100
    },

    caixaDoce: {
        paddingStart: 10
    },

    secao: {

        justifyContent: "space-between"
    }

})
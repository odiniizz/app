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
        paddingTop: 160
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

    sociais: {
        backgroundColor: colors.third,
        marginBottom: 20,
        flexDirection: "row",
        padding: 10,
        borderRadius: 10
    },


})
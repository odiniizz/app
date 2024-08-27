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
        alignSelf: "center",
        paddingTop: 20
    },

    textoTitulo: {
        color: cores.black,
        fontSize: 60,
        textAlign: "justify",
    },

    caixaDeTexto: {
        alignSelf: "center",
        width: 400,
        paddingTop: 30,
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

    

})
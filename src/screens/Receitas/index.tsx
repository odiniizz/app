import { Text, TouchableOpacity, View } from "react-native";
import { stylesglobal } from "../../styles/globalstyles"
import { MenuTabTypes } from "../../navigation/MenuBottomTab.navigation";

export function Receitas({ navigation }: MenuTabTypes) {
    return (
        <>
        <View style={stylesglobal.cabecalho}>
            <Text style={stylesglobal.textoTitulo}>Receitas</Text>
        </View>
        <View style={stylesglobal.caixaDeTexto}>
            <Text style={stylesglobal.textoConteudo}>Bateu aquela vontade de comer um docinho, né?</Text>
        </View>
        </>
    );
}
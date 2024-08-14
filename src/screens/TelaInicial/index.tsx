import { Text, TouchableOpacity, View } from "react-native";
import { stylesglobal } from "../../styles/globalstyles"
import { MenuTabTypes } from "../../navigation/MenuBottomTab.navigation";

export function TelaInicial({ navigation }: MenuTabTypes) {
    return (
        <>
        <View style={stylesglobal.viewTitulo}>
            <Text style={stylesglobal.textoTitulo}>Seja bem vindo ao app!</Text>
        </View>

        <View>
            <Text>Aqui, você encontrará diversas receitas!</Text>
        </View>
        </>

    );
}
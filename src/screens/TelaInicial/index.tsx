import { Text, TouchableOpacity, View } from "react-native";
import { stylesglobal } from "../../styles/globalstyles"
import { MenuTabTypes } from "../../navigation/MenuBottomTab.navigation";

export function TelaInicial({ navigation }: MenuTabTypes) {
    return (
        <>
        <View style={stylesglobal.viewTitulo}>
            <Text style={stylesglobal.textoTitulo}>Docitos</Text>
        </View>

        <View>
            <Text>Aqui, você encontrará diversas receitas!</Text>
        </View>
        </>

    );
}
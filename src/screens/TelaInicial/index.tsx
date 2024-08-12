import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/globalstyles"
import { MenuTabTypes } from "../../navigation/MenuBottomTab.navigation";

export function TelaInicial({ navigation }: MenuTabTypes) {
    return (
        <>
        <View style={styles.viewTitulo}>
            <Text style={styles.textoTitulo}>Seja bem vindo ao app!</Text>
        </View>

        <View>
            <Text>Aqui, você encontrará diversas receitas!</Text>
        </View>
        </>

    );
}
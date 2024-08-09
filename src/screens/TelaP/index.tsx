import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/globalstyles"
import { MenuTabTypes } from "../../navigation/MenuBottomTab.navigation";

export function TelaP({ navigation }: MenuTabTypes) {
    return (
        <View>
            <Text style={styles.textoTitulo}>Seja bem vindo ao app</Text>
        </View>

    );
}
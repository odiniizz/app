import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/globalstyles"
//import { styles } from "./styles";
import { MenuStackTypes } from "../../navigations/MenuStack.navigation";

export function Slide1({ navigation }: MenuStackTypes) {
    return (
        <View>
            <Text style={styles.textoTitulo}>Slide1</Text>
            <TouchableOpacity onPress={() => navigation.push("Slide2")} >
                <Text>Clique aqui</Text>
            </TouchableOpacity>
        </View>

    );
}
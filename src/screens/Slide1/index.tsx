import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/globalstyles"
//import { styles } from "./styles";
import { MenuStackTypes } from "../../navigation/MenuStack.navigation";

export function Slide1({ navigation }: MenuStackTypes) {
    return (
        <View>
            <Text style={styles.textoTitulo}>Slide1</Text>
            <TouchableOpacity onPress={() => navigation.push("Slide2")} >
                <Text>Slide2</Text>
            </TouchableOpacity>
        </View>

    );
}
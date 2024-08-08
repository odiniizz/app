import { Text, TouchableOpacity, View } from "react-native";
//import { styles } from "./styles";
import { MenuStackTypes } from "../../navigation/MenuStack.navigation";
import { styles } from "../../styles/globalstyles";

export function Slide2({ navigation }: MenuStackTypes) {
    return (
        <View>
            <Text style={styles.textoTitulo}>Slide2</Text>
            <TouchableOpacity onPress={() => navigation.push("Slide1")} >
                <Text>Slide1</Text>
            </TouchableOpacity>
        </View>

    );
}
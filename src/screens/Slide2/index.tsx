import { Text, TouchableOpacity, View } from "react-native";
//import { styles } from "./styles";
import { MenuStackTypes } from "../../navigations/MenuStack.navigation";
import { styles } from "../../styles/globalstyles";

export function Slide2({ navigation }: MenuStackTypes) {
    return (
        <View>
            <Text style={styles.textoTitulo}>VIADÃO</Text>
            <TouchableOpacity onPress={() => navigation.push("Slide1")} >
                <Text>Slide1</Text>
            </TouchableOpacity>
        </View>

    );
}
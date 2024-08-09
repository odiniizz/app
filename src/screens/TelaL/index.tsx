import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/globalstyles"
import { MenuTabTypes } from "../../navigation/MenuBottomTab.navigation";

export function TelaL({ navigation }: MenuTabTypes) {
    return (
        <View>
            <Text style={styles.textoPaginas}>Bateu aquela vontade de comer um docinho, né?</Text>
        </View>

    );
}
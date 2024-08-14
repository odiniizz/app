import { Text, TouchableOpacity, View } from "react-native";
import { stylesglobal } from "../../styles/globalstyles"
import { MenuTabTypes } from "../../navigation/MenuBottomTab.navigation";

export function Receitas({ navigation }: MenuTabTypes) {
    return (
        <View>
            <Text style={stylesglobal.textoPaginas}>Bateu aquela vontade de comer um docinho, né?</Text>
        </View>

    );
}
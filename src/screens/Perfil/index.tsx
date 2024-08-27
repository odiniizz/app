import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useAuth } from "../../hook/auth";
import { FontAwesome5 } from "@expo/vector-icons";
import { ComponentButtonInterface } from "../../components";
import { stylesglobal } from "../../styles/globalstyles";

export function Perfil() {
    const { user, signOut } = useAuth()
    return (
        <View style={styles.container}>
            <View style={stylesglobal.cabecalho}>
                <Text style={stylesglobal.textoTitulo}>Perfil</Text>
            </View>

            <View>
                <Text style={styles.name}>{user?.user.name}</Text>
            </View>
            <   View>
                <View style={styles.sociais}>
                    <FontAwesome5 name="instagram" size={24} color="black" />
                    <Text style={styles.textoSociais}>https://www.instagram.com/odiniizz</Text>
                </View>
            </View>
            <ComponentButtonInterface title="Sair" type="primary"
                onPressI={async () => await signOut()}
            />
        </View >
    )
}

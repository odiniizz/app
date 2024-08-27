import { Text, TouchableOpacity, View, Image } from "react-native";
import { stylesglobal } from "../../styles/globalstyles"
import { MenuTabTypes } from "../../navigation/MenuBottomTab.navigation";
import { styles } from "./styles";

export function TelaInicial({ navigation }: MenuTabTypes) {
    return (
        <>
        <View style={stylesglobal.cabecalho}>
            <Text style={stylesglobal.textoTitulo}>Docitos</Text>
        </View>

        <View style={stylesglobal.caixaDeTexto}>
            <Text style={stylesglobal.textoConteudo}>Aqui você encontrará diversas receitas rápidas e simples para matar sua vontade de doce!</Text>
        </View>

        <View style={styles.caixaImg}>
            <Image source={require('../../img/fome.png')} style={styles.img}/>
        </View>
        </>

    );
}
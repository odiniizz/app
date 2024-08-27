import { Text, TouchableOpacity, View, Image } from "react-native";
import { stylesglobal } from "../../styles/globalstyles"
import { styles } from "./styles"
import { MenuTabTypes } from "../../navigation/MenuBottomTab.navigation";


export function Receitas({ navigation }: MenuTabTypes) {
    return (
        <>
        <View style={stylesglobal.cabecalho}>
            <Text style={stylesglobal.textoTitulo}>Receitas</Text>
        </View>
        <View style={stylesglobal.caixaDeTexto}>
        <Text style={stylesglobal.textoConteudo}>Bateu aquela vontade de comer um docinho, né?</Text>
            <Text style={stylesglobal.textoConteudo}>Confira algumas receitas incríveis!</Text>
            <View style={styles.caixaImg}>
                <Image source={require('../../img/chefe.png')} style={styles.img}/>
            </View>
        </View>

        <View style={styles.secao}>

            <View style={styles.caixaDeInformacao}>
                <View>
                    <Image source={require('../../img/doces.png')} style={styles.img}/>
                </View>
                <View>
                    <Text>Bala de coco</Text>
                </View>
            </View>

            <View style={styles.caixaDeInformacao}>
                <View>
                    <Image source={require('../../img/brigadeiro.png')} style={styles.img}/>
                </View>
                <View>
                    <Text>Brigadeiro</Text>
                </View>
            </View>

            <View style={styles.caixaDeInformacao}>
                <View>
                    <Image source={require('../../img/algodaodoce.png')} style={styles.img}/>
                </View>
                <View>
                    <Text>Algodão doce</Text>
                </View>
            </View>
            
        </View>
        </>
    );
}
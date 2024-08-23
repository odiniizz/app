import { Text, TouchableOpacity, View, Image } from "react-native";
import { stylesglobal } from "../../styles/globalstyles"
import { MenuTabTypes } from "../../navigation/MenuBottomTab.navigation";


export function Receitas({ navigation }: MenuTabTypes) {
    return (
        <>
        <View style={stylesglobal.cabecalho}>
            <Text style={stylesglobal.textoTitulo}>Receitas</Text>
        </View>
        <View style={stylesglobal.caixaDeTexto}>
            <Text style={stylesglobal.textoConteudo}>Bateu aquela vontade de comer um docinho, né?</Text>
        </View>

        <View style={stylesglobal.secao}>

            <View style={stylesglobal.caixaDeInformacao}>
                <View style={stylesglobal.caixaDoce}>
                    <Image source={require('../../img/doces.png')} style={stylesglobal.doce}/>
                </View>
                <View style={stylesglobal.caixaTextoInformacao}>
                    <Text style={stylesglobal.textoInformacao}>Doce de sei la</Text>
                </View>
            </View>

            <View style={stylesglobal.caixaDeInformacao}>
                <View style={stylesglobal.caixaDoce}>
                    <Image source={require('../../img/brigadeiro.png')} style={stylesglobal.doce}/>
                </View>
                <View style={stylesglobal.caixaTextoInformacao}>
                    <Text style={stylesglobal.textoInformacao}>Doce de sei la</Text>
                </View>
            </View>

            <View style={stylesglobal.caixaDeInformacao}>
                <View style={stylesglobal.caixaDoce}>
                    <Image source={require('../../img/algodaodoce.png')} style={stylesglobal.doce}/>
                </View>
                <View style={stylesglobal.caixaTextoInformacao}>
                    <Text style={stylesglobal.textoInformacao}>Doce de sei la</Text>
                </View>
            </View>
            
        </View>
        </>
    );
}
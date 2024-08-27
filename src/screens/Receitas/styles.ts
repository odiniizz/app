import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
export const styles = StyleSheet.create({

secao: {
    flexDirection: "column",
    alignSelf: "center",
},

caixaDeInformacao: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 20,
    width: 250,
    backgroundColor: colors.secondary,
    borderRadius: 10,
},

img: {
    height: 100,
    width: 100
},

caixaImg: {
    alignSelf: "center",
    paddingTop: 20,
}

})
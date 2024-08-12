import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ScreenTelaInicial, ScreenGeral, ScreenPerfil} from '../screens';
import { Entypo, Feather } from "@expo/vector-icons";

type MenuTabParam = {
    TelaP: undefined
    TelaL: undefined
    TelaM: undefined
}
type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "TelaP">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Tela Inicial" component={ScreenTelaInicial}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="home" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen name="Geral" component={ScreenGeral}
                options={{
                    tabBarIcon: () => (
                        <Feather name="list" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen name="Perfil" component={ScreenPerfil}
                options={{
                    tabBarIcon: () => (
                        <Feather name="user" size={24} color="black" />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
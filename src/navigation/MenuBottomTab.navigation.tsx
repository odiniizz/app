import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ScreenTelaInicial, ScreenGeral, ScreenPerfil, ScreenMensagem} from '../screens';
import { colors } from '../styles/colors'
import { Entypo, Feather } from "@expo/vector-icons";

type TabParamList = {
    TelaInicial: undefined
    Geral: undefined
    Perfil: undefined
    Mensagem: undefined
}
type MenuScreenNavigation = BottomTabNavigationProp<TabParamList, "TelaInicial">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTabs() {
    const Tab = createBottomTabNavigator<TabParamList>();
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarActiveBackgroundColor: colors.secondary,
            tabBarActiveTintColor: colors.white,
            headerShown: false,
            tabBarInactiveBackgroundColor: colors.secondary,
            tabBarInactiveTintColor: colors.white,
        }}
        >
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
            <Tab.Screen name="Mensagem" component={ScreenMensagem}
                options={{
                    tabBarIcon: () => (
                        <Feather name="mail" size={24} color="black" />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
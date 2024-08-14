import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ScreenTelaInicial, ScreenReceitas, ScreenPerfil, ScreenMensagem} from '../screens';
import { colors } from '../styles/colors'
import { Ionicons } from "@expo/vector-icons";
import { MessageNavigation } from "./message.navigation"

type MenuTabParam = {
    Home: undefined
    Receitas: undefined
    Mensagem: undefined
    Perfil: undefined
}
type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Home">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
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
            <Tab.Screen name="Home" component={ScreenTelaInicial}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="home" size={24} color="black" />
                    ),
                }}
            />
            <Tab.Screen name="Receitas" component={ScreenReceitas}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="list" size={24} color="black" />
                    ),
                }}
            />
            <Tab.Screen name="Mensagem" component={MessageNavigation}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="mail" size={24} color="black" />
                    ),
                }}
            />
            <Tab.Screen name="Perfil" component={ScreenPerfil}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="person" size={24} color="black" />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
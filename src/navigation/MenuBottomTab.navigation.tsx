import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ScreenTelaP, ScreenTelaL } from '../screens';
import { Entypo, Feather } from "@expo/vector-icons";

type MenuTabParam = {
    TelaP: undefined
    TelaL: undefined
}
type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "TelaP">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
        <Tab.Navigator>
            <Tab.Screen name="TelaP" component={ScreenTelaP}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="slideshare" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen name="TelaL" component={ScreenTelaL}
                options={{
                    tabBarIcon: () => (
                        <Feather name="sliders" size={24} color="black" />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
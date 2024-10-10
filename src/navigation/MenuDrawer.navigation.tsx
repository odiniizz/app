import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import { ScreenTelaInicial ,ScreenPerfil, ScreenCamera, ScreenImagens, ScreenQrCode, ScreenLocation} from '../screens';
import { MenuTabs } from './MenuBottomTab.navigation';

type MenuDrawerParam = {
    TelaInicial: undefined
    Perfil: undefined
    Camera: undefined
    QrCode: undefined
    Imagens: undefined
    Localizacao: undefined
}
type MenuScreenNavigation = DrawerNavigationProp<MenuDrawerParam, "TelaInicial">
export type DrawerTypes = {
    navigation: MenuScreenNavigation
}

export function DrawerNavigation() {
    const Drawer = createDrawerNavigator<MenuDrawerParam>();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="TelaInicial" component={MenuTabs} />
            <Drawer.Screen name="Perfil" component={ScreenPerfil} />
            <Drawer.Screen name="Camera" component={ScreenCamera} />
            <Drawer.Screen name="QrCode" component={ScreenQrCode} />
            <Drawer.Screen name="Imagens" component={ScreenImagens} />
            <Drawer.Screen name="Localizacao" component={ScreenLocation} />
        </Drawer.Navigator>
    );
}
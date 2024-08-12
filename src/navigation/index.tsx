import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuTabs } from './MenuBottomTab.navigation';
import { LoginNavigation } from './login.navigation'


export function Navigation(){
    return(
        <NavigationContainer>
            <MenuTabs/>
        </NavigationContainer>
    );
}